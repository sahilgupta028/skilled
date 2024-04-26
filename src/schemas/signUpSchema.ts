import * as z from "zod"

export const usernameValidation = z
    .string()
    .min(3, "Username must ")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid Email Address'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'})
})