import { 
  Globe, Smartphone, Brain, Code2, Palette, Rocket, 
  Database, Cloud, ShieldCheck, Search, Wrench, Lightbulb,
  GraduationCap, BarChart3, Layers, Cpu
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 'web',
    title: 'Web Development',
    icon: 'Globe',
    description: 'From stunning business websites to complex web applications — we build fast, responsive, and scalable web experiences.',
    services: [
      {
        title: 'Business Websites',
        description: 'Professional, conversion-focused websites that establish your digital presence and drive results.',
        deliverables: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'CMS Integration'],
      },
      {
        title: 'Portfolio Websites',
        description: 'Showcase your work with elegance. Clean, interactive portfolios that make a lasting impression.',
        deliverables: ['Gallery System', 'Dynamic Filtering', 'Contact Integration', 'Analytics'],
      },
      {
        title: 'Landing Pages',
        description: 'High-converting landing pages designed to capture leads and drive action.',
        deliverables: ['A/B Testing Ready', 'Form Integration', 'Speed Optimized', 'Conversion Tracking'],
      },
      {
        title: 'E-Commerce',
        description: 'Full-featured online stores with seamless checkout, inventory management, and payment gateways.',
        deliverables: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      },
      {
        title: 'Web Applications',
        description: 'Custom web apps with complex functionality, real-time features, and scalable architecture.',
        deliverables: ['Custom Features', 'Real-time Updates', 'User Auth', 'API Integration'],
      },
      {
        title: 'SaaS Development',
        description: 'End-to-end SaaS product development — from MVP to scale, with subscription billing and multi-tenancy.',
        deliverables: ['Multi-tenancy', 'Subscription Billing', 'Dashboard', 'API Documentation'],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    icon: 'Brain',
    description: 'Harness the power of artificial intelligence to automate, predict, and transform your business processes.',
    services: [
      {
        title: 'AI-Powered Applications',
        description: 'Intelligent apps that learn, adapt, and deliver personalized experiences to your users.',
        deliverables: ['Custom AI Models', 'API Integration', 'User Dashboard', 'Performance Reports'],
      },
      {
        title: 'Machine Learning Projects',
        description: 'From data preprocessing to model deployment — complete ML pipeline development.',
        deliverables: ['Data Pipeline', 'Model Training', 'Deployment', 'Monitoring'],
      },
      {
        title: 'Python Projects',
        description: 'Custom Python solutions for automation, data analysis, web scraping, and more.',
        deliverables: ['Clean Code', 'Documentation', 'Testing', 'Deployment Guide'],
      },
    ],
  },
  {
    id: 'academic',
    title: 'Academic & Research',
    icon: 'GraduationCap',
    description: 'Helping students and researchers bring their academic projects to life with professional-grade development.',
    services: [
      {
        title: 'College Major/Minor Projects',
        description: 'Well-structured, documented academic projects that meet university standards and impress evaluators.',
        deliverables: ['Full Source Code', 'Documentation', 'Presentation', 'Deployment Help'],
      },
      {
        title: 'Final Year Engineering Projects',
        description: 'Comprehensive final year projects with real-world applicability and thorough documentation.',
        deliverables: ['Research Paper', 'Working Prototype', 'Demo Video', 'Viva Preparation'],
      },
      {
        title: 'Research Project Development',
        description: 'Turn your research ideas into working prototypes with proper methodology and documentation.',
        deliverables: ['Literature Review', 'Implementation', 'Results Analysis', 'Publication Support'],
      },
      {
        title: 'Java Projects',
        description: 'Robust Java applications for academic and professional use — from console apps to full-stack systems.',
        deliverables: ['Clean Architecture', 'Unit Tests', 'Documentation', 'Deployment'],
      },
    ],
  },
  {
    id: 'platforms',
    title: 'Platforms & Backend',
    icon: 'Database',
    description: 'Robust backend systems, APIs, and platform solutions that power your digital products.',
    services: [
      {
        title: 'MERN Stack Development',
        description: 'Full-stack JavaScript applications with MongoDB, Express, React, and Node.js.',
        deliverables: ['REST APIs', 'Database Design', 'Frontend UI', 'Deployment'],
      },
      {
        title: 'Dashboards & Admin Panels',
        description: 'Intuitive dashboards and admin interfaces for managing your business data and operations.',
        deliverables: ['Data Visualization', 'Role Management', 'Real-time Updates', 'Export Features'],
      },
      {
        title: 'API Development & Integration',
        description: 'RESTful and GraphQL APIs built for performance, security, and scalability.',
        deliverables: ['API Documentation', 'Authentication', 'Rate Limiting', 'Versioning'],
      },
      {
        title: 'Database Design',
        description: 'Optimized database schemas and architectures for reliable data management.',
        deliverables: ['Schema Design', 'Migration Scripts', 'Optimization', 'Backup Strategy'],
      },
      {
        title: 'Cloud Deployment',
        description: 'Deploy and manage your applications on AWS, GCP, or Azure with CI/CD pipelines.',
        deliverables: ['Server Setup', 'CI/CD Pipeline', 'SSL Setup', 'Monitoring'],
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    icon: 'Palette',
    description: 'Thoughtful, user-centered design that communicates your brand and delights your audience.',
    services: [
      {
        title: 'UI/UX Design',
        description: 'Research-driven interface design that prioritizes usability and creates delightful user experiences.',
        deliverables: ['User Research', 'Wireframes', 'High-Fidelity Mockups', 'Prototype'],
      },
      {
        title: 'Logo & Brand Identity',
        description: 'Distinctive logos and comprehensive brand systems that make your business memorable.',
        deliverables: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System'],
      },
      {
        title: 'Graphic Design',
        description: 'Eye-catching graphics for social media, marketing materials, and digital content.',
        deliverables: ['Social Media Kit', 'Marketing Collateral', 'Infographics', 'Presentations'],
      },
      {
        title: 'Resume & Portfolio Design',
        description: 'Professional resumes and portfolio materials that help you stand out.',
        deliverables: ['Custom Layout', 'Multiple Formats', 'ATS-Friendly', 'Print-Ready'],
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences on every device.',
    services: [
      {
        title: 'Mobile App Development',
        description: 'Cross-platform mobile apps built with React Native or Flutter for iOS and Android.',
        deliverables: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Submission'],
      },
    ],
  },
  {
    id: 'growth',
    title: 'Growth & Support',
    icon: 'Rocket',
    description: 'From SEO to ongoing maintenance — everything you need to grow and sustain your digital presence.',
    services: [
      {
        title: 'SEO Optimization',
        description: 'Data-driven SEO strategies that improve your search rankings and drive organic traffic.',
        deliverables: ['Technical Audit', 'Keyword Strategy', 'On-page SEO', 'Monthly Reports'],
      },
      {
        title: 'Performance Optimization',
        description: 'Speed up your existing website or application for better user experience and SEO.',
        deliverables: ['Lighthouse Audit', 'Code Optimization', 'Image Optimization', 'Caching'],
      },
      {
        title: 'Bug Fixing & Maintenance',
        description: 'Quick, reliable bug fixes and ongoing maintenance to keep your products running smoothly.',
        deliverables: ['Bug Analysis', 'Fix Implementation', 'Testing', 'Prevention Report'],
      },
      {
        title: 'Startup MVP Development',
        description: 'Validate your startup idea with a polished MVP — built fast, built right.',
        deliverables: ['Product Strategy', 'MVP Build', 'User Testing', 'Iteration Plan'],
      },
      {
        title: 'Technical Consultation',
        description: 'Expert guidance on technology decisions, architecture, and digital strategy.',
        deliverables: ['Architecture Review', 'Tech Stack Advice', 'Roadmap', 'Documentation'],
      },
      {
        title: 'Digital Transformation',
        description: 'Modernize your business processes with custom digital solutions and automation.',
        deliverables: ['Process Audit', 'Solution Design', 'Implementation', 'Training'],
      },
    ],
  },
];

export const serviceHighlights = [
  { icon: 'Globe', title: 'Web Development', description: 'Business sites, web apps, SaaS, e-commerce', link: '/services#web' },
  { icon: 'Brain', title: 'AI & Data', description: 'AI apps, ML projects, Python solutions', link: '/services#ai' },
  { icon: 'Smartphone', title: 'Mobile Apps', description: 'Cross-platform iOS & Android apps', link: '/services#mobile' },
  { icon: 'Palette', title: 'Design', description: 'UI/UX, branding, graphic design', link: '/services#design' },
  { icon: 'Database', title: 'Backend & Cloud', description: 'APIs, databases, cloud deployment', link: '/services#platforms' },
  { icon: 'Rocket', title: 'Growth', description: 'SEO, optimization, MVP development', link: '/services#growth' },
];
