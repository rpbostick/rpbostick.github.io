// Checks that the built site in dist/, which Pages deploys, has no dev-only
// page: no dev/ directory and no file named after or mentioning the wave
// patterns preview (its chunk or stylesheet would be one). Exits 1 on any
// hit or when dist/ is missing. Run after `vite build`: node scripts/check-dist.ts
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const DEV_MARKER = 'wave-patterns'
const TEXT_FILE = /\.(html|js|css|json)$/

if (!existsSync(DIST)) {
  console.log(`FAIL ${DIST}/ does not exist; run vite build first`)
  process.exit(1)
}

const failures: string[] = []
for (const entry of readdirSync(DIST, { recursive: true, withFileTypes: true })) {
  const path = relative(DIST, join(entry.parentPath, entry.name))
  if (entry.isDirectory()) {
    if (entry.name === 'dev') failures.push(`${path}/ is a dev directory`)
    continue
  }
  if (path.includes(DEV_MARKER)) failures.push(`${path} is named after the dev preview`)
  else if (TEXT_FILE.test(entry.name) && readFileSync(join(DIST, path), 'utf8').includes(DEV_MARKER)) {
    failures.push(`${path} mentions ${DEV_MARKER}`)
  }
}

for (const failure of failures) console.log(`FAIL ${failure}`)
console.log(failures.length === 0 ? 'ok   dist/ has no dev page' : `\n${failures.length} dev files in dist/`)
process.exit(failures.length === 0 ? 0 : 1)
