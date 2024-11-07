'use client';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { motion } from 'framer-motion';
import { AlignJustify, BookOpenText, BriefcaseBusiness, Folders, LifeBuoy, MessageCircleWarning } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Blog } from "@/types/types";
import Image from "next/image";

const Navbar = () => {

    const [blog, setBlog] = useState<Blog[]>([])
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdownIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // fetch latest blog
    const fetchBlog = useCallback(async () => {
        const response = await axios.get('/api/blogs')
        setBlog(response.data.slice(0, 1));
    }, [])

    useEffect(() => {
        fetchBlog();
    }, [fetchBlog])
    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };


    return (
        <header className="max-w-7xl mx-auto lg:px-10 relative z-20">

            {/* small device Navigation bar */}
            <motion.nav
                initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', paddingTop: 30, paddingBottom: 30 }}
                exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                transition={{ duration: 1, delay: 3.5 }}
                className="flex justify-between items-center px-5 xl:hidden">
                <div>
                    <Link href="/" className="text-xl font-extrabold">
                        Prospectiv
                    </Link>
                </div>
                <div>
                    <Sheet>
                        <SheetTrigger><div className="bg-[#1D1A27] p-4 rounded-full"><AlignJustify size={25} /></div></SheetTrigger>
                        <SheetContent side='bottom' className="rounded-t-2xl border border-borderColor">
                            <SheetTitle>
                                <VisuallyHidden>
                                    Menu
                                </VisuallyHidden>
                            </SheetTitle>
                            <SheetClose />
                            <div className="space-y-10">
                                <ul className="flex flex-col justify-start items-start gap-5">
                                    <li>
                                        <Link href="/" className="text-lg font-bold text-secondary transition-all duration-500">
                                            Home
                                        </Link>
                                    </li>

                                    {/* <li className="relative" ref={dropdownRef}>
                                    <div
                                        className="text-lg font-bold hover:text-secondary transition-all duration-500"
                                        onClick={() => toggleDropdown(0)}
                                    >
                                        Why Prospectiv?
                                    </div>
                                    <motion.ul
                                        className="overflow-hidden"
                                        initial="hidden"
                                        animate={openDropdownIndex === 0 ? "visible" : "hidden"}
                                        exit="exit"
                                        variants={dropdownVariants}
                                        style={{
                                            visibility: openDropdownIndex === 0 ? 'visible' : 'hidden',
                                            display: openDropdownIndex === 0 ? 'block' : 'none'
                                        }}
                                    >
                                        {Array(3).fill(null).map((_, index) => (
                                            <li key={index}>
                                                <Link href="#" className="block py-2">
                                                    <div className="flex justify-center items-center gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Logo</h1>
                                                        <p className="font-semibold text-foreground text-sm">Prospecting services</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </li> */}
                                    <li>
                                        <Link href="/pricing" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/result/success-story" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                            Result
                                        </Link>
                                    </li>
                                    <li className="relative" ref={dropdownRef}>
                                        <div
                                            className="text-lg font-bold hover:text-secondary transition-all duration-500"
                                            onClick={() => toggleDropdown(0)}
                                        >
                                            Company
                                        </div>
                                        <motion.ul
                                            className="overflow-hidden"
                                            initial="hidden"
                                            animate={openDropdownIndex === 0 ? "visible" : "hidden"}
                                            exit="exit"
                                            variants={dropdownVariants}
                                            style={{
                                                visibility: openDropdownIndex === 0 ? 'visible' : 'hidden',
                                                display: openDropdownIndex === 0 ? 'block' : 'none'
                                            }}
                                        >
                                            <li>
                                                <Link href="/life-at-prospectiv" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Life at Prospectiv</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">About Us</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/company/careers" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Careers</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    </li>
                                    <li className="relative" ref={dropdownRef}>
                                        <div
                                            className="text-lg font-bold hover:text-secondary transition-all duration-500"
                                            onClick={() => toggleDropdown(1)}
                                        >
                                            Resources
                                        </div>
                                        <motion.ul
                                            className="overflow-hidden"
                                            initial="hidden"
                                            animate={openDropdownIndex === 1 ? "visible" : "hidden"}
                                            exit="exit"
                                            variants={dropdownVariants}
                                            style={{
                                                visibility: openDropdownIndex === 1 ? 'visible' : 'hidden',
                                                display: openDropdownIndex === 1 ? 'block' : 'none'
                                            }}
                                        >
                                            <li>
                                                <Link href="/life-at-prospectiv" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Blog</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Resource Hub</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Careers</h1>
                                                    </div>
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    </li>
                                </ul>
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
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.nav>


            {/* large device Navigation bar */}
            <div className="hidden xl:flex justify-between items-center py-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-3xl font-extrabold">
                        Prospectiv
                    </Link>
                </motion.div>

                <div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex justify-between items-center gap-8">
                            <NavigationMenuItem>
                                <Link href='/' className="text-lg font-bold text-secondary transition-all duration-500">
                                    <NavigationMenuLink>Home</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href='/pricing' className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                    <NavigationMenuLink>Pricing</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none">Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex flex-col lg:flex-row items-center gap-5 p-10 bg-background">
                                        <div className="flex flex-col gap-5">
                                            <Link href="/company/life-at-prospectiv" className="w-full transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <LifeBuoy className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-secondary">Life at Prospectiv</h3>
                                                        <p className="text-sm text-textColorTwo">
                                                            A page about our culture, people, values and what it's like to work here
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="flex flex-col gap-5">
                                                <Link href="/company/careers" className="transition-all duration-500 group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                            <BriefcaseBusiness className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-bold text-secondary">Careers</h3>
                                                            <p className="text-sm text-textColorTwo">
                                                                Join the Prospectiv team. Browse our open opportunities and find your next role.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-1 h-16 bg-secondary"></div>
                                        <div className="flex flex-col gap-5">
                                            <Link href="/company/about-us" className="transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <MessageCircleWarning className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
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

                            <NavigationMenuItem className="pt-[3px]">
                                <NavigationMenuTrigger className="text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none">Resources</NavigationMenuTrigger>
                                <NavigationMenuContent className="w-52">
                                    <div className="flex flex-col lg:flex-row items-center gap-5 p-10 bg-background">
                                        <div className="flex flex-col gap-5 flex-1">
                                            <Link href="/resources/blog" className="w-full transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <BookOpenText className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-md font-bold text-secondary">Blog</h3>
                                                        <p className="text-sm text-textColorTwo">
                                                            A page about our culture, people, values and what it's like to work here
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link href="/resources/resource-hub" className="w-full transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <Folders className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-md font-bold text-secondary">Resource Hub</h3>
                                                        <p className="text-sm text-textColorTwo">
                                                            Whitepapers, guides and webinars. All designed to help you sell more.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="w-1 h-16 bg-secondary"></div>
                                        <div className="flex flex-col gap-5 flex-1">
                                            <Link href={`/blogs/${blog[0]?.slug?.current}`} className="w-full transition-all duration-500 group">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-full relative">
                                                        <Image className="rounded-xl" src={blog[0]?.mainImage?.asset?.url} width={500} height={500} alt="" />
                                                        <div className="absolute top-3 px-3 left-2 bg-smallCard text-foreground rounded-full">Latest 🔥</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 className="text-lg font-bold">{blog[0]?.title}</h2>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="pt-[8px]">
                                <Link href='/result/success-story' className="text-lg font-bold hover:text-secondary transition-all duration-500">
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