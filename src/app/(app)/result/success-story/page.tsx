'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HeaderImage from '@/public/assets/successbg.jpg'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import CountUp from "react-countup";
import Image from "next/image";
import Rating from "@/components/rating/RatingComponent";
import '../../../custom.css'
import axios from "axios";
import { SuccessStoryType } from "@/types/types";
import CompanyLogoOne from '@/public/assets/company_logo/logoOne.svg'
import CompanyLogoTwo from '@/public/assets/company_logo/logoTwo.svg'
import CompanyLogoThree from '@/public/assets/company_logo/WORK-HOUSE-METAL.png'
import CompanyLogoFour from '@/public/assets/company_logo/MD2MD.jpg'
import PaginatedSuccessStories from "@/components/successstories/AllSuccessStories";
import { successStoryPageTextContent } from "@/lib/TextContent";


const SuccessStory = () => {

    const [successStories, setSuccessStories] = useState<SuccessStoryType[]>([]);
    const [featuresCaseStudies, setFeaturesCaseStudies] = useState<SuccessStoryType[]>([]);
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )

    const fetchStories = useCallback(async () => {
        const getStories = await axios.get('/api/getsuccessstories');
        setSuccessStories(getStories.data.filter((story: SuccessStoryType) => !story.video_url))
        setFeaturesCaseStudies(getStories.data.filter((story: SuccessStoryType) => story.video_url))
    }, [])

    useEffect(() => {
        fetchStories();
    }, [fetchStories])


    const getEmbedUrl = (url: string) => {
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return url; // For other URLs like Google Drive, use as-is
        }
    };


    return (
        <div className="overflow-hidden">
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='w-full lg:max-w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold '>Our <span className='text-secondary'>Success Stories</span> </h1>
                    <p className='text-textColorTwo text-md lg:text-lg text-center font-bold mx- px-5'>
                        See how Prospectiv transforms businesses, sales teams, and marketing departments. We’re proud of each success story and the results we deliver. Explore below to unlock your business's potential to sell more.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-lg'>Results</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>Success Stories</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="max-w-7xl mx-auto px-5 space-y-28">
                    {/* case studies */}
                    <div className="space-y-10 py-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Featured case studies</h1>
                        <div>
                            <Carousel plugins={[plugin.current]}>
                                <CarouselContent>
                                    {
                                        featuresCaseStudies.map((caseStudy, index) =>
                                            <CarouselItem key={index}>
                                                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                                                    <div className="bg-transparent border border-borderColor rounded-3xl z-20">
                                                        <div className="flex flex-col justify-center items-center h-full lg:h-96 w-full p-5 lg:p-10 bg-card rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
                                                            <div className="space-y-5 lg:space-y-8">
                                                                <span className="bg-smallCard px-4 py-1 rounded-lg text-lg leading-10">{caseStudy.role ?? ''}</span>
                                                                <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                                                                <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-10">
                                                                    <div className="border-l border-secondary px-5 py-5">
                                                                        <p className="text-secondary text-3xl font-bold">{caseStudy.lead_rate}%</p>
                                                                        <p className="text-lg text-textColorTwo">Lead rate</p>
                                                                    </div>
                                                                    <div className="border-l border-secondary px-5 py-5">
                                                                        <p className="text-secondary text-3xl font-bold">${caseStudy.cost_per_lead}</p>
                                                                        <p className="text-lg text-textColorTwo">Cost per lead</p>
                                                                    </div>
                                                                    <div className="border-l border-secondary px-5 py-5">
                                                                        <p className="text-secondary text-3xl font-bold">{caseStudy.response_rate}%</p>
                                                                        <p className="text-lg text-textColorTwo">Response rate</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-end items-center">
                                                                    <Link href={`/result/success-story/${caseStudy.slug}`} className="flex items-center gap-2 text-gradientColorOne">Watch Video <ArrowRight size={20} /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="lg:-ml-16 md:w-1/2 h-60 lg:h-auto z-10">
                                                        <div className="w-full h-full rounded-3xl">
                                                            <iframe
                                                                src={getEmbedUrl(caseStudy.video_url)}
                                                                title="Webinar Video"
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                                className="w-full lg:w-[560px] h-full lg:h-[315px] rounded-3xl"
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        )}
                                </CarouselContent>
                                <CarouselPrevious className="hidden lg:block" />
                                <CarouselNext className="hidden lg:block"/>
                            </Carousel>
                        </div>
                    </div>

                    {/* our results */}
                    <div className="space-y-10 bg-card rounded-3xl border border-borderColor p-5 md:p-10 relative">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Our results</h1>
                        <div className="lg:w-3/4 mx-auto">
                            <div className="space-y-5 lg:space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-10">
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={19}
                                            duration={2}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            prefix="$"
                                        />
                                        <p className="text-base font-normal text-secondary">Cost per lead</p>
                                    </div>
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={50}
                                            duration={3}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            prefix=""
                                            suffix="M+"
                                        />
                                        <p className="ttext-base font-normalg text-secondary">Emails sent</p>
                                    </div>
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={15000}
                                            duration={3}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            suffix="+"
                                        />
                                        <p className="text-base font-normal text-secondary">Campaigns delivered</p>
                                    </div>
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={8.6}
                                            decimal="."
                                            decimals={1}
                                            duration={2}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            prefix="$"
                                        />
                                        <p className="text-base font-normal text-secondary">Lead rate</p>
                                    </div>
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={600}
                                            duration={2}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            suffix="+"
                                        />
                                        <p className="text-base font-normal text-secondary">Clients</p>
                                    </div>
                                    <div className="border-l-4 border-secondary px-2 md:px-5 py-5">
                                        <CountUp
                                            start={0}
                                            end={2000}
                                            duration={2}
                                            className="text-3xl lg:text-5xl font-extralight"
                                            separator=","
                                            suffix="+"
                                        />
                                        <p className="text-base font-normal text-secondary">Leads delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>

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

                    <PaginatedSuccessStories successStories={successStories}/>

                    {/* companies trus on us */}
                    <div className="space-y-5">
                        <h1 className="text-3xl md:text-3xl font-bold text-center">Clients trust on us</h1>
                        <div className="bg-card grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center border border-borderColor rounded-xl p-5 lg:p-10">
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <Image src={CompanyLogoOne} alt="logo" width={200} height={70} layout="fixed" />
                                <div className='flex items-center gap-2'>
                                    <Rating rating={4.5} />
                                    <p className='text-textColorTwo text-lg'>4.0</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <Image src={CompanyLogoTwo} alt="logo" width={200} height={70} layout="fixed" />
                                <div className='flex items-center gap-2'>
                                    <Rating rating={4.5} />
                                    <p className='text-textColorTwo text-lg'>4.0</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <Image src={CompanyLogoThree} alt="logo" width={200} height={70} layout="fixed" />
                                <div className='flex items-center gap-2'>
                                    <Rating rating={4.5} />
                                    <p className='text-textColorTwo text-lg'>4.0</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <Image src={CompanyLogoFour} alt="logo" width={200} height={70} layout="fixed" />
                                <div className='flex items-center gap-2'>
                                    <Rating rating={4.5} />
                                    <p className='text-textColorTwo text-lg'>4.0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-10 px-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-3xl font-bold text-center'>Explore Our Awards and Recognitions</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>

                        <Link href='/result/awards-and-recognitions' className='border border-borderColor rounded-2xl p-5'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <Image
                                        src={successStoryPageTextContent.exploreOurAwards.imageLInk}
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="w-full h-full max-h-44 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-secondary'>{successStoryPageTextContent.exploreOurAwards.heading}</h3>
                                    <p className='text-md lg:text-lg text-textColorTwo flex items-end'>
                                        {successStoryPageTextContent.exploreOurAwards.textContent} →
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;