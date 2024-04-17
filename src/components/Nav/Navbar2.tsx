"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { 
    title: string; 
    href: string; 
    description: string; 
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]



const components1: {
    title: string;
    links: {
        title: string;
        href: string;
    }[];
    href: string;
}[] =[
    {
        title: "Data Science",
        links: [
            {
                title: "Data Science Guru 1.0",
                href: "/api/courses/data-science"
            },
            {   
                title: "Data Science Guru 2.0",
                href: "/api/courses/data-science"
            },
            {
                title: "Data Science Guru 3.0",
                href: "/api/courses/data-science"
            },
            {
                title: "Data Science Guru 4.0",
                href: "/api/courses/data-science"
            }
        ],
        href: "/api/courses/data-science"
    },
    {
        title: "Web Development",
        links: [
            {
                title: "Web Development Guru 1.0",
                href: "/api/courses/web-dev-1"
            },
            {
                title: "Web Development Guru 2.0",
                href: "/api/courses/web-dev-2"
            },
            {
                title: "Web Development Guru 3.0",
                href: "/api/courses/web-dev-3"
            },
            {
                title: "Web Development Guru 4.0",
                href: "/api/courses/web-dev-4"
            }
        ],
        href: "/docs/composites"
    },
    {
        title: "Machine Learning",
        links: [
            {
                title: "Machine Learning Guru 1.0",
                href: "/api/courses/ml-1"
            },
            {
                title: "Machine Learning Guru 2.0",
                href: "/api/courses/ml-2"
            },
            {
                title: "Machine Learning Guru 3.0",
                href: "/api/courses/ml-3"
            },
            {
                title: "Machine Learning Guru 4.0",
                href: "/api/courses/ml-4"
            }
            
        ],
        href: "/docs/patterns"

    }
]

export function Navbar2() {
  return (

    <div className="w-full p-1 bg-red-200">
    <NavigationMenu className="w-full bg-blue-500 p-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-red-100 position: relative;">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components1.map((component) => (
                <ListItem
                  key={component.links[0].title}
                  title={component.title}
                >
                  {component.links.map((link) => (
                    <div key={link.title}>
                        
                        <Link href={link.href} className="">
                            <h2 className="text-start font-bold p-2">{link.title}</h2>
                        </Link>
                    </div>  
                  ))}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Jobs Portal
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
