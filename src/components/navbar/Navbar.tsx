'use client';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { motion } from 'framer-motion';
import { LifeBuoy, MessageCircleWarning } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="max-w-7xl mx-auto lg:px-10 relative z-20">

         
                <div className="hidden xl:flex justify-between items-center py-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="#" className="text-3xl font-extrabold">
                            Prospectiv
                        </Link>
                    </motion.div>

                    <div>
                        <NavigationMenu>
                            <NavigationMenuList className="flex justify-between items-center gap-5">
                                <NavigationMenuItem>
                                    <Link href='' className="text-lg font-bold text-secondary transition-all duration-500">
                                        <NavigationMenuLink>Home</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='' className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        <NavigationMenuLink>Pricing</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none">Company</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex flex-col lg:flex-row items-center gap-5 p-5 bg-background">
                                            <div className="flex flex-col gap-5">
                                                <Link href="/life-at-prospectiv" className="w-full transition-all duration-500">
                                                    <div className="flex items-center gap-4">
                                                        <LifeBuoy size={120} />
                                                        <span>
                                                            <h3 className="text-lg font-bold text-secondary">Life at Prospectiv</h3>
                                                            <p className="text-sm text-textColorTwo">
                                                                A page about our culture, people, values and what it's like to work here
                                                            </p>
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-1 h-32 bg-secondary"></div>
                                            <div className="flex flex-col gap-5">
                                                <Link href="/about-us" className="transition-all duration-500">
                                                    <div className="flex items-center gap-4">
                                                        <MessageCircleWarning size={120} />
                                                        <div>
                                                            <h3 className="text-lg font-bold text-secondary">About Us</h3>
                                                            <p className="text-sm text-textColorTwo">
                                                                Meet your campaign team: over 300 prospecting experts helping you sell more.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none">Resource</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex flex-col lg:flex-row items-center gap-5 p-5 bg-background">
                                            <div className="flex flex-col gap-5">
                                                <Link href="/life-at-prospectiv" className="w-full transition-all duration-500">
                                                    <div className="flex items-center gap-4">
                                                        <LifeBuoy size={120} />
                                                        <span>
                                                            <h3 className="text-lg font-bold text-secondary">Life at Prospectiv</h3>
                                                            <p className="text-sm text-textColorTwo">
                                                                A page about our culture, people, values and what it's like to work here
                                                            </p>
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="w-1 h-32 bg-secondary"></div>
                                            <div className="flex flex-col gap-5">
                                                <Link href="/about-us" className="transition-all duration-500">
                                                    <div className="flex items-center gap-4">
                                                        <MessageCircleWarning size={120} />
                                                        <div>
                                                            <h3 className="text-lg font-bold text-secondary">About Us</h3>
                                                            <p className="text-sm text-textColorTwo">
                                                                Meet your campaign team: over 300 prospecting experts helping you sell more.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='' className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        <NavigationMenuLink>Result</NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-60 lg:w-full flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-3 rounded-full group-hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            
        </header>
    );
};

export default Navbar;