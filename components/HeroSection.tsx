'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
<<<<<<< HEAD
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/duyt2iykf/image/upload/v1744762719/FLW08133_jpges2.png"
=======
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          alt="Stronger Fitness Background"
          fill
          className="object-cover"
          priority
        />
<<<<<<< HEAD
        <div className="absolute inset-0 bg-black/60" />
        {/* Pulsing Particles */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-stronger-red rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="container relative z-20 text-center">
        {/* Logo with Motion Effects */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image
              src="https://res.cloudinary.com/duyt2iykf/image/upload/v1710876000/logo_stronger_3_dpsueq.png"
              alt="Stronger Fitness Logo"
              width={300}
              height={100}
              className="mx-auto drop-shadow-2xl"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-stronger-red/20 blur-xl"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.8 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Title with Motion */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: "easeOut"
          }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
        >
          O MAIOR Centro de Treinamento de Alta Performance do Estado de Goiás!
        </motion.h1>

        {/* Subtitle with Motion */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
=======
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
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: "easeOut"
          }}
<<<<<<< HEAD
          className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
        >
          Transforme seu corpo e sua mente com nossa metodologia exclusiva de treinamento.
        </motion.p>

        {/* Buttons with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
=======
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Transforme seu corpo e sua mente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            ease: "easeOut"
          }}
<<<<<<< HEAD
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
              initial={{ scale: 0 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden"
          >
            <Link 
              href="/contato" 
              className="btn-secondary relative z-10"
            >
              Agende uma Visita
            </Link>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
=======
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
        >
          O MAIOR Centro de Treinamento de Alta Performance do Estado de Goiás!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: "easeOut"
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/planos"
            className="btn-primary text-lg px-8 py-3"
          >
            Conheça Nossos Planos
          </Link>
          <Link
            href="/contato"
            className="btn-secondary text-lg px-8 py-3"
          >
            Fale Conosco
          </Link>
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
<<<<<<< HEAD
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-white rounded-full"
          />
=======
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
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
        </motion.div>
      </motion.div>
    </section>
  )
} 