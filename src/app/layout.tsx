
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

import { IsOpenProvider } from '@/Context/store'

import Notification from '@/components/Notification'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Footer'
import Sidbar from '@/components/Sidbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NuciShop',
  description: 'Cloths',
  icons: 'IconImage/NinaIcon.svg'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
 
  
  return (
    <html lang="en">
     
      <body className={`${montserrat.className} bg-black` }>  
      <main className=' px-4 md:px-6 lg:px-16'>
        {/* <Notification/> */}
        <IsOpenProvider>
            <Navbar/>
            <Sidbar />
            {children}
            <Footer/>
        </IsOpenProvider>
       
      </main>
        
      </body>
    </html>
  )
}
