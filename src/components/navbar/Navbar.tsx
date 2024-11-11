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
import { AlignJustify, Award, BookOpenText, BriefcaseBusiness, Folders, LifeBuoy, MessageCircleWarning, Trophy } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";
import { Blog, BlogPost } from "@/types/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";



const Navbar = () => {

    const [blog, setBlog] = useState<Blog[]>([])
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const pathname = usePathname();

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -10, scale: 0.95 },
    };

    const companyRef = useRef<HTMLLIElement | null>(null);
    const resourcesRef = useRef<HTMLLIElement | null>(null);
    const resultsRef = useRef<HTMLLIElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                companyRef.current && !companyRef.current.contains(event.target as Node) &&
                resourcesRef.current && !resourcesRef.current.contains(event.target as Node) &&
                resultsRef.current && !resultsRef.current.contains(event.target as Node)
            ) {
                setOpenDropdownIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // fetch latest blog
    const fetchBlog = useCallback(async () => {
        const response = await axios.get('/api/blogs');
        setBlog(response.data.slice(0, 1));
    }, []);

    useEffect(() => {
        fetchBlog();
    }, [fetchBlog]);

    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const closeSheet = () => setIsSheetOpen(false);
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
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger><div className="bg-[#1D1A27] p-4 rounded-full"><AlignJustify size={25} /></div></SheetTrigger>
                        <SheetContent side='bottom' className="rounded-t-2xl border border-borderColor">
                            <SheetTitle><VisuallyHidden>Menu</VisuallyHidden></SheetTitle>
                            <SheetClose />
                            <div className="space-y-10">
                                <ul className="flex flex-col justify-start items-start gap-5">
                                    <li>
                                        <Link href="/" onClick={closeSheet} className={`text-lg font-bold ${pathname === '/' ? 'text-secondary' : 'text-foreground'}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" onClick={closeSheet} className={`text-lg font-bold ${pathname === '/pricing' ? 'text-secondary' : 'text-foreground'}`}>Pricing</Link>
                                    </li>
                                    <li className="relative" ref={companyRef}>
                                        <div
                                            className={`text-lg font-bold ${['/company/life-at-prospectiv', '/company/careers', '/company/about-us'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                            onClick={() => toggleDropdown(0)}
                                        >
                                            Company
                                        </div>
                                        <motion.ul
                                            className="overflow-hidden text-lg font-bold ml-5 space-y-2 pt-2"
                                            initial="hidden"
                                            animate={openDropdownIndex === 0 ? "visible" : "hidden"}
                                            exit="exit"
                                            variants={dropdownVariants}
                                            style={{ visibility: openDropdownIndex === 0 ? 'visible' : 'hidden', display: openDropdownIndex === 0 ? 'block' : 'none' }}
                                        >
                                            <li
                                                className={`text-lg font-bold ${['/company/life-at-prospectiv'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                            ><Link href="/company/life-at-prospectiv">Life at Prospectiv</Link></li>
                                            <li
                                                className={`text-lg font-bold ${['/company/about-us'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                            ><Link href="/company/about-us">About Us</Link></li>
                                            <li
                                                className={`text-lg font-bold ${['/company/careers'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                            ><Link href="/company/careers">Careers</Link></li>
                                        </motion.ul>
                                    </li>

                                    <li className="relative" ref={resourcesRef}>
                                        <div
                                            className={`text-lg font-bold ${['/resources/blog', '/resources/resource-hub'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                            onClick={() => toggleDropdown(1)}
                                        >
                                            Resources
                                        </div>
                                        <motion.ul
                                            className="overflow-hidden text-lg font-bold ml-5 space-y-2 pt-2"
                                            initial="hidden"
                                            animate={openDropdownIndex === 1 ? "visible" : "hidden"}
                                            exit="exit"
                                            variants={dropdownVariants}
                                            style={{ visibility: openDropdownIndex === 1 ? 'visible' : 'hidden', display: openDropdownIndex === 1 ? 'block' : 'none' }}
                                        >
                                            <li
                                                className={`text-lg font-bold ${['/resources/blog'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                            ><Link href="/resources/blog">Blog</Link></li>
                                            <li
                                                className={`text-lg font-bold ${['/resources/resource-hub'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                            ><Link href="/resources/resource-hub">Resource Hub</Link></li>
                                        </motion.ul>
                                    </li>

                                    <li className="relative" ref={resultsRef}>
                                        <div
                                            className={`text-lg font-bold ${['/result/success-story', '/result/awards-and-recognitions'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                            onClick={() => toggleDropdown(2)}
                                        >
                                            Results
                                        </div>
                                        <motion.ul
                                            className="overflow-hidden text-lg font-bold ml-5 space-y-2 pt-2"
                                            initial="hidden"
                                            animate={openDropdownIndex === 2 ? "visible" : "hidden"}
                                            exit="exit"
                                            variants={dropdownVariants}
                                            style={{ visibility: openDropdownIndex === 2 ? 'visible' : 'hidden', display: openDropdownIndex === 2 ? 'block' : 'none' }}
                                        >
                                            <li
                                                className={`text-lg font-bold ${['/result/success-story'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                                onClick={closeSheet}
                                                >
                                                <Link href="/result/success-story">Success Stories</Link></li>
                                            <li className={`text-lg font-bold ${['/result/awards-and-recognitions'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}
                                            onClick={closeSheet}
                                            >
                                                <Link href="/result/awards-and-recognitions">Awards & Recognition</Link></li>
                                        </motion.ul>
                                    </li>
                                </ul>
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
                                <Link
                                    href="/"
                                    className={`text-lg font-bold ${pathname === '/' ? 'text-secondary' : 'text-foreground'
                                        } transition-all duration-500`}
                                >
                                    <NavigationMenuLink>Home</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link
                                    href="/pricing"
                                    className={`text-lg font-bold ${pathname === '/pricing' ? 'text-secondary' : 'text-foreground'
                                        } transition-all duration-500`}
                                >
                                    <NavigationMenuLink>Pricing</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={`text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none 
                                    ${['/company/life-at-prospectiv', '/company/careers', '/company/about-us'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}>Company</NavigationMenuTrigger>
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
                                <NavigationMenuTrigger className={`text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none
                                    ${['/resources/blog', '/resources/resource-hub'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}>Resources</NavigationMenuTrigger>
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

                            <NavigationMenuItem className="pt-[3px]">
                                <NavigationMenuTrigger className={`text-lg font-bold p-0 hover:text-secondary transition-all duration-500 outline-none
                                    ${['/result/success-story', '/result/awards-and-recognitions'].includes(pathname) ? 'text-secondary' : 'text-foreground'}`}>Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex flex-col lg:flex-row items-center gap-5 p-10 bg-background">
                                        <div className="flex flex-col gap-5">
                                            <Link href="/result/success-story" className="w-full transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <Award className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-secondary">Success Story</h3>
                                                        <p className="text-sm text-textColorTwo">
                                                            A page about our culture, people, values and what it's like to work here
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="w-1 h-16 bg-secondary"></div>
                                        <div className="flex flex-col gap-5">
                                            <Link href="/result/awards-and-recognitions" className="transition-all duration-500 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-white rounded-full p-2 group-hover:bg-secondary transition-all duration-200 ease-in-out">
                                                        <Trophy className="text-background group-hover:text-foreground transition-all duration-200 ease-in-out" size={30} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-secondary">Awards & Recognition</h3>
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
                        <Link href="/demo" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-3 rounded-full group-hover:scale-95 transition-all duration-300">
                            Book a Demo
                        </Link>
                    </div>
                </motion.div>
            </div>

        </header>
    );
};

export default Navbar;