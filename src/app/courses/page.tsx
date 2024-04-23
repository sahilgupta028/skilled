import Link from 'next/link'
import React from 'react'

export default function Courses() {
  return (
    <div>
      
      <h1>Explore All our Courses</h1>

      <Link href="/courses/ds" className='bg-blue-500 rounded-lg p-3 mt-5'>
        Data Science 
      </Link>

    </div>
  )
}
