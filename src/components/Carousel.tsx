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

  


function Carousel1() {

  const carouselData = carousel.carousel

  return (
    <>
    <div className='w-full pt-2 p-5 m-7 bg-blue-200 flex flex-center '>

    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-4 pt-4 pb-4"
    >
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='rounded-3xl'>
                <CardHeader className='bg-teal-200 w-full text-teal-700 text-center h-5 flex justify-center '>
                  <CardTitle>{item.package}</CardTitle>
                              
                </CardHeader>
                
                <CardContent className="flex flex-col aspect-square items-center justify-center px-1">
                <div className='flex items-center justify-center'>
                    {item.role}
                    &nbsp;@&nbsp;
                    {item.company}
                  </div> 
                <div className='w-2/3 rounded-full overflow-hidden relative group'>
                  
                  <Image
                    src={item.image}
                    alt="Loading Image..."
                    width={400}
                    height={200}
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

                  <h1 className='text-2xl font-bold'>
                    {item.name}
                    </h1>
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

export default Carousel1