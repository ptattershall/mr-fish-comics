"use client"
import '/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ThemeProvider} from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mr. Fish Comics',
  description: 'Mr. Fish Comics, the best in indie comics!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='min-h-screen'>
            <Navbar />
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
