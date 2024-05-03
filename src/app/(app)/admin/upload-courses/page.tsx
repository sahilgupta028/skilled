"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CourseSchema } from "../../courses/CourseSchema"
import { useState, useEffect, useTransition } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios,{ AxiosError } from "axios"
import { toast } from "@/components/ui/use-toast"


export default function ProfileForm() {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess ] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();
    const [isSubmitting, setIsSubmitting] = useState(false)



    const form = useForm<typeof CourseSchema>({
        resolver: zodResolver(CourseSchema),
    
    })

    const onSubmit = async (data: typeof CourseSchema) => {
        console.log('Data: ', data)

        setIsSubmitting(true)
        console.log("Initiating form submission...")

        try {

            const response = await axios.post("/api/upload-courses", data)

            console.log('Response: ', response)

            if(!response){
                setError("An error occurred while processing your request.")
                setIsSubmitting(false)

                console.log("Error: ", response)
                return null
            }

            setSuccess("Course uploaded successfully")
            console.log("Course uploaded successfully")
            toast({
                title: "Success",
                description: "Course uploaded successfully",
                variant: "success",
                duration: 3000
            })
                 
        } catch (error) {
            console.log('Error: ', error)

            const axiosError = error as AxiosError
            setError(axiosError.message)

            toast({
                title: "Error",
                description: axiosError.message,
                variant: "destructive",
                duration: 3000
            })
        } finally {

            console.log("Form submission completed.")
            setIsSubmitting(false)
        }

    }
  

  return (
    <div className="bg-red-100 p-4 w-1/2">

   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="_input.name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email/Username</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="abhi@email.com"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Course Description</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="description"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.tag"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Tag</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="tag"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.price"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="20000"
                                type="number"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.startDate"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email/Username</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                value={field.value.getTime()} // Convert the value to a string
                                type="date"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email/Username</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="abhi@email.com"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email/Username</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="abhi@email.com"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.mentor"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mentor 2</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="mentor 2"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="_input.imageUrl"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Image Url</FormLabel>
                        <FormControl>
                            <Input 
                                disabled={isSubmitting}
                                {...field}
                                placeholder="www.image.com"
                                type="text"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}
