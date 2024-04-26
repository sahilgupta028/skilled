import * as z from "zod"


export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password is Required"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Minimum 8 characters required"
    }),
    username: z.string().min(3,{
        message: "Username is required (minimum 3 characters)"
    })
});
