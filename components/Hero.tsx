import { links, person } from '@/content/site'
import { ChevronsDownIcon, GitHubIcon, LinkedInIcon } from './Icons'

export const Hero = () => (
  <section id="top" className="hero">
    <p className="hero__hello">hello!</p>
    <h1 className="hero__name">I&apos;m {person.name}</h1>
    <p className="hero__role">
      {person.role} at {person.company}
    </p>
    <div className="hero__links">
      <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
    </div>
    <a className="hero__advance" href="#about" aria-label="Scroll to About">
      <ChevronsDownIcon />
    </a>
  </section>
)
