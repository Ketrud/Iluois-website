'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Locale, nav, dictionary } from '@/lib/content'

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const t = dictionary[locale]
  const otherLocale = locale === 'et' ? 'en' : 'et'

  return (
    <header className="sticky top-0 z-40 border-b border-[#f1d7dc] bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href={`/${locale}`} className="flex items-center gap-4">
          <Image src="/logo.png" alt="Iluõis logo" width={56} height={56} className="object-contain" priority />
          <div>
            <p className="rose-heading text-3xl font-light uppercase tracking-widest">{t.brand}</p>
            <p className="text-xs uppercase tracking-widest text-ink">{t.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-xs font-medium uppercase tracking-widest lg:flex">
          {nav[locale].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-3 text-ink transition hover:bg-[#fff4f2] hover:text-roseGold">
              {item.label}
            </Link>
          ))}
          <Link href={`/${otherLocale}`} className="ml-2 rounded-full border border-[#e8c7cd] px-4 py-3 text-roseGold">
            {otherLocale.toUpperCase()}
          </Link>
        </nav>

        <button
          className="rounded-full border border-[#e8c7cd] px-4 py-3 text-xs uppercase tracking-widest text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menüü
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#f1d7dc] bg-white px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {nav[locale].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-ink hover:bg-[#fff4f2]">
                {item.label}
              </Link>
            ))}
            <Link href={`/${otherLocale}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-roseGold">
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
