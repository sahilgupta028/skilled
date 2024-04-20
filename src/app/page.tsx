"use client";

import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Nav/Navbar';
import Navbar2 from '@/components/Nav/Navbar2';
import Filter from '@/components/Search';
import SignIn from '@/components/auth/SignIn'
import { Image } from 'lucide-react';
import React from 'react'
import { courses } from '../data/test.json'; 


function Home() {
  return (
    <>
    {/* <Navbar2/> */}
    {/* <SignIn/> */}
    {/* <Payment/> */}



    <Filter data={courses}/>
  
    
    {/* <HeroSection/> */}
    </>
  )
}

export default Home