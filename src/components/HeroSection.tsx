import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {Button } from "./ui/button"
import { courses } from '../data/test.json';
import {ChevronDownIcon} from '@heroicons/react/20/solid'

function HeroSection() {

    return (
    <div>
      <div className='bg-blue-100 flex flex-col justify-center items-center'>

        <div className='flex justify-around m-5 bg-hero-pattern over bg-white rounded-3xl '>

        <div className="justify-center rounded-l-3xl bg-white p-7 ">
        <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans'>
            Skilled Bano skilledUp se
        </h1>
        <br />
        <p className=' pl-1 p-6 from-accent-foreground font-bold '>
          SkilledUp offers a range of classes designed to help you learn 
          <br />
          new skills at your own pace. Get access to expert instruction and
           community support.
        </p>

        <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold'>Step for your Career</h1>

        <div className='mt-3 flex flex-col gap-8 w-1/2'>
      
          <select className='border-2 border-blue-500 p-2 rounded-lg text-blue-600'>
          
            <option className='  text-blue-600'>
              Select Goal 
              </option>
            <option>
              Data Scientist
            </option>
            <option>ML Engineer</option>
            <option>Full Stack Developer</option>
            <option>Web Developer</option>
            <option>App Developer</option>
          </select>
        
          <select className='border-2 border-blue-600 p-2  text-blue-600 rounded-lg'>
            <option>
            Select Qualification
            </option>
            <option>Working Professional</option>
            <option>Post-Graduate</option>
            <option>Graduate</option>
            <option>Undergraduate</option>
            <option>Senior Secondary or Below</option>
          </select>
        </div>

        <div className='mt-6 gap-6 flex justify-start items-center'>
          <Button className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 w-1/4'>
            Get Started
          </Button>
          <p>or</p>
          <Button className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 w-1/4'>
            Explore Courses
          </Button>
        </div>

      
      </div>    


        <Image
          src="/front.jpeg"
          alt='Loading image'
          width={570}
          height={300}
          className='rounded-3xl bg-clip-border '
        />
        
        </div>
        <div className='items-center justify-center flex bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-red-500 to-90% p-1 w-5/6 rounded-3xl mb-3'>
          <div className='rounded-3xl bg-white shadow-lg h-40  flex gap-11 w-full justify-center items-center'>
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  50+ Courses
                </h1> |
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  8000+ Learners
                </h1>  |
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  1000+ Certified
                </h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection