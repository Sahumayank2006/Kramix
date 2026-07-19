export const projects = [
  {
    id: 1,
    title: 'Nexify',
    summary: 'A modern SaaS platform offering ready-to-deploy business modules and digital solutions for startups, educational institutions, and enterprises. Designed to accelerate digital transformation with scalable, production-ready applications.',
    category: 'SaaS Platform',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Cloud'],
    image: 'Nexify.png',
    link: 'https://indianexify.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'EDUCORE',
    summary: 'An AI-powered school management platform that streamlines academic operations through dedicated portals for administrators, teachers, parents, and students. Features smart attendance, fee management, communication, analytics, and intelligent automation.',
    category: 'Education Technology',
    techStack: ['Next.js', 'AI', 'Node.js', 'MongoDB'],
    image: 'Educore.png',
    link: 'https://indianexify.vercel.app/educonnect',
    featured: true,
  },
  {
    id: 3,
    title: 'RETAILCORE',
    summary: 'An intelligent GST billing and inventory management system built for local businesses and retailers. Automates invoicing, inventory tracking, analytics, tax calculations, and business reporting through AI-powered insights.',
    category: 'Business Automation',
    techStack: ['React', 'Node', 'Express', 'MySQL', 'AI'],
    image: 'Retailcore.png',
    link: 'https://indianexify.vercel.app/smartbill',
    featured: true,
  },
  {
    id: 4,
    title: 'Swachh Bharat',
    summary: 'A live university deployment focused on community engagement, environmental awareness, and digital participation. The platform enables students to collaborate, organize initiatives, and contribute towards a cleaner and more sustainable future.',
    category: 'Community Platform',
    techStack: ['Next.js', 'Firebase', 'Cloud'],
    image: 'swachhbharat.png',
    link: 'https://swachhbharat.vercel.app',
    featured: false,
  },
  {
    id: 5,
    title: 'OD Automator',
    summary: 'A complete university automation platform that simplifies attendance tracking, leave approvals, academic workflows, and administrative processes. Designed to reduce manual work through intelligent automation.',
    category: 'University Automation',
    techStack: ['React', 'Firebase', 'Automation', 'AI'],
    image: 'od.png',
    link: 'https://odautomatioacc.vercel.app/',
    featured: false,
  },
  {
    id: 6,
    title: 'NationTrack',
    summary: 'An innovative government-focused digital platform built to improve public infrastructure management, asset monitoring, operational transparency, and data-driven decision making through modern technology.',
    category: 'Government Innovation',
    techStack: ['Next.js', 'GIS', 'AI', 'Cloud'],
    image: 'nationtrack.png',
    link: 'https://nationtrack.vercel.app',
    featured: false,
  },
  {
    id: 7,
    title: 'Portfolio Collection',
    summary: 'Explore individual portfolios showcasing projects, research, and professional experience.',
    category: 'Personal Branding',
    techStack: ['Next.js', 'React'],
    image: 'portfolio.png', // Fallback or unused
    link: '#',
    featured: true, // we want this on the homepage per user request
    isCollection: true,
    profiles: [
      {
        name: 'Mayank Sahu',
        subtitle: 'Student Portfolio',
        description: 'Explore projects, achievements, research, certifications, and technical expertise.',
        image: 'mayankp.png',
        link: 'https://mayanksahu.vercel.app'
      },
      {
        name: 'Dr. Ram Kumar',
        subtitle: 'Faculty Portfolio',
        description: 'Academic profile showcasing publications, research contributions, professional experience, and institutional leadership.',
        image: 'Ram.png',
        link: 'https://drramkumar.vercel.app'
      }
    ]
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'SaaS Platform', label: 'SaaS Platform' },
  { id: 'Education Technology', label: 'Education Technology' },
  { id: 'Business Automation', label: 'Business Automation' },
  { id: 'Community Platform', label: 'Community Platform' },
  { id: 'University Automation', label: 'University Automation' },
  { id: 'Government Innovation', label: 'Government Innovation' },
  { id: 'Personal Branding', label: 'Personal Branding' }
];
