/* =============================================================
   SINGLE SOURCE OF TRUTH
   Edit this file to update the whole site. Nothing else needs
   touching for content, links or projects.
   ============================================================= */

export const CONFIG = {
  name: 'Chetanya',
  fullName: 'Chetanya Bansal',
  role: 'Java backend developer, Gurugram',
  linkedin: 'https://www.linkedin.com/in/chetanya-javadev90/',
  githubUser: 'Chetanya729',
  email: 'chetanyabansal410@gmail.com',
};

CONFIG.github = `https://github.com/${CONFIG.githubUser}`;
CONFIG.mailto = `mailto:${CONFIG.email}`;

export const SKILLS = [
  {
    title: 'Language & core',
    note: 'Where the fundamentals live',
    items: ['Java', 'Core Java', 'OOP', 'Collections', 'Data structures', 'SQL'],
  },
  {
    title: 'Spring ecosystem',
    note: 'Day-to-day framework work',
    items: ['Spring Boot', 'Spring Security', 'JWT / OAuth2', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Thymeleaf'],
  },
  {
    title: 'Data & messaging',
    note: 'Storage, speed and events',
    items: ['MySQL', 'MongoDB', 'Redis', 'Apache Kafka', 'JPA Criteria API', 'Hibernate caching'],
  },
  {
    title: 'Tooling & mapping',
    note: 'The supporting cast',
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'MapStruct', 'Lombok', 'JavaMailSender'],
  },
];

export const LEARNING = [
  'JPA Criteria API & Specifications',
  'Hibernate caching internals',
  'Spring Security 6 lambda DSL',
  'CCNA',
  'Azure AZ-900',
];

/* repo: null renders the card without a repository link */
export const PROJECTS = [
  {
    name: 'Email Sender',
    repo: 'Emailsender',
    blurb:
      'A Spring Boot email service with a Thymeleaf compose UI, a sent-mail viewer, attachment support and a file-based audit trail.',
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'SMTP', 'JavaMailSender'],
    overview:
      'A service that does one job properly: compose an email from a template, send it over SMTP with attachments, and leave a record that it happened.',
    points: [
      'Thymeleaf compose UI plus a viewer for previously sent mail.',
      'Attachment support on top of JavaMailSender over configurable SMTP.',
      'Layered exception handling rather than errors leaking out of the controller.',
      'File-based audit trail, so every send stays traceable after the fact.',
    ],
  },
  {
    name: 'Employee Directory',
    repo: 'EmployeeDirectory-',
    blurb:
      'A CRUD directory built around clean DTO and entity mapping, with dynamic search through the JPA Criteria API.',
    tags: ['Java', 'Spring Boot', 'MapStruct', 'JPA', 'MySQL'],
    overview:
      'A directory service used as a testbed for two things I wanted to get right: where mapping belongs between entity and DTO, and how to build search filters that compose at runtime instead of multiplying into a dozen repository methods.',
    points: [
      'Compile-time entity/DTO mapping with MapStruct instead of hand-written converters.',
      'Dynamic search built on the JPA Criteria API, so filters combine at runtime.',
      'Spring Data JPA over MySQL.',
      'A working reference for MapStruct and Lombok annotation-processor ordering.',
    ],
  },
  {
    name: 'UserLogin SSO',
    repo: 'UserLogin-SSO',
    blurb: 'A focused Spring Security project implementing single sign-on with Google as the OAuth 2 provider.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'SSO'],
    overview:
      'Built to work through the OAuth 2 authorisation-code flow properly rather than copying a configuration block, so the redirects and the application user record both make sense.',
    points: [
      'Single sign-on flow configured through Spring Security.',
      'Google wired up as the OAuth 2 identity provider.',
      'Kept deliberately small so the security configuration stays readable.',
    ],
  },
  {
    name: 'Task Manager',
    repo: 'task-manager',
    blurb: 'A Spring Boot REST API for task management, structured around layered architecture and OOP design.',
    tags: ['Java', 'Spring Boot', 'REST API'],
    overview:
      'An earlier backend where the point was the shape of the code, with controller, service and repository responsibilities kept firmly separate.',
    points: [
      'REST endpoints for task management.',
      'Controller / service / repository layering with clear boundaries.',
      'Written as an exercise in OOP design rather than feature count.',
    ],
  },
  {
    name: 'ReAct SaaS Agent',
    repo: null,
    note: 'Repository not public yet',
    blurb: 'A ReAct-style agent backend in Spring Boot, wired to the Anthropic Claude API with a pluggable tool registry.',
    tags: ['Java', 'Spring Boot', 'Claude API', 'REST'],
    overview:
      'An agent loop built the backend way: the model reasons, picks a tool, gets a result, and reasons again, orchestrated by a Spring Boot service rather than a notebook script.',
    points: [
      'ReAct-style reason/act loop implemented server-side in Spring Boot.',
      'Integrated with the Anthropic Claude API for the reasoning step.',
      'Pluggable tool registry, so new tools register themselves without touching the agent loop.',
    ],
  },
];

export const REPOS = [
  { name: 'Emailsender', lang: 'Java', desc: 'Spring Boot email sender with attachments' },
  { name: 'EmployeeDirectory-', lang: 'Java', desc: 'Mapping and dynamic search' },
  { name: 'UserLogin-SSO', lang: 'Java', desc: 'Spring Security SSO with OAuth 2' },
  { name: 'task-manager', lang: 'Java', desc: 'Layered REST API for tasks' },
  { name: 'food-delivery-app', lang: 'Java', desc: '' },
];

/* period: '' hides the date line entirely — fill these in when you have them */
export const JOURNEY = [
  {
    period: '',
    role: 'Java Developer',
    org: 'GreenChip Consulting · Gurugram',
    text: 'Full-time backend work in Java and Spring Boot: REST services, JPA data models, Spring Security, and the Kafka and Redis layers behind them.',
  },
  {
    period: '',
    role: 'Java Developer Intern',
    org: 'GreenChip Consulting · Gurugram',
    text: 'Joined as an intern and converted to a full-time role on the same team.',
  },
  {
    period: '',
    role: 'B.Tech, Computer Science & Engineering',
    org: 'UIET, Kurukshetra University',
    text: 'Where the fundamentals came from: data structures, databases, networks, and the first serious Java.',
  },
  {
    period: '',
    role: 'National winner, Smart India Hackathon',
    org: 'Solar Tracking System',
    text: 'Won at the national level with a solar tracking system built during the hackathon.',
  },
];

export const SECTIONS = [
  { id: 'top', label: 'Intro', nav: false },
  { id: 'about', label: 'About', nav: true },
  { id: 'skills', label: 'Skills', nav: true },
  { id: 'projects', label: 'Projects', nav: true },
  { id: 'journey', label: 'Experience', nav: true },
  { id: 'github', label: 'GitHub', nav: true },
  { id: 'contact', label: 'Contact', nav: true },
];
