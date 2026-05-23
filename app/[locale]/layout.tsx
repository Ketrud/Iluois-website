import { Locale, locales } from '@/lib/content'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  if (!locales.includes(params.locale)) notFound()
  return children
}
