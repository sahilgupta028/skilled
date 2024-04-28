import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {

        console.log("Sending verification email to, try block: ", email)

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Test Email",
            react: VerificationEmail({username: username, otp: verifyCode})
        })
        return {
            success: true,
            message: "Verification Email sent successfully"
        }
    } catch (error) {
        console.log("Error sending verification email; ", error)
        return {
            success: false,
            message: 'Failed to send verification Email'
        }
    }

}