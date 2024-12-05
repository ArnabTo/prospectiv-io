'use client'
import React, { useEffect, useRef } from 'react';
import ImageFour from '@/public/assets/sectwocontentfour.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { HowItWorkTextContent, OmniSection } from '@/lib/TextContent';
import gsap from 'gsap';
import Link from 'next/link';
import { CarouselRoot, CarouselSlides, CarouselSlide } from '../ui/stack-carousel';
import CardCarousel from './CarouselComp';
import Lenis from '@studio-freight/lenis';
import { useScroll } from 'framer-motion';
import CarouselComp from './CarouselComp';
const Omni = () => {

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
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row-reverse justify-between items-start gap-10'>
                <div className='lg:max-w-[40%] flex flex-col-reverse lg:flex-col items-center gap-10'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>{OmniSection.heading.heading}</h1>
                        <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                            {OmniSection.heading.paragraph}
                        </p>
                        <div className="w-60 lg:w-full md:max-w-60 mx-auto lg:mx-0 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="/result/success-story" className="flex-1 font-bold text-xl text-center bg-black px-5 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                                Success Stories
                            </Link>
                        </div>
                    </div>
                    <div className='bg-card border border-borderColor h-full'>
                        <Image className='w-full h-full' src={ImageFour} width={500} height={500} alt='image' />
                    </div>
                </div>
                {/* <div className='relative'>
                    <div className='flex flex-col gap-5'>
                        <div
                            className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        >
                            <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{OmniSection?.cardTextContent1?.heading}</h3>
                            <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{OmniSection?.cardTextContent1?.paragraph}</p>
                        </div>
                        <div
                            className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        >
                            <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{OmniSection?.cardTextContent1?.heading}</h3>
                            <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{OmniSection?.cardTextContent1?.paragraph}</p>
                        </div>
                        <div
                            className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        >
                            <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{OmniSection?.cardTextContent1?.heading}</h3>
                            <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{OmniSection?.cardTextContent1?.paragraph}</p>
                        </div>
                    </div>
                    <div ref={gradientBgRef}
                        className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-40 -z-10 transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
                </div> */}
                <div className='relative'>
                    <div className='flex flex-col gap-5'>
                        <div ref={cardOneRef}
                            className='bg-card border-l-2 border-secondary  flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>{OmniSection?.cardTextContent1?.heading}</h1>
                                <p className='text-md lg:text-lg text-textColorTwo'>{OmniSection?.cardTextContent1?.paragraph}</p>
                            </div>
                        </div>
                        <div ref={cardOneRef}
                            className='bg-card border-l-2 border-secondary  flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>{OmniSection?.cardTextContent1?.heading}</h1>
                                <p className='text-md lg:text-lg text-textColorTwo'>{OmniSection?.cardTextContent1?.paragraph}</p>
                            </div>
                        </div>
                        <div ref={cardOneRef}
                            className='bg-card border-l-2 border-secondary  flex flex-col md:flex-row justify-between items-start lg:items-center gap-10 p-5 lg:p-10 cursor-pointer shadow-black hover:shadow-xl transition-all duration-300 ease-in-out'>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>{OmniSection?.cardTextContent1?.heading}</h1>
                                <p className='text-md lg:text-lg text-textColorTwo'>{OmniSection?.cardTextContent1?.paragraph}</p>
                            </div>
                        </div>
                    </div>

                    <div ref={gradientBgRef}
                        className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-40 -z-10 transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
                </div>
            </div>
            {/* 
            <div className='max-w-[70%] mx-auto rounded-lg'>
                <CarouselRoot
                    slideCount={3}
                    slideLeftAfterXSlides={-1}
                    className="flex flex-col gap-3 w-full border border-red-500"
                >
                    <CarouselSlides>

                        <CarouselSlide
                            key={1}
                            index={1}
                            className={`p-6 rounded-lg bg-gradient-to-b w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg overflow-hidden ${1 % 2 == 0
                                ? 'from-white from-10% via-neutral-200 via-90% to-neutral-400 text-black'
                                : 'from-neutral-800 from-10% via-neutral-900 via-90% to-neutral-950 text-white'
                                }`}
                        >
                            <p className="text-2xl">Lorem ipsum</p>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eos, consequuntur praesentium beatae itaque, distinctio
                                dolorum voluptatem, autem placeat tenetur ex unde. Quisquam
                                explicabo corrupti veniam doloremque in ducimus magnam
                                nihil!
                            </p>
                        </CarouselSlide>

                        <CarouselSlide
                            key={1}
                            index={1}
                            className={`p-6 rounded-lg bg-gradient-to-b w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg overflow-hidden ${1 % 2 == 0
                                ? 'from-white from-10% via-neutral-200 via-90% to-neutral-400 text-black'
                                : 'from-neutral-800 from-10% via-neutral-900 via-90% to-neutral-950 text-white'
                                }`}
                        >
                            <p className="text-2xl">Lorem ipsum</p>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eos, consequuntur praesentium beatae itaque, distinctio
                                dolorum voluptatem, autem placeat tenetur ex unde. Quisquam
                                explicabo corrupti veniam doloremque in ducimus magnam
                                nihil!
                            </p>
                        </CarouselSlide>

                        <CarouselSlide
                            key={1}
                            index={1}
                            className={`p-6 rounded-lg bg-gradient-to-b w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-lg overflow-hidden ${1 % 2 == 0
                                ? 'from-white from-10% via-neutral-200 via-90% to-neutral-400 text-black'
                                : 'from-neutral-800 from-10% via-neutral-900 via-90% to-neutral-950 text-white'
                                }`}
                        >
                            <p className="text-2xl">Lorem ipsum</p>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eos, consequuntur praesentium beatae itaque, distinctio
                                dolorum voluptatem, autem placeat tenetur ex unde. Quisquam
                                explicabo corrupti veniam doloremque in ducimus magnam
                                nihil!
                            </p>
                        </CarouselSlide>

                    </CarouselSlides>
                </CarouselRoot>
            </div> */}

            <div>
                <CarouselComp />
            </div>
        </div>

    );
};

export default Omni;