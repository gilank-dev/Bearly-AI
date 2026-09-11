import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/api/', '/_next/static/', '/.next/'],
    },
    sitemap: 'https://bearly-ai.vercel.app/sitemap.xml',
  }
}