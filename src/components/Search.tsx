import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

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

interface FilterProps {
    data: Course[];
}

const Filter: React.FC<FilterProps> = ({ data }) => {
    const [filteredData, setFilteredData] = useState<Course[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [timingFilter, setTimingFilter] = useState<string>('All');

    useEffect(() => {
        filterData();
    }, [categoryFilter, timingFilter]);

    const filterData = () => {
        let filteredCourses = data;

        if (categoryFilter !== 'All') {
            filteredCourses = filteredCourses.filter(course => course.category.includes(categoryFilter));
        }

        if (timingFilter === 'Live') {
            filteredCourses = filteredCourses.filter(course => new Date(course.startDate) <= new Date() && new Date(course.endDate) >= new Date());
        } else if (timingFilter === 'Upcoming') {
            filteredCourses = filteredCourses.filter(course => new Date(course.startDate) > new Date());
        } else if (timingFilter === 'Recorded') {
            filteredCourses = filteredCourses.filter(course => new Date(course.endDate) < new Date());
        }

        setFilteredData(filteredCourses);
    };

    const handleCategoryChange = (category: string) => {
        setCategoryFilter(category);
    };

    const handleTimingChange = (timing: string) => {
        setTimingFilter(timing);
    };

    return (

      <div className=''>

        <div className=''>

        <div className="flex gap-2">
            <div className="w-60 p-4">
                <h3 className="font-bold mb-2 text-2xl text-blue-600 bg-blue-200 w-full p-2">Category:</h3>
                <div className="space-y-2">
                    <button onClick={() => handleCategoryChange('All')} className={`w-full py-2 px-4 rounded-lg ${categoryFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>All</button>
                    <button onClick={() => handleCategoryChange('Web Development')} className={`w-full py-2 px-4 rounded-lg ${categoryFilter === 'Web Development' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Web Development</button>
                    <button onClick={() => handleCategoryChange('Data Analytics')} className={`w-full py-2 px-4 rounded-lg ${categoryFilter === 'Data Analytics' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Data Analytics</button>
                    <button onClick={() => handleCategoryChange('Software Development')} className={`w-full py-2 px-4 rounded-lg ${categoryFilter === 'Software Development' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Software Development</button>
                    <button onClick={() => handleCategoryChange('Data Science')} className={`w-full py-2 px-4 rounded-lg ${categoryFilter === 'Data Science' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Data Science</button>
                </div>
            </div>

            <div className='w-full '>

            <div className="w-full p-4 ">
                <h3 className="font-bold mb-2 text-blue-600 text-2xl w-full bg-blue-200 p-2 p">Timing:</h3>
                <div className="flex space-x-4 justify-start ">
                    <button onClick={() => handleTimingChange('All')} className={`py-2 px-4 rounded-lg ${timingFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>All</button>
                    <button onClick={() => handleTimingChange('Live')} className={`py-2 px-4 rounded-lg ${timingFilter === 'Live' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Live</button>
                    <button onClick={() => handleTimingChange('Upcoming')} className={`py-2 px-4 rounded-lg ${timingFilter === 'Upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Upcoming</button>
                    <button onClick={() => handleTimingChange('Recorded')} className={`py-2 px-4 rounded-lg ${timingFilter === 'Recorded' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>Recorded</button>
                </div>
            </div>

            <div className='scrollbar-thumb-sky-700 scrollbar-track-sky-300'>
              <div className='scrollbar-thin bg-white h-96 overflow-y-scroll'>
              <div className="w-full p-4 grid grid-cols-3 sm:grid-cols-1">
                <ul className='grid grid-cols-3 p-4 gap-6 mt-0 pt-0'>
                    {filteredData.map(course => (
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
                </ul>
            </div>
              </div>
            </div>
            
            </div>
            
        </div>
        </div>
       

      </div>

       
    );
};

export default Filter;
