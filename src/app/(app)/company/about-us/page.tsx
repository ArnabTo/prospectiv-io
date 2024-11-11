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
import { Mail } from "lucide-react";
import CountUp from "react-countup";
import PerspectivValues from "@/components/life-at-prospectiv-components/PerspectivValues";

const AboutUs = () => {

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
                <div className='w-full lg:max-w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1  className='text-2xl md:4xl lg:text-6xl font-extrabold'>About <span className='text-secondary'>Us</span> </h1>
                    <p className='text-textColorTwo text-sm md:text-md lg:text-lg text-center font-bold px-5'>
                        {aboutUsPageTextContent?.heading?.paragraph}
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList className='justify-center'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-textColorTwo text-lg'>Company</BreadcrumbPage>
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
                    <div className="w-full lg:w-1/2">
                        <Image width={1000} height={1000} className="w-full rounded-2xl"
                            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="founder image" />
                    </div>
                    <div className="lg:w-1/2 space-y-5">
                        <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.founder?.heading}</h3>
                        <p className="text-textColorTwo text-lg">{aboutUsPageTextContent?.founder?.paragraph}</p>
                    </div>
                </div>

                <PerspectivValues />

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

                    <div className="lg:max-w-[80%] mx-auto space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center md:items-center gap-10">
                            <div className="rounded-3xl h-full">
                                <Image
                                    className="border border-borderColor w-full h-full object-cover rounded-3xl"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.content[0].image}
                                    width={500}
                                    height={500}
                                    alt="member image"
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.content[0].heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.content[0].paragraph}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center md:items-center gap-10">
                            <div className="rounded-3xl">
                                <Image
                                    className="border border-borderColor w-full h-full object-cover rounded-3xl"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.content[1].image}
                                    width={500}
                                    height={500}
                                    alt="member image"
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.content[1]?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.content[1]?.paragraph}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-center md:items-center gap-10">
                            <div className="rounded-3xl">
                                <Image
                                    className="border border-borderColor w-full h-full object-cover rounded-3xl"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.content[2]?.image}
                                    width={500}
                                    height={500}
                                    alt="member image"
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.content[2]?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.content[2]?.paragraph}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse items-center md:items-center gap-10">
                            <div className="rounded-3xl">
                                <Image
                                    className="border border-borderColor w-full h-full object-cover rounded-3xl"
                                    src={aboutUsPageTextContent?.meetCampaignMember?.content[3]?.image}
                                    width={500}
                                    height={500}
                                    alt="member image"
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-3xl font-bold text-secondary">{aboutUsPageTextContent?.meetCampaignMember?.content[3]?.heading}</h3>
                                <p className="text-lg">{aboutUsPageTextContent?.meetCampaignMember?.content[3]?.paragraph}</p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>#lifeatprospectiv</h1>
                    <div className="p-5 sm:p-8 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/7109063/pexels-photo-7109063.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/23496703/pexels-photo-23496703/free-photo-of-a-group-of-people-standing-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/6775117/pexels-photo-6775117.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/9301895/pexels-photo-9301895.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/7793142/pexels-photo-7793142.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                            <Image width={300} height={300} className='rounded-xl' src="https://images.pexels.com/photos/8101981/pexels-photo-8101981.jpeg?auto=compress&cs=tinysrgb&w=600" alt='team_photo' />
                        </motion.div>
                    </div>


                    <div className="w-60 lg:w-full max-w-64 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="/pricing" className="flex-1 font-semibold text-lg bg-buttonColor text-foreground text-center hover:scale-95 transition-all duration-300 px-10 xl:px-12 py-5 rounded-full hover:bg-buttonHoverColor">
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
                        <h2 className='text-4xl font-bold'>{aboutUsPageTextContent.leaderShipTeam.heading.heading}</h2>
                        <p className='text-textColorTwo text-lg'>
                            {aboutUsPageTextContent.leaderShipTeam.heading.paragraph}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            aboutUsPageTextContent.leaderShipTeam.contents.map((content, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    key={index}
                                    className="relative w-full lg:max-w-[80%] lg:h-[500px] xl:max-w-full rounded-2xl overflow-hidden group border border-borderColor cursor-pointer mx-auto"
                                >
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={content?.image}
                                        alt="Harvey Todd"
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-full bg-background/90 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                        <div className="absolute inset-x-0 bottom-0 h-full flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 overflow-auto lg:overflow-hidden p-4">
                                            <div className="text-start text-white p-2 sm:p-4 space-y-4 sm:space-y-6 md:space-y-8 max-h-[100%] sm:max-h-full">
                                                <span>
                                                    <h3 className="text-lg md:text-3xl font-bold">
                                                        {content?.name}
                                                    </h3>
                                                    <p className="lg:text-md text-secondary">
                                                        {content?.position}
                                                    </p>
                                                    <Link href='' className="flex items-center gap-2 text-sm lg:text-lg">
                                                        <Mail />: {content?.email}
                                                    </Link>
                                                </span>
                                                <p className="text-sm text-md lg:text-md lg:text-lg text-textColorTwo overflow-auto">
                                                    {content?.textContent}

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="p-5">
                    <div>

                        <div className="bg-card border border-borderColor rounded-3xl p-5 space-y-6 md:p-10">
                            <div className="flex flex-col md:flex-row justify-between lg:justify-center items-center gap-5  relative">

                                <div className="flex flex-col lg:flex-row gap-5">
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
                                </div>

                                <div className="flex flex-col lg:flex-row gap-5">
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
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
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

                <div className="flex flex-col lg:flex-row items-center gap-5 p-5">
                    <div className="space-y-10">
                        <h2 className="text-3xl font-bold">{aboutUsPageTextContent.casestudy.heading}</h2>
                        <div>
                            <h1 className="text-2xl text-textColorTwo"><span className="text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586]">70% of our new business</span> <br></br>
                                comes from our own email marketing campaigns
                            </h1>
                        </div>
                        <div className="space-y-5">
                            <p className="text-md lg:text-lg text-textColorTwo">{aboutUsPageTextContent.casestudy.textContentTwo}
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">{aboutUsPageTextContent.casestudy.textContentThree}</p>
                            <div className="w-60 lg:w-full max-w-72 flex mx-auto lg:mx-0 rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                <Link href="/company/careers" className="flex-1 font-bold text-lg text-center bg-black py-4 rounded-full hover:scale-95 transition-all duration-300">
                                    {aboutUsPageTextContent.casestudy.cta}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full min-w-[50%]">
                        <Image
                            width={1000}
                            height={1000}
                            src='https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt="Harvey Todd"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div className='space-y-5 p-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='w-full md:w-3/4 lg:w-4/5 text-start space-y-5'>
                        <h2 className='text-4xl font-bold'>{aboutUsPageTextContent.allWinings.heading.heading}</h2>
                        <p className='text-textColorTwo text-lg'>
                            {aboutUsPageTextContent.allWinings.heading.paragraph}
                        </p>
                    </motion.div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                            {
                                aboutUsPageTextContent.allWinings.images.map((image, index) => (
                                    <Image
                                        width={500}
                                        height={500}
                                        key={index}
                                        src={image}
                                        alt="winning together"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;