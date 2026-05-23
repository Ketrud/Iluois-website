import { contact } from './content'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Iluõis',
    founder: contact.name,
    email: contact.email,
    telephone: contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.location,
      addressCountry: 'EE',
    },
    areaServed: 'Tallinn',
    url: 'https://iluois.ee',
  }
}
