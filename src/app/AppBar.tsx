"use server"

import React from 'react'
import { auth, signIn, signOut } from './auth'

async function AppBar() {
    const session = await auth();
  return (
    <div className='p-2 bg-blue-200 flex gap-2 '>
        <div className='ml-auto'>
            {session && session.user ? (
                <div>
                    <p>
                        {session.user.email || session.user.name}
                    </p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (

            
                <form
                action={async () => {
                  "use server"
                  await signIn("google")
                }}
              >
                <button type="submit" className='bg-black text-white p-3 font-bold'>Signin with Github</button>
              </form>
            )}
        </div>
    </div>
  )
}

export default AppBar       