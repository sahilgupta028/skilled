"use client"

import { cibNetflix } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { LogInIcon, LucideOctagon, Menu, PersonStandingIcon } from 'lucide-react'
import React, { Profiler, useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import logo from "@/components/assets/logo.png"



interface NavLink{
    text: string,
    url: string,
    icon: string,
    children?: NavLink[]
}

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-[20px] py-[16px] lg:container bg-white'>
      
      <div className='flex items-center font-medium justify-around'>
        <div>
          <LucideOctagon className=''/>
        </div>

      </div>
    </nav>

  )
}

export default Navbar