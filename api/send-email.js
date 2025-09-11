import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Basic email sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    const toAddress = 'guadacervera8@gmail.com'

    const subject = `New portfolio message from ${name}`

    const text = `New message from your portfolio contact form:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `\nMessage:\n${message}\n`

    // Use a safe default sender from Resend. For best deliverability, set up a verified domain and use it here.
    const fromAddress = 'Portfolio <onboarding@resend.dev>'

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject,
      text,
    })

    if (error) {
      return res.status(500).json({ error: error.message || 'Failed to send email' })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
