import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karan Singh | Business Analyst Portfolio',
  description: 'Results-driven Functional Business Analyst specializing in financial systems, SaaS delivery, and enterprise transformation.',
  keywords: ['Business Analyst', 'Functional Analysis', 'Project Management', 'Agile', 'Scrum', 'SQL', 'Power BI'],
  authors: [{ name: 'Karan Singh' }],
  openGraph: {
    title: 'Karan Singh | Business Analyst Portfolio',
    description: 'Results-driven Functional Business Analyst with 7+ years of experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
