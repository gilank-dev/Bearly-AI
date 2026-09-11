export const metadata = {
  title: 'Admin Dashboard - Bearly AI',
  description: 'Admin dashboard for managing users, tiers, and configuration in the Bearly AI system.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
