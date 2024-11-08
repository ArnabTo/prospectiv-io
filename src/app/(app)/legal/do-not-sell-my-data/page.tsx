'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { doNotSellMyDataPageContent } from "@/lib/TextContent";
import { useEffect } from 'react';


const DoNotSell = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-5 py-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="space-y-4 md:max-w-[60%] bg-card  rounded-xl p-10 relative">
                <div>
                    <h2 className="text-5xl font-semibold">Prospectiv</h2>
                    <p className="text-lg mb-4 mt-2">Book Your personal demo</p>
                </div>

                <div className="space-y-4">
                <div className="space-y-4 text-lg text-textColorTwo">
                        <p>{doNotSellMyDataPageContent.textContent[0]}</p>
                        <p>{doNotSellMyDataPageContent.textContent[1]}</p>
                        <p>{doNotSellMyDataPageContent.textContent[2]} <span><Link className="text-gradientColorOne" href={doNotSellMyDataPageContent.mail}>
                            {doNotSellMyDataPageContent.mail}
                        </Link></span>
                        </p>
                    </div>
                </div>

             
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                    <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>
            </div>
            <div className="w-full md:w-2/5 min-h-40 rounded-xl overflow-hidden">
                {/* Calendly Widget */}
                <div
                    className="calendly-inline-widget rounded-2xl"
                    data-url="https://calendly.com/arnabsaha566/book-your-demo?hide_event_type_details=1&hide_gdpr_banner=1&background_color=13111a&text_color=b7b4c7&primary_color=ff4895"
                    style={{ minWidth: '320px', height: '600px', borderRadius: '50px' }}
                ></div>
            </div>
        </div>
    </div>
    );
};

export default DoNotSell;