import { links, person } from '@/content/site'

export const Footer = () => (
  <footer className="footer">
    <p>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
        {person.name}
      </a>{' '}
      © {new Date().getFullYear()}. Please report any issues{' '}
      <a href={links.issues} target="_blank" rel="noopener noreferrer">
        here
      </a>
      .
    </p>
  </footer>
)
