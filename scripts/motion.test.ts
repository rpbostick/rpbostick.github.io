// The Animations toggle's state. Run: node --test scripts/motion.test.ts
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createMotionStore, MOTION_STORAGE_KEY } from '../src/shared/motion.ts'

class FakeStorage {
  values = new Map<string, string>()
  getItem(key: string): string | null {
    return this.values.get(key) ?? null
  }
  setItem(key: string, value: string): void {
    this.values.set(key, value)
  }
  removeItem(key: string): void {
    this.values.delete(key)
  }
}

class FakeQuery {
  matches: boolean
  listeners = new Set<() => void>()
  constructor(matches: boolean) {
    this.matches = matches
  }
  addEventListener(_type: 'change', listener: () => void): void {
    this.listeners.add(listener)
  }
  removeEventListener(_type: 'change', listener: () => void): void {
    this.listeners.delete(listener)
  }
  change(matches: boolean): void {
    this.matches = matches
    for (const listener of this.listeners) listener()
  }
}

test('nothing saved: on, unless the system asks for reduced motion', () => {
  assert.equal(createMotionStore(new FakeStorage(), new FakeQuery(false)).enabled(), true)
  assert.equal(createMotionStore(new FakeStorage(), new FakeQuery(true)).enabled(), false)
})

test('turning off saves "off"; turning on removes the key', () => {
  const storage = new FakeStorage()
  const store = createMotionStore(storage, new FakeQuery(false))
  store.set(false)
  assert.equal(storage.getItem(MOTION_STORAGE_KEY), 'off')
  assert.equal(store.enabled(), false)
  store.set(true)
  assert.equal(storage.getItem(MOTION_STORAGE_KEY), null)
  assert.equal(store.enabled(), true)
})

test('a saved "off" is read back on the next page', () => {
  const storage = new FakeStorage()
  storage.setItem(MOTION_STORAGE_KEY, 'off')
  assert.equal(createMotionStore(storage, new FakeQuery(false)).enabled(), false)
})

test('under reduced motion, turning on is remembered as "on"', () => {
  const storage = new FakeStorage()
  createMotionStore(storage, new FakeQuery(true)).set(true)
  assert.equal(storage.getItem(MOTION_STORAGE_KEY), 'on')
  assert.equal(createMotionStore(storage, new FakeQuery(true)).enabled(), true)
})

test('with nothing saved, a system change re-renders with the new setting', () => {
  const query = new FakeQuery(false)
  const store = createMotionStore(new FakeStorage(), query)
  let calls = 0
  const unsubscribe = store.subscribe(() => calls++)
  query.change(true)
  assert.equal(calls, 1)
  assert.equal(store.enabled(), false)
  unsubscribe()
  query.change(false)
  assert.equal(calls, 1)
})

test('storage that throws keeps the choice for this page view', () => {
  const broken = {
    getItem(): string | null {
      throw new Error('blocked')
    },
    setItem(): void {
      throw new Error('blocked')
    },
    removeItem(): void {
      throw new Error('blocked')
    },
  }
  const warn = console.warn
  console.warn = () => {}
  try {
    const store = createMotionStore(broken, new FakeQuery(false))
    assert.equal(store.enabled(), true)
    store.set(false)
    assert.equal(store.enabled(), false)
  } finally {
    console.warn = warn
  }
})
