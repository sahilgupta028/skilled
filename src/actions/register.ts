"use server"

import * as z from "zod"
import { RegisterSchema } from "@/schemas";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";

export const register = async  (values: z.infer<typeof RegisterSchema>) => {
  
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        console.log("error values",values)
        console.log(validatedFields)
        return { error: "Invalid fields" }
    }


    

    const { email, password, username } = validatedFields.data

    const hashedPassword = await bcryptjs.hash(password, 10);

    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    })

    if(existingUser){
        console.log("error values ", values)
        return { error: "User already exists" }
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name: username,
        }
    })

    // Send Verification token Email


    console.log("success values ", values)
    return { success: "Email sent" }
};