// All of the site's copy and settings live here, so content edits never
// require touching components.

export const features = {
  // Hidden until the modernized myBudee app and the sprint tracker skill are ready.
  showProjects: false,
  // Hidden until there are 3–4 recent, tagged Medium posts.
  showBlog: false,
}

export const person = {
  name: 'Chine Anikwe',
  role: 'Staff Software Engineer',
  company: 'Victory Live',
}

export const links = {
  github: 'https://github.com/canikwe',
  linkedin: 'https://www.linkedin.com/in/chine-anikwe/',
  medium: 'https://medium.com/@c.anikwe',
  issues: 'https://github.com/canikwe/Portfolio/issues',
}

// The bio is split around the bolded name.
export const bio = {
  before: 'My name is ',
  name: 'Chine Anikwe',
  after:
    ", and I'm a software engineer with a passion for using tech to solve problems. Currently working for Victory Live (formerly Ticket Evolution) as a Staff Software Engineer, I get to lead a team of six while delivering scalable, testable solutions for high-traffic APIs. Also, I like corny jokes. A lot.",
}

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Ruby', 'TypeScript'] },
  { group: 'Frameworks and Libraries', items: ['Ruby on Rails', 'React', 'Next.js', 'Redux', 'GraphQL'] },
  { group: 'Testing', items: ['RSpec', 'Jest', 'React Testing Library', 'Cypress'] },
  { group: 'Tools and Infrastructure', items: ['PostgreSQL', 'Redis', 'AWS', 'Docker', 'Claude Code'] },
]

export type Project = {
  title: string
  tagLine: string
  description: string
  tags: string[]
  image: string
  links: { label: string; href: string }[]
}

// Placeholder carried over from the old site. Replace with the modernized
// myBudee app and the sprint tracker skill before turning showProjects on.
export const projects: Project[] = [
  {
    title: 'myBudee',
    tagLine: 'Track your budees and get reminders to contact them!',
    description:
      'myBudee (formerly myTowne) is a web application written with a React-Redux frontend and a Rails API backend. It gives users full CRUD capabilities over their contacts and reminders for those contacts.',
    tags: ['React', 'Redux', 'Ruby on Rails'],
    image: '/images/projects/myBudee_feature.png',
    links: [
      { label: 'Frontend', href: 'https://github.com/canikwe/mynetwork-frontend' },
      { label: 'Backend', href: 'https://github.com/canikwe/myNetwork-backend' },
      { label: 'Demo', href: 'https://youtu.be/q1ODMvxXRG0' },
    ],
  },
]

export const contact = {
  // Older-style Formspree endpoint carried over from the old site. It has never
  // received a message, so send a test before relying on it.
  formEndpoint: 'https://formspree.io/mlepdova',
}
