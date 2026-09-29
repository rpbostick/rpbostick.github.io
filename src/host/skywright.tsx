// Host bundle for /skywright/, added to the copied demo's index.html at
// build time (scripts/hostMode.ts).
import AuroraBackdrop from '../backdrops/AuroraBackdrop.tsx'
import ControlCluster from '../shared/ControlCluster.tsx'
import { mountInOwnElement } from '../shared/mountInOwnElement.tsx'
import BackdropCredit from './BackdropCredit.tsx'
import WeatherButtons from './WeatherButtons.tsx'
import './host.css'

mountInOwnElement('site-backdrop', <AuroraBackdrop />)
mountInOwnElement(
  'site-controls',
  <ControlCluster>
    <WeatherButtons />
  </ControlCluster>,
)
mountInOwnElement('site-credit', <BackdropCredit corner />)
