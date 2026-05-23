import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const name = String(data.name || '').trim()
    const email = String(data.email || '').trim()
    const message = String(data.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO || 'ketrudtyhane@gmail.com'

    if (!host || !user || !pass) {
      console.log('Contact form submission:', { name, email, message })
      return NextResponse.json({ ok: true, mode: 'logged' })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `"Iluõis veebileht" <${user}>`,
      to,
      replyTo: email,
      subject: `Uus päring veebilehelt: ${name}`,
      text: `Nimi: ${name}\nE-mail: ${email}\n\nSõnum:\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
