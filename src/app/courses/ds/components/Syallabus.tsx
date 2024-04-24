import * as React from "react"
import syllabus from "@/data/syllabus.json"
import { Card, CardContent } from "@/components/ui/card"
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

   
    <Carousel className="">
    <CarouselContent>
        {syllbasData.map((syl) => (
            <CarouselItem key={syl.title}>
                <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{syl.title}</span>
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
