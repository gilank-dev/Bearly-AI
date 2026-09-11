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
    default: 'Bearly AI — Asisten AI Percakapan',
    template: '%s | Bearly AI',
  },
  description: 'Bearly AI: asisten percakapan AI eksperimental dengan dukungan multi-model. Proyek belajar dan eksplorasi, bukan layanan komersial.',
  keywords: ['AI Chatbot', 'Bearly AI', 'OpenRouter', 'Llama 3', 'Qwen', 'AI Assistant', 'proyek belajar'],
  authors: [{ name: 'Gilank (Lankdev)' }],
  creator: 'Gilank (Lankdev)',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bearly AI — Asisten AI Percakapan',
    description: 'Asisten percakapan AI eksperimental dengan dukungan multi-model. Proyek belajar oleh Gilank (Lankdev).',
    url: siteUrl,
    siteName: 'Bearly AI',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Bearly AI — Asisten AI Percakapan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bearly AI — Asisten AI Percakapan',
    description: 'Asisten percakapan AI eksperimental dengan dukungan multi-model. Proyek belajar oleh Gilank (Lankdev).',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
