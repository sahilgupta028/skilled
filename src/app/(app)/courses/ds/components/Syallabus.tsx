import * as React from "react"
import syllabus from "@/data/syllabus.json"
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Car } from "lucide-react";


interface SyllabusProps {
    title: string;
    description: string;
    credits: string;
    time: string;
    subchapter: [
        title: string
    ];
}


export function Syllabus() {

    const syllbasData = syllabus.syllabus

  return (

    <div className="">

   
<Carousel
      opts={{
        align: "start",
      }}
      className="max-w-screen-lg w-full mx-auto py-5"
    >
      <CarouselContent>
        {syllbasData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 max-w-screen ">
            <div className="p-1">
              <Card className='rounded-lg'>
                <CardHeader className='bg-blue-200 w-full text-blue-700 text-center h-3 flex justify-center  rounded-t-lg'>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col justify-center px-1">              
                  <h1 className='text-md font-bold'>
                    {item.description}
                  </h1>
                  <div className='flex flex-col text-sm'>
                    <p className="text-sm font-bold text-blue-500">Credits: {item.credits}</p>
                    <br />
                    Topic Duration: &nbsp;
                    {item.time}
                  </div> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
