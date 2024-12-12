'use client'
import React, { useEffect, useRef } from 'react';
import ImageFour from '@/public/assets/chart.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { OmniSection } from '@/lib/TextContent';
import gsap from 'gsap';
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
        <div className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-10 p-5 lg:p-10'>
                    <div className='lg:max-w-[40%] space-y-5 h-full'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>{OmniSection.heading.heading}</h1>
                        <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                            {OmniSection.heading.paragraph}
                        </p>
                    </div>
                    <div className='w-full h-full lg:max-w-[50%] bg-card p-5 border border-borderColor rounded-xl lg:rounded-3xl'>
                        <Image className='w-full h-full object-cover rounded-lg lg:rounded-3xl' src={ImageFour} alt='sdfsdf' width={800} height={800} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Omni;