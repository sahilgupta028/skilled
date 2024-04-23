import bcryptjs from 'bcryptjs'



export function saltAndHashPassword(password: string): string {
  // This is a very simple hashing function, and should not be used in production

    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(password, salt)
    return hash
 
}