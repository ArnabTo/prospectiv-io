
import { motion } from 'framer-motion';
import '../../app/globals.css'
import Link from 'next/link';
import ImageTwo from '@/public/assets/whatwedonetow.svg'
import ImageThree from '@/public/assets/whatwedothree.svg'
import Image from 'next/image';
import { WhatWeDoTextContent } from '@/lib/TextContent';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const WhatWeDo = () => {

    const animateRef = useRef(null);
    const contentOneRef = useRef(null);
    const contentTwoRef = useRef(null);
    const contentThreeRef = useRef(null);
    const contentFourRef = useRef(null);
    const gradientBgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: animateRef.current,
                start: 'top bottom',
                toggleActions: 'play none none none',
                once: true
            }
        })

        tl.fromTo(animateRef.current, {
            opacity: 0,
            y: 10,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
        })
        .fromTo(contentOneRef.current, {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
        })
        .fromTo(contentTwoRef.current, {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
        })
        .fromTo(contentThreeRef.current, {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
        })
        .fromTo(contentFourRef.current, {
            opacity: 0,
            y: 10,
        }, {
            opacity: 1,
            y: 0,
        })
    }, []);

    return (
        
        <section className='max-w-7xl mx-auto px-5 lg:py-24 overflow-hidden'>
            <div className='space-y-16'>
                <div 
                ref={animateRef}
                className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>{WhatWeDoTextContent?.heading?.heading}</h1>
                    <div className='space-y-5'>
                        <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                           {WhatWeDoTextContent?.heading?.paragraph}
                        </p>
                        <div className="w-60 lg:w-full md:max-w-60 flex mx-auto lg:mx-0 rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="/demo" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <div className='flex flex-col-reverse lg:flex-row gap-5'>
                        <div 
                        ref={contentOneRef}
                        className='flex flex-col gap-5 w-full lg:w-[40%] relative'>
                            <div className='bg-card rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                        1
                                    </div>
                                    <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent1?.heading}</h1>
                                    <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent1?.paragraph}</p>
                                </div>
                            </div>
                            <div className='bg-card rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-4 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                   2
                               </div>
                               <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent2?.heading}</h1>
                               <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent2?.paragraph}</p>
                                </div>
                            </div>

                            <div ref={gradientBgRef}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-24 -z-10 animate-spin-slow transition-all">
                                <div className="bg-gradientColorTwo absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorFive absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorFour absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </div>
                        </div>
                        <div
                        ref={contentTwoRef}
                        className='w-full lg:w-[60%]'>
                            <Image src={ImageTwo} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row-reverse gap-5'>
                        <div className='w-full lg:w-[40%] relative'>
                            <div
                            ref={contentThreeRef}
                            className='bg-card  h-full rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                        3
                                    </div>
                                    <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent3?.heading}</h1>
                                   <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent3?.paragraph}</p>
                                </div>
                            </div>
                            <div ref={gradientBgRef}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-44 lg:right-52 -z-10 animate-spin-slow transition-all">
                                <div className="bg-gradientColorOne absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorTwo absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorThree absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </div>
                        </div>
                        <div
                        ref={contentFourRef}
                        className='w-full lg:w-[60%]'>
                            <Image src={ImageThree} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
