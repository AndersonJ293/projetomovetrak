'use client';
import { UserStorage } from '@/contexts/userContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserStorage>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </UserStorage>
  )
}
