import NextAuth from 'next-auth'
import Credentials from "next-auth/providers/credentials"
import { JWT } from 'next-auth/jwt'
import bcryptjs from 'bcryptjs'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/model/User'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Linkedin from 'next-auth/providers/linkedin'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
      Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "Email"
          },
          username: {
            label: "Username",
            type: "text",
            placeholder: "Username"
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "********"
          }
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
                throw new Error("User not verified.")
            }

            const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password)

            if (!isPasswordCorrect) {
                console.log("Password incorrect.")
                throw new Error("Password incorrect.")
            }

            return user
            
            
        } catch (error: any) {
            console.log("Error connecting database",error.message)
            throw new Error("User not found.")
        }
        },
      }),
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET
      }),
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      Linkedin({
        clientId: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: '/signin',
      signOut: '/signout',
      error: '/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
     // newUser: null // If set, new users will be directed here on first sign in
    },
    session:{
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
       async jwt({ token, user}){
        if (user) {
            token._id = user._id?.toString()
            token.isVerified = user.isVerified
            token.isAcceptingMessages = user.isAcceptingMessages
            token.username = user.username
            token.email = user.email
        }
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
          return session
         }
    }
  }) 