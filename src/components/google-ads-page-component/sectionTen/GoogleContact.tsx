'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const GoogleContact = () => {
    return (
        <section className='p-5 py-36'>
            <div className='max-w-6xl mx-auto bg-card border border-borderColor rounded-3xl'>
                <div className='flex justify-center items-center flex-col gap-5 p-5 lg:p-10'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Find how We can help you!</motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='text-md lg:text-lg text-textColorTwo text-center'>Join 85+ successful B2B Tech companies on the path to achieving results with our Google ads agency</motion.p>
                    <div
                        className="w-60 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="/demo" className="flex-1 font-bold text-lg text-center bg-black px-10 py-5 rounded-full hover:scale-95 transition-all duration-300">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleContact;