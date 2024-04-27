import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const {  auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn  = !!req.auth;
    console.log("isLoggedIn ", isLoggedIn)
    console.log("Route ", req.nextUrl.pathname)
})

export async function middleware(request: NextRequest){

  const token = await getToken({ req: request, salt: "complex salt", secret: "secreet" })
  const  url = request.nextUrl

  if(token && 
    (
      url.pathname.startsWith("/sign-in") 
      || url.pathname.startsWith("/register") 
      || url.pathname.startsWith("/verify")
      || url.pathname.startsWith("/")
    )
  ){
    return NextResponse.redirect(new URL("/dashboard", request.url).href)
  }

  if(!token && url.pathname.startsWith("/dashboard")){
    return NextResponse.redirect(new URL("/courses/ds",
    request.url).href)
  }

  return NextResponse.next()
}

// matching routes
export const config = {
  matcher: [
    '/sign-in',
    '/register',
    '/forgot-password',
    '/',
    '/dashboard/*',
  ]
};