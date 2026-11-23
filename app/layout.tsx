import type { Metadata } from 'next'
import { Inter, Homemade_Apple } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const script = Homemade_Apple({ weight: '400', subsets: ['latin'], variable: '--font-script', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chineanikwe.com'),
  title: 'Chine Anikwe',
  description: 'Chine Anikwe, Staff Software Engineer at Victory Live.',
  icons: { icon: '/favicon.ico', apple: '/ca_logo.png' },
  openGraph: { title: 'Chine Anikwe', url: '/', images: ['/ca_logo.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  )
}
