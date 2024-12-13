import Link from "next/link";
import HeroBg from '@/public/assets/homeherobg.svg';
import HeroBgTwo from '@/public/assets/herobgtwo.svg';
import HeroBgThree from '@/public/assets/herobgthree.svg'
import Image from "next/image";
import Partners from "@/components/partners/Partners";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {

    const animateRef = useRef(null);
    const sublineRef = useRef(null);
    const buttonRefOne = useRef(null);
    const buttonRefTwo = useRef(null);
    const imageRef = useRef(null);
    const gradientBgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const isFirstVisit = !sessionStorage.getItem('hasVisitedHome');
        const delay = isFirstVisit ? 3 : 0; // Delay in seconds
    
        // Mark the home page as visited
        if (isFirstVisit) {
            sessionStorage.setItem('hasVisitedHome', 'true');
        }
    
        // GSAP Timeline with delay
        const tl = gsap.timeline({
            delay, // Add the delay here
            scrollTrigger: {
                trigger: animateRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    
        tl.fromTo(animateRef.current, {
            opacity: 0,
            y: 10,
            scale: 0.9,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
        })
            .fromTo(sublineRef.current, {
                opacity: 0,
                y: 10,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
            }, "+=0.1")
            .fromTo(buttonRefOne.current, {
                opacity: 0,
                y: 10,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, "+=0.1")
            .fromTo(buttonRefTwo.current, {
                opacity: 0,
                y: 10,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, "+=0.1")
            .fromTo(imageRef.current, {
                opacity: 0,
                y: 10,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, "+=0.1")
            .fromTo(gradientBgRef.current, {
                opacity: 0,
                scale: 0.9,
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
            });
    
        return () => {
            // Cleanup scroll triggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (

        <section className="overflow-hidden pt-24 relative z-10">
            <div className="max-w-7xl mx-auto relative space-y-24 pb-24 lg:mb-24">
                <div className="w-full lg:w-3/4 text-center mx-auto space-y-10 px-4 md:px-10 lg:p-0 xl:p-10">
                    <div className="space-y-5">
                        <h1
                            ref={animateRef}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
                            {/* Drive More Sales */}
                            Omni-Channel
                            <span className="text-transparent bg-clip-text bg-foreground lg:bg-gradient-to-l from-[#ED4A8D] to-[#5C55F6] bg-opacity-50"> B2B Lead Generation.
                                {/* Meetings with Your Ideal Customers. */}
                            </span>
                        </h1>
                        <p
                            ref={sublineRef}
                            className="text-xl lg:text-2xl font-medium text-textColorTwo">
                            {/* Helping small and medium service businesses book more sales meetings, so you can focus on growth. */}
                            Our lead generation experts include Google Ads Certified Partners, LinkedIn Ads
                            Certification holders, and cold email specialists. Our omnichannel approach
                            provides a one-stop shop lead generation solution for any business.
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

                        <Image className="w-full max-w-[15%] lg:max-w-[18%] mx-auto rounded-[10px] lg:rounded-[26px] border border-borderColor animate-floatReverse z-20 absolute left-5 lg:top-40" src={HeroBgTwo} width={300} height={300} alt="HeroBg" />
                        <Image className="w-full object-cover max-w-[88%] mx-auto rounded-[10px] lg:rounded-[26px]  animate-float z-10" src={HeroBg} width={1200} height={1200} alt="HeroBg" />
                        <Image className="w-full max-w-[15%] lg:max-w-[18%] mx-auto rounded-[10px] lg:rounded-[26px] border border-borderColor animate-floatReverse z-10 absolute right-5 bottom-5 lg:right-8" src={HeroBgThree} width={500} height={500} alt="HeroBg" />
                    </div>

                    {/* Gradient Blurs */}
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
            <Partners />
        </section>
    );
};

export default Hero;
