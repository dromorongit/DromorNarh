import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-seaBlue/30 blur-xl rounded-full" />
                <Image
                  src="/images/logo.PNG"
                  alt="Narh H.P Dromor"
                  width={60}
                  height={60}
                  className="object-contain relative z-10 filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Designing powerful software, modern digital platforms and cinematic visual experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-seaBlue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/iamdhrone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/dromorongit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <a href="mailto:iamdhrone@gmail.com" className="flex items-center space-x-2 hover:text-seaBlue transition-colors">
                <Mail size={16} />
                <span>iamdhrone@gmail.com</span>
              </a>
              <a href="tel:+233538284952" className="flex items-center space-x-2 hover:text-seaBlue transition-colors">
                <Phone size={16} />
                <span>+233 53 828 4952</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Dhrone Creative Gallery, Santa Maria, Accra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Projects', 'Services', 'Tech Stack', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-seaBlue transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Narh H.P Dromor. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
