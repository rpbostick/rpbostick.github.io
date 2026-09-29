import Iridescence from '../reactbits/Iridescence/Iridescence.tsx'
import { useAnimations } from '../shared/motion.ts'
import { useTheme } from '../shared/theme.ts'
import { usePageVisible } from '../shared/usePageVisible.ts'
import BackdropLayers from './BackdropLayers.tsx'
import { IRIDESCENCE_COLORS } from './wash.ts'

// Behind colorwright. The color arrays are module constants: Iridescence
// rebuilds its WebGL context whenever the `color` array changes identity.
export default function IridescenceBackdrop() {
  const theme = useTheme()
  const animations = useAnimations()
  const visible = usePageVisible()
  return (
    <BackdropLayers demo="colorwright">
      <Iridescence
        color={IRIDESCENCE_COLORS[theme]}
        speed={0.6}
        mouseReact={false}
        paused={!animations || !visible}
      />
    </BackdropLayers>
  )
}
