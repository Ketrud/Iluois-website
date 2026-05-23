import { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/Reveal'
import { Locale, services, dictionary } from '@/lib/content'

const slug = 'jooga'

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const service = services[params.locale].find((item) => item.slug === slug)
  return {
    title: service ? service.title : 'Iluõis',
    description: service ? `${service.excerpt} ${service.keywords}.` : 'Iluõis',
    alternates: {
      canonical: `/${params.locale}/${slug}`,
    },
  }
}

export default function Service({ params }: { params: { locale: Locale } }) {
  const service = services[params.locale].find((item) => item.slug === slug)
  const t = dictionary[params.locale]

  if (!service) return null

  return (
    <PageShell locale={params.locale}>
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <div className="soft-card rounded-organic p-10 md:p-16">
            <p className="mb-6 text-xs uppercase tracking-widest text-roseGoldDeep">Iluõis · {service.keywords}</p>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="luxury-title mb-8 text-6xl leading-tight md:text-7xl">{service.title}</h1>
                <p className="mb-8 max-w-3xl text-xl leading-relaxed text-ink">{service.excerpt}</p>
                <p className="max-w-3xl text-lg leading-relaxed text-ink">{service.body}</p>
              </div>
              <div className="rounded-organic border border-[#f2dde1] bg-white/70 p-8 shadow-xl">
                <p className="mb-6 text-xs uppercase tracking-widest text-roseGoldDeep">
                  {params.locale === 'et' ? 'sobib sulle, kui soovid' : 'suits you if you want'}
                </p>
                <div className="space-y-5">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-4 border-b border-[#ead6d9] pb-4 last:border-none">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-roseGold shadow-md">✦</span>
                      <span className="text-lg text-ink">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <InfoCard title={params.locale === 'et' ? 'Kuidas kohtumine kulgeb' : 'How the session flows'} text={params.locale === 'et' ? 'Alustame lühikese vestlusega, et mõista sinu vajadusi. Seejärel loon rahuliku ja toetava protsessi, mis sobitub sinu hetke seisundiga.' : 'We begin with a short conversation to understand your needs. Then we create a calm and supportive process that fits your current state.'} />
          <InfoCard title={params.locale === 'et' ? 'Atmosfäär' : 'Atmosphere'} text={params.locale === 'et' ? 'Iluõie keskkond on pehme, esteetiline ja rahulik. Eesmärk on, et tunneksid end hoitud, turvaliselt ja vabalt.' : 'The atmosphere is soft, aesthetic and calm, created so you can feel held, safe and free.'} />
          <InfoCard title={params.locale === 'et' ? 'Broneerimine' : 'Booking'} text={params.locale === 'et' ? 'Võta ühendust e-posti või telefoni teel ning leiame sulle sobiva aja ja teenuse.' : 'Get in touch by email or phone and we will find the right time and service for you.'} />
        </div>

        <div className="soft-card mt-12 rounded-organic p-10 text-center">
          <h2 className="rose-heading mb-5 text-4xl">{params.locale === 'et' ? 'Soovid aja broneerida?' : 'Would you like to book?'}</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-ink">{t.contactText}</p>
          <Link href={`/${params.locale}/kontakt`} className="rounded-full bg-roseGold px-8 py-4 text-sm uppercase tracking-widest text-white shadow-xl transition hover:scale-105">
            {params.locale === 'et' ? 'Kontakt' : 'Contact'}
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="soft-card rounded-organic p-8">
      <h2 className="rose-heading mb-4 text-3xl">{title}</h2>
      <p className="leading-relaxed text-ink">{text}</p>
    </div>
  )
}
