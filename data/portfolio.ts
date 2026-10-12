import {
  SiteMeta,
  Project,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  SocialLink,
} from '@/types/portfolio';

export const siteMeta: SiteMeta = {
  name: 'Pugazhenthi p',
  brand: 'Pugazhenthi p',
  location: 'Chennai, India',
  availability: {
    status: 'selective',
    label: 'AVAILABLE FOR FREELANCE & CONTRACTS',
    description: 'Currently taking on select web development and UI engineering projects.',
  },
  headline: {
    prefix: 'Engineering digital solutions',
    accent: 'with code &',
    suffix: 'creativity.',
  },
  bio: "Hey, I'm Pugazhenthi P — a Full-Stack Developer and IT professional building scalable web applications, intelligent digital solutions, and seamless user experiences with Python, Django, JavaScript, and modern web technologies.",
  stats: [
    { value: 'Inspace Tech', label: 'Current Role' },
    { value: 'MCA 8.80', label: 'Academic CGPA' },
    { value: 'Full-Stack', label: 'Python, Django & Web' },
    { value: 'Chennai', label: 'Based in India' },
  ],
};

export const projects: Project[] = [
  {
    id: 'zoho-desk-itsm',
    number: '01',
    title: 'Zoho Desk ITSM Implementation',
    category: 'systems',
    categoryLabel: 'ITSM · WORKFLOW AUTOMATION · RBAC',
    tagline: 'Enterprise service management with dynamic ticket templates, SLA escalations, and real-time reporting.',
    description:
      'Architected and deployed Zoho Desk as an enterprise-wide ITSM platform, establishing department-based role access control (RBAC), custom service request catalogs, SLA escalation matrices, and real-time operational performance telemetry.',
    problemSolved:
      'Dispersed communication channels and unmonitored ticket lifecycles caused resolution delays and SLA tracking blind spots. The deployment created structured multi-department service management with automated accountability.',
    contribution:
      'Configured RBAC and departmental hierarchies; built business rules, automation triggers, dynamic request forms, and executive dashboards tracking resolution times (MTTR) and agent performance.',
    stack: ['Zoho Desk', 'RBAC Security', 'Workflow Automation', 'SLA Triggers', 'Executive Dashboards', 'ITIL Best Practices'],
    visualType: 'itsm',
    visualBadge: 'ENTERPRISE ITSM PLATFORM',
    statusNote: 'Live in enterprise operations. Workflow blueprints & SLA policy documentation available on request.',
    featured: true,
  },
  {
    id: 'infra-monitoring-observability',
    number: '02',
    title: 'Infrastructure Monitoring & Observability System',
    category: 'systems',
    categoryLabel: 'ENTERPRISE OBSERVABILITY · TELEMETRY · PROMETHEUS & GRAFANA',
    tagline: 'Real-time multi-target infrastructure telemetry, custom Grafana health metrics, and automated alert routing.',
    description:
      'Deployed Uptime Kuma for continuous heartbeat monitoring of servers, network devices, and web applications; integrated Prometheus for metric ingestion and engineered unified Grafana dashboards for uptime, latency, and performance telemetry. Configured automated Email and Webhook alert rules for downtime and SLA violations, reducing MTTD and enabling proactive incident response.',
    problemSolved:
      'Fragmented infrastructure monitoring and delayed incident discovery led to reactive downtime mitigation. The observability system centralized distributed telemetry into a unified dashboard, drastically cutting Mean Time to Detect (MTTD).',
    contribution:
      'Deployed and architected multi-target Uptime Kuma probes; instrumented Prometheus metric collectors and Node Exporters across production servers; designed real-time Grafana dashboard panels; configured automated Email and Webhook alert notification matrices for instant SLA breach escalation.',
    stack: ['Uptime Kuma', 'Prometheus', 'Grafana', 'Node Exporter', 'Linux Servers', 'Email/Webhook Alerts', 'SLA Monitoring'],
    visualType: 'monitoring',
    visualBadge: 'ENTERPRISE OBSERVABILITY PIPELINE',
    statusNote: 'Active in production infrastructure at Inspace Technologies (2026–Present). Architecture schematics & dashboard templates available on request.',
    featured: true,
  },
  {
    id: 'power-platform-helpdesk',
    number: '03',
    title: 'Power Platform IT Helpdesk System',
    category: 'systems',
    categoryLabel: 'POWER PLATFORM · POWER AUTOMATE · SHAREPOINT',
    tagline: 'Enterprise IT Helpdesk application with automated approval workflows, RBAC governance, and instant alerts.',
    description:
      'Designed and deployed an enterprise IT Helpdesk solution leveraging Microsoft Power Apps, Power Automate, and SharePoint. Engineered role-based access control (RBAC), automated multi-stage ticket routing, external API integrations, and real-time email/Teams alert workflows while maintaining strict permission governance.',
    problemSolved:
      'Manual, informal ticket requests caused SLA tracking blind spots, lost service requests, and compliance audit gaps. The Power Platform system standardized ticket lifecycles, enforced departmental governance, and provided centralized operational transparency.',
    contribution:
      'Built responsive canvas user interfaces in Microsoft Power Apps; developed cloud flows in Power Automate for ticket dispatch, approval escalations, and automated alerts; structured normalized SharePoint lists with RBAC permissions; established logging and governance audits to ensure high availability.',
    stack: ['Microsoft Power Apps', 'Power Automate', 'SharePoint', 'Microsoft 365', 'RBAC Governance', 'Workflow Automation', 'REST APIs', 'Audit Logging'],
    visualType: 'powerplatform',
    visualBadge: 'ENTERPRISE CLOUD WORKFLOWS',
    statusNote: 'In active production operations at Inspace Technologies (Feb 2025 – Present). Solution blueprints & flow documentation available on request.',
    featured: true,
  },
  {
    id: 'intelligent-vehicle-alert',
    number: '04',
    title: 'Intelligent Vehicle Alert System',
    category: 'ai',
    categoryLabel: 'COMPUTER VISION · SAFETY',
    tagline: 'Deep learning drowsy-driver detection with real-time audio-visual intervention alerts.',
    description:
      'A safety-critical computer vision concept engineered to monitor driver fatigue, facial landmarks, and attention vectors using a Vision Transformer architecture.',
    problemSolved:
      'Driver drowsiness causes severe transport accidents. The goal was to provide instantaneous, passive fatigue detection without specialized hardware constraints.',
    contribution:
      'Trained and evaluated attention-based model pipelines; designed a lightweight web dashboard to simulate real-time alertness tracking, telemetry coordinates, and trigger protocols.',
    stack: ['Python', 'Vision Transformer', 'Computer Vision', 'JavaScript', 'HTML / CSS', 'SQL'],
    visualType: 'vision',
    visualBadge: 'DRIVER SAFETY TELEMETRY',
    statusNote: 'Live demo & public repository links will be updated upon paper publication.',
    featured: true,
  },
  {
    id: 'catering-reservation-system',
    number: '05',
    title: 'Catering Reservation & Ordering System',
    category: 'fullstack',
    categoryLabel: 'FULL-STACK WEB APP',
    tagline: 'An end-to-end culinary event reservation and order orchestration platform.',
    description:
      'A structured Django web application designed for catering businesses to manage custom event bookings, food tasting reservations, curated menu tiers, and real-time order workflows.',
    problemSolved:
      'Eliminated manual spreadsheet tracking and disconnected phone consultations by creating a centralized client booking portal and kitchen order pipeline.',
    contribution:
      'Architected relational database schema in SQL; implemented custom Django models, forms, session management, and responsive client-facing ordering UI.',
    stack: ['Python', 'Django', 'SQL', 'JavaScript', 'HTML / CSS'],
    visualType: 'catering',
    visualBadge: 'EVENTS · MENUS · ORDERS',
    statusNote: 'Screenshots and case-study walkthrough available. Code repository in private staging.',
    featured: true,
  },
  {
    id: 'portfolio-rebuild',
    number: '06',
    title: 'Interactive Portfolio Experience',
    category: 'frontend',
    categoryLabel: 'CREATIVE ENGINEERING',
    tagline: 'Apple-inspired motion-driven portfolio engineered with Next.js 15 and custom CSS.',
    description:
      'A bespoke portfolio website engineered from the ground up to showcase creative frontend capabilities, cinematic scroll animations, and freelance client acquisition.',
    problemSolved:
      'Replaced a static resume page with an immersive, high-conversion showcase featuring zero layout shift, Apple-grade motion, and accessible micro-interactions.',
    contribution:
      'Engineered responsive layouts, GPU-accelerated micro-animations, theme tokens, Web3Forms integration with honeypot security, and full accessibility compliance.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Vanilla CSS', 'Lucide Icons'],
    visualType: 'portfolio',
    visualBadge: 'PUGAZHENTHI P · V2.0 SYSTEM',
    statusNote: 'Currently live — continuously updated with recent case studies and performance telemetry.',
    featured: true,
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'inspace-technologies',
    period: 'FEB 2024 — PRESENT',
    role: 'IT Support Professional & System Administrator',
    company: 'Inspace Technologies Private Limited',
    location: 'Chennai, India · On-site',
    description:
      'Delivering end-to-end enterprise IT administration, infrastructure maintenance, system observability, and L1/L2 technical operations across Linux and Windows environments.',
    highlights: [
      'Delivered L1/L2 support for desktops, laptops, networks, and mission-critical enterprise applications; managed ticketing, RCA, and escalations using GLPI & Zoho Desk.',
      'Administered Linux and Windows environments, configuring Active Directory, DNS, DHCP, Azure Virtual Machines, system imaging, OS patching, and data migrations.',
      'Administered Microsoft 365 services (Outlook, Teams, OneDrive, SharePoint) and streamlined secure user onboarding, permission provisioning, and offboarding.',
      'Implemented proactive system observability and infrastructure health monitoring utilizing Prometheus, Grafana, Zabbix, and Uptime Kuma.',
      'Built workflow automations with Microsoft Power Apps and Power Automate; created and maintained technical documentation, SOPs, and user training sessions.',
    ],
    skillsUsed: [
      'Linux & Windows Admin',
      'Active Directory & DNS/DHCP',
      'Azure VMs & Microsoft 365',
      'Prometheus & Grafana',
      'Zabbix & Uptime Kuma',
      'Power Apps & Automate',
      'GLPI & Zoho Desk',
      'Network Troubleshooting',
    ],
    isCurrent: true,
  },
  {
    id: 'shiash-info-solutions',
    period: 'JUN 2024 — AUG 2024',
    role: 'Web Development Intern',
    company: 'Shiash Info Solutions Private Limited',
    location: 'Chennai, India',
    description:
      'Developed dynamic, cross-browser web interfaces and strengthened core client-side engineering practices.',
    highlights: [
      'Collaborated on responsive layout engineering using modern semantic HTML, CSS, and JavaScript.',
      'Refactored legacy UI components to improve visual consistency and mobile usability.',
      'Gained practical insight into web development sprint workflows and collaborative client delivery.',
    ],
    skillsUsed: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
  },
  {
    id: 'larsen-and-toubro',
    period: 'MAR 2024 — JUN 2024',
    role: 'Project Intern — CMRL / Azure Project',
    company: 'Larsen & Toubro Construction',
    location: 'Chennai, India',
    description:
      'Gained hands-on operational exposure to enterprise infrastructure, Microsoft Azure, and networking within the Chennai Metro Rail Limited (CMRL) project environment.',
    highlights: [
      'Observed enterprise network topologies and cloud environment configurations on Microsoft Azure.',
      'Assisted technical leads with documentation, system health monitoring, and infrastructure checks.',
      'Acquired practical foundation in cloud computing fundamentals within a large-scale infrastructure project.',
    ],
    skillsUsed: ['Microsoft Azure', 'Networking', 'Cloud Fundamentals', 'System Monitoring'],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications & Software Engineering',
    institution: 'MAM College of Engineering',
    period: '2022 — 2024',
    grade: '8.80 CGPA',
    location: 'Trichy, Tamil Nadu',
  },
  {
    degree: 'Bachelor of Commerce with Computer Applications (B.Com CA)',
    field: 'Commerce & Computer Applications',
    institution: 'Swami Dayananda College of Arts and Science',
    period: '2019 — 2022',
    grade: '7.29 CGPA',
    location: 'Thiruvarur, Tamil Nadu',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    subtitle: 'Building responsive, tactile, and performant user interfaces',
    items: ['HTML5 & Semantic Web', 'CSS3 & Modern Layouts', 'JavaScript (ES6+)', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend & Systems',
    subtitle: 'Server logic, relational schemas, and application architecture',
    items: ['Python', 'Django Framework', 'SQL & Relational Databases', 'RESTful API Integration'],
  },
  {
    title: 'SysAdmin, Cloud & Monitoring',
    subtitle: 'Infrastructure administration, enterprise networking, and observability',
    items: [
      'Linux & Windows Administration',
      'Active Directory, DNS & DHCP',
      'Prometheus & Grafana',
      'Zabbix & Uptime Kuma',
      'Microsoft 365 & Azure',
      'Power Apps & Automate',
    ],
  },
  {
    title: 'Design & Workflow Tools',
    subtitle: 'Translating concepts into prototypes and managing IT operations',
    items: ['UI / UX Principles', 'Figma Wireframing', 'Git & GitHub', 'GLPI & Zoho Desk', 'Technical SOPs'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pugazhenthip/',
    handle: 'in/pugazhenthip',
  },
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/pugalsandy55',
    handle: '@pugalsandy55',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/itzz__pugal__/',
    handle: '@itzz__pugal__',
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:pugazhenthip5521@gmail.com',
    handle: 'pugazhenthip5521@gmail.com',
  },
];
