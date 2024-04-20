import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div>
      <div className='bg-blue-100  p-4 flex flex-col items-center justify-center '>

        <div className='flex bg-white justify-around gap-6 p-5  pb-20'>

          <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
            Skilled Bano skilledUp se
          </h1>

         <Image
         src="https://www.studentresearchfoundation.org/wp-content/uploads/2020/04/Learn-Coding-and-Other-Computer-Skills-for-Free-Online-1030x687.jpg"
         alt='Loading image'
         width={400}
         height={400}
         >

         </Image>
        </div>
        <div className='items-center justify-center flex bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-red-500 to-90% p-1 w-5/6 rounded-3xl'>
          <div className='rounded-3xl bg-white shadow-lg h-40  flex gap-11 w-full justify-center items-center'>
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  50+ Courses
                </h1>
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  8000+ Learners
                </h1>
                <h1 className='bg-gradient-to-r from-blue-500 via-blue-600  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold '>
                  1000+ Courses
                </h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection