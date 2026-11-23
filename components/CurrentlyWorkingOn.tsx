import { currentWork } from '@/content/site'
import { ArrowIcon } from './Icons'

export const CurrentlyWorkingOn = () => (
  <section id="now" className="now">
    <div className="container">
      <h2 className="section-title section-title--center">Currently Working On</h2>
      <div className="now__grid">
        {currentWork.map((item) => (
          <article key={item.title} className="now__card">
            <span className="status-pill">{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.links.length > 0 && (
              <div className="now__links">
                {item.links.map((l) => (
                  <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
)
