'use client';
import ROICalculator from '@/components/roi-calculator/RoiCalculator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowUpNarrowWide, Bell, ChartNoAxesColumnIncreasing, Gift, Magnet, MessagesSquare, Rocket, Search, SquareArrowOutUpRight, Star, User, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { pricingPageTextContent } from '@/lib/TextContent';
import { motion } from 'framer-motion';
import '../../custom.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import Rating from '@/components/rating/RatingComponent';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import MarketBg from '@/public/assets/market.png'
import CompanyLogoOne from '@/public/assets/company_logo/logoOne.svg'
import CompanyLogoTwo from '@/public/assets/company_logo/logoTwo.svg'
import CompanyLogoThree from '@/public/assets/company_logo/logoThree.svg'
import CompanyLogoFour from '@/public/assets/company_logo/logoFour.svg'
import { campaignDateCalculator } from '@/utils/campaignDateCalculator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
interface CampaignEvent {
    event: string;
    date: string;
}
const PricingPage = () => {

    const [dates, setDates] = useState<CampaignEvent[]>([]);

    useEffect(() => {
        const campaignDates = campaignDateCalculator(new Date());
        setDates(campaignDates);
    }, [])

    // console.log(dates)
    return (
        <div className='py-24  px-3 overflow-hidden'>
            <div className='max-w-7xl mx-auto space-y-40'>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='space-y-3 mb-5'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Your pricing and forecast</h1>
                        <p className='text-center text-lg text-textColorTwo'>Answer three questions to see our pricing and your predicted ROI</p>
                    </motion.div>

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
                            <Card className='border border-borderColor rounded-xl h-full'>
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
                            <Card className='border border-borderColor rounded-xl h-full'>
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
                            <Card className='border border-borderColor rounded-xl h-full'>
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
                            <Card className='border border-borderColor rounded-xl h-full h-full'>
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
                            className='card-animation rounded-xl cursor-pointer h-full'
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
                            <Card className='border border-borderColor rounded-xl h-full'>
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

                        <div className='relative group cursor-pointer'>
                            <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>1</div>
                                <User strokeWidth={2} color='#ff4895 ' size={50} className='group-hover:animate-bounce group-hover:scale-125 transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='text-center mt-5'>
                                <h4 className='text-xl font-bold'>You are here</h4>
                                <p className='text-lg text-textColorTwo'>{dates[0]?.date}</p>
                            </div>
                        </div>

                        <div className='relative group cursor-pointer'>
                            <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>2</div>
                                <MessagesSquare strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='text-center mt-5'>
                                <h4 className='text-xl font-bold'>Consultatin and demo</h4>
                                <p className='text-lg text-textColorTwo'>{dates[1]?.date}</p>
                            </div>
                        </div>

                        <div className='relative group cursor-pointer'>
                            <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>3</div>
                                <ChartNoAxesColumnIncreasing strokeWidth={3} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='text-center mt-5'>
                                <h4 className='text-xl font-bold'>Proposal</h4>
                                <p className='text-lg text-textColorTwo'>{dates[2]?.date}</p>
                            </div>
                        </div>

                        <div className='relative group cursor-pointer'>
                            <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>4</div>
                                <SquareArrowOutUpRight strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='text-center mt-5'>
                                <h4 className='text-xl font-bold'>Onboarding</h4>
                                <p className='text-lg text-textColorTwo'>{dates[3]?.date}</p>
                            </div>
                        </div>

                        <div className='relative group cursor-pointer'>
                            <div className='bg-foreground max-w-[50%] mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>5</div>
                                <Rocket strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='text-center mt-5'>
                                <h4 className='text-xl font-bold'>Go Live</h4>
                                <p className='text-lg text-textColorTwo'>{dates[4]?.date}</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden relative'>
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <div className='relative group cursor-pointer pt-4'>
                                        <div className='bg-foreground w-32 mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>1</div>
                                            <User strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h4 className='text-xl font-bold'>You are here</h4>
                                            <p className='text-lg text-textColorTwo'>{dates[0]?.date}</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className='relative group cursor-pointer pt-4'>
                                        <div className='bg-foreground w-32 mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>2</div>
                                            <MessagesSquare strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h4 className='text-xl font-bold'>Consultatin and demo</h4>
                                            <p className='text-lg text-textColorTwo'>{dates[1]?.date}</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className='relative group cursor-pointer pt-4'>
                                        <div className='bg-foreground w-32 mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>3</div>
                                            <ChartNoAxesColumnIncreasing strokeWidth={3} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h4 className='text-xl font-bold'>Proposal</h4>
                                            <p className='text-lg text-textColorTwo'>{dates[2]?.date}</p>
                                        </div>
                                    </div>

                                </CarouselItem>

                                <CarouselItem>
                                    <div className='relative group cursor-pointer pt-4'>
                                        <div className='bg-foreground w-32 mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>4</div>
                                            <SquareArrowOutUpRight strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h4 className='text-xl font-bold'>Onboarding</h4>
                                            <p className='text-lg text-textColorTwo'>{dates[3]?.date}</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className='relative group cursor-pointer pt-4'>
                                        <div className='bg-foreground w-32 mx-auto p-10 rounded-3xl relative flex justify-center items-center'>
                                            <div className='absolute -top-2 -left-2 bg-secondary rounded-full w-8 h-8 flex justify-center items-center group-hover:scale-110 transition-all duration-300 ease-in-out'>5</div>
                                            <Rocket strokeWidth={2} color='#ff4895' size={50} className='group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
                                        </div>
                                        <div className='text-center mt-5'>
                                            <h4 className='text-xl font-bold'>Go Live</h4>
                                            <p className='text-lg text-textColorTwo'>{dates[4]?.date}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className='left-0' />
                            <CarouselNext className='right-0'/>
                        </Carousel>

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

                <div className='bg-card border border-borderColor rounded-xl p-10 relative'>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className="w-full h-1/2 relative">
                                <Image
                                    className="w-full h-full object-scale-down"
                                    src={CompanyLogoOne}
                                    width={300}
                                    height={300}
                                    alt="award_thumbnail"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.5</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className="w-full h-1/2 relative">
                                <Image
                                    className="w-full h-full object-scale-down"
                                    src={CompanyLogoTwo}
                                    width={300}
                                    height={300}
                                    alt="award_thumbnail"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.5} />
                                <p className='text-textColorTwo text-lg'>4.5</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className="w-full h-1/2 relative">
                                <Image
                                    className="w-full h-full object-scale-down"
                                    src={CompanyLogoThree}
                                    width={300}
                                    height={300}
                                    alt="award_thumbnail"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <Rating rating={5.0} />
                                <p className='text-textColorTwo text-lg'>5.0</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <div className="w-full h-1/2 relative">
                                <Image
                                    className="w-full h-full object-scale-down"
                                    src={CompanyLogoFour}
                                    width={300}
                                    height={300}
                                    alt="award_thumbnail"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <Rating rating={4.0} />
                                <p className='text-textColorTwo text-lg'>4.0</p>
                            </div>
                        </div>
                    </div>
                    <div><Separator orientation='horizontal' /></div>

                    <div className='text-center mt-5'><Link href='#' className='text-center mx-auto'>See our 152 reviews on ❇️Trustpilot</Link></div>
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
                </div>

                <div className='lg:w-9/12 mx-auto relative'>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-10 border border-borderColor rounded-xl p-7 bg-card'>
                        <div className='space-y-5'>
                            <h3 className='text-3xl lg:text-4xl font-bold'>Map your entire market</h3>
                            <p className='text-lg text-textColorTwo'>Descover the size of your audience in minutes. Understand how many contacts Prospectiv can engage on your behalf</p>
                            <div className="w-60 flex rounded-full mx-auto md:mx-0 shadow-lg duration-300 transform group-hover:scale-105">
                                <Link href="/demo" className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300  py-5 rounded-full hover:bg-buttonHoverColor">
                                    Book a call
                                </Link>
                            </div>
                        </div>
                        <Image src={MarketBg} width={400} height={400} alt="bg" />
                    </div>
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
            </div>
        </div>
    );
};

export default PricingPage;