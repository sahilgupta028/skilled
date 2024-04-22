"use client";

import React from 'react'
import carousel from '../data/carousel.json'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

  


function Alumuni() {

  const carouselData = carousel.carousel

  return (
    <>

    <div className='bg-blue-100  p-4 text-center text-blue-500 font-bold rounded-lg m-2'>
        <h2 className="bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans hover:font-extrabold ">
          Our Alumuni
          </h2>
      </div>

    <div className=' bg-blue-200 flex flex-center '>

    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-screen-lg w-full mx-auto py-5"
    >
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 max-w-screen ">
            <div className="p-1">
              <Card className='rounded-3xl'>
                <CardHeader className='bg-teal-200 w-full text-teal-700 text-center h-3 flex justify-center '>
                  <CardTitle>{item.package}</CardTitle>
                              
                </CardHeader>
                
                <CardContent className="flex flex-col aspect-square items-center justify-center px-1">
                
                <div className='w-2/3 rounded-full overflow-hidden relative group'>
                  
                  <Image
                    src={item.image}
                    alt="Loading Image..."
                    width={200}
                    height={100}
                    className="w-full transition-opacity duration-500 ease-in-out group-hover:opacity-20"
                  />
                  <Link href={item.linkedin} className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                  <Image
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                    alt="Loading Image..."
                    width={50}
                    height={50}
                    />
                  </Link>   
                  </div>              
                  <h1 className='text-md font-bold'>
                    {item.name}
                  </h1>
                  <div className='flex items-center justify-center'>
                    {item.role}
                    &nbsp;@&nbsp;
                    {item.company}
                  </div> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </>
  )
}

export default Alumuni