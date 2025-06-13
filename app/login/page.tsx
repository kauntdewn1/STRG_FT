'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Aqui você pode implementar sua própria lógica de autenticação
      console.log('Login com:', { email, password })
      router.push('/aluno')
    } catch (error: any) {
      setError('Email ou senha inválidos')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordRecovery = async () => {
    if (!email) {
      setError('Por favor, insira seu email')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Aqui você pode implementar sua própria lógica de recuperação de senha
      console.log('Recuperação de senha para:', email)
      setError('Email de recuperação enviado!')
    } catch (error) {
      setError('Erro ao enviar email de recuperação')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Image
            src="/logo_stronger_3_dpsueq.png"
            alt="Stronger Fitness Logo"
            width={200}
            height={67}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Área do Aluno</h1>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleLogin}
          className="space-y-4"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stronger-red text-white py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <button
            type="button"
            onClick={handlePasswordRecovery}
            disabled={loading}
            className="w-full text-gray-400 hover:text-white transition-colors"
          >
            Esqueceu sua senha?
          </button>
        </motion.form>
      </div>
    </main>
  )
} 