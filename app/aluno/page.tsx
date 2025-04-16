'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

interface User {
  id: string
  email: string
  plan: {
    name: string
    nextPayment: string
    status: string
  }
}

export default function AlunoPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error || !session) {
          router.push('/login')
          return
        }

        // TODO: Buscar dados do usuário do banco de dados
        setUser({
          id: session.user.id,
          email: session.user.email!,
          plan: {
            name: 'Plano Premium',
            nextPayment: '25/05/2024',
            status: 'Ativo'
          }
        })
      } catch (error) {
        console.error('Erro ao verificar sessão:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-stronger-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stronger-red mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </main>
    )
  }

  if (!user) return null

  return (
    <main className="min-h-screen bg-stronger-black text-white">
      <div className="container py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Bem-vindo, {user.email}</h1>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Sair
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Status do Plano */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Status do Plano</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Plano Atual</p>
                <p className="font-medium">{user.plan.name}</p>
              </div>
              <div>
                <p className="text-gray-400">Próximo Vencimento</p>
                <p className="font-medium">{user.plan.nextPayment}</p>
              </div>
              <div>
                <p className="text-gray-400">Status</p>
                <p className="text-green-500 font-medium">{user.plan.status}</p>
              </div>
            </div>
          </div>

          {/* IA de Treino */}
          <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Treino Personalizado</h2>
            <div className="space-y-4">
              <p className="text-gray-400">
                Nossa IA analisa seu progresso e cria treinos personalizados para maximizar seus resultados.
              </p>
              <button
                onClick={() => router.push('/aluno/treino')}
                className="bg-stronger-red text-white px-6 py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors"
              >
                Gerar Novo Treino
              </button>
            </div>
          </div>

          {/* Histórico de Treinos */}
          <div className="bg-gray-800 p-6 rounded-lg md:col-span-3">
            <h2 className="text-xl font-bold mb-4">Histórico de Treinos</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Treino A - Peito e Tríceps</p>
                    <p className="text-sm text-gray-400">15/04/2024</p>
                  </div>
                  <button
                    onClick={() => router.push('/aluno/treino/atual')}
                    className="bg-stronger-red text-white px-4 py-1 rounded text-sm hover:bg-stronger-red-dark transition-colors"
                  >
                    Treinar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 