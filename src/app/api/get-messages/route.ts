import { auth } from '@/app/auth';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import mongoose, { mongo } from 'mongoose';
import { User } from 'next-auth';


export async function GET(request: Request){
    await dbConnect();

    const session = await auth();

    const user: User = session?.user as User;

    if(!session || !user){
        return Response.json(
            {
                success: false,
                message: "Unauthorized user",
            },
            { status: 401 }
        );
    }

    const userId = new mongoose.Types.ObjectId(user._id);

    try {
        
        const user = await UserModel.aggregate(
            [
                {
                    $match: {
                        _id: userId
                    }
                },
                { 
                    $unwind: "$messages"
                },
                {
                    $sort: {'messages.createdAt': -1}
                },
                {
                    $group: {
                        _id: "$_id",
                        messages: {
                            $push: "$messages"
                        }
                    }
                }
            ]
        )

        if(!user || user.length === 0){
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