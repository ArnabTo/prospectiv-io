'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Partners from "@/components/partners/Partners";
import { GOOGLE_HERO_TEXTCONTENT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { HeroContent } from "@/types/types";

const GoogleHero = () => {

    const [heroContents, setHeroContents] = useState<HeroContent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchHeroContents = async () => {
        try {
            const response = await client.fetch(GOOGLE_HERO_TEXTCONTENT_QUERY, {}, { cache: 'no-cache' });
            setHeroContents(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchHeroContents();
    }, []);


    return (
        <section className="relative space-y-16 py-20 overflow-hidden lg:overflow-visible">
            <div className="max-w-7xl mx-auto">
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div>
                        :
                        (
                            <div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:p-10">
                                <div className="space-y-5 lg:max-w-[60%] text-center lg:text-start mb-10">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}

                                        className="text-4xl md:text-6xl font-extrabold">
                                        <span>{heroContents[0]?.headline?.split(' ').slice(0, 3).join(' ')}</span>
                                        <span className="text-transparent bg-clip-text bg-foreground lg:bg-gradient-to-l from-[#ED4A8D] to-[#5C55F6] bg-opacity-50"> {heroContents[0]?.headline?.split(' ').slice(3).join(' ')}</span>
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="text-xl lg:text-2xl font-medium text-textColorTwo">
                                        {/* We create high-converting Google Ads campaigns for more sales, profits and customers. */}
                                        {heroContents[0]?.subline}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        className="w-60 mx-auto lg:mx-0 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                        <Link href="/demo" className="flex-1 font-bold text-lg text-center bg-black px-10 py-5 rounded-full hover:scale-95 transition-all duration-300">
                                            Book a Demo
                                        </Link>
                                    </motion.div>
                                </div>
                                <div className="relative min-w-[50%] h-full md:p-5">
                                    <div
                                        className="w-full flex justify-center items-end relative px-5">
                                        {heroContents[0]?.bannerImageOne && (
                                            <Image
                                                className="w-full p-2 max-w-[15%] lg:max-w-[18%] mx-auto rounded-[10px] lg:rounded-xl border bg-card border-borderColor animate-floatReverse z-20 -mr-5 md:-mr-8 lg:-mr-10 "
                                                src={heroContents[0]?.bannerImageOne?.asset?.url}
                                                width={300} height={300} alt="HeroBg" />
                                        )}
                                        {heroContents[0]?.bannerImageTwo && (
                                            <Image
                                                className="w-full object-cover max-w-full mx-auto rounded-[10px] lg:rounded-[26px]  animate-float z-10"
                                                src={heroContents[0]?.bannerImageTwo?.asset?.url}
                                                width={1200}
                                                height={1200}
                                                alt="linkedin-hero-bg"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </motion.div>
        </section>
    );
};

export default GoogleHero;