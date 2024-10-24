'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HeaderImage from '@/public/assets/campany-culture.jpg'
import { aboutUsPageTextContent } from "@/lib/TextContent";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useRef } from "react";
import Lottie from "lottie-react";


const AboutUs = () => {

    const perSpectiveValuesLottieOne = useRef(null);
    const perSpectiveValuesLottieTwo = useRef(null);
    const perSpectiveValuesLottieThree = useRef(null);
    const perSpectiveValuesLottieFour = useRef(null);

    const handleMouseEnter = (lottieRef: React.RefObject<any>) => {
        lottieRef?.current?.play(); // Play animation on hover
    };

    const handleMouseLeave = (lottieRef: React.RefObject<any>) => {
        lottieRef?.current?.stop(); // Stop the animation when hover ends
    };

    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-6xl font-extrabold '>About <span className='text-secondary'>Us</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>
                        {aboutUsPageTextContent?.heading?.paragraph}
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-lg'>Company</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>About us</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto space-y-24">

                <div className="flex justify-between items-center gap-10 py-10">
                    <div className="w-1/2">
                        <Image width={500} height={500} className="w-full rounded-2xl"
                            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder image" />
                    </div>
                    <div className="w-1/2 space-y-5">
                        <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.founder?.heading}</h3>
                        <p className="text-textColorTwo text-lg">{aboutUsPageTextContent?.founder?.paragraph}</p>
                    </div>
                </div>

                <div className='space-y-16 p-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='lg:w-5/6 mx-auto text-center space-y-5'>
                        <h3 className='text-4xl font-bold'>Perspectiv values</h3>
                        <p className='text-textColorTwo text-lg'>
                            {aboutUsPageTextContent?.prospectiValues?.heading?.paragraph}
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                            onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieOne)}
                            onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieOne)}
                        >
                            <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                <Lottie
                                    lottieRef={perSpectiveValuesLottieOne}
                                    animationData={require('@/public/assets/Down Payment.json')}
                                    loop={false} // Play only once
                                    autoplay={false} // Disable autoplay
                                />
                            </div>
                            <div className='space-y-3 text-center lg:text-start'>
                                <h3 className='text-2xl font-bold text-secondary'> {aboutUsPageTextContent?.prospectiValues?.contentOne?.heading}</h3>
                                <p className='text-textColorTwo text-lg'>
                                    {aboutUsPageTextContent?.prospectiValues?.contentOne?.paragraph}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                            onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieTwo)}
                            onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieTwo)}
                        >
                            <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                <Lottie
                                    lottieRef={perSpectiveValuesLottieTwo}
                                    animationData={require('@/public/assets/Trophy.json')}
                                    loop={false} // Play only once
                                    autoplay={false} // Disable autoplay
                                />
                            </div>
                            <div className='space-y-3 text-center lg:text-start'>
                                <h3 className='text-2xl font-bold text-secondary'> {aboutUsPageTextContent?.prospectiValues?.contentTwo?.heading}</h3>
                                <p className='text-textColorTwo text-lg'>
                                    {aboutUsPageTextContent?.prospectiValues?.contentTwo?.paragraph}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                            onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieThree)}
                            onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieThree)}
                        >
                            <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                <Lottie
                                    lottieRef={perSpectiveValuesLottieThree}
                                    animationData={require('@/public/assets/Team.json')}
                                    loop={false} // Play only once
                                    autoplay={false} // Disable autoplay
                                />
                            </div>
                            <div className='space-y-3 text-center lg:text-start'>
                                <h3 className='text-2xl font-bold text-secondary'> {aboutUsPageTextContent?.prospectiValues?.contentThree?.heading}</h3>
                                <p className='text-textColorTwo text-lg'>
                                    {aboutUsPageTextContent?.prospectiValues?.contentThree?.paragraph}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                            onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieFour)}
                            onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieFour)}
                        >
                            <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                <Lottie
                                    lottieRef={perSpectiveValuesLottieFour}
                                    animationData={require('@/public/assets/Partnership.json')}
                                    loop={false} // Play only once
                                    autoplay={false} // Disable autoplay
                                />
                            </div>
                            <div className='space-y-3 text-center lg:text-start'>
                                <h3 className='text-2xl font-bold text-secondary'> {aboutUsPageTextContent?.prospectiValues?.contentFour?.heading}</h3>
                                <p className='text-textColorTwo text-lg'>
                                    {aboutUsPageTextContent?.prospectiValues?.contentFour?.paragraph}
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="space-y-16 p-5">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='lg:w-5/6 mx-auto text-center space-y-5'>
                        <h3 className='text-4xl font-bold'> {aboutUsPageTextContent?.meetCampaignMember?.heading?.heading}</h3>
                        <p className='text-textColorTwo text-lg'>
                            {aboutUsPageTextContent?.meetCampaignMember?.heading?.paragraph}
                        </p>
                    </motion.div>

                    <div className="space-y-10">
                        
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center gap-10 lg:max-w-[80%] mx-auto">
                            <div className="w-96 h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-full">
                                <Image
                                    className="w-full h-full rounded-full border border-borderColor"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.contentOne?.image}
                                    width={500} height={500} alt="member image" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.contentOne?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.contentOne?.paragraph}</p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:max-w-[80%] mx-auto">
                            <div className="w-96 h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-full">
                                <Image
                                    className="w-full h-full rounded-full border border-borderColor"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.contentTwo?.image}
                                    width={500} height={500} alt="member image" />
                            </div>
                            <div className="space-y-3 lg:text-end">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.contentTwo?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.contentTwo?.paragraph}</p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center gap-10 lg:max-w-[80%] mx-auto">
                            <div className="w-96 h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-full">
                                <Image
                                    className="w-full h-full rounded-full border border-borderColor"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.contentThree?.image}
                                    width={500} height={500} alt="member image" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.contentThree?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.contentThree?.paragraph}</p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:max-w-[80%] mx-auto">
                            <div className="w-80 h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-full">
                                <Image
                                    className="w-full h-full rounded-full border border-borderColor"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.contentFour?.image}
                                    width={500} height={500} alt="member image" />
                            </div>
                            <div className="space-y-3 lg:text-end">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.contentFour?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.contentFour?.paragraph}</p>
                            </div>
                        </motion.div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;