import * as z from "zod"

export const signInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(8).max(30),
    email: z.string().email(),
})