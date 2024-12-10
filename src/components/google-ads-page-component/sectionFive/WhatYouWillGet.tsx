'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import ImageContent from '@/public/assets/whatyouwillget.png'
import { Verified } from "lucide-react";
const WhatYouWillGet = () => {
    return (
        <section className="p-5">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
             What Will You Get From Our Google Advertising
            </motion.h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:max-w-[60%]">
                    <h2 className="text-xl md:text-4xl font-bold mb-5">You're getting in front of the best customers for your business.</h2>
                    <p className="text-md lg:text-lg text-textColorTwo mb-5">Google pay per click services is a powerful solution if you want to get noticed immediately. We provide experienced B2B Googles ads services so you can get:</p>

                    <ul className="text-md lg:text-lg text-textColorTwo space-y-4">
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white"/> Increase of marketing qualified leads</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white"/> More Customers</li>
                        <li className="flex justify-start gap-3 items-center"><Verified className="text-secondary" fill="white"/> Reporting: weekly and monthly reports</li>
                    </ul>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:p-8 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] rounded-3xl">
                    <Image 
                    className="rounded-3xl object-cover"
                    src={ImageContent}
                    width={800}
                    height={800}
                    alt="image-content"
                    />
                    </motion.div>
            </div>
        </section>
    );
};

export default WhatYouWillGet;