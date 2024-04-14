import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import courseCard from '../data/card.json'
import Image from 'next/image'


interface CourseCard{
    id: number,
    title: string,
    description: string,
    image: string,
    price: string,
    duration: string,
    instructor: string
}


function CourseCard() {

  const course  = courseCard.courses

    
  return (
    
    <div className='bg-white rounded-3xl p-2 pt-2'>
     

        <div className='w-full p-4 mt-10 bg-blue-400  flex flex-row gap-2 '>

        {course.map((course: CourseCard) => (

          <Card key={course.id}  className='rounded-2xl'>
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
          <CardContent className='flex flex-col justify-start pl-2 pr-2'>
            <h1 className='text-3xl font-extrabold font-sans'>
              {course.title}
            </h1>
           <p>
              {course.description} 
           </p>
            <p>
                {course.price}
            </p>
            <p>
                {course.duration}
            </p>
          </CardContent>
 
        </Card>

        
      ))}

</div> 

    </div>
  )
}

export default CourseCard