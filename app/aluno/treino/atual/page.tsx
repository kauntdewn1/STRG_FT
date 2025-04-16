'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  notes?: string
  completedSets?: number
}

interface Workout {
  name: string
  exercises: Exercise[]
}

export default function TreinoAtualPage() {
  const [workout, setWorkout] = useState<Workout>({
    name: 'Treino A - Peito e Tríceps',
    exercises: [
      {
        name: 'Supino Reto',
        sets: 4,
        reps: '8-12',
        rest: '90s',
        notes: 'Foco em controle excêntrico',
        completedSets: 0
      },
      {
        name: 'Crucifixo',
        sets: 3,
        reps: '12-15',
        rest: '60s',
        completedSets: 0
      },
      {
        name: 'Tríceps Testa',
        sets: 4,
        reps: '10-12',
        rest: '60s',
        completedSets: 0
      },
      {
        name: 'Tríceps Corda',
        sets: 3,
        reps: '12-15',
        rest: '45s',
        completedSets: 0
      }
    ]
  })

  const [currentExercise, setCurrentExercise] = useState(0)
  const [isResting, setIsResting] = useState(false)
  const [restTime, setRestTime] = useState(0)
  const router = useRouter()

  const handleSetComplete = (exerciseIndex: number) => {
    const updatedWorkout = { ...workout }
    const exercise = updatedWorkout.exercises[exerciseIndex]
    
    if (exercise.completedSets === undefined) {
      exercise.completedSets = 0
    }
    
    exercise.completedSets++
    
    if (exercise.completedSets < exercise.sets) {
      setIsResting(true)
      const restSeconds = parseInt(exercise.rest)
      setRestTime(restSeconds)
      
      const timer = setInterval(() => {
        setRestTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setIsResting(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else if (exerciseIndex < workout.exercises.length - 1) {
      setCurrentExercise(exerciseIndex + 1)
    } else {
      // Treino completo
      router.push('/aluno')
    }
    
    setWorkout(updatedWorkout)
  }

  return (
    <main className="min-h-screen bg-stronger-black text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{workout.name}</h1>
          
          <div className="space-y-6">
            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg ${
                  index === currentExercise ? 'border-2 border-stronger-red' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{exercise.name}</h2>
                    {exercise.notes && (
                      <p className="text-gray-400 mt-1">{exercise.notes}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Séries</p>
                    <p className="text-2xl font-bold">
                      {exercise.completedSets || 0}/{exercise.sets}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400">Repetições</p>
                    <p className="text-lg font-medium">{exercise.reps}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Descanso</p>
                    <p className="text-lg font-medium">{exercise.rest}</p>
                  </div>
                </div>

                {index === currentExercise && !isResting && (
                  <button
                    onClick={() => handleSetComplete(index)}
                    className="w-full bg-stronger-red text-white py-3 rounded font-medium hover:bg-stronger-red-dark transition-colors"
                  >
                    Concluir Série
                  </button>
                )}

                {index === currentExercise && isResting && (
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Tempo de descanso</p>
                    <p className="text-4xl font-bold">{restTime}s</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 