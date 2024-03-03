import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BioNFix Prime | UTPrimers',
  description:
    'Projeto BioNFix Prime, bactéria para fixação mais eficiente de nitrogênio UTPrimers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body style={inter.style} className="bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
