'use client'

import { useState } from 'react'
import { Locale, dictionary } from '@/lib/content'

export function ContactForm({ locale }: { locale: Locale }) {
  const t = dictionary[locale]
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        locale,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      setStatus('sent')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <input name="name" required type="text" placeholder={t.formName} className="focus-ring rounded-2xl border border-[#f2dde1] bg-white/90 px-6 py-5 text-ink outline-none" />
      <input name="email" required type="email" placeholder={t.formEmail} className="focus-ring rounded-2xl border border-[#f2dde1] bg-white/90 px-6 py-5 text-ink outline-none" />
      <textarea name="message" required rows={5} placeholder={t.formMessage} className="focus-ring resize-none rounded-2xl border border-[#f2dde1] bg-white/90 px-6 py-5 text-ink outline-none" />
      <button disabled={status === 'sending'} className="rounded-full bg-roseGold py-5 uppercase tracking-widest text-white shadow-xl transition hover:scale-[1.02] disabled:opacity-60">
        {status === 'sending' ? '...' : t.formSend}
      </button>
      {status === 'sent' && <p className="text-sm text-ink">Aitäh! Sõnum on saadetud.</p>}
      {status === 'error' && <p className="text-sm text-ink">Sõnumit ei õnnestunud saata. Palun kirjuta otse e-mailile.</p>}
    </form>
  )
}
