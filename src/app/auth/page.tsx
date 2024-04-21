"use client";

import SignIn from '@/components/auth/SignIn'
import React, {useState, useEffect} from 'react'
import Auth from './Auth';



function page() {

  return (
    <div>
        <Auth/>
        {/* <SignIn/> */}
    </div>
  )
}

export default page