'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.substring(1))
      const accessToken = params.get('access_token')
      const refreshToken = params.get('refresh_token')
      
      if (accessToken && refreshToken) {
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })
      }
    }
  }, [])

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error

      setMessage('Senha alterada com sucesso!')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error) {
      setError('Erro ao alterar senha')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Redefinir Senha</h1>
        </div>
        
        <form onSubmit={handleResetPassword} className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">
              {error}
            </div>
          )}
          
          {message && (
            <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 rounded">
              {message}
            </div>
          )}
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Nova Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
              required
              minLength={6}
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirmar Nova Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
              required
              minLength={6}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stronger-red text-white py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Alterando...' : 'Alterar Senha'}
          </button>
        </form>
      </div>
    </main>
  )
} 