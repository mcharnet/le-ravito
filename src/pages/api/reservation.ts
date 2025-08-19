import type { NextApiRequest, NextApiResponse } from 'next'
import { sendReservationEmail } from '@/lib/services/email'
import type { ReservationFormPayload } from '@/types'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY manquant coté serveur' })
  }

  const payload = req.body as ReservationFormPayload
  const { name, email, phone, date, time, guests, type, message, eventId } = payload

  if (!name || !email || !type) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  if ((type === 'table' || type === 'click-collect') && (!date || !time)) {
    return res.status(400).json({ error: 'Date et heure requises' })
  }
  if (type === 'event' && !eventId) {
    return res.status(400).json({ error: 'Événement requis' })
  }

  try {
    const id = await sendReservationEmail({ name, email, phone, date, time, guests, type, message, eventId })
    return res.status(200).json({ ok: true, id })
  } catch (err) {
    console.error('[api/reservation] send error:', err)
    return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' })
  }
}

