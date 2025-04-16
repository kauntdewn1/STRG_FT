'use client'

<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { supabase, checkRateLimit, updateLoginAttempts } from '@/lib/supabase'
import { motion } from 'framer-motion'
=======
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
<<<<<<< HEAD
  const [rememberMe, setRememberMe] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Email validation
  const [emailError, setEmailError] = useState('')
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (password.match(/[A-Z]/)) strength++
    if (password.match(/[a-z]/)) strength++
    if (password.match(/[0-9]/)) strength++
    if (password.match(/[^A-Za-z0-9]/)) strength++
    return strength
  }

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password))
  }, [password])

=======
  const router = useRouter()

>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
<<<<<<< HEAD
    setEmailError('')

    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um email válido')
      setLoading(false)
      return
    }

    try {
      await checkRateLimit(email)

=======

    try {
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

<<<<<<< HEAD
      await updateLoginAttempts(email, true)
      router.push('/aluno')
    } catch (error: any) {
      await updateLoginAttempts(email, false)
      setError(error.message || 'Email ou senha inválidos')
=======
      router.push('/aluno')
    } catch (error) {
      setError('Email ou senha inválidos')
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordRecovery = async () => {
    if (!email) {
      setError('Por favor, insira seu email')
      return
    }

<<<<<<< HEAD
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um email válido')
      return
    }

=======
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      setError('Email de recuperação enviado!')
    } catch (error) {
      setError('Erro ao enviar email de recuperação')
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/aluno`,
        },
      })
      if (error) throw error
    } catch (error) {
      setError('Erro ao fazer login com rede social')
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
=======
  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container max-w-md">
        <div className="text-center mb-8">
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          <Image
            src="/logo_stronger_3_dpsueq.png"
            alt="Stronger Fitness Logo"
            width={200}
            height={67}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Área do Aluno</h1>
<<<<<<< HEAD
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleLogin}
          className="space-y-4"
        >
=======
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
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
<<<<<<< HEAD
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError('')
              }}
              className={`w-full px-4 py-2 rounded bg-gray-800 border ${
                emailError ? 'border-red-500' : 'border-gray-700'
              } focus:border-stronger-red focus:ring-1 focus:ring-stronger-red`}
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
=======
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
              required
            />
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Senha
            </label>
<<<<<<< HEAD
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
            {password && (
              <div className="mt-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded ${
                        i < passwordStrength
                          ? 'bg-green-500'
                          : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {passwordStrength < 3
                    ? 'Senha fraca'
                    : passwordStrength < 5
                    ? 'Senha média'
                    : 'Senha forte'}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-700 text-stronger-red focus:ring-stronger-red"
              />
              <span className="text-sm">Lembrar-me</span>
            </label>
=======
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
              required
            />
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stronger-red text-white py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

<<<<<<< HEAD
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-stronger-black text-gray-400">ou</span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              <Image
                src="/images/google-icon.png"
                alt="Google"
                width={20}
                height={20}
              />
              Entrar com Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('facebook')}
              className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded font-medium hover:bg-[#166FE5] transition-colors"
            >
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              Entrar com Facebook
            </button>
          </div>

=======
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
          <button
            type="button"
            onClick={handlePasswordRecovery}
            disabled={loading}
            className="w-full text-gray-400 hover:text-white transition-colors"
          >
            Esqueceu sua senha?
          </button>
<<<<<<< HEAD
        </motion.form>
=======
        </form>
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
      </div>
    </main>
  )
} 