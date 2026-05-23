'use client'

import { useEffect, useState } from 'react'
import { dictionary, Locale } from '@/lib/content'

export function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)
  const t = dictionary[locale]

  useEffect(() => {
    const consent = window.localStorage.getItem('iluois-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function choose(value: 'accepted' | 'declined') {
    window.localStorage.setItem('iluois-cookie-consent', value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 mx-auto max-w-3xl rounded-3xl border border-[#f2dde1] bg-white/95 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-ink">{t.gdprText}</p>
        <div className="flex gap-3">
          <button
            onClick={() => choose('declined')}
            className="rounded-full border border-[#e8c7cd] px-5 py-3 text-xs uppercase tracking-widest text-ink"
          >
            {t.decline}
          </button>
          <button
            onClick={() => choose('accepted')}
            className="rounded-full bg-roseGold px-5 py-3 text-xs uppercase tracking-widest text-white"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
