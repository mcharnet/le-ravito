import { Resend } from 'resend'
import type { ContactFormPayload, ReservationFormPayload, ReservationType } from '@/types'

function getEmailEnv () {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.NOTIFICATIONS_TO_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Le Ravito <onboarding@resend.dev>'
  if (!apiKey) throw new Error('RESEND_API_KEY manquant')
  if (!toEmail) throw new Error('CONTACT_TO_EMAIL ou NOTIFICATIONS_TO_EMAIL manquant')
  return { apiKey, toEmail, fromEmail }
}

export async function sendContactEmail (payload: ContactFormPayload): Promise<string> {
  const { name, email, phone, subject, message } = payload
  const { apiKey, toEmail, fromEmail } = getEmailEnv()

  const resend = new Resend(apiKey)
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system; line-height:1.6;">
      <h2>Nouveau message (Contact)</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
      <p><strong>Sujet:</strong> ${subject}</p>
      <hr />
      <p style="white-space: pre-wrap">${message}</p>
    </div>
  `

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `Contact: ${subject}`,
    reply_to: email,
    html,
    text: `Contact\nNom: ${name}\nEmail: ${email}${phone ? `\nTéléphone: ${phone}` : ''}\nSujet: ${subject}\n\n${message}`
  })
  if (error) {
    const message = (error as unknown as { message?: string; name?: string })?.message
      || (error as unknown as { name?: string })?.name
      || JSON.stringify(error)
    throw new Error(message)
  }
  return data?.id || ''
}

export async function sendReservationEmail (payload: ReservationFormPayload): Promise<string> {
  const { name, email, phone, date, time, guests, type, message, eventId } = payload
  const { apiKey, toEmail, fromEmail } = getEmailEnv()
debugger
  const titleByType: Record<ReservationType, string> = {
    'table': 'Réservation de table',
    'event': 'Inscription événement',
    'click-collect': 'Commande Click & Collect'
  }

  const subject = `${titleByType[type]} - ${name}`
  const resend = new Resend(apiKey)
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system; line-height:1.6;">
      <h2>${titleByType[type]}</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
      ${date ? `<p><strong>Date:</strong> ${date}</p>` : ''}
      ${time ? `<p><strong>Heure:</strong> ${time}</p>` : ''}
      ${typeof guests === 'number' ? `<p><strong>Personnes:</strong> ${guests}</p>` : ''}
      ${eventId ? `<p><strong>Événement:</strong> ${eventId}</p>` : ''}
      ${message ? `<hr /><p style="white-space: pre-wrap">${message}</p>` : ''}
    </div>
  `

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject,
    reply_to: email,
    html,
    text: `Reservation (${titleByType[type]})\nNom: ${name}\nEmail: ${email}${phone ? `\nTéléphone: ${phone}` : ''}${date ? `\nDate: ${date}` : ''}${time ? `\nHeure: ${time}` : ''}${typeof guests === 'number' ? `\nPersonnes: ${guests}` : ''}${eventId ? `\nÉvénement: ${eventId}` : ''}${message ? `\n\n${message}` : ''}`
  })
  if (error) {
    const message = (error as unknown as { message?: string; name?: string })?.message
      || (error as unknown as { name?: string })?.name
      || JSON.stringify(error)
    throw new Error(message)
  }
  return data?.id || ''
}


