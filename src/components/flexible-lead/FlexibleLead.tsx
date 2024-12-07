import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ImageOne from '@/public/assets/sectwocontentone.png'
import ImageTwo from '@/public/assets/sectwocontenttwo.png'
import ImageThree from '@/public/assets/sectwocontentthree.png'
import { SectionTwoTextContent } from '@/lib/TextContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


const FlexibleLead = () => {

    const animateRef = useRef(null);
    const cardOneRef = useRef(null);
    const cardTwoRef = useRef(null);
    const cardThreeRef = useRef(null);
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
            .fromTo(cardOneRef.current, {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
            .fromTo(cardTwoRef.current, {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, '+=0.1')
            .fromTo(cardThreeRef.current, {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, '+=0.1')
            .fromTo(gradientBgRef.current, {
                opacity: 0,
                scale: 0.9
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5
            });
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-5 lg:py-24 overflow-hidden'>
            <div className='flex flex-col lg:flex-row flex-start justify-between gap-5 lg:gap-10 space-y-5'>
                <div
                    ref={animateRef}
                    className='sticky top-5 md:max-w-lg lg:max-w-[300px] xl:max-w-md space-y-5 mx-auto'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>{SectionTwoTextContent?.heading?.heading}</h1>
                    <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                        {SectionTwoTextContent?.heading?.paragraph}
                    </p>
                    <div className="w-60 lg:w-full md:max-w-60 mx-auto lg:mx-0 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                        <Link href="/result/success-story" className="flex-1 font-bold text-xl text-center bg-black px-5 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                            Success Stories
                        </Link>
                    </div>
                </div>
                <div className='xl:max-w-[60%]'>
                    <motion.div
                        className='relative'>
                        <div className='flex flex-col gap-10'>
                            <div ref={cardOneRef}
                                className='bg-card rounded-2xl border border-borderColor flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                                <div>
                                    <Image src={ImageOne} width={200} height={200} alt="image" className='max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                                </div>
                                <div className='space-y-4 w-full'>
                                    <h1 className='text-3xl font-extrabold'>{SectionTwoTextContent?.cardTextContent1?.heading}</h1>
                                    <p className='text-md lg:text-lg text-textColorTwo'>{SectionTwoTextContent?.cardTextContent1?.paragraph}</p>
                                </div>
                            </div>

                            <div ref={cardTwoRef}
                                className='bg-card rounded-2xl border border-borderColor flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                                <div>
                                    <Image src={ImageTwo} width={200} height={200} alt="image" className=' max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                                </div>
                                <div className='space-y-4 w-full'>
                                    <h1 className='text-3xl font-extrabold'>{SectionTwoTextContent?.cardTextContent2?.heading}</h1>
                                    <p className='text-md lg:text-lg text-textColorTwo'>{SectionTwoTextContent?.cardTextContent2?.paragraph}</p>
                                </div>
                            </div>

                            <div ref={cardThreeRef}
                                className='bg-card rounded-2xl border border-borderColor flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                                <div>
                                    <Image src={ImageThree} width={200} height={200} alt="image" className=' max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                                </div>
                                <div className='space-y-4 w-full'>
                                    <h1 className='text-3xl font-extrabold'>{SectionTwoTextContent?.cardTextContent3?.heading}</h1>
                                    <p className='text-md lg:text-lg text-textColorTwo'> {SectionTwoTextContent?.cardTextContent3?.paragraph}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={gradientBgRef}
                            className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-40 -z-10 animate-spin-slow transition-all">
                            <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                            <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                            <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FlexibleLead;
