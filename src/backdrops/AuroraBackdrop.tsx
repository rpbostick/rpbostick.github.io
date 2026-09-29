import { useCallback, useEffect } from 'react'
import Aurora from '../reactbits/Aurora/Aurora.tsx'
import { useAnimations } from '../shared/motion.ts'
import { useTheme } from '../shared/theme.ts'
import { usePageVisible } from '../shared/usePageVisible.ts'
import BackdropLayers from './BackdropLayers.tsx'
import { setWeatherAnimating, usePressedFeel, weatherParams } from './weatherStore.ts'

// Behind skywright: the aurora follows the weather state, read once per frame.
export default function AuroraBackdrop() {
  const theme = useTheme()
  const animations = useAnimations()
  const visible = usePageVisible()
  // Subscribed so a click re-renders, which draws a frame while paused.
  usePressedFeel()

  useEffect(() => {
    setWeatherAnimating(animations)
  }, [animations])

  // A new getter per theme: Aurora reads its props during render, so the
  // frame it draws for a theme change already has the new colours.
  const params = useCallback(() => weatherParams(theme), [theme])

  return (
    <BackdropLayers demo="skywright">
      <Aurora params={params} lightMode={theme === 'light'} paused={!animations || !visible} />
    </BackdropLayers>
  )
}
