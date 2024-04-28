import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import React, {useState, useEffect} from 'react'
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import AppBar from './AppBar';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})



function Home() {

  

  return (
   <main className='flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  h-full'>
     {/* <div className='space-y-6 text-center'>
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
         skilledUp
      </h1>
      <p className='text-white text-lg'>Sign in or Login Here</p>

      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign In
        </Button>
      </LoginButton>
     </div> */}

     <AppBar/>
   </main>
  )
}

export default Home