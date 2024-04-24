import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from "next/image";
import { ChevronDown, Heading1 } from "lucide-react";



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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent bg-opacity-0">
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

      
      <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
               // endContent={Heading1}
                radius="sm"
                variant="light"
              >
                Courses
                <ChevronDown />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] bg-blue-500 text-white rounded-lg shadow-xl"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
             // startContent={icons.scale}
             className="hover:bg-blue-100 hover:text-blue-600 p-2 rounded-lg"
            >
             Data Science
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              //startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              //startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              //startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              //startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>


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
