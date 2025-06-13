'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Stronger Fitness Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.2
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          className="mb-8"
        >
          <Image
            src="https://res.cloudinary.com/duyt2iykf/image/upload/v1744738381/logo_stronger_ws3hsg.png"
            alt="Stronger Fitness Logo"
            width={400}
            height={150}
            className="mx-auto h-auto w-full max-w-md drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: "easeOut"
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Transforme seu corpo e sua mente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: "easeOut"
          }}
          className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
        >
          Transforme seu corpo e sua mente com nossa metodologia exclusiva de treinamento.
        </motion.p>

        {/* Buttons with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: "easeOut"
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden"
          >
            <Link 
              href="/planos" 
              className="btn-primary relative z-10"
            >
              Conheça Nossos Planos
            </Link>
            <motion.div
              className="absolute inset-0 bg-stronger-red/20"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 1.2,
          duration: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
} 