import GitHub from  "next-auth/providers/github"
import Google from  "next-auth/providers/google"
import LinkedIn from "next-auth/providers/linkedin"

import type { NextAuthConfig } from "next-auth"

export default {
    providers: [
        GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        }),
        Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        }),
        LinkedIn({
        clientId: process.env.LINKEDIN_ID,
        clientSecret: process.env.LINKEDIN_SECRET,
        })
    ],
    } as NextAuthConfig

