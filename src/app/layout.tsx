import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
  description: 'Official portfolio of Narh H.P Dromor showcasing software engineering, app development, web platforms and video production.',
  keywords: ['software engineer', 'web developer', 'app developer', 'video director', 'developer portfolio', 'Ghana developer'],
  authors: [{ name: 'Narh H.P Dromor' }],
  openGraph: {
    title: 'Narh H.P Dromor | Software Engineer & Creative Technologist',
    description: 'Designing powerful software, modern digital platforms and cinematic visual experiences.',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.PNG',
    apple: '/images/logo.PNG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-dark-900 text-white">
          <Navbar />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
