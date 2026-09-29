import Hero from './Hero.tsx'

interface Showcase {
  title: string
  caption: string
  src: string
  alt: string
  width: number
  height: number
}

const showcases: Showcase[] = [
  {
    title: 'Body shapes',
    caption:
      'Slim, average, broad, round and pear, plus a shorter and a taller average. The same bodies take any of the Open Peeps heads.',
    src: '/figurewright/shapes.webp',
    alt: 'Seven bodies of different shapes and skin tones, shown headless on the top row and with Open Peeps heads on the bottom row',
    width: 1600,
    height: 1083,
  },
  {
    title: 'Garments that fit every body',
    caption:
      'The same outfits on every shape: a tee and shorts, a jersey and tights, a zip jacket layered over both, a tee and pants.',
    src: '/figurewright/garments.webp',
    alt: 'A grid of the seven bodies wearing four outfits, one outfit per row',
    width: 1600,
    height: 1897,
  },
  {
    title: 'Hands and shoes',
    caption:
      'Open Peeps hands and shoes attached at the wrists and ankles of every body: sneakers, high-tops, boots, loafers and derbies, with close-ups of the joins.',
    src: '/figurewright/contact.webp',
    alt: 'A contact sheet of the seven bodies in a tee and shorts with five hand and shoe combinations, plus four magnified wrist and ankle close-ups',
    width: 1200,
    height: 2634,
  },
]

interface ProcessImage {
  src: string
  alt: string
  width: number
  height: number
}

interface Chapter {
  title: string
  text: string
  images: ProcessImage[]
}

const chapters: Chapter[] = [
  {
    title: 'Measuring Open Peeps',
    text: 'We measured nine Open Peeps figures, from the crown down to the floor, to set the proportions of our average body, then traced their outlines over our generated profiles.',
    images: [
      {
        src: '/figurewright/process/proportions.webp',
        alt: 'Nine Open Peeps figures and the generated average body, each with crown, chin, shoulder, wrist, crotch, fingertip, hip and floor lines and its height in heads',
        width: 2400,
        height: 640,
      },
      {
        src: '/figurewright/process/contours.webp',
        alt: 'Six charts, neck and shoulders down to knee and ankle, with colored outlines traced from Open Peeps figures over the black average, gray slim and dashed round profiles, and the traced figures below with the measured edges in red',
        width: 2400,
        height: 1153,
      },
    ],
  },
  {
    title: 'Real bodies',
    text: 'Openly licensed photos of six women and four men were traced to numbers (gray) and set against Open Peeps garment outlines (color) and the revised profiles (black); only the numbers are kept, no photos are stored. The builds run from slim to short and round, next to two Open Peeps figures at our head size.',
    images: [
      {
        src: '/figurewright/process/human-vs-peeps.webp',
        alt: 'Two front-view charts, women and men: gray traced lines from photos, green and blue Open Peeps outlines, and black average, slim, round and pear profiles',
        width: 1330,
        height: 1110,
      },
      {
        src: '/figurewright/process/builds.webp',
        alt: 'Seven bare bodies labeled slim, average, athletic, round, pear, tall and slim, and short and round with their heights and settings, beside two dressed Open Peeps figures',
        width: 2400,
        height: 843,
      },
    ],
  },
  {
    title: 'Sliders',
    text: 'Each body setting is a slider: height, build, shoulders, chest, waist, hips, limbs, belly and leg length, shown here at −1, 0 and +1 (150, 170 and 200 cm for height) with the others left at the average.',
    images: [
      {
        src: '/figurewright/process/proposed-sliders.webp',
        alt: 'A grid of bare bodies, one column per slider and one row each for −1, 0 and +1',
        width: 2400,
        height: 2471,
      },
    ],
  },
  {
    title: 'Rigging a pose',
    text: 'The pose is read off the Open Peeps easing drawing as fifteen joints and the angles between them, then applied to a figurewright body.',
    images: [
      {
        src: '/figurewright/process/rig.webp',
        alt: 'The Open Peeps easing drawing with its joints marked in red, blue and green, beside a table of limb angles, leans, tilts and turns',
        width: 1126,
        height: 1458,
      },
      {
        src: '/figurewright/process/posed-vs-original.webp',
        alt: 'Left, the posed average body in a tee and pants; middle, the original easing drawing; right, the posed skeleton over the faded original',
        width: 2160,
        height: 1620,
      },
    ],
  },
  {
    title: 'Ink and layers',
    text: 'Outlines are drawn as variable-width ink to match the hand-drawn Open Peeps line, compared here at the collar and sleeve hem. Where garments overlap, the outer one covers the inner at the collar, hem and cuffs.',
    images: [
      {
        src: '/figurewright/process/ink-closeup.webp',
        alt: 'The same figure in a clean stroke, in ink and in ink with gaps off, with collar and sleeve close-ups beside the same crops of an Open Peeps drawing',
        width: 1600,
        height: 1910,
      },
      {
        src: '/figurewright/process/layering.webp',
        alt: 'Close-ups of a jacket over a jersey at the collar, hem and cuffs, and shorts over tights, each drawn clean and with a wobble',
        width: 1890,
        height: 770,
      },
    ],
  },
]

export default function FigurewrightPage() {
  return (
    <>
      <Hero />

      <main className="showcases">
        {showcases.map((showcase) => (
          <section key={showcase.title} className="showcase">
            <h2>{showcase.title}</h2>
            <p>{showcase.caption}</p>
            <img
              src={showcase.src}
              alt={showcase.alt}
              width={showcase.width}
              height={showcase.height}
              loading="lazy"
            />
          </section>
        ))}

        <section className="process" aria-labelledby="process-heading">
          <h2 id="process-heading">How it's made</h2>
          <p>
            The renders we check each step against. Figures and outlines marked Open Peeps are Pablo
            Stanley's drawings (CC0). Click an image to open it full size.
          </p>
          {chapters.map((chapter) => (
            <section key={chapter.title} className="chapter">
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              {chapter.images.map((image) => (
                <a key={image.src} href={image.src} target="_blank" rel="noopener">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                  />
                </a>
              ))}
            </section>
          ))}
        </section>
      </main>

      <footer className="credits">
        <p>
          Head, hand and shoe art from{' '}
          <a href="https://www.openpeeps.com/">Open Peeps</a> by Pablo Stanley (CC0). figurewright is
          unofficial and not affiliated with Open Peeps.
        </p>
        <p>
          Background animation: <a href="https://reactbits.dev/">React Bits</a> (reactbits.dev).
        </p>
        <p>
          <a href="/THIRD_PARTY_LICENSES.txt">Third-party licenses</a>
        </p>
        <p>
          <a href="/">&larr; All demos</a>
        </p>
      </footer>
    </>
  )
}
