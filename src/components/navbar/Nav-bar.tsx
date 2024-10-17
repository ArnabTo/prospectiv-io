'use client';

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* mobile view */}

            {/* desktop view */}
            <div className="hidden lg:block">
                <div className="flex justify-between items-center my-12">
                    <div>
                        <h1 className="text-3xl font-extrabold">Prospectiv</h1>
                    </div>
                    <NavigationMenu className="flex justify-between items-center">
                        <NavigationMenuList>
                            <NavigationMenuItem className="text-lg">
                                <Link href="/docs" className="text-lg font-medium">
                                    Home
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent hover:text focus:bg-transparent focus:text-foreground">Why Prospectiv?</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex flex-col w-[20rem] px-5 py-3 space-y-5">
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink>
                                            <div className="flex justify-between items-start gap-3">
                                                <h1 >Logo</h1>
                                                <span>
                                                    <h4 className="font-bold">Prospecting services</h4>
                                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </span>
                                            </div>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent hover:text focus:bg-transparent focus:text-foreground">Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="text-lg">
                                <Link href="/docs" className="text-lg font-medium">
                                    Pricing
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent">Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <DropdownMenu
                                    trigger={
                                        <span className=" cursor-pointer text-lg">
                                            Hover Me
                                        </span>
                                    }
                                >
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Billing</DropdownMenuItem>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="relative">
                        <Link href='#' className="group">
                            <div
                                className="w-52 text-center rounded-full p-[2px] group-hover:p-1 duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-105"
                                style={{
                                    background: "linear-gradient(to right, #6f86ff, #b372ce 49%, #ff7586)",
                                }}
                            >
                                <div
                                    className="bg-black px-10 py-3 rounded-full text-white text-md font-bold"

                                >
                                    Book a Demo
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;


