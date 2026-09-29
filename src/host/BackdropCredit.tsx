// The React Bits credit on a demo page. `corner` pins it to the bottom left
// (host.css) for a page whose content scrolls inside a full-height app.
export default function BackdropCredit({ corner = false }: { corner?: boolean }) {
  return (
    <p className={corner ? 'site-credit site-credit-corner' : 'site-credit'}>
      Background animation: <a href="https://reactbits.dev/">React Bits</a> (reactbits.dev).{' '}
      <a href="/THIRD_PARTY_LICENSES.txt">Third-party licences</a>
    </p>
  )
}
