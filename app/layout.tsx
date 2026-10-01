import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const rmbBody = DM_Sans({ subsets: ['latin'], variable: '--font-rmb-body' })
const rmbDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-rmb-display' })

export const metadata: Metadata = {
  metadataBase: new URL('https://ramenbet16casino.vercel.app/'),
  title: 'RamenBet — казино, зеркало и официальный сайт для быстрой игры',
  description: 'RamenBet: понятный гид по казино, официальному сайту и рабочему зеркалу. Узнайте, как проверить адрес, быстро открыть игры и соблюдать безопасный формат развлечений без лишней путаницы.',
  generator: 'RamenBet editorial landing',
  alternates: { canonical: 'https://ramenbet16casino.vercel.app/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'RamenBet — понятный маршрут игрока', description: 'Короткий гид по RamenBet, официальному сайту и рабочему зеркалу.', url: 'https://ramenbet16casino.vercel.app/', siteName: 'RamenBet', locale: 'ru_RU', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'RamenBet — понятный маршрут игрока', description: 'Гид по RamenBet без лишнего шума.' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
}

export const viewport: Viewport = { themeColor: '#111313', colorScheme: 'dark', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${rmbBody.variable} ${rmbDisplay.variable}`}>
      <head />
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
