export const metadata = {
  title: 'Admin Dashboard - NOIR AI Chatbot',
  description: 'Admin dashboard for managing users, tiers, and configuration in the NOIR AI Chatbot system.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
