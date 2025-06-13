'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import FirebaseLeadForm from '@/components/FirebaseLeadForm'

const BOTPRESS_SCRIPT = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [leadRegistered, setLeadRegistered] = useState(false)
  const router = useRouter()

  // Injetar scripts do Botpress após cadastro
  useEffect(() => {
    if (leadRegistered) {
      // Script principal do Botpress
      const script1 = document.createElement('script')
      script1.src = BOTPRESS_SCRIPT
      script1.defer = true
      document.body.appendChild(script1)

      // Script customizado do cliente
      const clientId = process.env.NEXT_PUBLIC_CLIENTE_ID || 'xxxx'
      const script2 = document.createElement('script')
      script2.src = `https://files.bpcontent.cloud/2025/04/21/15/20250421150456-${clientId}.js`
      script2.defer = true
      document.body.appendChild(script2)

      return () => {
        document.body.removeChild(script1)
        document.body.removeChild(script2)
      }
    }
  }, [leadRegistered])

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      // Aqui você pode implementar sua própria lógica de autenticação
      console.log('Iniciando processo de login...')
      router.push('/aluno')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background com nova imagem */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/bk_3.png')`,
        }}
      />
      {/* Degradê preto animado */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          background: 'linear-gradient(120deg, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.7) 100%)',
        }}
      />
      {/* Conteúdo principal */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-12"
        >
          {/* Logo centralizada sem container escuro */}
          <img
            src="/logo stronger1.png"
            alt="Logo Stronger Fitness"
            className="w-full max-w-[60px] sm:max-w-[40px] h-auto object-contain drop-shadow-2xl mx-auto my-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          {/* Formulário direto na landing page */}
          {!leadRegistered && (
            <FirebaseLeadForm onSuccess={() => setLeadRegistered(true)} />
          )}
          {leadRegistered && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-green-400 text-lg font-bold mb-4 text-center">Cadastro realizado com sucesso! Aguarde o atendimento...</p>
              {/* O chat do Botpress será carregado automaticamente */}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
