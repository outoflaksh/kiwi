import './globals.css'
import { Inter } from 'next/font/google'
import BackgroundImg from './BackgroundImg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lakshya Malik',
  description: 'Lakshya is a software engineer and this is his site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundImg />
        {children}
      </body>
    </html>
  )
}
