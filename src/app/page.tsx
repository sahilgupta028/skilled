"use client";

import Navbar from "@/components/Nav/Navbar";
import TabSearch from "@/components/Search";
import TabFilter from "@/components/Tab";
import Image from "next/image";
import { courses } from '../data/test.json'; 
import Test from "@/components/Test";


export default function Home() {

  
  return (
    <main className="w-full ">
      <TabSearch courses={courses}/>
    </main>
  );
}
