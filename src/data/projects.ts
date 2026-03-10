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
    websiteUrl: 'https://www.netyarkmall.com',
    gallery: [
      '/images/netyarkmall1.png',
      '/images/netyarkmall2.png',
      '/images/netyarkmall3.png'
    ],
    year: '2026',
    client: 'Netyark Mall'
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
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.rezaraluminium.online',
    gallery: [
      '/images/rezar1.png',
      '/images/rezar2.png',
      '/images/rezar3.png',
      '/images/rezar4.png'
    ],
    year: '2025',
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
    slug: 'nedhub-ghana',
    title: 'Nedhub Ghana',
    description: 'A comprehensive business website offering digital services including purchase of mobile data, airtime top-up, utility bill payments, and bulk SMS messaging platform. The platform provides a seamless and secure way for Ghanaians to manage their digital payments and communications.',
    shortDescription: 'Digital services platform for data, airtime, utilities & bulk SMS',
    category: 'Business Website',
    color: 'from-red-500 to-orange-500',
    image: '/images/projects/nedhub.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Payment Gateway', 'Tailwind CSS', 'Twilio', 'AWS'],
    role: 'Full Stack Developer, UI/UX Designer, QA Tester & DevOps Engineer',
    websiteUrl: 'https://www.nedhubgh.com',
    gallery: [
      '/images/nedhub1.png',
      '/images/nedhub2.png',
      '/images/nedhub3.png',
      '/images/nedhub4.png',
      '/images/nedhub5.png',
      '/images/nedhub6.png',
      '/images/nedhub7.png'
    ],
    year: '2026',
    client: 'Nedhub Ghana'
  },
  {
    slug: 'naaso-travels',
    title: 'Naaso Travels & Tours',
    description: 'A comprehensive Islamic pilgrimage and travel booking website for Hajj, Umrah, and general travel services. Users can apply for visas to various destinations worldwide including Makkah, Medina, China, and other countries. The platform features visa application tracking, travel package bookings, and comprehensive travel information.',
    shortDescription: 'Islamic pilgrimage & Hajj, Umrah visa booking website',
    category: 'Web Application',
    color: 'from-green-500 to-teal-500',
    image: '/images/projects/naaso.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Payment Gateway', 'Tailwind CSS', 'EmailJS'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.naasotravels.com',
    gallery: [
      '/images/naaso1.png',
      '/images/naaso2.png',
      '/images/naaso3.png',
      '/images/naaso4.png',
      '/images/naaso5.png'
    ],
    year: '2026',
    client: 'Naaso Travels'
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
