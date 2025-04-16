const BOTPRESS_API_URL = process.env.NEXT_PUBLIC_BOTPRESS_API_URL!
const BOTPRESS_API_KEY = process.env.NEXT_PUBLIC_BOTPRESS_API_KEY!

interface WorkoutRequest {
  userId: string
  fitnessLevel: string
  goals: string[]
  availableEquipment: string[]
  previousWorkouts?: any[]
}

interface WorkoutResponse {
  name: string
  exercises: {
    name: string
    sets: number
    reps: string
    rest: string
    notes?: string
  }[]
}

export async function generateWorkout(request: WorkoutRequest): Promise<WorkoutResponse> {
  try {
    const response = await fetch(`${BOTPRESS_API_URL}/api/v1/bots/stronger-fitness/converse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BOTPRESS_API_KEY}`,
      },
      body: JSON.stringify({
        type: 'text',
        text: JSON.stringify(request),
        metadata: {
          userId: request.userId,
        },
      }),
    })

    if (!response.ok) {
      throw new Error('Erro ao gerar treino')
    }

    const data = await response.json()
    return JSON.parse(data.responses[0].text)
  } catch (error) {
    console.error('Erro ao gerar treino:', error)
    throw error
  }
} 