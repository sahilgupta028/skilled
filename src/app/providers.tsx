// app/providers.tsx
'use client'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav/Navbar'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Nav/>
      {children}
      <Footer/>
    </NextUIProvider>
  )
}