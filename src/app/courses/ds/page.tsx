import Image from 'next/image'
import React from 'react'
import {Button, Chip} from "@nextui-org/react";
import { PhoneCallIcon } from 'lucide-react';
import { StarIcon } from '@heroicons/react/20/solid';


function DS() {
  return (
    <div>

        <div className='flex flex-col justify-center items-center mt-8 '>

        <div className='flex justify-around bg-blue-100 max-w-0.7 max-w-6xl rounded-2xl min-h-[400px]'>

            <div className='flex-col items-center justify-around p-8'>

                <Chip color="primary" className='bg-gradient-to-r from-sky-500 via-blue-500  to-red-500  p-3'>BestSeller</Chip>

                <br />

                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans'>
                    Data Sciene GURU 2.0
                </h1>
                <br />
                <br />
                <p className='bgired-100 max-w-fit '>
                Join us as we take you on an exhilarating journey into the dynamic world of Digital Marketing with our comprehensive Beginners Certification Course, infused with the power of Artificial Intelligence (AI). Designed specifically for Beginners, Freshers and working professionals with less than two years of experience in entry-level digital marketing roles, this course is your passport to unlocking your potential in the digital marketing landscape and becoming industry-ready.
                </p>
                <br />

                <div className='flex bg-blue-200 justify-between p-4 rounded-lg'>
                    <div>
                        <p>Type</p>
                        <h3 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>Degree</h3>
                    </div>
                    <div>
                        <p>Start Date</p>
                        <h3 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>30 April 2024</h3>
                    </div>
                    <div>
                        <p>Duration</p>
                        <h3 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>6 months</h3>
                    </div>
                </div>
                <br />
                <div className='flex justify-center gap-8'>
                    <Button className='border-2 border-blue-700 rounded-lg p-2 hover:bg-blue-500 hover:text-white'>
                        Download Syllabus
                    </Button>
                    <Button className='bg-blue-600 text-white font-bold rounded-lg p-2 min-w-44'>
                        Enroll Now
                    </Button>
                </div>


            <br />
            <div className='ml-3 text-sm text-blue-700 gap-4 flex-col flex ' >
                <p className='text-sm flex gap-3'>
                    <StarIcon className='w-4'/>
                    Hurry! 327 people have already applied in the last 1 month
                </p>
                <p className='flex gap-3'>
                    <PhoneCallIcon size={16} />
                    For enquiries call: 1800 210 2020
                </p>
            </div>
               
            </div>
            <div className='flex justify-center '>
                <Image
                src="/front.jpeg"
                alt='Loading image'
                width={700}
                height={600}
                className='rounded-3xl bg-clip-border min-w-[500px] min-h-[400px]'
                ></Image>
            </div>

        </div>

        </div>

    </div>
  )
}

export default DS