import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J.A.S.C - Portifólio',
  description: 'Portifólio de José Anderson, Desenvolvedor Web Full-Stack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/meu_cv/JA.ico" />
        <link rel="apple-touch-icon" href="/meu_cv/JA.ico" />
        <link rel="shortcut icon" href="/meu_cv/JA.ico" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}