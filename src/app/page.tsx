"use client";


import React, { use, useCallback } from 'react'
import { useState, useEffect } from 'react'
import { Message } from '@/model/User';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { isAcceptingMessageSchema } from '@/schemas/acceptMessageSchema';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Key, Loader2, RefreshCcw } from 'lucide-react';
import { MessageCard } from '@/components/MessageCard';
import { Course } from '@/model/Course';
import { set } from 'mongoose';
import Image from 'next/image';
import { Card, CardHeader, Spacer } from '@nextui-org/react';
import { Poppins } from 'next/font/google';
import { CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { useWindowSize } from '@react-hook/window-size'

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})


const CourseCard = React.memo(function CourseCard({ course }: { course: Course }) {
  return (
    <Card key={course.id}>
      <p>{course.description}</p>
    </Card>
  );
});
//CourseCard.displayName = 'CourseCard';


function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTime, setSelectedTime] = useState<string>('All')
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  const [filteredByTimeCourses, setFilteredByTimeCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  const [windowWidth] = useWindowSize()


  const fetchCourses = useCallback(async () => {
    setLoading(true)
    console.log("fetching courses")
    try {

      console.log("fetching courses try block")

      const response = await axios.get<ApiResponse>('/api/get-courses')

      console.log("response: ", response.data.courses)

      if(response.data.courses !== undefined){

        setCourses(response.data.courses)
        setFilteredCourses(response.data.courses)

        console.log("response: ", response.data.courses)

        toast({
          title: "Courses Found",
          description: "Retrieved all Courses successfully",
          variant: "success"
        })

      }else{
        toast({
          title: "Error",
          description: "No courses found",
          variant: "success",
        })

        console.log("No courses found")
      }
      
    } catch (error) {
      console.log("error fetching courses: ", error)

      toast({
        title: "Error",
        description: "Error fetching courses",
        variant: "destructive",
      })
    }
  },[])

  useEffect(() => {
    fetchCourses()
  },[fetchCourses])

  useEffect(() => {
    if(selectedCategory === 'All'){
      setFilteredCourses(courses)
    }else{
      setFilteredCourses(courses.filter((course) => course.categories.includes(selectedCategory)))
    }
  }, [selectedCategory, courses])


  useEffect(() => {
    let now = new Date();
    let newFilteredByTimeCourses: Course[] = [];
  
    if (selectedTime === 'All') {
      newFilteredByTimeCourses = filteredCourses;
    } else if (selectedTime === 'Live') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let startDate = new Date(course.startDate);
        let endDate = new Date(course.endDate);
        return startDate <= now && now <= endDate;
      });
    } else if (selectedTime === 'Upcoming') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let startDate = new Date(course.startDate);
        return now < startDate;
      });
    } else if (selectedTime === 'Bootcamp') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let endDate = new Date(course.endDate);
        return now > endDate;
      });
    }
  
    setFilteredByTimeCourses(newFilteredByTimeCourses)
    
  }, [selectedTime, filteredCourses]);
 
    

  return (
   <main className=''>

    <HeroSection/>

    <Spacer className='h-[50px]'/>

    {/* Upper Tabbar with timing filter */}
    <div className='w-full p-1' style={{ position: windowWidth > 1024 ? 'sticky' : 'static', top: 0, zIndex: 10 }}>
      <div className="flex gap-1  justify-between">
        {
          ['All','Live', 'Upcming', 'Bootcamp'].map(time => (
            <Button 
            variant="default"
            key={time}
            className={`py-2 px-4 rounded-lg w-full  ${
              selectedTime === time
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-gray-600 hover:bg-blue-400 bg-gray-300'
            }`}
            onClick={() => {
              console.log("time: ", time)
              
              setSelectedTime(time)
            }}
            >
              {time}
            </Button>
          )) 
        }
      </div>
    </div>

    <div className='lg:flex  bg-blue-100 p-1'>
    <div className='w-full lg:w-auto top-0 sticky z-10'>
      <div className="flex lg:flex-col gap-1 lg:m-0 mb-5 justify-between" style={{ position: windowWidth > 1024 ? 'sticky' : 'static', top: 0, zIndex: 10 }}>
        {
          ['All','Programming', 'JavaScript', 'Python'].map(category => (
            <Button 
            variant="default"
            key={category}
            className={`py-2 px-4 rounded-lg w-full  ${
              selectedCategory === category
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-gray-600 hover:bg-blue-400 bg-gray-300'
            }`}
            onClick={() => {
              console.log("category: ", category)
             setSelectedCategory(category)
            }}
            >
              {category}
            </Button>
          )) 
        }
      </div>
    </div>

    {/* Main content area with course grid */}
    <div className="w-full  overflow-x-scroll lg:overflow-x-auto">
        <div className="lg:grid lg:grid-cols-3 flex  gap-3 justify-center">
          {filteredByTimeCourses.map(course => (
            <Card key={course.id} className='rounded-2xl bg-white max-w-sm ' >
            <CardHeader className='w-full p-0 rounded-2xl' >
              <Image
                src={course.imageUrl}
                alt='Loading Image...'
                width={500}
                height={200}
                className=' w-full rounded-2xl -z-10'
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
                Starts On: {course.startDate.toString()}
              </p>
                <p className=' text-xs'>
                  Ends On: {course.endDate.toString()}
                </p>
              </div>
            
    
            <div className='flex flex-row justify-center mb-2 items-center'>
                <Button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-7 w-full'>
                  Enroll Now
                </Button>
    
    
            </div>
            <div className='flex flex-row justify-between items-center'>
                <Button className='bg-transparent text-blue hover:text-white hover:bg-blue-500  px-8 py-1 border-blue-600 border-solid border-2 rounded-md font-sm'>
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

    <Footer/>

   </main>
  )
}

export default Home