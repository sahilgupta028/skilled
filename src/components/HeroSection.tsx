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

    
        <div className='w-full bg-blue-400 flex justify-center p-5 '>
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

    </>
    
    )
}

export default HeroSection