// app/providers.tsx
'use client'

import Nav from '@/components/Nav/Navbar'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Nav/>
      {children}
    </NextUIProvider>
  )
}