import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from './CookieBanner'
import { Locale } from '@/lib/content'

export function PageShell({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="ambient-orb absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-200" />
        <div className="ambient-orb absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100" />
        <div className="ambient-orb absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-100" />
      </div>
      <Header locale={locale} />
      <main className="relative z-10">{children}</main>
      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </div>
  )
}
