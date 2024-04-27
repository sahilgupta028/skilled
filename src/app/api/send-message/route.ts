import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import { Message } from "@/model/User";
import { auth } from "@/app/auth";

export async function POST(request: Request){
    await dbConnect();

    const { username, content } = await request.json();

    try {
        const user = await UserModel.findOne({
            username
        }).exec();
    
        if(!user){
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 404 }
            );
        }
    
        // check if the user is accepting messages
        if(!user.isAcceptingMessage){
            return Response.json(
                {
                    success: false,
                    message: "User not accepting messages"
                },
                { status: 403 }
            );
        }
    
        const newMessage = { content, createdAt: new Date() };

        user.messages.push(newMessage as Message);

        await user.save();

        console.log("Message sent successfully")
        
        return Response.json(
            {
                success: true,
                message: "Message sent"
            },
            { status: 200 }
        );
    
    } catch (error: any) {

        console.log("Error sending message ", error.message);
        return Response.json(
            {
                success: false,
                message: "Error sending message"
            },
            { status: 500 }
        );
        
    }

}