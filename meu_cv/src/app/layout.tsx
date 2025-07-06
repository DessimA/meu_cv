import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'José Anderson - Desenvolvedor Júnior | Portfolio',
  description: 'Portfolio profissional de José Anderson da Silva Costa, Desenvolvedor Júnior especializado em Backend (Java) e Frontend (ReactJS). Recém-graduado em Sistemas de Informação pelo IFCE.',
  keywords: [
    'José Anderson',
    'Desenvolvedor Júnior',
    'Java',
    'ReactJS',
    'Spring Boot',
    'Backend',
    'Frontend',
    'Sistemas de Informação',
    'IFCE',
    'Ceará',
    'Portfolio',
    'Desenvolvedor Web'
  ],
  authors: [{ name: 'José Anderson da Silva Costa' }],
  creator: 'José Anderson da Silva Costa',
  publisher: 'José Anderson da Silva Costa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://joseanderson.dev',
    title: 'José Anderson - Desenvolvedor Júnior | Portfolio',
    description: 'Portfolio profissional de José Anderson da Silva Costa, Desenvolvedor Júnior especializado em Backend (Java) e Frontend (ReactJS).',
    siteName: 'José Anderson - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Anderson - Desenvolvedor Júnior | Portfolio',
    description: 'Portfolio profissional de José Anderson da Silva Costa, Desenvolvedor Júnior especializado em Backend (Java) e Frontend (ReactJS).',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

