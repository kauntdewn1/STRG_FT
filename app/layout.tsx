import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stronger Fitness - Centro de Treinamento de Alta Performance',
  description: 'O MAIOR Centro de Treinamento de Alta Performance do Estado de Goiás!',
  keywords: ['academia', 'treinamento', 'alta performance', 'Goiás', 'fitness'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white">
        <Navigation />
        <main className="min-h-screen animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 