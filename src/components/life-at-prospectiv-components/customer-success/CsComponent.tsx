'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import { TabsList } from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import OurRecruitementProcess from '../meet-our-team-page/OurRecruitementProcess';
import BenefitsOfProspectiv from '../BenefitsOfProspectiv';
import CultureAndPerks from '../CultureAndPerks';
import CareerPath from '../CareerPath';
import AwardsSection from '@/components/awards-section/AwardsSection';

const CsComponent = () => {

    const teamMembers = [
        {
            name: 'Jesica Doe',
            role: 'Senior Developer',
            says: 'I work in the Dev team as a full stack developer. I love working with the newest and best technologies.',
            image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600',
            quote: '"Working at this company has been an amazing experience."'
        },
        {
            name: 'Michael Johnson ',
            role: 'Frontend Engineer',
            says: 'Sopro is all about being passionate and having an opportunity to grow. The people, the progression, and the company culture are amazing.',
            image: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&w=600',
            quote: `'I'm proud to be a part of this talented team.'`
        },
        {
            name: 'Jane Smith',
            role: 'Backend Engineer',
            says: `In my three years at Sopro, my career has really taken off. I've gone from an intermediate developer, to a senior, to a team lead.`,
            image: 'https://images.pexels.com/photos/23496660/pexels-photo-23496660/free-photo-of-portrait-of-a-young-woman-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600',
            quote: '"This company values innovation and collaboration."'
        }
    ];


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
                    <h1 className='text-2xl md:4xl lg:text-6xl font-extrabold '>Customer <span className='text-secondary'>Success</span> </h1>
                    <p className='text-textColorTwo text-sm md:text-md lg:text-lg text-center font-bold mx- px-5'>
                        Since launch, we've won multiple awards that drive us to keep investing in our people and technology. Check out our virtual award cabinet and client reviews below.
                    </p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList className='justify-center'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-sm md:text-md lg:text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-textColorTwo text-sm md:text-md lg:text-lg'>Company</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-sm md:text-md lg:text-lg ' href="/company/life-at-prospectiv">Life at Prospectiv</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-sm md:text-md lg:text-lg'>Customer Success</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto py-24 space-y-24 lg:space-y-28  p-5'>
                <h2 className=' md:max-w-[50%] mx-auto text-2xl lg:text-4xl font-bold text-center'>We help businesses sell more and grow more. And that all starts with you.</h2>
                <div>
                    <Tabs className='w-full' defaultValue='tab1'>
                        <TabsList className='lg:w-5/12 mx-auto flex md:justify-center gap-5 lg:justify-between items-center overflow-x-auto lg:overflow-hidden'>
                            <TabsTrigger value="tab1" className='border border-borderColor px-5 py-3'>What we do</TabsTrigger>
                            <TabsTrigger value="tab2" className='border border-borderColor px-5 py-3'>Who we are</TabsTrigger>
                            <TabsTrigger value="tab3" className='border border-borderColor px-5 py-3'>Who you are</TabsTrigger>
                        </TabsList>

                        <TabsContent value="tab1">
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                className=' mx-auto group cursor-pointer'
                            >
                                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 bg-card p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                    <div className='min-w-[40%] w-full h-full rounded-3xl overflow-hidden'>
                                        <Image className='w-full object-cover h-full rounded-3xl group-hover:scale-105 transition-all duration-300 ease-in-out' src='https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15855.jpg?ga=GA1.1.1300545767.1720969685&semt=ais_hybrid' width={1000} height={1000} alt='' />
                                    </div>
                                    <div>
                                        <p className='text-md md:text-lg text-textColorTwo leading-8 md:leading-10'>
                                            We are proud to be one of the UK’s fastest-growing digital marketing agencies. Even over the course of the last year, we’ve continued to hire staff at a lightning pace and have signed a record number of clients. In each of our six years, we’ve roughly doubled our revenue, number of clients and staff headcount. We continue to grow and innovate.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="tab2">
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                className='mx-auto group cursor-pointer'
                            >
                                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 bg-card p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                    <div className='min-w-[40%] w-full h-full rounded-3xl overflow-hidden'>
                                        <Image className='w-full object-cover h-full rounded-3xl group-hover:scale-105 transition-all duration-300 ease-in-out'
                                            src='https://images.pexels.com/photos/18512830/pexels-photo-18512830/free-photo-of-tenent-a-word-that-is-spelled-with-scrabble-tiles.jpeg?auto=compress&cs=tinysrgb&w=600' width={1000} height={1000} alt='' />
                                    </div>
                                    <div>
                                        <p className='text-md md:text-lg text-textColorTwo leading-8 md:leading-10'>
                                            Voted Tech Company of the Year by Campaign Magazine, and recently nominated as Best Place to Work (SME) at the UK Business Awards, we’ve received recognition for our people, service, technology and business results.
                                            We are proud to be one of the UK’s fastest-growing digital marketing agencies. Even over the course of the last year, we’ve continued to hire staff at a lightning pace and have signed a record number of clients. In each of our six years, we’ve roughly doubled our revenue, number of clients and staff headcount. We continue to grow and innovate.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="tab3">
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                className=' mx-auto group cursor-pointer'
                            >
                                <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 bg-card p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                    <div className='min-w-[40%] w-full h-full rounded-3xl overflow-hidden'>
                                        <Image className='w-full object-cover h-full rounded-3xl group-hover:scale-105 transition-all duration-300 ease-in-out' src='https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600' width={1000} height={1000} alt='' />
                                    </div>
                                    <div>
                                        <p className='text-md md:text-lg text-textColorTwo leading-8 md:leading-10'>
                                            Our Customer Success team are primarily responsible for building relationships with each of our clients. We become their trusted advisors: understanding the details of their offering, formulating agreed campaigns, demonstrating scalable and repeatable success, and proactively suggesting campaign improvements.

                                            We are seeking people who can bring amazing client relationship management skills, together with B2B experience. You need to be self-managed, juggle a portfolio of around 25 clients, and deal with the strategic demands of each.

                                            You’ll have stretching KPIs based on protecting, growing and retaining your portfolio throughout the year. Your quarterly rewards are based on campaign delivery and client success metrics.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>

                <div>
                    {/* Meet the team */}
                    <div className="py-12 lg:max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center relative">
                            <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                                className='lg:hidden mx-autoflex flex-col justify-center items-start text-center lg:text-left space-y-3'>
                                <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold mb-4'>Some words from our Customer Success team</h2>
                                <p className='text-lg text-textColorTwo'>
                                    Meet some of the Customer Success team and hear how they describe life at Sopro in their own words.
                                </p>
                                <div className="w-60 flex rounded-full mx-auto lg:mx-0 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                    <Link href="/company/careers" className="flex-1 font-bold text-lg text-center bg-black py-3 rounded-full hover:scale-95 transition-all duration-300">
                                        Join us today
                                    </Link>
                                </div>
                                {/* <p className='text-lg md:text-xl lg:text-2xl text-textColorTwo'>Great tech is created by great people. At Sopro we are dedicated to building and developing a team of enthusiasts, who love what they do.</p> */}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='lg:max-w-[90%] mx-auto'>
                                <Card className='border border-borderColor rounded-2xl group'>
                                    <CardHeader>
                                        <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                                            <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[0].image} width={1000} height={1000} alt='' />
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-5'>
                                        <span>
                                            <h3 className='text-2xl font-bold'>{teamMembers[0].name}</h3>
                                            <p className='text-secondary text-lg'>{teamMembers[0].role}</p>
                                        </span>
                                        <p className='text-textColorTwo text-lg'>{teamMembers[0].says}</p>
                                        <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[0].quote}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                                className='hidden lg:max-w-[90%] mx-auto lg:flex flex-col justify-center gap-3 items-start p-3'>
                                <h2 className='text-xl md:text-3xl lg:text-5xl font-bold mb-4'>Some words from our Customer Success team</h2>
                                <p className='text-lg text-textColorTwo'>
                                    Meet some of the Customer Success team and hear how they describe life at Sopro in their own words.
                                </p>
                                <div className="w-60 flex rounded-full mx-auto lg:mx-0 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                                    <Link href="/company/careers" className="flex-1 font-bold text-lg text-center bg-black py-5 rounded-full hover:scale-95 transition-all duration-300">
                                        Join us today
                                    </Link>
                                </div>
                                {/* <p className='text-lg md:text-xl lg:text-2xl text-textColorTwo'>Great tech is created by great people. At Sopro we are dedicated to building and developing a team of enthusiasts, who love what they do.</p> */}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                                className='lg:max-w-[90%] mx-auto'>
                                <Card className='border border-borderColor rounded-2xl group'>
                                    <CardHeader>
                                        <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                                            <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[1].image} width={1000} height={1000} alt='' />
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-5'>
                                        <span>
                                            <h3 className='text-2xl font-bold'>{teamMembers[1].name}</h3>
                                            <p className='text-secondary text-lg'>{teamMembers[1].role}</p>
                                        </span>
                                        <p className='text-textColorTwo text-lg'>{teamMembers[1].says}</p>
                                        <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[1].quote}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: true }}
                                className='lg:max-w-[90%] mx-auto'>
                                <Card className='border border-borderColor rounded-2xl group'>
                                    <CardHeader>
                                        <div className='overflow-hidden rounded-xl md:max-h-72 lg:max-h-60'>
                                            <Image className='w-full object-contain rounded-xl group-hover:scale-105 ease-in-out duration-300' src={teamMembers[2].image} width={1000} height={1000} alt='' />
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-5'>
                                        <span>
                                            <h3 className='text-2xl font-bold'>{teamMembers[2].name}</h3>
                                            <p className='text-secondary text-lg'>{teamMembers[2].role}</p>
                                        </span>
                                        <p className='text-textColorTwo text-lg'>{teamMembers[2].says}</p>
                                        <p className='italic text-textColorTwo flex items-start text-lg'><Quote color='#ff4895' size={15} className='transform rotate-180' />{teamMembers[2].quote}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
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
                    </div>
                </div>

                <div>
                    <OurRecruitementProcess />
                </div>

                <div>
                    <CareerPath />
                </div>

                <div>
                    <BenefitsOfProspectiv />
                </div>

                <div>
                    <CultureAndPerks />
                </div>

                <div>
                    <AwardsSection/>
                </div>
            </div>
        </div>
    );
};

export default CsComponent;