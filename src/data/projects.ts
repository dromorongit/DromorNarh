export interface Project {
  slug: string
  title: string
  description: string
  shortDescription: string
  category: string
  color: string
  image: string
  technologies: string[]
  role: string
  websiteUrl: string
  gallery: string[]
  year: string
  client: string
}

export const projects: Project[] = [
  {
    slug: 'netyark-mall',
    title: 'Netyark Mall',
    description: 'A comprehensive e-commerce platform featuring product catalog management, shopping cart functionality, secure payment integration, order tracking, and an intuitive admin dashboard for inventory management. The platform supports multiple vendors and offers a seamless shopping experience across all devices.',
    shortDescription: 'Full-featured e-commerce platform with multi-vendor support',
    category: 'E-commerce Platform',
    color: 'from-seaBlue to-purple',
    image: '/images/projects/netyark-mall.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redux', 'AWS S3'],
    role: 'Lead Developer - Full Stack Development',
    websiteUrl: 'https://netyark.com',
    gallery: [
      '/images/projects/netyark-1.jpg',
      '/images/projects/netyark-2.jpg',
      '/images/projects/netyark-3.jpg'
    ],
    year: '2024',
    client: 'Netyark Technologies'
  },
  {
    slug: 'rezar-aluminium',
    title: 'Rezar Aluminium',
    description: 'A professional business website for an aluminium manufacturing company featuring product showcase, service portfolio, quote request system, and company information pages. The design emphasizes reliability and professionalism with a modern visual approach.',
    shortDescription: 'Professional business website for aluminium manufacturer',
    category: 'Business Website',
    color: 'from-purple to-gold',
    image: '/images/projects/rezar.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    role: 'Frontend Developer & UI/UX Designer',
    websiteUrl: 'https://rezaraluminium.com',
    gallery: [
      '/images/projects/rezar-1.jpg',
      '/images/projects/rezar-2.jpg'
    ],
    year: '2023',
    client: 'Rezar Aluminium Company'
  },
  {
    slug: 'dhrone-tech-pos',
    title: 'Dhrone Tech POS',
    description: 'A robust point-of-sale desktop application for retail businesses with inventory management, sales tracking, employee management, reporting dashboard, and multi-branch support. Built with Electron for cross-platform compatibility.',
    shortDescription: 'Desktop POS system for retail business management',
    category: 'Desktop Application',
    color: 'from-gold to-seaBlue',
    image: '/images/projects/dhrone-pos.jpg',
    technologies: ['Electron', 'React', 'TypeScript', 'SQLite', 'Node.js', 'Tailwind CSS'],
    role: 'Lead Developer - Desktop Application',
    websiteUrl: '#',
    gallery: [
      '/images/projects/pos-1.jpg',
      '/images/projects/pos-2.jpg'
    ],
    year: '2024',
    client: 'Dhrone Tech Solutions'
  },
  {
    slug: 'streamflix',
    title: 'StreamFlix',
    description: 'A streaming platform for movies and TV shows with user authentication, watchlist management, continue watching feature, search functionality, and responsive video player. Includes admin panel for content management.',
    shortDescription: 'Video streaming platform with content management',
    category: 'Web Application',
    color: 'from-red-500 to-orange-500',
    image: '/images/projects/streamflix.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Video.js', 'JWT'],
    role: 'Full Stack Developer',
    websiteUrl: '#',
    gallery: [
      '/images/projects/streamflix-1.jpg'
    ],
    year: '2023',
    client: 'Personal Project'
  },
  {
    slug: 'healthconnect',
    title: 'HealthConnect',
    description: 'A healthcare management system connecting patients with healthcare providers. Features include appointment scheduling, telemedicine consultations, medical records management, and prescription tracking.',
    shortDescription: 'Healthcare management and telemedicine platform',
    category: 'Web Application',
    color: 'from-green-500 to-teal-500',
    image: '/images/projects/healthconnect.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Prisma'],
    role: 'Backend Developer',
    websiteUrl: '#',
    gallery: [
      '/images/projects/health-1.jpg'
    ],
    year: '2024',
    client: 'HealthConnect Inc.'
  },
  {
    slug: 'edusmart',
    title: 'EduSmart',
    description: 'An online learning management system with course creation, video lessons, quizzes, progress tracking, certificates, and discussion forums. Includes instructor dashboard and student analytics.',
    shortDescription: 'Comprehensive e-learning platform',
    category: 'Web Application',
    color: 'from-blue-500 to-indigo-500',
    image: '/images/projects/edusmart.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
    role: 'Lead Developer',
    websiteUrl: '#',
    gallery: [
      '/images/projects/edu-1.jpg'
    ],
    year: '2023',
    client: 'EduSmart Academy'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
