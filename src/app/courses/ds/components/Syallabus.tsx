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
                <div className="">
                    <Card className="max-w-96 max-h-96">
                        <CardContent className="flex  aspect-square  items-center justify-center gap-8">
                            <h1>
                                {syl.title}
                            </h1>
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
