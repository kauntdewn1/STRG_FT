'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/duyt2iykf/image/upload/v1744738379/logo_stronger_bco_ysvfzw.png"
                alt="Stronger Fitness Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-stronger-red neon-text'
                  : 'text-white hover:text-stronger-red hover:scale-105'
              }`}
            >
              Início
            </Link>
            <Link
              href="/planos"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/planos')
                  ? 'text-stronger-red neon-text'
                  : 'text-white hover:text-stronger-red hover:scale-105'
              }`}
            >
              Planos
            </Link>
            <Link
              href="/sobre"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/sobre')
                  ? 'text-stronger-red neon-text'
                  : 'text-white hover:text-stronger-red hover:scale-105'
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/contato')
                  ? 'text-stronger-red neon-text'
                  : 'text-white hover:text-stronger-red hover:scale-105'
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-stronger-red focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive('/')
                ? 'text-stronger-red neon-text'
                : 'text-white hover:text-stronger-red hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/planos"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive('/planos')
                ? 'text-stronger-red neon-text'
                : 'text-white hover:text-stronger-red hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Planos
          </Link>
          <Link
            href="/sobre"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive('/sobre')
                ? 'text-stronger-red neon-text'
                : 'text-white hover:text-stronger-red hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActive('/contato')
                ? 'text-stronger-red neon-text'
                : 'text-white hover:text-stronger-red hover:scale-105'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
} 