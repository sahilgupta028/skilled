"use client"

import * as z from "zod"
import { CardWrapper } from "./card-wrapper"
import {useForm } from "react-hook-form"
import { zodResolver} from "@hookform/resolvers/zod"
import { useTransition, useState, use } from "react"
import { LoginSchema } from "@/schemas"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

} from "@/components/ui/form"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"


export const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess ] = useState<string | undefined>("");


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
       setError("")
       setSuccess("")

       //axios.post("/your/api/route", values)
       startTransition(() => {
        login(values)
        .then((data) => {
            setError(data.error)
            setSuccess(data.success)
        })
       })
    }

    return (
       <CardWrapper 
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial={true}
       >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isPending}
                                            {...field}
                                            placeholder="abhi@email.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError  message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    className="w-full"
                    type="submit"
                    disabled={isPending}
                    >
                        Login
                    </Button>
                </form>
            </Form>
       </CardWrapper>
    )
}