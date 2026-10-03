import { PRESETS } from '../figurewright/patternDrive.ts'
import WavePanel from './WavePanel.tsx'

// Time the drifting panel takes from one preset to the next.
const DRIFT_MS_PER_PRESET = 8000

const heldAt = PRESETS.map((_, index) => () => index)
const driftStart = performance.now()
const drifting = (now: number) => (now - driftStart) / DRIFT_MS_PER_PRESET

// The hero's six wave patterns side by side, each held on one preset, plus
// one panel morphing slowly through all six as the hero's eased transitions
// would.
export default function WavePatternsPage() {
  return (
    <main className="wave-patterns">
      <h1>Wave patterns</h1>
      <p className="wave-patterns-hint">Drag on a panel to stir its waves; fling to let the stir coast.</p>
      <div className="wave-patterns-grid">
        {PRESETS.map((preset, index) => (
          <WavePanel key={preset.name} position={heldAt[index]} />
        ))}
        <WavePanel position={drifting} />
      </div>
    </main>
  )
}
