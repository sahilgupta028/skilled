import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
    <div>
        
        <footer className='bg-black text-white py-12'>
        <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-2 gap-8 sm:px-6 lg:px-8 justify-between'>

            <div>
              <Image src="https://skilledup.tech/images/logo(1).png" alt='Logo Image' width={100} height={100} className='bg-white'>

              </Image>
            </div>

            <div>
            <h2 className="text-white  text-xl font-semibold mb-4">About Us</h2>
            <p className="mb-4">
                Music School is a premier institution dedicated to teaching the art
                and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.
            </p>
            </div>
            <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 flex-col px-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 skilledUp Intelligence Pvt Ltd. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer