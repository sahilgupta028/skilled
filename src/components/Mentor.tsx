import React from 'react'
import mentors from '../data/mentor.json'
import Image from 'next/image';
import { relative } from 'path';


interface Mentors{
    name: string;
    position: string;
    experience: string;
    imageUrl: string;
    linkedin: string;
}




function Mentor() {

    const mentorList: Mentors[] = mentors.mentors

  return (
    <div className='w-full bg-blue-300 p-1'>
        <h1 className='text-4xl font-bold text-white hover:text-red-600 hover:bg-red-100 text-center w-full bg-blue-700 rounded-3xl pt-3 pb-3 mb-4'>
            Meet Your Mentors
        </h1>

        <div className='flex flex-wrap items-center justify-center py-7'>
            {mentorList.map((mentor, index) => (
                <div key={index} className='relative bg-white m-2  rounded-2xl overflow-hidden' >
                <div className='group'>
                  <Image
                    alt='Loading Image...'
                    src={mentor.imageUrl}
                    width={300}
                    height={200}
                    className='rounded-2xl p-0 transition-opacity duration-300 group-hover:opacity-20 hover:bg-gradient-to-r from-blue-500 via-blue-600  to-red-600  '
                  />
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='text-center'>
                      <h1 className='text-3xl font-bold mb-4'>{mentor.name}</h1>
                      <p className='text-lg font-bold'>{mentor.position}</p>
                      <p className='text-sm'>{mentor.experience}</p>
                      <a href={mentor.linkedin} target='_blank' rel='noopener noreferrer' className='items-center flex justify-center' >
                        <Image
                          alt='LinkedIn Icon'
                          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                          width={40}
                          height={40}
                            className='rounded-full p-8 mt-4'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
        </div>

        <div>

        </div>
    </div>
  )
}

export default Mentor