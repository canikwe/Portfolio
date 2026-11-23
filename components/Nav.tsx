import { features } from '@/content/site'

const sections = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  ...(features.showProjects ? [{ href: '#projects', label: 'Projects' }] : []),
  ...(features.showBlog ? [{ href: '#blog', label: 'Blog' }] : []),
  { href: '#contact', label: 'Contact' },
]

export const Nav = () => (
  <header className="nav">
    <nav aria-label="Sections">
      <ul>
        {sections.map((s) => (
          <li key={s.href}>
            <a href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
