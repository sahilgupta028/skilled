"use client";

import HeroSection from '@/components/HeroSection';
import Navbar2 from '@/components/Nav/Navbar2';
import Filter from '@/components/Search';
import SignIn from '@/components/auth/SignIn'
import React from 'react'
import { courses } from '../data/test.json'; 
import Mentor from '@/components/Mentor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Nav/Navbar2';
import Image from 'next/image';
import Partners from '@/components/Partener';
import Alumuni from '@/components/Carousel';
import { Dropdown } from '@nextui-org/dropdown';
import App from '@/components/Dropdown';


function Home() {
  return (
    <>
    
      <App/>
      <HeroSection/>
      <Filter data={courses}/>
      <Partners/>
      <Alumuni/>
      <Mentor/>
      <Footer/>  
    </>
  )
}

export default Home