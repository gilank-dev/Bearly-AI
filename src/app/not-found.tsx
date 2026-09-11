import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found - Bearly AI',
  description: 'The page you are looking for does not exist. Return to the Bearly AI homepage to start a conversation.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#161616] border border-[#1A1A1A] flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 14l6-6m-6 6l6-6" />
          </svg>
        </div>
        <h1 className="text-4xl font-medium text-white mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
