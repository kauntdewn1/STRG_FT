import { supabase } from './supabase'

export interface Workout {
  id: string
  user_id: string
  name: string
  exercises: {
    name: string
    sets: number
    reps: string
    rest: string
    notes?: string
  }[]
  created_at: string
}

export interface WorkoutFeedback {
  id: string
  workout_id: string
  user_id: string
  rating: number
  difficulty: number
  comments: string
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  weight: number
  body_fat?: number
  measurements?: {
    chest?: number
    waist?: number
    hips?: number
    arms?: number
    thighs?: number
  }
  created_at: string
}

export async function saveWorkout(workout: Omit<Workout, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('workouts')
    .insert([workout])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getWorkoutHistory(userId: string) {
  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function saveWorkoutFeedback(feedback: Omit<WorkoutFeedback, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('workout_feedback')
    .insert([feedback])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function saveUserProgress(progress: Omit<UserProgress, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('user_progress')
    .insert([progress])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserProgress(userId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
} 