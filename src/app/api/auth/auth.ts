// import NextAuth, { type DefaultSession } from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import dbConnect from "@/lib/dbConnect"
// import UserModel from "@/model/User"
// import bcryptjs from "bcryptjs"


// export const { handlers, auth, signIn, signOut } 
// = NextAuth({
//   session: { strategy: "jwt" },
//   providers: [
//     Credentials({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "Email"
//         },
//         username: {
//           label: "Username",
//           type: "text",
//           placeholder: "Username"
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "********"
//         }
//       },
//       authorize: async (credentials: any) => {
          
//         await dbConnect()
        
//         try {

//             const user = await UserModel.findOne({ 
//                 $or: [
//                     {email: credentials.email},
//                     {username: credentials.username}
//                 ]
//             })

//             if (!user) {
//                 console.log("User not found.")
//                 throw new Error("User not found.")
//             }

//             if (!user.isVerified) {
//                 console.log("User not verified.")
//                 throw new Error("User not verified.")
//             }

//             const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password)

//             if (!isPasswordCorrect) {
//                 console.log("Password incorrect.")
//                 throw new Error("Password incorrect.")
//             }

//             console.log("User found. ", user, user._id.toString()) 
//             return user
            
            
//         } catch (error: any) {
//             console.log("Error connecting database",error.message)
//             throw new Error("User not found.")
//         }
//         },
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user}){
//       if (user) {
//           token._id = user._id?.toString()
//           token.isVerified = user.isVerified
//           token.isAcceptingMessages = user.isAcceptingMessages
//           token.username = user.username
//           token.email = user.email
//       }
//       console.log("JWT: ", token, user)
//       return token
//      },
//        async session({ session, token }: any) {
//           if(token){
//               session.user._id = token._id
//               session.user.isVerified = token.isVerified
//               session.user.isAcceptingMessages = token.isAcceptingMessages
//               session.user.username = token.username
//           }
//         session.user.id = token.id

//         console.log("Session: ", session, token)
//         return session
//        },
       
//   },
//   secret: process.env.AUTH_SECRET,
//   pages: {
//     signIn: "/sign-in",
//     signOut: "/sign-out",
//     error: "/error",
//   },
// })