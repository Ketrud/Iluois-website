import Link from 'next/link'
import { contact, Locale, nav } from '@/lib/content'

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="relative z-10 border-t border-[#f1d7dc] px-6 py-10 text-sm uppercase tracking-widest md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="text-roseGold">Iluõis · {contact.location}</p>
          <p className="mt-2 normal-case tracking-normal text-ink">{contact.name}</p>
          <p className="normal-case tracking-normal text-ink">{contact.email}</p>
          <p className="normal-case tracking-normal text-ink">{contact.phone}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {nav[locale].map((item) => (
            <Link key={item.href} href={item.href} className="text-roseGold transition hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
