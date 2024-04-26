import NextAuth from "next-auth"
import authConfig from "./auth.config"

const { handlers, auth, signIn, signOut } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn  = !!req.auth;
    console.log("isLoggedIn", isLoggedIn)
    console.log("Route ", req.nextUrl.pathname)
})

export const config = {
    mathcher:['/((?!api).)*']
}