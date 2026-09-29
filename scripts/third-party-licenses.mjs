// Builds a THIRD_PARTY_LICENSES.txt from license-checker JSON
// (`npx license-checker --production --json`). See README.md for the steps.
//
//   node scripts/third-party-licenses.mjs skywright /tmp/skywright-production.json
//   node scripts/third-party-licenses.mjs site /tmp/site-production.json
import { readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { basename, join } from 'node:path'

const targets = {
  skywright: {
    output: 'public/skywright/THIRD_PARTY_LICENSES.txt',
    intro: [
      'Third-party software in the skywright demo at /skywright/',
      '',
      'The demo is an Expo web export. These are the production dependencies',
      "of skywright's example app, the tree the export is bundled from.",
      'Weather data by Open-Meteo.com (CC BY 4.0).',
    ],
    outro: [],
  },
  site: {
    output: 'public/THIRD_PARTY_LICENSES.txt',
    intro: [
      'Third-party software on this site',
      '',
      'The site bundle (the index, /figurewright/, and the controls and',
      'backgrounds it adds to /colorwright/ and /skywright/) ships the packages',
      'below. The skywright demo lists its own at /skywright/THIRD_PARTY_LICENSES.txt.',
    ],
    outro: [
      'React Bits',
      '',
      'The background animations on /figurewright/ (Waves), /colorwright/',
      '(Iridescence) and /skywright/ (Aurora) are adapted from React Bits',
      '(reactbits.dev), MIT + Commons Clause. Its license and the list of',
      'adapted files are in src/reactbits/LICENSE.md in this repository:',
      'https://github.com/rpbostick/rpbostick.github.io/blob/main/src/reactbits/LICENSE.md',
      '',
      'Open Peeps',
      '',
      'The hand-drawn heads, hands and shoes on /figurewright/ and all of the',
      'art in colorwright are from Open Peeps by Pablo Stanley, released under',
      'CC0 1.0 (public domain dedication): https://www.openpeeps.com/',
      '',
      'colorwright (/colorwright/)',
      '',
      'colorwright ships no third-party code: it is plain JavaScript. Its art',
      'is Open Peeps (above), credited in its footer.',
    ],
  },
}

// license-checker falls back to a README when a package has no license file;
// a README is not a license text, so those packages get the declared license only.
const LICENSE_FILE = /^(licen[cs]e|copying)/i

function expandHome(path) {
  if (path.startsWith('~/')) return join(homedir(), path.slice(2))
  return path
}

function declaredLicense(info) {
  return Array.isArray(info.licenses) ? info.licenses.join(' AND ') : info.licenses
}

function readPackages(jsonPath) {
  const report = JSON.parse(readFileSync(jsonPath, 'utf8'))
  return Object.entries(report)
    .filter(([, info]) => !info.private)
    .map(([id, info]) => {
      if (!info.licenses) throw new Error(`${id}: no declared license`)
      const hasFile = info.licenseFile && LICENSE_FILE.test(basename(info.licenseFile))
      return {
        id,
        license: declaredLicense(info),
        repository: info.repository ?? '(none given)',
        text: hasFile ? readFileSync(expandHome(info.licenseFile), 'utf8').trim() : null,
      }
    })
}

function packageLines(pkg) {
  return [`${pkg.id}`, `  License: ${pkg.license}`, `  Repository: ${pkg.repository}`]
}

// Packages from one project often ship the same license text byte for byte
// (every @babel package, say); each distinct text is printed once, after
// the packages it covers.
function renderGroup(license, packages) {
  const lines = [rule('='), `${license} (${countPackages(packages.length)})`, rule('=')]
  const byText = new Map()
  const withoutFile = []
  for (const pkg of packages) {
    if (pkg.text === null) {
      withoutFile.push(pkg)
      continue
    }
    if (!byText.has(pkg.text)) byText.set(pkg.text, [])
    byText.get(pkg.text).push(pkg)
  }
  for (const [text, sharing] of byText) {
    lines.push('')
    for (const pkg of sharing) lines.push(...packageLines(pkg))
    lines.push('', text, '', rule('-'))
  }
  if (withoutFile.length > 0) {
    lines.push('', 'These packages ship no license file; their declared license is given.', '')
    for (const pkg of withoutFile) lines.push(...packageLines(pkg))
    lines.push('', rule('-'))
  }
  return lines
}

function countPackages(count) {
  return count === 1 ? '1 package' : `${count} packages`
}

function rule(char) {
  return char.repeat(72)
}

function render(target, packages) {
  const groups = new Map()
  for (const pkg of packages.sort((a, b) => a.id.localeCompare(b.id))) {
    if (!groups.has(pkg.license)) groups.set(pkg.license, [])
    groups.get(pkg.license).push(pkg)
  }
  const ordered = [...groups].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
  const lines = [...target.intro, '', `${countPackages(packages.length)}, grouped by license:`]
  for (const [license, group] of ordered) lines.push(`  ${license}: ${group.length}`)
  lines.push('')
  for (const [license, group] of ordered) lines.push(...renderGroup(license, group), '')
  if (target.outro.length > 0) lines.push(rule('='), ...target.outro, '')
  return lines.join('\n')
}

const [targetName, jsonPath] = process.argv.slice(2)
const target = targets[targetName]
if (!target || !jsonPath) {
  console.error(`usage: node scripts/third-party-licenses.mjs <${Object.keys(targets).join('|')}> <license-checker.json>`)
  process.exit(2)
}
const packages = readPackages(jsonPath)
writeFileSync(target.output, render(target, packages))
console.log(`${target.output}: ${countPackages(packages.length)}`)
