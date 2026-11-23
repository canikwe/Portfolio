import { experience, links, type Role } from '@/content/site'
import { ArrowIcon } from './Icons'

const Highlights = ({ items }: { items: string[] }) => (
  <ul className="experience__highlights">
    {items.map((h) => (
      <li key={h}>{h}</li>
    ))}
  </ul>
)

const RoleHeading = ({ role }: { role: Role }) => (
  <div className="experience__row">
    <h4>{role.title}</h4>
    <p className="experience__dates">{role.dates}</p>
  </div>
)

export const Experience = () => (
  <section id="experience" className="experience">
    <div className="container experience__inner">
      <h2 className="section-title">Experience</h2>
      <div className="experience__timeline">
        {experience.map((job) => {
          const [only] = job.roles
          const single = job.roles.length === 1
          return (
            <article key={job.company} className="experience__job">
              <span className="experience__dot" aria-hidden="true" />
              {single ? (
                <>
                  <div className="experience__row">
                    <h3>{job.company}</h3>
                    <p className="experience__dates">{only.dates}</p>
                  </div>
                  <h4 className="experience__title">{only.title}</h4>
                  <p className="experience__context">{job.context}</p>
                  <Highlights items={only.highlights} />
                </>
              ) : (
                <>
                  <h3>
                    {job.company}
                    {job.formerly && <span className="experience__formerly"> (formerly {job.formerly})</span>}
                  </h3>
                  <p className="experience__context">{job.context}</p>
                  <div className="experience__roles">
                    {job.roles.map((role) => (
                      <div key={role.title}>
                        <RoleHeading role={role} />
                        <Highlights items={role.highlights} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </article>
          )
        })}
      </div>
      <a className="text-link experience__more" href={links.linkedin} target="_blank" rel="noopener noreferrer">
        More on LinkedIn <ArrowIcon />
      </a>
    </div>
  </section>
)
