// The build step that puts the copied demos into host mode.
// Run: node --test scripts/hostMode.test.ts
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { withHostMode } from './hostMode.ts'

const ASSETS = { script: '/assets/colorwright-host-abc.js', styles: ['/assets/colorwright-host-def.css'] }

test('adds both attributes to <html> and the theme script, styles and host bundle before </head>', () => {
  const page = withHostMode('<!doctype html>\n<html lang="en">\n<head><title>x</title></head><body></body></html>', 'demo', ASSETS)
  assert.match(page, /<html data-host-controls data-host-backdrop lang="en">/)
  const head = page.slice(0, page.indexOf('</head>'))
  assert.match(head, /localStorage\.getItem\('theme'\)/)
  assert.match(head, /<link rel="stylesheet" href="\/assets\/colorwright-host-def\.css">/)
  assert.match(head, /<script type="module" src="\/assets\/colorwright-host-abc\.js"><\/script>\n$/)
})

test('works on both demo pages as committed', () => {
  for (const demo of ['colorwright', 'skywright']) {
    const page = withHostMode(readFileSync(`public/${demo}/index.html`, 'utf8'), demo, ASSETS)
    assert.match(page, /<html data-host-controls data-host-backdrop\b/i)
  }
})

test('fails loud without exactly one <html and one </head>', () => {
  assert.throws(() => withHostMode('<body></body>', 'demo', ASSETS), /one <html tag and one <\/head>, found 0 and 0/)
  assert.throws(() => withHostMode('<html><body></body></html>', 'demo', ASSETS), /found 1 and 0/)
  assert.throws(() => withHostMode('<html><head></head><html><head></head>', 'demo', ASSETS), /found 2 and 2/)
})

test('refuses a page that is already in host mode', () => {
  assert.throws(() => withHostMode('<html data-host-backdrop><head></head></html>', 'demo', ASSETS), /already has host attributes/)
})
