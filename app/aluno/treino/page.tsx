'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { generateWorkout } from '@/lib/botpress'
import Link from 'next/link'

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  notes?: string
}

interface Workout {
  name: string
  exercises: Exercise[]
}

interface UserProfile {
  fitnessLevel: string
  goals: string[]
  availableEquipment: string[]
}

export default function TreinoPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [workout, setWorkout] = useState<Workout | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.push('/login')
          return
        }

        // TODO: Buscar perfil do usuário do banco de dados
        setUserProfile({
          fitnessLevel: 'Intermediário',
          goals: ['Hipertrofia', 'Força'],
          availableEquipment: ['Barra', 'Halteres', 'Máquinas']
        })
      } catch (error) {
        console.error('Erro ao carregar perfil:', error)
        setError('Erro ao carregar perfil do usuário')
      }
    }

    loadUserProfile()
  }, [router])

  const generateNewWorkout = async () => {
    if (!userProfile) return

    setIsGenerating(true)
    setError('')

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }

      const newWorkout = await generateWorkout({
        userId: session.user.id,
        fitnessLevel: userProfile.fitnessLevel,
        goals: userProfile.goals,
        availableEquipment: userProfile.availableEquipment,
      })

      setWorkout(newWorkout)
    } catch (error) {
      console.error('Erro ao gerar treino:', error)
      setError('Erro ao gerar treino. Tente novamente.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Treino Personalizado</h1>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-6">
              {error}
            </div>
          )}
          
          {!workout ? (
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-400 mb-6">
                Clique no botão abaixo para gerar seu treino personalizado. Nossa IA analisará seu perfil e criará um treino otimizado para seus objetivos.
              </p>
              <button
                onClick={generateNewWorkout}
                disabled={isGenerating || !userProfile}
                className="bg-stronger-red text-white px-6 py-3 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
              >
                {isGenerating ? 'Gerando treino...' : 'Gerar Novo Treino'}
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{workout.name}</h2>
                
                <div className="space-y-6">
                  {workout.exercises.map((exercise, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded">
                      <h3 className="text-xl font-medium mb-2">{exercise.name}</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Séries</p>
                          <p className="font-medium">{exercise.sets}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Repetições</p>
                          <p className="font-medium">{exercise.reps}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Descanso</p>
                          <p className="font-medium">{exercise.rest}</p>
                        </div>
                      </div>
                      {exercise.notes && (
                        <p className="text-sm text-gray-400 mt-2">
                          Notas: {exercise.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setWorkout(null)}
                  className="bg-gray-700 text-white px-6 py-2 rounded font-medium hover:bg-gray-600 transition-colors"
                >
                  Gerar Outro Treino
                </button>
                <button
                  onClick={() => router.push('/aluno/treino/atual')}
                  className="bg-stronger-red text-white px-6 py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors"
                >
                  Treinar Agora
                </button>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="/aluno/treino/feedback"
                  className="bg-gray-700 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors"
                >
                  Dar Feedback
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 