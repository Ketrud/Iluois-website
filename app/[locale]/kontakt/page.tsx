import { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { ContactForm } from '@/components/ContactForm'
import { Locale, dictionary, contact } from '@/lib/content'

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return {
    title: params.locale === 'et' ? 'Kontakt ja broneerimine' : 'Contact and booking',
    description: params.locale === 'et'
      ? 'Võta ühendust Iluõiega ja broneeri aeg massaaži, teraapia, jooga või hooldusteenuse jaoks.'
      : 'Contact Iluõis and book a time for massage, therapy, yoga or care services.',
    alternates: {
      canonical: `/${params.locale}/kontakt`,
    },
  }
}

export default function Contact({ params }: { params: { locale: Locale } }) {
  const t = dictionary[params.locale]

  return (
    <PageShell locale={params.locale}>
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-14 text-center">
          <p className="mb-5 text-xs uppercase tracking-widest text-roseGoldDeep">
            {params.locale === 'et' ? 'kontakt ja broneerimine' : 'contact and booking'}
          </p>
          <h1 className="luxury-title text-6xl md:text-7xl">
            {params.locale === 'et' ? 'Võta ühendust' : 'Get in touch'}
          </h1>
        </div>

        <div className="soft-card rounded-organic bg-gradient-to-br from-[#fff4f2] via-white to-[#f8f3ff] p-8 md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-5 text-xs uppercase tracking-widest text-roseGoldDeep">
                {params.locale === 'et' ? 'broneerimine' : 'booking'}
              </p>
              <h2 className="rose-heading mb-8 whitespace-pre-line text-5xl leading-tight">
                {t.contactTitle}
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-ink">
                <p>{t.contactText}</p>
                <div className="space-y-2 text-base">
                  <p><strong>{contact.name}</strong></p>
                  <p><a href={`mailto:${contact.email}`} className="transition hover:opacity-70">{contact.email}</a></p>
                  <p><a href="tel:+3725222173" className="transition hover:opacity-70">{contact.phone}</a></p>
                </div>
              </div>
            </div>

            <ContactForm locale={params.locale} />
          </div>
        </div>

        <div className="soft-card mt-10 rounded-organic p-10 text-center">
          <p className="text-lg leading-relaxed text-ink">
            {params.locale === 'et'
              ? 'Asukoht: Tallinn. Täpsem aadress ja kohtumise info kokkuleppel.'
              : 'Location: Tallinn. Exact address and session details by agreement.'}
          </p>
        </div>
      </section>
    </PageShell>
  )
}
