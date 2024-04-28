import type { NextAuthConfig } from "next-auth";
import NextAuth, { CredentialsSignin } from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./schemas/signInSchema";
import { saltAndHashPassword } from "./utils/password";
import dbConnect from "./lib/dbConnect";
import UserModel from "./model/User";
import bcryptjs from "bcryptjs"
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

class InvalidLoginError extends CredentialsSignin {
    code = "Invalid identifier or password"
}

const config : NextAuthConfig = {
    providers: [
        Credentials({
            
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Abhinandan" },
                email: {  label: "Email", type: "email", placeholder: "abhi@email.com"},
                password: {  label: "Password", type: "password", placeholder: "********" }
            },
            authorize: async (credentials: any) => {

                await dbConnect()

                try {

                    const user = await UserModel.findOne({ 
                        $or: [
                            {email: credentials.email},
                            {username: credentials.username}
                        ]
                    })

                    if (!user) {
                        console.log("User not found.")
                        throw new Error("User not found.")
                    }

                    if (!user.isVerified) {
                        console.log("User not verified.")
                        return {
                            username: "Abhinandan: Not verified",
                            email: "abhi@email.com",
                            id: "2"
                        }
                    }

                    const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password)

                    if (!isPasswordCorrect) {
                        console.log("Password incorrect.")
                        throw new InvalidLoginError()
                    }

                    console.log("User found. ", user, user._id.toString()) 
                    return user
                    
                    
                } catch (error: any) {
                    console.log("Error connecting database",error.message)
                    throw new InvalidLoginError()
                    
                }
            }
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    secret: process.env.AUTH_SECRET,
    session:{
        strategy: "jwt",
    },
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user}){
            if (user) {
                token._id = user._id?.toString()
                token.isVerified = user.isVerified
                token.isAcceptingMessages = user.isAcceptingMessages
                token.username = user.username
                token.email = user.email
            }

            //console.log("JWT Called : ", token, user)
            return token
        },
        async session({ session, token }: any) {
            if(token){
                session.user._id = token._id
                session.user.isVerified = token.isVerified
                session.user.isAcceptingMessages = token.isAcceptingMessages
                session.user.username = token.username
            }
            session.user.id = token.id

            //console.log("Session: ", session, token)
            return session
        },
        
    }
    
} satisfies NextAuthConfig

export  const { handlers, auth, signIn, signOut } = NextAuth(config)