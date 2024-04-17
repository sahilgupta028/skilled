import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import cardData from '../data/card.json'


interface CourseCard{
    id: number,
    title: string,
    description: string,
    image: string,
    price: string,
    duration: string,
    instructor: string,
    startDate: Date,
    endDate: Date,
}

function HeroSection() {
            
        const course  = cardData.courses

  return (

    <>
    
    <div className='w-full p-4'>

    
        <div className='w-full bg-blue-400 flex justify-between p-5 '>
        <div className='w-1/4 bg-red-200 h-full p-4 flex flex-col gap-6 mr-1'>
            <h1 className='text-extrabold bg-white text-3xl font-bold  rounded-3xl p-4'>
                Apply Filters
            </h1>
            <div className='block bg-teal-300 p-4 '>
                <li>
                    <ul>
                    <input id="react-checkbox" type="checkbox" value=""
                    className="w-14 h-14 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    
                    </input>
                    </ul>
                    <ul>
                    <div className="flex">
        <input type="checkbox" id="choose-me" className="peer hidden" />
        <label 
                className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                < py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
      Check me </label>
  </div>
                    </ul>
                </li>
            </div>

        </div>
        <Tabs defaultValue="live" className="w-full">
            <TabsList className='w-full p-5 text-start font-extrabold hover:bg-blue-100 text-xl'>
                <TabsTrigger value="all" className=''>
                    <h1 className='font-extrabold text-lg'>All</h1>
                </TabsTrigger>
                <TabsTrigger value="live" className=''>
                    <h1 className='font-extrabold text-lg'>Live</h1>
                </TabsTrigger>
                <TabsTrigger value="upcoming">
                <h1 className='font-extrabold text-lg'>Upcoming</h1>
                </TabsTrigger>
                <TabsTrigger value="bootcamps">
                <h1 className='font-extrabold text-lg'>Bootcamp</h1>
                </TabsTrigger>
                <TabsTrigger value="community">
                <h1 className='font-extrabold text-lg'>Community</h1>
                </TabsTrigger>
            </TabsList>
                <TabsContent value="live">
                </TabsContent>
                <TabsContent value="upcoming">Change your password here.</TabsContent>
                <TabsContent value="bootcamps">Change your email here.</TabsContent>
                <TabsContent value="community">Change your email here.</TabsContent>
        </Tabs>
   
        </div>
    </div>

    <div className="text-center">
    <h3 className="mb-4 font-semibold text-gray-900 dark:text-black">
      Technology</h3>
    <ul
      className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li
        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
          <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
          <label 
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue
            JS</label>
        </div>
      </li>
      <li
        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
        <input id="react-checkbox" type="checkbox" value=""
            className="w-14 h-14 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
          <label
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
        </div>
      </li>
      <li
        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
          <input id="angular-checkbox" type="checkbox" value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
          <label
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
        </div>
      </li>
      <li
        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
          <input id="laravel-checkbox" type="checkbox" value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label 
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
        </div>
      </li>
    </ul>
  </div>

</>
    
    )
}

export default HeroSection