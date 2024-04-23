import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Courses",
    "Abhyas",
    "JobDekho",
    "Trace Your Growth",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="text-4xl font-bold text-blue-500">skilledUp</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-blue-500" justify="start">
        <NavbarItem className="hover:bg-blue-200 hover:text-blue-600 p-2 rounded-lg">
          <Link color="success" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="hover:bg-blue-200 hover:text-blue-600 p-2 rounded-lg">
          <Link href="/courses" aria-current="page">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-blue-200 hover:text-blue-600 p-2 rounded-lg">
          <Link color="foreground" href="/abhyas" >
            Abhyas
          </Link>
        </NavbarItem >
        <NavbarItem className="hover:bg-blue-200 hover:text-blue-600 p-2 rounded-lg">
          <Link color="foreground" href="/jobdekho">
            JobDekho
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth" variant="solid" className="rounded-lg bg-blue-700">
            Sign Up/Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
