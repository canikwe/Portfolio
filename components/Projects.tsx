import { projects } from '@/content/site'
import { ArrowIcon } from './Icons'

// Hidden until features.showProjects is turned on in content/site.ts.
export const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title section-title--center">Projects</h2>
      <div className="card-grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <img className="card__image" src={p.image} alt="" />
            <div className="card__body">
              <h3>{p.title}</h3>
              <p className="muted">{p.tagLine}</p>
              <p>{p.description}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="card__links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)
