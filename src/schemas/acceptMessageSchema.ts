import * as z from "zod"

export const isAcceptingMessageSchema = z.object({
    acceptingMessages: z.boolean()
})