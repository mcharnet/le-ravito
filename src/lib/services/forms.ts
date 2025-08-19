import type { ContactFormPayload, ReservationFormPayload } from '@/types'

export async function postContact (payload: ContactFormPayload): Promise<void> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error || 'Échec de l\'envoi du message')
  }
}

export async function postReservation (payload: ReservationFormPayload): Promise<void> {
  const res = await fetch('/api/reservation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data?.error || 'Échec de l\'envoi de la demande')
  }
}


