'use client';
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const NavigationBar = () => {

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

    const toggleDropdown = (index: number) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };


    return (
        <div className="max-w-7xl mx-auto">
            {/* small device Navigation bar */}
            <motion.nav
                initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', paddingTop: 30, paddingBottom: 30 }}
                exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center px-5 xl:hidden">
                <div>
                    <Link href="#" className="text-xl font-extrabold">
                        Prospectiv
                    </Link>
                </div>
                <div>
                    <Sheet>
                        <SheetTrigger><div className="bg-[#1D1A27] p-4 rounded-full"><AlignJustify size={25} /></div></SheetTrigger>
                        <SheetContent side='bottom' className="flex">
                            <SheetClose/>
                        <div>
                        <ul className="flex flex-col justify-start items-start gap-5">
                                <li>
                                    <Link href="#" className="text-lg font-bold text-secondary transition-all duration-500">
                                        Home
                                    </Link>
                                </li>
                                <li className="relative" ref={dropdownRef}>
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
                                </li>
                                <li>
                                    <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        Result
                                    </Link>
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
                                        {Array(3).fill(null).map((_, index) => (
                                            <li key={index}>
                                                <Link href="#" className="block py-2">
                                                    <div className="flex justify-start items-start gap-2 pl-5">
                                                        <h1 className="text-md font-bold text-white">Logo</h1>
                                                        <p className="font-semibold text-foreground text-sm">Resource Hub</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                </li>
                                <li>
                                    <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                        Legal
                                    </Link>
                                </li>

                            </ul>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-full flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
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
            <nav className="hidden xl:flex justify-between items-center py-10">

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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ul className="flex justify-end items-center gap-5">
                        <li>
                            <Link href="#" className="text-lg font-bold text-secondary transition-all duration-500">
                                Home
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500 group">
                                Why Prospectiv?
                            </Link>

                            <ul className="absolute w-96 px-5 py-5 pt-5 bg-[#1D1A27] shadow-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform">
                                <li className="group-hover:opacity-100">
                                    <Link href="#" className="block px-4 py-2 group-hover:opacity-100">
                                        <div className="flex justify-center items-start gap-4">
                                            <h1 className="text-lg font-bold text-black">Logo</h1>
                                            <span>
                                                <h4 className="font-bold text-foreground">Prospecting services</h4>
                                                <p className="text-[#b7b4c7]">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </p>
                                            </span>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                Result
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                Resources
                            </Link>
                            <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
                                <li>
                                    <Link href="#" className="text-textColorOne block px-4 py-2 hover:bg-gray-200">
                                        Resource 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-textColorOne block px-4 py-2 hover:bg-gray-200">
                                        Resource 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-textColorOne block px-4 py-2 hover:bg-gray-200">
                                        Resource 3
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="#" className="text-lg font-bold hover:text-secondary transition-all duration-500">
                                Legal
                            </Link>
                        </li>

                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full max-w-60 flex rounded-full mx-auto bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                        <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                            Book a Demo
                        </Link>
                    </div>
                </motion.div>
            </nav>
        </div>
    );
};

export default NavigationBar;
