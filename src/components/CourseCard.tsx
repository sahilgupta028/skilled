import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import courseCard from '../data/card.json'
import Image from 'next/image'
import { Button } from './ui/button'


interface CourseCard{
    id: number,
    title: string,
    description: string,
    image: string,
    price: string,
    duration: string,
    instructor: string,
}


function CourseCard() {

  const course  = courseCard.courses

    
  return (

    <>
  
    <div className='bg-white rounded-3xl p-2 pt-2'>
     

        <div className='w-full p-4 mt-10 bg-blue-400  flex flex-row gap-8 justify-center'>

        {course.map((course: CourseCard) => (

          <Card key={course.id}  className='rounded-2xl bg-white max-w-sm' >
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
          <CardContent className='flex flex-col justify-start  pr-7 pl-18 mt-5'>

            <h1 className='text-3xl font-extrabold font-sans'>
              {course.title}
            </h1>
            <p>
              {course.description} 
            </p>

            <div className='flex justify-between mt-4 mb-3 rounded-2xl p-3 w-full'>

            <h2 className='font-bold font-sans text-2xl text-blue-700'>
            &#8377;{course.price}
             </h2>
            <p className='text-center'>
                {course.duration}
            </p>
            </div>

            <div className='flex flex-row justify-between p-2'>

            <p className='text-sm'>
                Starts On: 25 July 2024
            </p>
          
            </div>

            <div className='flex flex-row justify-between p-2'>
              <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8'>
                Enroll Now
              </Button>
              <Button className='bg-gradient-to-r from-indigo-400  to-blue-300 text-white px-8'>
               Share as Gift
              </Button>
              
            </div>


            
          </CardContent>
 
        </Card>

        
      ))}

</div> 

    </div>

    </>
  )
}

export default CourseCard