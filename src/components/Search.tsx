"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import courses2 from '../data/test.json';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

interface Course {
  id: number;
  name: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  rating: number;
  startDate: string;
  endDate: string;
  category: string[];
  image: string;
  link: string;
}

const courses1 = courses2.courses

const allCategories = [...new Set(courses1.flatMap(course => course.category))]; // Get unique categories

const TabFilter:  React.FC<{ courses: Course[] }> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses1);
  const [selectedTab, setSelectedTab] = useState<string>('all'); // Initial selected tab
  const [activeTab, setActiveTab] = useState<string>('All'); 

  const filteredCourses1 = courses.filter((course) => {
    if (activeTab === 'Live') {
      return new Date(course.startDate) <= new Date() && new Date(course.endDate) >= new Date();
    } else if (activeTab === 'Upcoming') {
      return new Date(course.startDate) > new Date();
    } else if (activeTab === 'Recorded') {
      return new Date(course.endDate) < new Date();
    }
    return true; // Show all courses for 'All' tab
  });


  useEffect(() => {
    const filterCourses = () => {
      if (selectedCategory) {
        setFilteredCourses(
          courses1.filter(course => course.category.includes(selectedCategory))
        );
      } else {
        setFilteredCourses(courses1); // Show all courses if no category is selected
      }
    };

    filterCourses();
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-full bg-blue-600 p-1 flex flex-col'>
    <div className='flex flex-row items-center justify-start gap-2 bg-blue-500 text-white text-center font-bold text-2xl p-4'>
        <h1 className='text-4xl font-serif'>
          Apply  <br /> Filters
        </h1>
     
    </div>
    <div className="tab-filter bg-blue-100 flex flex-row items-top justify-between  p-7 pt-1 text-center font-extrabold text-xl">
      <ul className='flex flex-col items-center justify-start'>
        <li key="all" className={!selectedCategory ? 'active' : ''}>
        
          <button onClick={() => handleCategoryClick("")} className='bg-blue-300  hover:bg-blue-500  rounded-2xl w-[220px] p-2 m-1'>
                All
          </button>
        </li>
        {
        allCategories.map(category => (
          <li key={category} className={selectedCategory === category ? 'active' : ''}>
            <button onClick={() => handleCategoryClick(category)} className='bg-blue-300 p-3 rounded-2xl hover:bg-blue-500 m-1 w-[220px]'>{category}</button>
          </li>
        ))}
      </ul>
     
      {/* Your component to display filtered courses goes here */}
      <div className='grid grid-cols-3 p-4 gap-6 mt-0 pt-0'>
        {filteredCourses.map(course => (
          // Render your course display component here
               
      <Card key={course.id} className='rounded-2xl bg-white max-w-sm ' >
        <CardHeader className='w-full p-0 rounded-2xl' >
          <Image
             src={course.image}
             alt='Loading Image...'
             width={500}
             height={200}
             className=' w-full rounded-2xl'
           >
          </Image>

       </CardHeader>
       <CardContent className='flex flex-col justify-start  pr-5 pl-5 mt-5 text-start font-bold'>

         <h1 className='text-3xl font-extrabold font-sans ml-2'>
           {course.name}
         </h1>
         <p className='ml-2'>
           {course.description} 
         </p>

          <div className='flex flex-row justify-between items-center mt-2 ml-2'>
            <p className='text-xs'>
              Instructor: {course.instructor}
            </p>
            <p className='text-xs'>
              {course.rating} &#9733;
            </p>
          </div>

         <div className='flex justify-between  mb-2 rounded-2xl p-3 w-full'>

         <h2 className='font-bold font-sans text-2xl text-blue-700'>
         &#8377;{course.price}
          </h2>
         <p className='text-center'>
             {course.duration}
         </p>
         </div>

         <div className='flex flex-row justify-between p-1 mb-1'>

         <p className='text-xs'>
             Starts On: {course.startDate}
         </p>
            <p className=' text-xs'>
                Ends On: {course.endDate}
            </p>
         </div>
         

         <div className='flex flex-row justify-center mb-2 items-center'>
            <Button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-7 w-full'>
              Enroll Now
            </Button>
           
         </div>
         <div className='flex flex-row justify-between items-center'>
            <Button className='bg-transparent text-blue hover:text-white hover:bg-blue-500  px-8 border-blue-600 border-solid border-2'>
             Explore
           </Button>
           <Button className='bg-gradient-to-r from-indigo-500  to-blue-500 text-white px-6'>
            Share as Gift
           </Button>
         </div>
        
       </CardContent>

      </Card> 
        ))}
      </div>
    </div>
    </div>
  );
};

export default TabFilter;
