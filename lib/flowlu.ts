import { supabase } from './supabase'

const FLOWLU_API_KEY = process.env.FLOWLU_API_KEY!
const FLOWLU_DOMAIN = process.env.FLOWLU_DOMAIN!
const FLOWLU_WORKSPACE_ID = process.env.FLOWLU_WORKSPACE_ID!

interface FlowluContact {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  custom_fields: {
    plan_type: string
    start_date: string
    end_date: string
    status: string
  }
}

export async function syncFlowluContacts() {
  try {
    // Buscar contatos do Flowlu
    const response = await fetch(
      `https://${FLOWLU_DOMAIN}/api/v1/module/crm/contact/list?api_key=${FLOWLU_API_KEY}&workspace_id=${FLOWLU_WORKSPACE_ID}`
    )
    const data = await response.json()
    const contacts: FlowluContact[] = data.data

    // Sincronizar com Supabase
    for (const contact of contacts) {
      const { error } = await supabase
        .from('students')
        .upsert({
          flowlu_id: contact.id,
          first_name: contact.first_name,
          last_name: contact.last_name,
          email: contact.email,
          phone: contact.phone,
          plan_type: contact.custom_fields.plan_type,
          start_date: contact.custom_fields.start_date,
          end_date: contact.custom_fields.end_date,
          status: contact.custom_fields.status,
          last_sync: new Date().toISOString(),
        })

      if (error) {
        console.error(`Erro ao sincronizar contato ${contact.email}:`, error)
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Erro na sincronização com Flowlu:', error)
    return { success: false, error }
  }
}

export async function createFlowluContact(studentData: {
  first_name: string
  last_name: string
  email: string
  phone: string
  plan_type: string
  start_date: string
  end_date: string
}) {
  try {
    const response = await fetch(
      `https://${FLOWLU_DOMAIN}/api/v1/module/crm/contact/create?api_key=${FLOWLU_API_KEY}&workspace_id=${FLOWLU_WORKSPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: studentData.first_name,
          last_name: studentData.last_name,
          email: studentData.email,
          phone: studentData.phone,
          custom_fields: {
            plan_type: studentData.plan_type,
            start_date: studentData.start_date,
            end_date: studentData.end_date,
            status: 'active',
          },
        }),
      }
    )

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Erro ao criar contato no Flowlu:', error)
    return { success: false, error }
  }
}

export async function updateFlowluContact(
  flowluId: string,
  studentData: {
    first_name?: string
    last_name?: string
    email?: string
    phone?: string
    plan_type?: string
    start_date?: string
    end_date?: string
    status?: string
  }
) {
  try {
    const response = await fetch(
      `https://${FLOWLU_DOMAIN}/api/v1/module/crm/contact/update?api_key=${FLOWLU_API_KEY}&workspace_id=${FLOWLU_WORKSPACE_ID}&id=${flowluId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      }
    )

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Erro ao atualizar contato no Flowlu:', error)
    return { success: false, error }
  }
} 