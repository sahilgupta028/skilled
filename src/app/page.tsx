
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

import HeroSection from '@/components/HeroSection';
import Filter from '@/components/Search';
import React, {useState, useEffect} from 'react'
import { courses } from '../data/test.json'; 
import Mentor from '@/components/Mentor';
import Footer from '@/components/Footer';
import Partners from '@/components/Partener';
import Alumuni from '@/components/Carousel';
import { Dropdown } from '@nextui-org/dropdown';
import App from '@/components/Dropdown';
import Nav from '@/components/Nav/Navbar';
import Test from '@/components/Test';
import Scroll from '@/components/Test';
import AppBar from './AppBar';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})



function Home() {

  return (
   <main className='flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  h-full'>
     <div className='space-y-6 text-center'>
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
         skilledUp
      </h1>
      <p className='text-white text-lg'>Sign in or Login Here</p>

      <LoginButton>
        <Button variant="secondary" size="lg">
          Sign In
        </Button>
      </LoginButton>
     </div>
   </main>
  )
}

export default Home