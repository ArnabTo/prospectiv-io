'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './custom.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ColdEmail from '@/app/(app)/services/cold-email/page';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart2, Briefcase, Megaphone, Target } from 'lucide-react';

const LinkedinAdsServices = () => {
    return (
        <div>
            <div className='overflow-hidden relative'>
                <div className='max-w-7xl mx-auto p-5 py-16'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                        <div className='min-w-[35%] text-center lg:text-start space-y-5'>
                            <h2 className='text-3xl md:text-4xl font-bold'>Linkedin Ads Management</h2>
                            <p className='text-md lg:text-lg text-textColorTwo'>Whether it's for your business or clients, our LinkedIn Ads services are proven to grow B2B businesses.</p>
                        </div>
                        <div className='relative'>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 20,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: true,
                                }}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='bg-background h-full border border-borderColor rounded-3xl p-4 lg:p-6 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                                        <div className='flex flex-col flex-grow gap-2'>
                                            {/* <div className="flex justify-start items-center gap-2">
                                               icon
                                                <h2 className="text-3xl font-bold text-secondary">
                                                    gdd
                                                </h2>
                                            </div> */}
                                            <Briefcase size={50} className="text-secondary bg-foreground p-2 rounded-xl" />
                                            <h3 className='text-xl lg:text-2xl font-bold text-secondary'>Custom-Tailored LinkedIn Campaigns</h3>
                                            <p className='flex-grow text-base text-textColorTwo items-end'>

                                                We tailor LinkedIn ad campaigns to your business objectives and audience, crafting a strategic content plan for optimal results.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='bg-background h-full border border-borderColor rounded-3xl p-4 lg:p-6 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                                        <div className='flex flex-col flex-grow gap-2'>
                                            <Target size={50} className="text-secondary bg-foreground p-2 rounded-xl"/>
                                            <h3 className='text-xl lg:text-2xl font-bold text-secondary'>Audience Insights & Focused Targeting</h3>
                                            <p className='flex-grow text-base text-textColorTwo items-end'>
                                                We research your audience to ensure your ads reach the right people, using LinkedIn’s targeting tools or custom Account and Contact lists.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='bg-background h-full border border-borderColor rounded-3xl p-4 lg:p-6 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                                        <div className='flex flex-col flex-grow gap-2'>
                                            <Megaphone size={50} className="text-secondary bg-foreground p-2 rounded-xl"/>
                                            <h3 className='text-xl lg:text-2xl font-bold text-secondary'>Craft messages that inspire action</h3>
                                            <p className='flex-grow text-base text-textColorTwo items-end'>
                                            Our experts create impactful LinkedIn ads that drive conversions and refine content to engage your target audience.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='bg-background h-full border border-borderColor rounded-3xl p-4 lg:p-6 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                                        <div className='flex flex-col flex-grow gap-2'>
                                            <BarChart2 size={50} className="text-secondary bg-foreground p-2 rounded-xl"/>
                                            <h3 className='text-xl lg:text-2xl font-bold text-secondary'>Data-Driven Adjustments & Reporting</h3>
                                            <p className='flex-grow text-base text-textColorTwo items-end'>
                                                We monitor ad performance, provide actionable insights, and continuously optimise campaigns to maximise leads and ROI.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div
                                className=" blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkedinAdsServices;