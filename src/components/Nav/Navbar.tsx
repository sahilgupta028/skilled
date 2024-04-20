import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ArrowDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleSubMouseEnter = () => {
    setIsSubOpen(true);
    setIsOpen(false);
  };


  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsSubOpen(false);
  };


  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              Your Logo
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <div
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  Courses <ArrowDown />
                </button>
                {isOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 right-0">
                    <div
                      className="relative group"
                      onMouseEnter={handleSubMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href="/courses/data-science"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Data Science <ArrowDown />
                      </Link>
                      {isSubOpen && (
                        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                          <Link
                            href="/courses/data-science/ds-mastercourse"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            DS MasterCourse
                          </Link>
                          <Link
                            href="/courses/data-science/ds-marathon"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            DS Marathon
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/practice"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Practice
              </Link>
              <Link
                href="/job-dekho"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                JobDekho
              </Link>
              <Link
                href="/company"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Company
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleSubMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/courses/data-science"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Courses <ArrowDown />
              </Link>
              {isSubOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    href="/courses/data-science/ds-mastercourse"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DS MasterCourse
                  </Link>
                  <Link
                    href="/courses/data-science/ds-marathon"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DS Marathon
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/practice"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Practice
            </Link>
            <Link
              href="/job-dekho"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              JobDekho
            </Link>
            <Link
              href="/company"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Company
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
