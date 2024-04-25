"use client";

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

import { Button } from '@nextui-org/react';
import Nav from '@/components/Nav/Navbar';
import Test from '@/components/Test';
import Scroll from '@/components/Test';




function Home() {
  const [isTabSticky, setIsTabSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const navbarHeight = document.getElementById('navbar')?.clientHeight || 0;
        const tabbarHeight = document.getElementById('tabbar')?.clientHeight || 0;
        const scrollY = window.scrollY;

        // Determine if the Tab should become sticky
        setIsTabSticky(scrollY >= navbarHeight);
    };
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

    
     
      <HeroSection/>
      <Filter data={courses}/>
      <Partners/>
      <div className='sticky top-24 bg-yellow-300 p-5 w-full'>
        <h1>This is a Sticky Elemement</h1>
      </div>
      <Alumuni/>
      <Mentor/>

     <Test/>
     <Scroll/> 
    </>
  )
}

export default Home