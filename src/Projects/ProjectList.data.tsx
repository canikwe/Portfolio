import { Project } from './Project.type'

export const projectListData: Project[] = [
  {
    id: 1,
    title: 'myBudee',
    tagLine: 'Track your budees and get reminders to contact them!',
    description:
      'myBudee (formerly myTowne) is a web application written with a React-Redux frontend and a Rails API backend. It gives users full CRUD capabilities over their contacts and reminders for those contacts.',
    tags: ['React', 'Javascript', 'Ruby', 'Rails', 'Redux'],
    frontendRepo: 'https://github.com/canikwe/mynetwork-frontend',
    backendRepo: 'https://github.com/canikwe/myNetwork-backend',
    demo: 'https://youtu.be/q1ODMvxXRG0',
    featureImg: 'myBudee_feature.png',
    secondaryImgs: ['myBudee2.png', 'myBudee3.png', 'myBudee4.png', 'myBudee5.png', 'myBudee6.png'],
  },
  {
    id: 2,
    title: 'myTowne',
    tagLine: 'A community board to connect you with your neighbors',
    description:
      "myTowne is a community bulletin board written with a React-JS frontend and a Rails API backend. It gives users full CRUD capabilities for their own posts and profile and read capabilities for community member's posts.",
    tags: ['React', 'Javascript', 'Ruby', 'Rails'],
    frontendRepo: 'https://github.com/canikwe/mytowne-frontend',
    backendRepo: 'https://github.com/canikwe/mytowne-backend',
    demo: 'https://www.youtube.com/watch?v=O_ioFWLxHQQ&feature=youtu.be',
    featureImg: 'myTowne_feature.png',
    secondaryImgs: ['myTowne1.png', 'myTowne2.png', 'myTowne3.png', 'myTowne4.png', 'myTowne5.png'],
  },
  {
    id: 3,
    title: 'Animagus',
    tagLine: 'Make a pet and keep it alive!',
    description:
      'Animagus is a web application written in Vanilla JavaScript that shows simple DOM manipulation in a fun interactive game.',
    tags: ['Javascript', 'Ruby', 'Rails'],
    frontendRepo: 'https://github.com/canikwe/animagus-frontend',
    backendRepo: 'https://github.com/canikwe/animagus-backend',
    demo: 'https://youtu.be/wRHNADaTdS0',
    featureImg: 'animagus_feature.png',
    secondaryImgs: ['animagus1.png', 'animagus2.png', 'animagus3.png', 'animagus4.png', 'animagus5.png'],
  },
]
