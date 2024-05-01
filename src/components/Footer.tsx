import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className='bg-black text-white py-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col gap-4 '>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Image src="https://skilledup.tech/images/logo(1).png" alt='Logo Image' width={100} height={100} className='bg-white rounded-xl  p-5' />
          </motion.div>
          <div className='flex gap-2 p-1'>
            <Image
            src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
            alt='Loading image'
            width={40}
            height={40}
            className='opacity-70 hover:opacity-100'
            ></Image>
            <Image
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt='Loading image'
            width={40}
            height={25}
            className='opacity-70 hover:opacity-100'
            ></Image>
            <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png"
            alt='Loading image'
            width={40}
            height={40}
            className='opacity-70 hover:opacity-100'
            ></Image>
            
          </div>
          </div>
          <div>
            <h2 className="text-blue-400 text-3xl font-semibold mb-4 border-b-2 p-2 border-blue-500">Company</h2>
            <div className='text-xl grid grid-cols-3 grid-rows-3 gap-3'>
              <Link href="/about-us">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>About Us</h3>
              </Link>
              <Link href="/contact-us">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>Contact Us</h3>
              </Link>
              <Link href="/faq">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>FAQ</h3>
              </Link>
              <Link href="/terms">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>T & C</h3>
              </Link>
              <Link href="/privacy">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>Privacy Policy</h3>
              </Link>
              <Link href="/career">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>Career</h3>
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-blue-400 text-3xl font-semibold mb-4 border-b-2 p-2 border-blue-500">
              Products
            </h2>
            <div className='text-xl grid grid-cols-3 grid-rows-3 gap-3'>
              <Link href="/courses">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>Courses</h3>
              </Link>
              <Link href="/jobDekho">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>jobDekho</h3>
              </Link>
              <Link href="/practice">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>skilled Practice</h3>
              </Link>
              <Link href="/community">
                <h3 className='hover:font-bold text-xl hover:text-blue-400'>Interview Prep</h3>
              </Link>
            </div>

            <div>
              <form action="submit">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white p-2 rounded-md w-60" />
                <input type="submit" value="Get Tuned !" className="bg-gradient-to-r from-blue-500 via-indigo-600  to-purple-600 text-white p-2 rounded-md  ml-2 hover:bg-gradi cursor-pointer" />
              </form>
            </div>
          </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 skilledUp Intelligence Pvt Ltd. All rights reserved.</p>
      </footer>

      
    </div>
  );
};

export default Footer;
