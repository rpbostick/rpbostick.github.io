// Host bundle for /colorwright/, added to the copied demo's index.html at
// build time (scripts/hostMode.ts).
import IridescenceBackdrop from '../backdrops/IridescenceBackdrop.tsx'
import ControlCluster from '../shared/ControlCluster.tsx'
import { mountInOwnElement } from '../shared/mountInOwnElement.tsx'
import BackdropCredit from './BackdropCredit.tsx'
import './host.css'

mountInOwnElement('site-backdrop', <IridescenceBackdrop />)
mountInOwnElement('site-controls', <ControlCluster />)
// After the demo's footer in the page flow, so it never covers it.
mountInOwnElement('site-credit', <BackdropCredit />)
