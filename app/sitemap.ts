import type { MetadataRoute } from 'next'

const baseUrl = 'https://iluois.ee'
const routes = ['', '/massaz', '/teraapia', '/jooga', '/hooldusteenused', '/kontakt']

export default function sitemap(): MetadataRoute.Sitemap {
  return ['et', 'en'].flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
}
