'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { UserProgress, saveUserProgress, getUserProgress } from '@/lib/database'

export default function ProgressoPage() {
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [newProgress, setNewProgress] = useState<Omit<UserProgress, 'id' | 'user_id' | 'created_at'>>({
    weight: 0,
    body_fat: undefined,
    measurements: {
      chest: undefined,
      waist: undefined,
      hips: undefined,
      arms: undefined,
      thighs: undefined,
    },
  })
  const router = useRouter()

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.push('/login')
          return
        }

        const userProgress = await getUserProgress(session.user.id)
        setProgress(userProgress)
      } catch (error) {
        console.error('Erro ao carregar progresso:', error)
        setError('Erro ao carregar progresso')
      } finally {
        setLoading(false)
      }
    }

    loadProgress()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }

      await saveUserProgress({
        user_id: session.user.id,
        ...newProgress,
      })

      const updatedProgress = await getUserProgress(session.user.id)
      setProgress(updatedProgress)
      setNewProgress({
        weight: 0,
        body_fat: undefined,
        measurements: {
          chest: undefined,
          waist: undefined,
          hips: undefined,
          arms: undefined,
          thighs: undefined,
        },
      })
    } catch (error) {
      console.error('Erro ao salvar progresso:', error)
      setError('Erro ao salvar progresso')
    } finally {
      setLoading(false)
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

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Meu Progresso</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-6">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Novo Progresso */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Registrar Progresso</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium mb-1">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={newProgress.weight || ''}
                    onChange={(e) => setNewProgress({ ...newProgress, weight: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                    required
                    step="0.1"
                  />
                </div>

                <div>
                  <label htmlFor="body_fat" className="block text-sm font-medium mb-1">
                    Gordura Corporal (%)
                  </label>
                  <input
                    type="number"
                    id="body_fat"
                    value={newProgress.body_fat || ''}
                    onChange={(e) => setNewProgress({ ...newProgress, body_fat: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Medidas (cm)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Peito"
                      value={newProgress.measurements?.chest || ''}
                      onChange={(e) => setNewProgress({
                        ...newProgress,
                        measurements: { ...newProgress.measurements, chest: parseFloat(e.target.value) }
                      })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                      step="0.1"
                    />
                    <input
                      type="number"
                      placeholder="Cintura"
                      value={newProgress.measurements?.waist || ''}
                      onChange={(e) => setNewProgress({
                        ...newProgress,
                        measurements: { ...newProgress.measurements, waist: parseFloat(e.target.value) }
                      })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                      step="0.1"
                    />
                    <input
                      type="number"
                      placeholder="Quadril"
                      value={newProgress.measurements?.hips || ''}
                      onChange={(e) => setNewProgress({
                        ...newProgress,
                        measurements: { ...newProgress.measurements, hips: parseFloat(e.target.value) }
                      })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                      step="0.1"
                    />
                    <input
                      type="number"
                      placeholder="Braços"
                      value={newProgress.measurements?.arms || ''}
                      onChange={(e) => setNewProgress({
                        ...newProgress,
                        measurements: { ...newProgress.measurements, arms: parseFloat(e.target.value) }
                      })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                      step="0.1"
                    />
                    <input
                      type="number"
                      placeholder="Coxas"
                      value={newProgress.measurements?.thighs || ''}
                      onChange={(e) => setNewProgress({
                        ...newProgress,
                        measurements: { ...newProgress.measurements, thighs: parseFloat(e.target.value) }
                      })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                      step="0.1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-stronger-red text-white py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
                >
                  {loading ? 'Salvando...' : 'Salvar Progresso'}
                </button>
              </form>
            </div>

            {/* Histórico de Progresso */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Histórico</h2>
              <div className="space-y-4">
                {progress.map((record, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded">
                    <p className="text-sm text-gray-400 mb-2">
                      {new Date(record.created_at).toLocaleDateString('pt-BR')}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-400">Peso</p>
                        <p className="font-medium">{record.weight} kg</p>
                      </div>
                      {record.body_fat && (
                        <div>
                          <p className="text-gray-400">Gordura</p>
                          <p className="font-medium">{record.body_fat}%</p>
                        </div>
                      )}
                    </div>
                    {record.measurements && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {record.measurements.chest && (
                          <div>
                            <p className="text-gray-400">Peito</p>
                            <p className="font-medium">{record.measurements.chest} cm</p>
                          </div>
                        )}
                        {record.measurements.waist && (
                          <div>
                            <p className="text-gray-400">Cintura</p>
                            <p className="font-medium">{record.measurements.waist} cm</p>
                          </div>
                        )}
                        {record.measurements.hips && (
                          <div>
                            <p className="text-gray-400">Quadril</p>
                            <p className="font-medium">{record.measurements.hips} cm</p>
                          </div>
                        )}
                        {record.measurements.arms && (
                          <div>
                            <p className="text-gray-400">Braços</p>
                            <p className="font-medium">{record.measurements.arms} cm</p>
                          </div>
                        )}
                        {record.measurements.thighs && (
                          <div>
                            <p className="text-gray-400">Coxas</p>
                            <p className="font-medium">{record.measurements.thighs} cm</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 