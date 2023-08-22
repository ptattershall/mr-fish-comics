"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import fishbw from "@/images/Mr-Fish-BW.jpg"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Mr. Fish's Market",
        href: "/shop",
        description:
          "Uncle Fish's full list of indie items!",
    },{
        title: "Comic Books",
        href: "/shop/comics",
        description:
          "Uncle Fish's indie comics!",
    },
    {
        title: "Collectibles",
        href: "/shop/collectibles",
        description:
          "Uncle Fish is serving up hot collectibles.",
    },
    {
        title: "Apparel",
        href: "/shop/apparel",
        description:
          "Get fitted with Mr. Fish's apparel.",
    },
    {
        title: "Subscriptions",
        href: "/subscribe",
        description:
            "Subscribe to Mr. Fish's comics and get exclusive content and rewards!",
    },
]

export default function NavOptions({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    Social
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                            <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="https://www.youtube.com/@MrFishComics"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={fishbw} alt="Mr. Fish YT image" height={100} width={100}/>
                                <div className="mb-2 mt-4 text-lg font-medium">
                                School of Fish
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                Join the Mr. Fish School of Fish on YouTube.
                                </p>
                            </Link>
                            </NavigationMenuLink>
                        </li>
                        <li className="col-span-3">
                            <ListItem href="/media" title="Media">
                                News, Events and all the upcoming releases!
                            </ListItem>
                            <ListItem href="/media/posts" title="Indie Comics News">
                                Get the latest news on Mr. Fish Comics and other indie comics!
                            </ListItem>
                            <ListItem href="/media/sightings" title="Mr. Fish Sightings and Events">
                                Find out where to catch up with your favorite indie comic creator!
                            </ListItem>
                        </li>
                        </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Market</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                    <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                    </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href="/battle" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Battle
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
