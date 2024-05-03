import { signIn } from '@/app/auth'
import { LoginForm } from '@/components/auth/login-form'
import { Button } from '@nextui-org/react'
import React from 'react'

function LoginPage() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}

export default LoginPage