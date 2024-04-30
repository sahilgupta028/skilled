import { auth } from '@/auth';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import mongoose, { mongo } from 'mongoose';
import { User } from 'next-auth';
import courseData from '@/data/courses.json';
import CourseModel from '@/model/Course';

export async function GET(request: Request){
    await dbConnect();

    

    const session = await auth();

    console.log("Session: ", session)

    const user: User = session?.user as User;
    console.log("Session User: ", user)


    if(!session || !user){
        return Response.json(
            {
                success: false,
                message: "Unauthorized user",
            },
            { status: 401 }
        );
    }

    const username = user.username;

    console.log("Username: ", username)

    if(!username){
        return Response.json(
            {
                success: false,
                message: "Username not found",
            },
            { status: 404 }
        );
    }

    const id = new mongoose.Types.ObjectId(user._id);

    console.log("User Id: ", id.toString())

    const userId = id.toString();

    console.log("User Id: ", userId)
    try {
        const user = await UserModel.aggregate([
            { $match: { username: username  } },
            { $unwind: '$messages' },
            { $sort: { 'messages.createdAt': -1 } },
            { $group: { _id: '$_id', messages: { $push: '$messages' } } },
          ]).exec();

        if(!user || user.length === 0){

            console.log("User not found ")
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 404 }
            )
        }

        return Response.json(
            {
                success: true,
                data: user[0].messages
            }
        )

    } catch (error) {

        console.log("Error getting messages: " ,error);

        return Response.json(
            {
                success: false,
                message: "Internal server error"
            },
            { status: 500 }
        )
    }
}