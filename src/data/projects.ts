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
    role: 'Full Stack Developer',
    websiteUrl: '#',
    gallery: [
      '/images/dhronetechpos1.png',
      '/images/dhronetechpos2.png',
      '/images/dhronetechpos3.png',
      '/images/dhronetechpos4.png',
      '/images/dhronetechpos5.png'
    ],
    year: '2026',
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
    category: 'Service Website',
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
    slug: 'sweettreets',
    title: 'SweetTreets',
    description: 'An e-commerce platform specializing in foreign snacks, drinks, and groceries from around the world. The platform features a wide selection of international products including Nutella, Maltesers, and other premium snacks. Users can browse products, add to cart, make secure payments, and track their orders.',
    shortDescription: 'E-commerce platform for foreign snacks, drinks & groceries',
    category: 'E-commerce Platform',
    color: 'from-pink-500 to-rose-500',
    image: '/images/projects/sweettreets.jpg',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redux', 'AWS S3'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.sweettreets.shop',
    gallery: [
      '/images/sweettreets1.png',
      '/images/sweettreets2.png',
      '/images/sweettreets3.png',
      '/images/sweettreets4.png'
    ],
    year: '2026',
    client: 'Sweet Treets'
  },
  {
    slug: 'rich-tym-luxe',
    title: 'Rich Tym Luxe',
    description: 'A premium luxury e-commerce platform offering high-end fashion, accessories, and lifestyle products. Features include elegant product showcases, secure payment processing, wishlist functionality, and a seamless shopping experience for discerning customers.',
    shortDescription: 'Premium luxury e-commerce platform',
    category: 'Business Website',
    color: 'from-amber-500 to-yellow-500',
    image: '/images/projects/rich-tym-luxe.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.richtymluxe.org',
    gallery: [],
    year: '2026',
    client: 'Rich Tym Luxe'
  },
  {
    slug: 'shop-auntie-araba',
    title: 'Shop Auntie Araba',
    description: 'An African-inspired e-commerce platform featuring authentic African clothing, fabrics, and cultural artifacts. The platform enables vendors to list products and offers customers a convenient way to browse and purchase traditional African wear and accessories.',
    shortDescription: 'African fashion e-commerce platform',
    category: 'Business Website',
    color: 'from-orange-500 to-red-500',
    image: '/images/projects/shop-auntie-araba.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.shopauntiearaba.com',
    gallery: [],
    year: '2026',
    client: 'Shop Auntie Araba'
  },
  {
    slug: 'cynkare',
    title: 'Cynkare',
    description: 'A professional business website for Cynkare featuring service showcases, company information, contact forms, and team profiles. The design emphasizes professionalism and modern business aesthetics.',
    shortDescription: 'Professional business website',
    category: 'Business Website',
    color: 'from-blue-500 to-cyan-500',
    image: '/images/projects/cynkare.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.cynkare.com',
    gallery: [],
    year: '2026',
    client: 'Cynkare'
  },
  {
    slug: 'affordable-wigs-gh',
    title: 'Affordable Wigs GH',
    description: 'An e-commerce platform specializing in wigs, hair extensions, and beauty products for the Ghanaian market. Features product catalog, shopping cart, secure checkout, and order tracking.',
    shortDescription: 'Wigs and beauty products e-commerce',
    category: 'Business Website',
    color: 'from-purple-500 to-pink-500',
    image: '/images/projects/affordable-wigs-gh.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.affordablewigsgh.com',
    gallery: [],
    year: '2026',
    client: 'Affordable Wigs GH'
  },
  {
    slug: 'hair-elevation-studios',
    title: 'Hair Elevation Studios',
    description: 'A comprehensive e-commerce platform for wigs, wig bundles, hair treatments, and session bookings. Features include product catalog, booking system for salon sessions, secure payment processing, and order management.',
    shortDescription: 'Wigs and hair services e-commerce platform',
    category: 'E-commerce Platform',
    color: 'from-rose-500 to-pink-600',
    image: '/images/projects/hair-elevation-studios.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.hairelevationstudio.com',
    gallery: [],
    year: '2025',
    client: 'Hair Elevation Studios'
  },
  {
    slug: 'obofour-raphael',
    title: 'Obofour Raphael',
    description: 'A personal portfolio website for veteran musician Obofour Raphael featuring artist biography, music releases, upcoming events, photo gallery, and contact information. The design reflects his rich musical heritage and legacy.',
    shortDescription: 'Musician portfolio website',
    category: 'Personal Website',
    color: 'from-yellow-600 to-orange-600',
    image: '/images/projects/obofour-raphael.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    role: 'Full Stack Developer',
    websiteUrl: 'https://www.obo4raphael.com',
    gallery: [],
    year: '2025',
    client: 'Obofour Raphael'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}
