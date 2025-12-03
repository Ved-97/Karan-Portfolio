import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karan Singh | Business Analyst & Data Analyst Portfolio',
  description: 'Functional Business Analyst & Data Analyst with 7+ years of experience in financial systems, SaaS solutions, and digital transformation. Specializing in requirements analysis, SQL-based insights, EDA, and data visualization.',
  keywords: ['Business Analyst', 'Data Analyst', 'Functional Analysis', 'Python', 'Pandas', 'SQL', 'Power BI', 'Tableau', 'EDA', 'Data Visualization', 'Agile', 'Scrum', 'JIRA', 'Azure DevOps'],
  authors: [{ name: 'Karan Singh' }],
  openGraph: {
    title: 'Karan Singh | Business Analyst & Data Analyst Portfolio',
    description: 'Functional Business Analyst & Data Analyst with 7+ years of experience specializing in data-driven insights and business transformation',
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
