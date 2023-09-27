import './globals.css'
import { Inter } from 'next/font/google'
//context provider
import { SearchContextProvider } from "./context/search"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prolog 7',
  description: 'Powered By Next.js',
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </SearchContextProvider>
  )
}
