'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ParallaxImage from '@/components/ParallaxImage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function PlanosPage() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh]">
        <ParallaxImage
          src="/images/plans-hero.jpg"
          alt="Treino em grupo"
          className="h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nossos Planos</h1>
            <p className="text-xl md:text-2xl">Escolha o plano ideal para você</p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Planos Disponíveis
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
              <p className="text-gray-600 mb-6">
                Ideal para quem quer começar ou testar nossa metodologia
              </p>
              <div className="text-4xl font-bold mb-6">R$ 199,90</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Acesso a todas as aulas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte via WhatsApp
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Avaliação física mensal
                </li>
              </ul>
              <Link
                href="/cadastro"
                className="block w-full bg-stronger-red text-white text-center py-3 rounded-lg hover:bg-stronger-red-dark transition-colors"
              >
                Começar Agora
              </Link>
            </motion.div>

            {/* Semestral Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-lg transform scale-105"
            >
              <div className="absolute top-0 right-0 bg-stronger-red text-white px-4 py-1 rounded-tl-lg">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Plano Semestral</h3>
              <p className="text-gray-600 mb-6">
                O melhor custo-benefício para quem quer resultados consistentes
              </p>
              <div className="text-4xl font-bold mb-6">R$ 999,90</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Acesso a todas as aulas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte via WhatsApp
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Avaliação física mensal
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Desconto de 16% no valor total
                </li>
              </ul>
              <Link
                href="/cadastro"
                className="block w-full bg-stronger-red text-white text-center py-3 rounded-lg hover:bg-stronger-red-dark transition-colors"
              >
                Começar Agora
              </Link>
            </motion.div>

            {/* Annual Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Plano Anual</h3>
              <p className="text-gray-600 mb-6">
                Para quem está comprometido com a transformação
              </p>
              <div className="text-4xl font-bold mb-6">R$ 1.799,90</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Acesso a todas as aulas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Suporte via WhatsApp
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Avaliação física mensal
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Desconto de 25% no valor total
                </li>
              </ul>
              <Link
                href="/cadastro"
                className="block w-full bg-stronger-red text-white text-center py-3 rounded-lg hover:bg-stronger-red-dark transition-colors"
              >
                Começar Agora
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 