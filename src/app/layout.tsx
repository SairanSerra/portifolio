import { useThemeStore } from '@/store'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sairan Serra dos Santos',
  description: 'Portifólio de um desenvolvedor full-stack',
}
const { theme } = useThemeStore.getState()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} ${
          theme === 'dark' ? 'bg-dark' : 'bg-white'
        } `}
      >
        {children}
      </body>
    </html>
  )
}
