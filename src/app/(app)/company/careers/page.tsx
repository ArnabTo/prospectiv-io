'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React, { useCallback, useEffect, useState } from 'react';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import CircularProgressBar from '@/components/progressbar/CircularProgressBar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { carrerPageTextContent } from '@/lib/TextContent';
import axios from 'axios';
import { Openings } from '@/types/types';

const Careers = () => {

    const images = [
        "https://images.pexels.com/photos/27897550/pexels-photo-27897550/free-photo-of-a-group-of-people-standing-in-front-of-a-wall-with-graffiti.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/12705357/pexels-photo-12705357.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/11489971/pexels-photo-11489971.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const [vacancies, setVacancies] = useState<Openings[]>([]);

    const fetchVacancies = useCallback(async () => {
        try {
            const getVacancies = await axios.get('/api/getallvacancies')
            setVacancies(getVacancies.data)
        } catch (error) {
            console.log(error)
        }
    }, [])
    useEffect(() => {
        fetchVacancies()
    }, [fetchVacancies])

    console.log(vacancies)
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
                    <h1 className='text-3xl lg:text-6xl font-extrabold '>Find your <span className='text-secondary'>Oppurtunities</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>
                        We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Prospectiv a great place to work, and reward everyone who joins us.
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
                                    <BreadcrumbPage className='text-secondary text-lg'>Carrers</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto space-y-16'>
                <div className='lg:max-w-[70%] mx-auto text-center space-y-4 my-16 p-5'>
                    <h2 className='text-3xl font-extrabold'>You’ll help businesses grow. We’ll help you grow.</h2>
                    <p className='text-textColorTwo text-lg'>
                        We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Prospectiv a great place to work, and reward everyone who joins us.
                    </p>
                </div>
                <div className="space-y-5">
                    <div className="p-4 md:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative ${index === 0
                                        ? 'sm:col-span-2 sm:row-span-2'
                                        : ''
                                        }`}
                                >
                                    <div className="group relative overflow-hidden rounded-xl">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <Link
                            href="/life-at-prospectiv"
                            className="inline-block px-10 py-4 text-lg font-semibold text-foreground bg-buttonColor hover:bg-buttonHoverColor rounded-full transition-all duration-300 hover:scale-95 shadow-lg"
                        >
                            Discover Life at Prospectiv
                        </Link>
                    </div>
                </div>

                <div className='relative space-y-5 p-5'>
                    <p>Total avalaible vacancies: {vacancies.length}</p>
                    <div className='flex flex-col gap-3 space-y-5'>
                        {
                            vacancies.map((vacancy, id) => (
                                <Link href={`company/careers/${vacancy.slug}`} key={id} className='group'>
                                    <div key={id} className='bg-card border border-borderColor p-5 rounded-xl hover:bg-background shadow-black hover:shadow-xl transition-all ease-in-out duration-200'>
                                        <div className='flex items-center gap-5'>
                                            <div className='grid grid-cols-1  lg:grid-cols-3 items-start lg:justify-between lg:items-center gap-2 flex-1'>
                                                <h2 className='text-3xl font-extrabold group-hover:text-secondary'>{vacancy.title}</h2>
                                                <p className='text-textColorTwo text-lg text-center'>{vacancy.type}</p>
                                                <p className='text-textColorTwo text-lg text-center'>{vacancy.location}</p>
                                            </div>
                                            <div>
                                                <ArrowRightIcon size={30} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-1/4 blur-[100px] w-full max-w-[44%] min-h-[74%]  -z-10 animate-spin-slow transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                </div>

                <div className='space-y-10 px-5 lg:px-10 py-10'>

                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-3xl font-bold text-center'>Explore About us</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-[80%] mx-auto'>
                        {
                            carrerPageTextContent.exploreus.content.map((content, index) => (
                                <Link key={index} href={content.link} className='border border-borderColor rounded-2xl p-5 shadow-black hover:shadow-2xl'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='h-52'>
                                            <Image
                                                src={content.image}
                                                alt="image"
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <h3 className='text-2xl font-bold text-secondary'>{content.title}</h3>
                                            <p className='text-md lg:text-lg text-textColorTwo flex items-end'>{content.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </motion.div>
                </div>

            </div>
        </div >
    );
};

export default Careers;