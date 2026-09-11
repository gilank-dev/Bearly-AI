import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bearly-ai.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NOIR - AI Chatbot',
    template: '%s | NOIR - AI Chatbot',
  },
  description: 'Premium AI Chatbot with monochrome elegance and multi-model support.',
  keywords: ['AI Chatbot', 'NOIR', 'OpenRouter', 'GPT-3.5', 'Llama 3', 'Qwen', 'AI Assistant'],
  authors: [{ name: 'NOIR Team' }],
  creator: 'NOIR Team',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NOIR - AI Chatbot',
    description: 'Premium AI Chatbot with monochrome elegance and multi-model support.',
    url: siteUrl,
    siteName: 'NOIR AI Chatbot',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'NOIR - AI Chatbot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOIR - AI Chatbot',
    description: 'Premium AI Chatbot with monochrome elegance and multi-model support.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NOIR - AI Chatbot',
    operatingSystem: 'Web',
    applicationCategory: 'MultimediaApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Premium AI Chatbot playground powered by OpenRouter with multi-model support, real-time streaming, and monochrome design.',
    url: siteUrl,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NOIR - AI Chatbot',
    url: siteUrl,
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
