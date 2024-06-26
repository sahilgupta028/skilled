"use client"

import Image from 'next/image'
import React from 'react'
import {Button, Chip} from "@nextui-org/react";
import { PhoneCallIcon, StarsIcon } from 'lucide-react';
import { StarIcon } from '@heroicons/react/20/solid';
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Syllabus } from './components/Syallabus';

function DS() {

    const [isVertical, setIsVertical] = React.useState(true);


  return (
    <div>

        <div className='flex flex-col justify-center items-center my-8 bg-gray-100'>

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

        <div className='p-4 bg-gray-100 px-5'>

          <div className='mx-5'>
            <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>
                About The Course
            </h1>
            <p className='bg-blue-100 text-blue-600 p-3 text-2xl font-bold rounded-md'>
                Data Science is a field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It employs techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, domain knowledge, and information science.
            </p>

            <br />
            <p className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>
                Key Highlights Of LJMUs MS In Data Science
            </p>
            
            <h1 className='text-4xl font-bold text-blue-600 font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
                What does this course have to offer?
            </h1>
          </div>
            

            <br />
        <div>
        <div className="flex flex-col px-4">
     
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" isVertical={true} className='text-xl font-body font-bold  text-blue-700 border-2 border-blue-700  p-3 rounded-lg' >
          <Tab key="highlights" title="Key Highlights" className='h-12'>
            <Card>
              <CardBody>
                <div>
                    <ul>
                        <li>Complimentary Python Programming Bootcamp</li>
                        <li>500+ Hours of Learning</li>
                    </ul>
                </div>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="specialisation" title="Specialisation" className=''>
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="assistance" title="Career Assistance">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="oppurtunities" title="Job Opputunities">
            <Card>
                <CardBody>
                    skilled Oppurtunities
                    <ul className='ml-3 p-1 text-blue-700 font-mono'>
                        <li className='flex gap-4'>
                            <StarsIcon/>
                            skilledUp Elevate: Virtual hiring drive giving you the opportunity to interview with upGrads 300+ hiring partners
                        </li>
                        <li>
                            Gain exclusive access to upGrads Job Opportunities portal which has 100+ openings from upGrads hiring partners at any given time.
                        </li>
                        <li>
                            Be the first to know vacancies to gain an edge in the application process
                        </li>
                        <li>
                            Connect with companies that are the best match for you
                        </li>
                    </ul>
                </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <br />

      <div>
        <Syllabus/>
      </div>

      <br />
      <div className='items-start justify-start flex-col flex '>

      <div className='bg-blue-100 text-blue-600 p-3 text-3xl font-bold rounded-md'> 
          <h1>FAQs regardind Data Science Courses</h1>
      </div>
        
        <br />

      <Accordion className='w-1/2'>
      <AccordionItem key="1" aria-label="Accordion 1" title="Question 1" className='hover:bg-blue-300 px-4 rounded-md'>
       <h1>Test</h1> 
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Question 2" className='hover:bg-blue-300 px-4 rounded-md'>
       <h1>Test 2</h1>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Question 3" className='hover:bg-blue-300 px-4 rounded-md'>
        <h1>Test 3</h1>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
        </div>
        </div>

    </div>
  )
}

export default DS