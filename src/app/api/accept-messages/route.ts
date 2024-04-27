import { auth } from '@/app/auth';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { User } from 'next-auth';

export async function POST(request: Request){
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

    const userId = user._id

    const { acceptMessage } = await request.json();

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                isAcceptingMessage: acceptMessage,
            },
            {
                new: true,
            }
        )

        if(!updatedUser){
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 401 }
            );
        }

        return Response.json(
            {
                success: true,
                message: "User status updated successfully",
            },
            { status: 200 }
        );


    
    } catch (error) {
        console.log("Error in updating user status to accept messages ",error)

        return Response.json(
            {
                success: false,
                message: "Error in updating user status to accept messages",
            },
            { status: 500 }
        );
    }
}

export async function GET(request: Request){
    await dbConnect();

    const session = await auth();

    const user: User = session?.user as User;

    if(!session || !user){
        return Response.json(
            {
                success: false,
                message: "Unauthorized",
            },
            { status: 401 }
        );
    }

    const userId = user._id

    try {
        const foundUser = await UserModel.findById(userId)

        if(!foundUser){
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 401 }
            );
        }

        return Response.json(
            {
                success: true,
                message: "User found",
                data: {
                    isAcceptingMessage: foundUser.isAcceptingMessage,
                }
            },
            { status: 200 }
        );

    }
    catch (error) {
        console.log("Error in getting user status to accept messages ",error)

        return Response.json(
            {
                success: false,
                message: "Error in getting user status to accept messages",
            },
            { status: 500 }
        );
    }
}