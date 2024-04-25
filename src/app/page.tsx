"use client";

import HeroSection from '@/components/HeroSection';

import Filter from '@/components/Search';
import React from 'react'
import { courses } from '../data/test.json'; 
import Mentor from '@/components/Mentor';
import Footer from '@/components/Footer';
import Partners from '@/components/Partener';
import Alumuni from '@/components/Carousel';
import { Dropdown } from '@nextui-org/dropdown';
import App from '@/components/Dropdown';

import { Button } from '@nextui-org/react';
import Nav from '@/components/Nav/Navbar';
import Test from '@/components/Test';
import Scroll from '@/components/Test';




function Home() {
  return (
    <>

     
      <HeroSection/>
      <Filter data={courses}/>
      <Partners/>
      
      <Alumuni/>
      <Mentor/>

     
     {/* <Scroll/>  for testing */} 
    </>
  )
}

export default Home