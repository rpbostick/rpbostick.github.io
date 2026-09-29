interface Project {
  title: string
  description: string
  href?: string
  image?: { src: string; alt: string; width: number; height: number }
}

const projects: Project[] = [
  {
    title: 'figurewright',
    description: 'Build an avatar that looks like you, with clothes that fit every body.',
    href: '/figurewright/',
    image: {
      src: '/figurewright/card.webp',
      alt: 'Five hand-drawn figures in a row: three dressed figurewright figures of different builds in a relaxed, easing pose, between the two Open Peeps drawings they are built from, on the left with its rig of joints and bones, on the right pointing a finger',
      width: 1600,
      height: 700,
    },
  },
  {
    title: 'skywright',
    description:
      'Weather for riding: feels-like at your speed, plus rain, wind and daylight across a ride window. Weather data by Open-Meteo.com.',
    href: '/skywright/',
    image: {
      src: '/skywright/card.webp',
      alt: 'The skywright demo: current conditions in Boulder, Colorado, and the start of the next 24 hours',
      width: 1040,
      height: 455,
    },
  },
  {
    title: 'colorwright',
    description:
      'An Open Peeps avatar editor: swap and recolor hand-drawn parts head to toe. Looks are saved in your browser.',
    href: '/colorwright/',
    image: {
      src: '/colorwright/card.webp',
      alt: 'A hand-drawn Open Peeps figure with a pink mohawk, a green top and green-soled boots, pointing up',
      width: 1600,
      height: 700,
    },
  },
]

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      {project.image && (
        <img
          className="card-image"
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
        />
      )}
      <div className="card-text">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </>
  )
  if (project.href) {
    return (
      <li className="card card-live">
        <a href={project.href}>{body}</a>
      </li>
    )
  }
  return <li className="card card-soon">{body}</li>
}

export default function IndexPage() {
  return (
    <main className="index">
      <header>
        <h1>Patrick Bostick</h1>
        <p className="lede">Live demos of things I'm building</p>
      </header>
      <ul className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
      <footer className="index-footer">
        <a href="/THIRD_PARTY_LICENSES.txt">Third-party licenses</a>
      </footer>
    </main>
  )
}
