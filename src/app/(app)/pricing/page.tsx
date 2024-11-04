'use client';
import ROICalculator from '@/components/roi-calculator/RoiCalculator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowUpNarrowWide, Bell, ChartNoAxesColumnIncreasing, Gift, Magnet, MessagesSquare, Rocket, Search, SquareArrowOutUpRight, User, Users } from 'lucide-react';
import React from 'react';
import { pricingPageTextContent } from '@/lib/TextContent';
import { motion } from 'framer-motion';
import '../../custom.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

const PricingPage = () => {
    return (
        <div className='max-w-7xl mx-auto py-24 space-y-24 px-5'>
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='space-y-3'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Your pricing and forecast</h1>
                <p className='text-center text-lg text-textColorTwo'>Answer three questions to see our pricing and your predicted ROI</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <ROICalculator />
            </motion.div>

            <div className='space-y-7'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>What's included?</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl h-full'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Magnet color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentOne.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentOne.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Rocket color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentTwo.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentTwo.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl h-full'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Search color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentThree.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentThree.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Bell color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentFour.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentFour.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Users color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentFive.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentFive.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl h-full'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <ArrowUpNarrowWide color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentSix.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentSix.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl h-full'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Magnet color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentSeven.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentSeven.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        viewport={{ once: true }}
                        className='card-animation rounded-xl cursor-pointer'
                    >
                        <Card className='border border-borderColor rounded-xl'>
                            <CardHeader>
                                <div className='bg-foreground w-max p-2 rounded-full'>
                                    <Gift color='#FF4895' size={32} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className='font-bold text-xl'>{pricingPageTextContent.whatsincluded.contentEight.heading}</h3>
                                <p className='text-lg text-textColorTwo'>{pricingPageTextContent.whatsincluded.contentEight.paragraph}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>

            <div className='space-y-8'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>Your campaign could be live in 21 days</h1>

                <div className='hidden lg:grid grid-cols-5'>
                    <div className='relative group'>
                        <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>1</div>
                            <User strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='text-center mt-5'>
                            <h4 className='text-xl font-bold'>You are here</h4>
                            <p className='text-lg text-textColorTwo'>November 4, 15:08</p>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>2</div>
                            <MessagesSquare strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='text-center mt-5'>
                            <h4 className='text-xl font-bold'>Consultatin and demo</h4>
                            <p className='text-lg text-textColorTwo'>November 4, 17:08</p>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>3</div>
                            <ChartNoAxesColumnIncreasing strokeWidth={5} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='text-center mt-5'>
                            <h4 className='text-xl font-bold'>Proposal</h4>
                            <p className='text-lg text-textColorTwo'>November 4, 17:08</p>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>4</div>
                            <SquareArrowOutUpRight strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='text-center mt-5'>
                            <h4 className='text-xl font-bold'>Onboarding</h4>
                            <p className='text-lg text-textColorTwo'>November 12, 09:00</p>
                        </div>
                    </div>

                    <div className='relative group'>
                        <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>5</div>
                            <Rocket strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                        </div>
                        <div className='text-center mt-5'>
                            <h4 className='text-xl font-bold'>Go Live</h4>
                            <p className='text-lg text-textColorTwo'>November 26, 09:00</p>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden relative'>
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: false,
                                translate: ['-120%', 0, -500],
                            },
                            next: {
                                shadow: false,
                                translate: ['120%', 0, -500],
                            },
                        }}
                        modules={[EffectCreative]}
                        className="pricing-swiper w-max h-24"
                    >
                        <SwiperSlide className='pricing-swiper-slide'>
                            <div className='relative group'>
                                <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                    <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>1</div>
                                    <User strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h4 className='text-xl font-bold'>You are here</h4>
                                    <p className='text-lg text-textColorTwo'>November 4, 15:08</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pricing-swiper-slide'>
                            <div className='relative group'>
                                <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                    <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>2</div>
                                    <MessagesSquare strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h4 className='text-xl font-bold'>Consultatin and demo</h4>
                                    <p className='text-lg text-textColorTwo'>November 4, 17:08</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pricing-swiper-slide'>
                            <div className='relative group'>
                                <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                    <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>3</div>
                                    <ChartNoAxesColumnIncreasing strokeWidth={5} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h4 className='text-xl font-bold'>Proposal</h4>
                                    <p className='text-lg text-textColorTwo'>November 4, 17:08</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pricing-swiper-slide'>
                            <div className='relative group'>
                                <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                    <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>4</div>
                                    <SquareArrowOutUpRight strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h4 className='text-xl font-bold'>Onboarding</h4>
                                    <p className='text-lg text-textColorTwo'>November 12, 09:00</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pricing-swiper-slide'>
                            <div className='relative group'>
                                <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                    <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>5</div>
                                    <Rocket strokeWidth={3} color='#000000' size={50} className='group-hover:scale-125 transition-all duration-300 ease-in-out' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h4 className='text-xl font-bold'>Go Live</h4>
                                    <p className='text-lg text-textColorTwo'>November 26, 09:00</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute top-0 lg:-left-52 -z-10 animate-spin-slow transition-all">
                        <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                </div>
            </div>

            <div>
                 <div>
                    <div>
                        <h2>Logo</h2>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default PricingPage;