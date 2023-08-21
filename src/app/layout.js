import Footer from './Components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Google Clone Next js 13</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Google clone created by Next js 13" />
        <link rel="icon" href="/google.svg" />
      </head>
      <body className='relative min-h-screen'>{children}<Footer /></body>
      
    </html>
  )
}
