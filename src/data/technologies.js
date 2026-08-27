import { Atom, Server, Braces, FileCode2, Database, Paintbrush, GitBranch, Network, CloudCog, Bot, Workflow, Boxes, Globe2, PanelsTopLeft, PenTool } from 'lucide-react';
export const technologyGroups = [{
  title: 'Front-end',
  items: [{
    name: 'HTML5',
    icon: FileCode2
  }, {
    name: 'CSS3 / SCSS / BEM',
    icon: Paintbrush
  }, {
    name: 'JavaScript ES6+',
    icon: Braces
  }, {
    name: 'React',
    icon: Atom
  }, {
    name: 'Redux Toolkit',
    icon: Boxes
  }]
}, {
  title: 'Back-end & Data',
  items: [{
    name: 'Node.js',
    icon: Server
  }, {
    name: 'PHP',
    icon: Server
  }, {
    name: 'REST API',
    icon: Network
  }, {
    name: 'Python',
    icon: Braces
  }, {
    name: 'Supabase',
    icon: Database
  }]
}, {
  title: 'AI, Microsoft & Automation',
  items: [{
    name: 'Copilot Studio',
    icon: Bot
  }, {
    name: 'Microsoft 365',
    icon: CloudCog
  }, {
    name: 'Power Automate',
    icon: Workflow
  }, {
    name: 'Azure',
    icon: CloudCog
  }]
}, {
  title: 'CMS & Development Tools',
  items: [{
    name: 'WordPress',
    icon: Globe2
  }, {
    name: 'Git',
    icon: GitBranch
  }, {
    name: 'Trello / Jira',
    icon: PanelsTopLeft
  }, {
    name: 'Figma',
    icon: PenTool
  }]
}];
