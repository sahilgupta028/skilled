import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        return db.user.findUnique({
            where: {
                email,
            }
        })
    } catch (error) {
        console.log("error in finding email", error)
        return null
    }
}


export const getUserById = async (id: string) => {
    try {
        return db.user.findUnique({
            where: {
                id,
            }
        })
    } catch (error) {
        console.log("error in finding id", error)
        return null
    }
}
