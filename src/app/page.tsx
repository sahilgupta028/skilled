"use client";

import Navbar from "@/components/Nav/Navbar";
import TabSearch from "@/components/Search";
import TabFilter from "@/components/Tab";
import Image from "next/image";
import { courses } from '../data/test.json'; 
import Test from "@/components/Test";
import { Navbar2 } from "@/components/Nav/Navbar2";
import Footer from "@/components/Footer";
import Mentor from "@/components/Mentor";



export default function Home() {

  
  return (
    <main className="w-full ">
     
      {/* <TabSearch data={courses}/> */}

      {/* <Footer/> */}

      <Mentor/>
    </main>
  );
}
