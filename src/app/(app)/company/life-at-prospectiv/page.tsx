'use client';
import { MemberCardMarquee } from '@/components/member-card/MemberCard';
import HeaderImage from '@/public/assets/campany-culture.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import '../../../custom.css'
import { lifeAtProspectivTextContent } from '@/lib/TextContent';
import 'swiper/css';
import 'swiper/css/effect-cards';
import CultureAndPerks from '@/components/life-at-prospectiv-components/CultureAndPerks';
import PerspectivValues from '@/components/life-at-prospectiv-components/PerspectivValues';
import BenefitsOfProspectiv from '@/components/life-at-prospectiv-components/BenefitsOfProspectiv';


const LifeAtProspectiv = () => {

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
                    <h1 className='text-6xl font-extrabold '>Life at <span className='text-secondary'>Prospectiv</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'>{lifeAtProspectivTextContent?.heading?.paragraph}</p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-lg'>Life at Prospectiv</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto py-24 space-y-24">

                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className='px-5'>
                    <div className='lg:w-1/2 mx-auto text-center'>
                        <h3 className='text-4xl font-bold'>{lifeAtProspectivTextContent?.mettingPeople?.heading}</h3>
                        <p className='text-textColorTwo text-lg'>{lifeAtProspectivTextContent?.mettingPeople?.paragraph}</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='relative'>
                        <MemberCardMarquee />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="blur-[100px] w-full max-w-[44%] min-h-[40%] absolute top-1/3 left-1/3 -z-10  transition-all">
                            <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                            <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                            <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className='space-y-24 px-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className='lg:w-1/2 mx-auto text-center'>
                        <h3 className='text-4xl font-bold'>{lifeAtProspectivTextContent?.ourteam?.heading}</h3>
                        <p className='text-textColorTwo text-lg'>{lifeAtProspectivTextContent?.ourteam?.paragraph}</p>
                    </motion.div>

                    <div className='space-y-10'>
                        <div
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 relative'>
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300 '>
                                        <Image className='w-full rounded-3xl h-52' src='https://images.pexels.com/photos/23496703/pexels-photo-23496703/free-photo-of-a-group-of-people-standing-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600' width={300} height={300} alt='' />
                                        <div>
                                            <h2 className='text-xl font-bold'>Tech</h2>
                                            <p className='text-md lg:text-lg text-textColorTwo'>
                                                Great tech is create by great people. At Prospectiv we are dedicated to building and developing a team of enthusiasts, who love what they do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                        <Image className='w-full rounded-3xl h-52' src='https://images.unsplash.com/photo-1716703742352-0bbdb45f505b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMHBob3RvfGVufDB8fDB8fHww' width={300} height={300} alt='' />
                                        <div>
                                            <h2 className='text-xl font-bold'>Customer Success</h2>
                                            <p className='text-md lg:text-lg text-textColorTwo'>
                                                The Customer Success team are proactive, innovative, and creative. They build relationships and become trusted advisors to our clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <div className='bg-card border border-borderColor p-5 lg:p-7 rounded-3xl space-y-3 hover:shadow-2xl transition-all duration-300'>
                                        <Image className='w-full rounded-3xl h-52' src='https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHBob3RvfGVufDB8fDB8fHww' width={300} height={300} alt='' />
                                        <div>
                                            <h2 className='text-xl font-bold'>Ops</h2>
                                            <p className='text-md lg:text-lg text-textColorTwo'>Our Ops team are masters of the management, organisation and juggling multiple tasks. And they make our campaigns fly.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:left-1/4 -z-10 transition-all">
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </div>

                        <div className="w-60 lg:w-full max-w-64 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="/company/careers" className="flex-1 font-bold text-center text-lg bg-black py-5 rounded-full hover:scale-95 transition-all duration-300">
                                See open positions
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>#lifeatprospectiv</h1>

                    <div className="p-5 sm:p-8">
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

                <BenefitsOfProspectiv />

                <CultureAndPerks />

                <PerspectivValues />

                <div className='space-y-10 px-5'>

                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-3xl font-bold text-start'>Explore About us</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        <Link href='/company/careers' className='border border-borderColor rounded-2xl p-5'>
                            <div className='flex flex-col gap-5'>
                                <div className='min-h-60'>
                                    <Image
                                        src='https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="w-full h-60 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-secondary'>Carrers</h3>
                                    <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href='/company/about-us' className='border border-borderColor rounded-2xl p-5'>
                            <div className='flex flex-col gap-5'>
                                <div className='min-h-60'>
                                    <Image
                                        src='https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600'
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="w-full h-60 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-secondary'>About Us</h3>
                                    <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Find our more about Prospectiv and our team, from our leadership to our people, via our history and results. →
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href='/result/success-story' className='border border-borderColor rounded-2xl p-5'>
                            <div className='flex flex-col gap-5'>
                                <div className='min-h-60'>
                                    <Image
                                        src='https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="w-full h-60 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-secondary'>Success Story</h3>
                                    <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Discover what's possible with Prospectiv. Real stories from some of our 1000+ clients →
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default LifeAtProspectiv;