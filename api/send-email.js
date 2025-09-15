import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    // Debug: Log the request
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)
    console.log('Request body:', req.body)

    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, message: !!message })
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Basic email sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    // Check if API key is set; in local/dev, allow simulated success to avoid blocking tests
    const isLocalDev = process.env.VERCEL_ENV === 'development' || process.env.NODE_ENV !== 'production'
    if (!process.env.RESEND_API_KEY) {
      if (isLocalDev) {
        console.warn('RESEND_API_KEY missing in dev; simulating email send')
        return res.status(200).json({ ok: true, simulated: true })
      }
      console.error('RESEND_API_KEY is not set')
      return res.status(500).json({ error: 'Email service not configured' })
    }

    const toAddress = 'guadacervera8@gmail.com'
    const subject = `New portfolio message from ${name}`
    const text = `New message from your portfolio contact form:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `\nMessage:\n${message}\n`

    // Use a safe default sender from Resend
    const fromAddress = 'Portfolio <onboarding@resend.dev>'

    console.log('Sending email to:', toAddress)
    console.log('From:', fromAddress)

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject,
      text,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ 
        error: error.message || 'Failed to send email',
        details: error 
      })
    }

    console.log('Email sent successfully:', data?.id)
    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ 
      error: 'Unexpected error',
      details: err.message 
    })
  }
}
