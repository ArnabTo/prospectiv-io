import Link from "next/link";
import HeroBg from '@/public/assets/herobg.svg';
import HeroBgTwo from '@/public/assets/herobgtwo.svg';
import HeroBgThree from '@/public/assets/herobgthree.svg'
import Image from "next/image";
import Partners from "@/components/partners/Partners";
import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COLDEMAIL_HERO_TEXTCONTENT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { HeroContent } from "@/types/types";

const ColdEmailHero = () => {

    const animateRef = useRef(null);
    const sublineRef = useRef(null);
    const buttonRefOne = useRef(null);
    const buttonRefTwo = useRef(null);
    const imageRef = useRef(null);
    const gradientBgRef = useRef(null);

    const [heroContents, setHeroContents] = useState<HeroContent[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchHeroContents = async () => {
        try {
            const response = await client.fetch(COLDEMAIL_HERO_TEXTCONTENT_QUERY, {}, {cache: 'no-cache'})
            setHeroContents(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchHeroContents();
    }, []);


    useEffect(() => {
        if (!isLoading) {
            gsap.registerPlugin(ScrollTrigger);

            // Check if this is first visit to home page in this session
            const isFirstVisit = window.location.pathname === '/' && !sessionStorage.getItem('hasVisitedHome');
            const delay = isFirstVisit ? 3000 : 0;

            // Mark that we've visited home
            if (window.location.pathname === '/') {
                sessionStorage.setItem('hasVisitedHome', 'true');
            }

            const timer = setTimeout(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: animateRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                });

                tl.fromTo(animateRef.current, {
                    opacity: 0,
                    y: 10,
                    scale: 0.9
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7
                })
                    .fromTo(sublineRef.current, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6
                    }, "+=0.1") // Wait 0.2s after previous animation
                    .fromTo(buttonRefOne.current, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }, "+=0.1")
                    .fromTo(buttonRefTwo.current, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }, "+=0.1")
                    .fromTo(imageRef.current, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5
                    }, "+=0.1")
                    .fromTo(gradientBgRef.current, {
                        opacity: 0,
                        scale: 0.9
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5
                    });
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    console.log(heroContents)
    return (

        <section className="mt-24 relative z-10">
            {/* {
                isLoading ? <div className="flex items-center justify-center h-screen"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div> :
                    (
                        <div className="max-w-7xl mx-auto relative space-y-24 pb-24 lg:mb-24">
                            <div className="w-full lg:w-3/4 text-center mx-auto space-y-10 px-4 md:px-10 lg:p-0 xl:p-10">
                                <div className="space-y-5">
                                    <h1
                                        ref={animateRef}
                                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
                                        <span>{heroContents[0]?.headline?.split(' ').slice(0, 3).join(' ')}</span>
                                        <span className="text-transparent bg-clip-text bg-foreground lg:bg-gradient-to-l from-[#ED4A8D] to-[#5C55F6] bg-opacity-50"> {heroContents[0]?.headline?.split(' ').slice(3).join(' ')}</span>
                                    </h1>
                                    <p
                                        ref={sublineRef}
                                        className="text-xl lg:text-2xl font-medium text-textColorTwo">
                                        {heroContents[0]?.subline}
                                    </p>
                                </div>
                                <div className="w-full md:w-3/4 lg:w-4/6 mx-auto flex flex-col md:flex-row justify-center items-center gap-3 space-y-3 md:space-y-0">
                                    <div ref={buttonRefOne}
                                        className="w-60 lg:w-full flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                        <Link href="/demo" className="flex-1 font-bold text-lg bg-black px-10 xl:px-16 py-5 rounded-full hover:scale-95 transition-all duration-300">
                                            Book a Demo
                                        </Link>
                                    </div>
                                    <div ref={buttonRefTwo}
                                        className="w-60 lg:w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                                        <Link href="pricing" className="flex-1 font-semibold text-lg bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                            See Our Pricing
                                        </Link>
                                    </div>
                                </div>

                            </div>


                            <div className="relative mt-24 max-w-7xl mx-auto">
                                <div ref={imageRef}
                                    className="w-full flex justify-center items-center relative px-5">

                                    <Image className="w-full max-w-[15%] lg:max-w-[18%] mx-auto rounded-[10px] lg:rounded-[26px] border border-borderColor animate-floatReverse z-20 absolute left-5 lg:top-40"
                                        src={heroContents[0]?.bannerImageOne?.asset?.url ? heroContents[0]?.bannerImageOne?.asset?.url : HeroBgTwo}
                                        width={300} height={300}
                                        alt="HeroBg" />
                                    <Image className="w-full object-cover max-w-[88%] mx-auto rounded-[10px] lg:rounded-[26px]  animate-float z-10"
                                        src={heroContents[0]?.bannerImageTwo?.asset?.url ? heroContents[0]?.bannerImageTwo?.asset?.url : HeroBg}
                                        width={1200} height={1200} alt="HeroBg" />
                                    <Image className="w-full max-w-[15%] lg:max-w-[18%] mx-auto rounded-[10px] lg:rounded-[26px] border border-borderColor animate-floatReverse z-10 absolute right-5 bottom-8 lg:bottom-10 lg:right-8"
                                        src={heroContents[0]?.bannerImageTwo?.asset?.url ? heroContents[0]?.bannerImageThree?.asset?.url : HeroBgThree}
                                        width={500} height={500} alt="HeroBg" />
                                </div>

            
                                <div
                                    ref={gradientBgRef}
                                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                                </div>
                                <div ref={gradientBgRef}
                                    className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                                    <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                    <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                    <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                                </div>
                            </div>
                        </div>
                    )
            } */}

            <div className="relative mb-32 lg:mb-40">
                <div className="max-w-7xl mx-auto">
                    {
                        isLoading ? <div className="flex items-center justify-center h-screen"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div>
                            :
                            (
                                <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8  p-5">
                                    <div className="lg:max-w-[55%] space-y-5 text-center lg:text-start mb-10">
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
                                        className="w-full flex justify-center items-end relative px-5 lg:px-0">
                                        {heroContents[0]?.bannerImageOne && (
                                            <Image
                                                className="w-full p-2 max-w-[15%] mx-auto rounded-[10px] lg:rounded-xl border bg-card border-borderColor animate-floatReverse z-20 -mr-5 md:-mr-8 lg:-mr-10 "
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
                <div
                    ref={gradientBgRef}
                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>
            </div>
        </section>
    );
};

export default ColdEmailHero;
