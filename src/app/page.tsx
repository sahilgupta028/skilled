"use client";

import HeroSection from '@/components/HeroSection';
import Navbar2 from '@/components/Nav/Navbar2';
import Filter from '@/components/Search';
import SignIn from '@/components/auth/SignIn'
import { Image } from 'lucide-react';
import React from 'react'
import { courses } from '../data/test.json'; 
import Mentor from '@/components/Mentor';
import Footer from '@/components/Footer';
import Carousel1 from '@/components/Carousel';
import { Carousel } from '@/components/ui/carousel';
import Navbar from '@/components/Nav/Navbar2';


function Home() {
  return (
    <>
    {/* <Navbar2/> */}
    {/* <SignIn/> */}
    {/* <Payment/> */}

    {/* <Navbar/> */}
    <HeroSection/>

    <Filter data={courses}/>
  
  <Carousel1/>
  <Mentor/>
  <Footer/>

  
    
    
    </>
  )
}

export default Home