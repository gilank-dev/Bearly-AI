import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Bearly AI | Premium AI Chatbot'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            backgroundColor: '#161616',
            border: '1px solid #27272A',
            marginBottom: '24px',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 12 }}>Bearly AI</div>
        <div style={{ fontSize: 24, color: '#A1A1AA', maxWidth: 600, textAlign: 'center' }}>
          Premium AI Chatbot with monochrome elegance
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
