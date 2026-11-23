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
  // Shortened from the LinkedIn headline.
  headline: 'Staff Software Engineer who builds high-traffic APIs in Ruby on Rails',
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
    ", and I'm a software engineer with a passion for using tech to solve problems. Currently working for Victory Live (formerly Ticket Evolution) as a Staff Software Engineer, I get to lead a team of six while delivering scalable, testable solutions for high-traffic APIs. I got my start in software doing defect management, and that background still shapes how I build and test. Also, I like corny jokes. A lot.",
}

export type Role = { title: string; dates: string; highlights: string[] }
export type Job = { company: string; formerly?: string; context: string; roles: Role[] }

// Titles and dates must match the resume and LinkedIn.
export const experience: Job[] = [
  {
    company: 'Victory Live',
    formerly: 'Ticket Evolution',
    context: 'Building scalable solutions for a high-traffic API and the internal applications around it.',
    roles: [
      {
        title: 'Staff Software Engineer',
        dates: 'Jan 2026 – Present',
        highlights: [
          'Lead and mentor a team of six engineers, and own projects end to end, from data model design to monitoring dashboards.',
          'Set engineering standards across the department, including PR reviews, project kickoffs, and AI-assisted development with Claude Code and Copilot.',
          'Plan tech-debt work, like our Rails 7 and Rails 8 upgrades, so it keeps moving alongside business deliverables.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        dates: 'Jan 2023 – Jan 2026',
        highlights: [
          'Promoted to team lead in March 2024 after driving cross-team initiatives that helped retain and acquire customers.',
          'Partnered with product and business stakeholders to turn requirements into well-tested features through TDD and pair programming.',
        ],
      },
    ],
  },
  {
    company: 'Zimba Technologies',
    context: 'Built a banking application to help digitize microfinance institutions in Kampala, Uganda.',
    roles: [
      {
        title: 'Founding Software Engineer',
        dates: 'Jan 2022 – Dec 2022',
        highlights: [
          'As the first engineering hire, took over the product from a contracting group, refactored it to scale, and launched it with its first partner institution.',
        ],
      },
    ],
  },
  {
    company: 'iC-1 Solutions',
    context: 'Worked on an agile team building a government financial budgeting tool.',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Jun 2020 – Dec 2021',
        highlights: [
          'Led features from workflow and database design through fully tested delivery, and built in-house CLIs to standardize how we developed.',
        ],
      },
    ],
  },
  {
    company: 'Flatiron School',
    context: 'Taught Ruby, Ruby on Rails, React, and Redux to groups of about 15 students.',
    roles: [
      {
        title: 'Software Engineering Coach',
        dates: 'Jun 2019 – Jun 2020',
        highlights: [
          'Created lectures beyond the core curriculum and co-led free community workshops for 75 people.',
        ],
      },
    ],
  },
]

export type CurrentWork = {
  title: string
  status: string
  description: string
  links: { label: string; href: string }[]
}

export const currentWork: CurrentWork[] = [
  {
    title: 'myBudee, modernized',
    status: 'In progress',
    description:
      "I'm bringing my Flatiron capstone up to date with Claude Code's code-modernization plugin: upgrading the Rails API and React frontend to current versions, adding full test coverage and CI, and keeping an upgrade log of every step along the way.",
    links: [
      { label: 'Frontend', href: 'https://github.com/canikwe/mynetwork-frontend' },
      { label: 'Backend', href: 'https://github.com/canikwe/myNetwork-backend' },
    ],
  },
  {
    title: 'Sprint tracker skill',
    status: 'In progress',
    description:
      "A Claude skill that works with an Obsidian vault to track sprint and non-sprint work together in one place. I'm cleaning it up to publish on GitHub.",
    links: [],
  },
]

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
