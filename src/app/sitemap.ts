import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-static'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://bearly-ai.vercel.app').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/not-found`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]
}
