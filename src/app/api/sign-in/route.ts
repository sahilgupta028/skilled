import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request){
    await dbConnect();

    const { email, password } =  await request.json()

    console.log("Request Body: ", email, password)

    try {

        console.log("try block")

        const existingUserByEmail = await UserModel.findOne(
            {
                email: email
            }
        )

        if(!existingUserByEmail){
            return Response.json(
                {
                    success: false,
                    message: "User does not exist with this email"
                },
                {
                    status: 404
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUserByEmail.password)

        if(!isPasswordCorrect){
            return Response.json(
                {
                    success: false,
                    message: "Incorrect Password"
                },
                {
                    status: 400
                }
            )
        }

        if(existingUserByEmail.isVerified === false){
            return Response.json(
                {
                    success: true,
                    message: "User is not verified"
                },
                {
                    status: 200
                }
            )
        }

        return Response.json(
            {
                success: true,
                message: "User authenticated successfully"
            },
            {
                status: 200
            }
        )
        
    } catch (error) {

        console.log("catch block")

        console.log("Error in authenticating user: ", error)

        return Response.json(
            {
                success: false,
                message: "Error in authenticating user"
            },
            {
                status: 500
            }
        )
    }
}