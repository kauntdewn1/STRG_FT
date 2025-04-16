import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storageKey: 'stronger-fitness-auth',
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
  global: {
    headers: {
      'X-Client-Info': 'stronger-fitness-web',
    },
  },
})

// Rate limiting configuration
const MAX_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes

export const checkRateLimit = async (email: string) => {
  const { data: attempts } = await supabase
    .from('login_attempts')
    .select('count, last_attempt')
    .eq('email', email)
    .single()

  if (attempts) {
    const timeSinceLastAttempt = Date.now() - new Date(attempts.last_attempt).getTime()
    
    if (attempts.count >= MAX_ATTEMPTS && timeSinceLastAttempt < LOCKOUT_DURATION) {
      throw new Error('Muitas tentativas de login. Tente novamente mais tarde.')
    }
  }
}

export const updateLoginAttempts = async (email: string, success: boolean) => {
  if (success) {
    await supabase
      .from('login_attempts')
      .delete()
      .eq('email', email)
  } else {
    const { data: attempts } = await supabase
      .from('login_attempts')
      .select('count')
      .eq('email', email)
      .single()

    if (attempts) {
      await supabase
        .from('login_attempts')
        .update({
          count: attempts.count + 1,
          last_attempt: new Date().toISOString(),
        })
        .eq('email', email)
    } else {
      await supabase
        .from('login_attempts')
        .insert({
          email,
          count: 1,
          last_attempt: new Date().toISOString(),
        })
    }
  }
}