import dbConnect from "@/lib/dbConnect";
import { Course } from "@/model/Course";
import CourseModel from "@/model/Course";
import { useParams } from "next/navigation";
import { useSearchParams } from 'next/navigation'

export async function GET(request: Request){

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    console.log("Course id: ", id)


    if(!id){
        return Response.json(
            {
                success: false,
                message: "Course id not found",
            },
            { status: 404 }
        );
    }

    await dbConnect();

    try {
        console.log("Finding course try block")

        const course = await CourseModel.findById(
            id
        ).exec();

        if(!course){

            console.log("Course not found")

            return Response.json(
                {
                    success: false,
                    message: "Course not found",
                },
                { status: 404 }
            );
        }

        console.log("Course found: ", course)

        return Response.json(
            {
                success: true,
                data: course
            }
        );

    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}