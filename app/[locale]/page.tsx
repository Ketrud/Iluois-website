import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/Reveal'
import { dictionary, Locale, services } from '@/lib/content'

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const isEt = params.locale === 'et'
  return {
    title: isEt ? 'Iluõis | Massaaž, teraapia, jooga ja hooldusteenused Tallinnas' : 'Iluõis | Massage, therapy, yoga and care services in Tallinn',
    description: isEt
      ? 'Iluõis ühendab massaaži, teraapia, jooga ja hooldusteenused pehmeks ning toetavaks tervikuks Tallinnas.'
      : 'Iluõis brings together massage, therapy, yoga and care services in Tallinn.',
    alternates: {
      canonical: `/${params.locale}`,
      languages: { et: '/et', en: '/en' },
    },
  }
}

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = dictionary[params.locale]
  const items = services[params.locale]

  return (
    <PageShell locale={params.locale}>
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-widest text-ink">{t.heroKicker}</p>
          <h1 className="luxury-title mb-8 whitespace-pre-line text-6xl leading-none tracking-tight md:text-8xl">
            {t.heroTitle}
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-ink">{t.heroText}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/${params.locale}/kontakt`} className="rounded-full bg-roseGold px-8 py-4 text-sm uppercase tracking-widest text-white shadow-xl transition hover:scale-105">
              {t.book}
            </Link>
            <Link href={`/${params.locale}/massaz`} className="rounded-full border border-[#e8c7cd] bg-white px-8 py-4 text-sm uppercase tracking-widest text-roseGoldDeep transition hover:bg-violet-50">
              {t.readMore}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-96 w-96 animate-pulse rounded-full border border-violet-200" />
            <div className="absolute h-full w-full max-w-lg rounded-full border border-blue-100" />
            <div className="soft-card relative rounded-organic p-10">
              <Image src="/logo.png" alt="Iluõis logo" width={320} height={320} priority className="object-contain" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#fffafa] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-roseGold">{t.services}</p>
                <h2 className="rose-heading text-5xl">{t.servicesTitle}</h2>
              </div>
              <p className="max-w-lg leading-relaxed text-ink">{t.servicesText}</p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {items.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <Link href={`/${params.locale}/${service.slug}`} className="soft-card group block h-full rounded-organic p-8 transition hover:-translate-y-2">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8c7cd] bg-white text-xl text-roseGold">
                    ✦
                  </div>
                  <h3 className="rose-heading mb-4 text-3xl">{service.title}</h3>
                  <p className="mb-8 leading-relaxed text-ink">{service.excerpt}</p>
                  <span className="text-xs uppercase tracking-widest text-roseGoldDeep">{t.readMore} →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-widest text-roseGoldDeep">{t.why}</p>
            <h2 className="rose-heading mb-10 whitespace-pre-line text-5xl leading-tight md:text-6xl">
              {t.whyTitle}
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-ink">
              <p>{t.whyText1}</p>
              <p>{t.whyText2}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="soft-card rounded-organic p-10">
              {['Individuaalne lähenemine', 'Rahulik ja esteetiline keskkond', '20+ aastat kogemust', 'Keha ja meele tasakaal'].map((item) => (
                <div key={item} className="flex items-center gap-5 border-b border-[#ead6d9] py-5 last:border-none">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roseGold text-white">✦</span>
                  <p className="text-lg text-ink">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28 text-center md:px-10">
        <Reveal>
          <blockquote className="luxury-title mx-auto max-w-4xl whitespace-pre-line text-4xl leading-tight md:text-6xl">
            {t.quote}
          </blockquote>
        </Reveal>
      </section>
    </PageShell>
  )
}
