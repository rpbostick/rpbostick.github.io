import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'

// The colorwright and skywright demos are copied into public/ as they are
// exported. After the build this rewrites their copies in dist/ into host
// mode: the two attributes on <html> (the demo hides its own theme switch and
// page background), the saved theme applied before first paint (the demos'
// own scripts skip that in host mode), and the page's host bundle from
// src/host/, which adds the site's controls and backdrop. public/ is never
// touched, so re-copying a demo keeps host mode.

export interface HostAssets {
  script: string
  styles: string[]
}

const HOST_ATTRIBUTES = 'data-host-controls data-host-backdrop'

// The same as the inline script in the site's own index.html files.
const THEME_SCRIPT = `<script>
  try {
    var siteTheme = localStorage.getItem('theme')
    if (siteTheme === 'light' || siteTheme === 'dark') document.documentElement.setAttribute('data-theme', siteTheme)
  } catch (error) {}
</script>`

function countOf(html: string, pattern: RegExp): number {
  return html.match(pattern)?.length ?? 0
}

export function withHostMode(html: string, page: string, assets: HostAssets): string {
  const htmlTags = countOf(html, /<html\b/gi)
  const headEnds = countOf(html, /<\/head>/gi)
  if (htmlTags !== 1 || headEnds !== 1) {
    throw new Error(
      `${page}/index.html: host mode needs exactly one <html tag and one </head>, found ${htmlTags} and ${headEnds}`,
    )
  }
  if (/<html\b[^>]*data-host-/i.test(html)) {
    throw new Error(`${page}/index.html: <html> already has host attributes`)
  }
  const tags = [
    THEME_SCRIPT,
    ...assets.styles.map((href) => `<link rel="stylesheet" href="${href}">`),
    `<script type="module" src="${assets.script}"></script>`,
  ]
  return html.replace(/<html\b/i, `<html ${HOST_ATTRIBUTES}`).replace(/<\/head>/i, `${tags.join('\n')}\n</head>`)
}

// `pages` maps a page directory under dist/ to the name of its host entry in
// build.rollupOptions.input.
export function hostMode(pages: Record<string, string>): Plugin {
  const assetsByEntry = new Map<string, HostAssets>()
  let outDir = ''
  let base = '/'
  return {
    name: 'host-mode',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
      base = config.base
    },
    generateBundle(_options, bundle) {
      // A script entry's own chunk lists only its own CSS; the CSS of the
      // shared chunks it imports has to be linked too, imports first.
      function stylesOf(fileName: string, seen: Set<string>): string[] {
        const chunk = bundle[fileName]
        if (!chunk || chunk.type !== 'chunk') throw new Error(`host-mode: ${fileName} is not a chunk in the bundle`)
        if (seen.has(fileName)) return []
        seen.add(fileName)
        return [
          ...chunk.imports.flatMap((imported) => stylesOf(imported, seen)),
          ...(chunk.viteMetadata?.importedCss ?? []),
        ]
      }
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk' || !output.isEntry || !Object.values(pages).includes(output.name)) continue
        assetsByEntry.set(output.name, {
          script: base + output.fileName,
          styles: [...new Set(stylesOf(output.fileName, new Set()))].map((file) => base + file),
        })
      }
    },
    closeBundle() {
      for (const [page, entry] of Object.entries(pages)) {
        const assets = assetsByEntry.get(entry)
        if (!assets) throw new Error(`host-mode: no chunk for the "${entry}" entry; is it in build.rollupOptions.input?`)
        const file = resolve(outDir, page, 'index.html')
        writeFileSync(file, withHostMode(readFileSync(file, 'utf8'), page, assets))
      }
    },
  }
}
