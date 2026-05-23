import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://iluois.ee'),
  title: {
    default: 'Iluõis | Massaaž, teraapia, jooga ja hooldusteenused Tallinnas',
    template: '%s | Iluõis',
  },
  description:
    'Iluõis ühendab massaaži, teraapia, jooga ja hooldusteenused pehmeks ning toetavaks tervikuks Tallinnas.',
  keywords: [
    'massaaž Tallinnas',
    'teraapia Tallinn',
    'jooga Tallinnas',
    'hooldusteenused',
    'holistiline heaolu',
    'lõõgastus',
    'taastumine',
  ],
  openGraph: {
    title: 'Iluõis',
    description: 'Massaaž, teraapia, jooga ja hooldusteenused Tallinnas.',
    type: 'website',
    locale: 'et_EE',
    siteName: 'Iluõis',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  )
}
