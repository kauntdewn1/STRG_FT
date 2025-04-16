'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { WorkoutFeedback, saveWorkoutFeedback } from '@/lib/database'

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [comments, setComments] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }

      // TODO: Obter o ID do treino atual do estado ou parâmetros da URL
      const workoutId = 'current-workout-id'

      await saveWorkoutFeedback({
        workout_id: workoutId,
        user_id: session.user.id,
        rating,
        difficulty,
        comments,
      })

      setSuccess('Feedback enviado com sucesso!')
      setTimeout(() => {
        router.push('/aluno')
      }, 2000)
    } catch (error) {
      console.error('Erro ao enviar feedback:', error)
      setError('Erro ao enviar feedback. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Feedback do Treino</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-6">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 rounded mb-6">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Avaliação do Treino
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      rating >= value
                        ? 'bg-stronger-red text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Nível de Dificuldade
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDifficulty(value)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      difficulty >= value
                        ? 'bg-stronger-red text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium mb-2">
                Comentários
              </label>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-stronger-red focus:ring-1 focus:ring-stronger-red"
                rows={4}
                placeholder="Conte-nos sobre sua experiência com o treino..."
              />
            </div>

            <button
              type="submit"
              disabled={loading || !rating || !difficulty}
              className="w-full bg-stronger-red text-white py-2 rounded font-medium hover:bg-stronger-red-dark transition-colors disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar Feedback'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
} 