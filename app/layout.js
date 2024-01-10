import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme', // a default is required when creating a template
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />  
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
