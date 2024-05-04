"use server"

import * as z from "zod"
import { LoginSchema } from "@/schemas";


export const login = async  (values: z.infer<typeof LoginSchema>) => {
  
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        console.log("error values",values)
        console.log(validatedFields)
        return { error: "Invalid fields" }
    }
    console.log("success values ", values)
    return { success: "Email sent" }
};