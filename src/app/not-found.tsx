'use client'
    ; import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="relative overflow-hidden">
            <div className='flex flex-col justify-center items-center h-screen space-y-5'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-6xl lg:text-[8rem] font-bold'>404</p>
                    <p className='text-xl lg:text-6xl'>Oops! Page not found</p>
                </div>
                <div className="w-52 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                    <Link href="/demo" className="flex-1 font-bold text-lg bg-black text-center py-5 rounded-full hover:scale-95 transition-all duration-300">
                        Book a Demo
                    </Link>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="blur-[100px] w-full max-w-[44%] min-h-[74%] lg:max-w-[60%] lg:min-h-[60%] absolute top-0 left-0 lg:-top-36 lg:-left-[400px] animate-spin-slow -z-10  transition-all">
                <div className="bg-gradientColorTwo absolute rounded-full opacity-50 min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0 lg:-top-11 lg:-right-36"></div>
                <div className="bg-gradientColorFive absolute rounded-full opacity-50 min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-0 right-0 lg:-bottom-72 lg:-right-64 -z-10 transition-all">
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </motion.div>
        </div>
    );
};

export default NotFound;