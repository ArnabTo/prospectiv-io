'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HeaderImage from '@/public/assets/campany-culture.jpg'
import { aboutUsPageTextContent } from "@/lib/TextContent";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useRef } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import '@/app/custom.css'
import { Link2Icon, Linkedin, LinkedinIcon, Mail } from "lucide-react";
import CountUp from "react-countup";

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
                <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold '>About <span className='text-secondary'>Us</span> </h1>
                    <p className='text-textColorTwo text-md lg:text-lg text-center font-bold mx-auto'>
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

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-5 py-10">
                    <div className="lg:w-1/2">
                        <Image width={500} height={500} className="w-full rounded-2xl"
                            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="founder image" />
                    </div>
                    <div className="lg:w-1/2 space-y-5">
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
                        <h2 className='text-4xl font-bold'>Perspectiv values</h2>
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
                        <h2 className='text-4xl font-bold'> {aboutUsPageTextContent?.meetCampaignMember?.heading?.heading}</h2>
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
                            <div className="lg:w-96 lg:h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-2xl lg:rounded-full">
                                <Image
                                    className="w-full h-full rounded-2xl lg:rounded-full border border-borderColor"
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
                          <div className="lg:w-96 lg:h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-2xl lg:rounded-full">
                                <Image
                                   className="w-full h-full rounded-2xl lg:rounded-full border border-borderColor"
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
                              <div className="lg:w-96 lg:h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-2xl lg:rounded-full">
                                <Image
                                    className="w-full h-full rounded-2xl lg:rounded-full border border-borderColor"
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
                              <div className="lg:w-96 lg:h-48 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree rounded-2xl lg:rounded-full">
                                <Image
                                   className="w-full h-full rounded-2xl lg:rounded-full border border-borderColor"
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

                <div className='space-y-5'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>#lifeatprospectiv</h2>

                    <div className="p-5 sm:p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                            <img className='rounded-xl' src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                        </motion.div>
                    </div>


                    <div className="w-60 lg:w-full max-w-64 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="" className="flex-1 font-semibold text-lg bg-buttonColor text-foreground text-center hover:scale-95 transition-all duration-300 px-10 xl:px-12 py-5 rounded-full hover:bg-buttonHoverColor">
                            See Our Pricing
                        </Link>
                    </div>
                </div>

                <div className="space-y-16 p-5">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='lg:w-5/6 mx-auto text-center space-y-5'>
                        <h2 className='text-4xl font-bold'> {aboutUsPageTextContent?.meetCampaignMember?.heading?.heading}</h2>
                        <p className='text-textColorTwo text-lg'>
                            {aboutUsPageTextContent?.meetCampaignMember?.heading?.paragraph}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative sm:w-[400px] md:w-[450px] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden group border border-borderColor cursor-pointer mx-auto"
                        >
                            <Image
                                width={300}
                                height={300}
                                src={aboutUsPageTextContent?.leaderShipTeam?.contentOne?.image}
                                alt="Harvey Todd"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-background/90 rounded-2xl transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                <div className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 overflow-auto lg:overflow-hidden p-4">
                                    <div className="text-start text-white p-2 sm:p-4 space-y-4 sm:space-y-6 md:space-y-8 max-h-[100%] sm:max-h-full">
                                        <span>
                                            <h3 className="text-lg md:text-3xl font-bold">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.name}
                                            </h3>
                                            <p className="lg:text-md text-secondary">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.position}
                                            </p>
                                            <Link href='' className="flex items-center gap-2 text-sm lg:text-lg">
                                                <Mail />: {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.email}
                                            </Link>
                                        </span>
                                        <p className="text-sm text-md lg:text-lg text-textColorTwo overflow-auto">
                                            {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.textContent}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative sm:w-[400px] md:w-[450px] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden group border border-borderColor cursor-pointer mx-auto"
                        >
                            <Image
                                width={300}
                                height={300}
                                src={aboutUsPageTextContent?.leaderShipTeam?.contentOne?.image}
                                alt="Harvey Todd"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-background/90 rounded-2xl transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                <div className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 overflow-auto lg:overflow-hidden p-4">
                                    <div className="text-start text-white p-2 sm:p-4 space-y-4 sm:space-y-6 md:space-y-8 max-h-[100%] sm:max-h-full">
                                        <span>
                                            <h3 className="text-lg md:text-3xl font-bold">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.name}
                                            </h3>
                                            <p className="lg:text-md text-secondary">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.position}
                                            </p>
                                            <Link href='' className="flex items-center gap-2 text-sm lg:text-lg">
                                                <Mail />: {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.email}
                                            </Link>
                                        </span>
                                        <p className="text-sm text-md lg:text-lg text-textColorTwo overflow-auto">
                                            {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.textContent}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative sm:w-[400px] md:w-[450px] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden group border border-borderColor cursor-pointer mx-auto"
                        >
                            <Image
                                width={300}
                                height={300}
                                src={aboutUsPageTextContent?.leaderShipTeam?.contentOne?.image}
                                alt="Harvey Todd"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-full bg-background/90 rounded-2xl transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                <div className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 overflow-auto lg:overflow-hidden p-4">
                                    <div className="text-start text-white p-2 sm:p-4 space-y-4 sm:space-y-6 md:space-y-8 max-h-[100%] sm:max-h-full">
                                        <span>
                                            <h3 className="text-lg md:text-3xl font-bold">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.name}
                                            </h3>
                                            <p className="lg:text-md text-secondary">
                                                {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.position}
                                            </p>
                                            <Link href='' className="flex items-center gap-2 text-sm lg:text-lg">
                                                <Mail />: {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.email}
                                            </Link>
                                        </span>
                                        <p className="text-sm text-md lg:text-lg text-textColorTwo overflow-auto">
                                            {aboutUsPageTextContent?.leaderShipTeam?.contentOne?.textContent}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className="p-5">
                    <div>

                        <div className="bg-card border border-borderColor rounded-3xl p-5 space-y-6">

                            <h2 className="text-3xl font-bold text-start">
                                Prospectiv in Numbers
                            </h2>

                            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 relative">

                                <div className="flex flex-col justify-center items-center gap-3">
                                    <p className="text-textColorTwo">We engage over</p>
                                    <CountUp
                                        start={0}
                                        end={3500}
                                        duration={5}
                                        separator=","
                                        className="text-5xl font-bold text-gradientColorOne"
                                    />
                                    <p>new prospect per hour</p>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-3">
                                    <p className="text-textColorTwo">Each year we generate</p>
                                    <CountUp
                                        start={0}
                                        end={215}
                                        duration={5}
                                        prefix="$"
                                        suffix="M"
                                        separator=","
                                        className="text-5xl font-bold text-gradientColorTwo"
                                    />
                                    <p>of new deals for our clients</p>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-3">
                                    <p className="text-textColorTwo">We engage over</p>
                                    <CountUp
                                        start={0}
                                        end={21000}
                                        duration={5}
                                        separator=","
                                        className="text-5xl font-bold text-gradientColorThree"
                                    />
                                    <p>new prospect per hour</p>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-3">
                                    <p className="text-textColorTwo">We engage over</p>
                                    <CountUp
                                        start={0}
                                        end={630}
                                        duration={5}
                                        suffix="+"
                                        separator=","
                                        className="text-5xl font-bold text-gradientColorFour"
                                    />
                                    <p>new prospect per hour</p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3}}
                                    viewport={{ once: true }}
                                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-28 -left-24 lg:-left-52 -z-10 transition-all">
                                    <div className="bg-gradientColorFour absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                    <div className="bg-gradientColorFive absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                    <div className="bg-gradientColorFour absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;