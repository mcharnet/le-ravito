import type { NextApiRequest, NextApiResponse } from 'next'
import { sendContactEmail } from '@/lib/services/email'
import type { ContactFormPayload } from '@/types'

const resendApiKey = process.env.RESEND_API_KEY

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  if (!resendApiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY manquant coté serveur' })
  }

  const { name, email, phone, subject, message } = req.body as ContactFormPayload

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  try {
    const id = await sendContactEmail({ name, email, phone, subject, message })
    return res.status(200).json({ ok: true, id })
  } catch (err) {
    console.error('[api/contact] send error:', err)
    return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' })
  }
}

