"use server"

import React from 'react'
import { auth, signIn, signOut, handlers } from '../auth'

async function AppBar() {
    const session = await auth();

  return (
    <div className='block '>
        <div className='ml-auto'>
            {session && session.user ? (
                <div>
                    <p>
                        {session.user.email || session.user.name}
                    </p>
                    <p>
                    {session.user._id} 
                    </p>
                    <p>
                    {session.user.username}
                    </p>
                    <form
                    action={async () => {
                      "use server"
                      await signOut()
                    }}
                    >
                    <button type="submit" className='bg-black text-white p-3 font-bold'>Sign Out</button>
                    </form>
                </div>
            ) : (

            
              <form
              action={async () => {
                "use server"
                await signIn()
              }}
              >
                <button type="submit" className='bg-black text-white p-3 font-bold'>Sign In</button>

              </form>
            )}
        </div>
    </div>
  )
}

export default AppBar       