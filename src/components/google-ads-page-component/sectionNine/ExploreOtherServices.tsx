'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ColdEmail from '@/public/assets/emailmarket.jpg'
import LinkedinAds from '@/public/assets/linkedinads.png'

const ExploreOtherServices = () => {
    return (
        <section className='max-w-7xl mx-auto space-y-8 p-5'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Explore other services</h2>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-2 h-full gap-5 lg:max-w-[60%] justify-center items-start mx-auto'>
                <div className='bg-card h-full border border-borderColor rounded-3xl p-4 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                    <Link href='/services/google-ads'>
                        <div className='h-52 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] rounded-xl overflow-hidden mb-5'>
                            <Image
                                src={ColdEmail}
                                alt="image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className='flex flex-col flex-grow'>
                            <h3 className='text-2xl font-bold text-secondary'>Cold Email</h3>
                            <p className='flex-grow text-md lg:text-lg text-textColorTwo items-end'>Grap your target audience's attention with targeted cold emails that drive leads and conversions.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='bg-card border border-borderColor rounded-3xl p-4 shadow-black hover:shadow-2xl flex-grow flex flex-col gap-5 group'>
                    <Link href='/services/google-ads'>
                        <div className='h-52 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] rounded-xl overflow-hidden mb-5'>
                            <Image
                                src={LinkedinAds}
                                alt="image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
                            />
                        </div>
                        <div className='flex-grow'>
                            <h3 className='text-2xl font-bold text-secondary'>LinkedIn Ads</h3>
                            <p className='text-md lg:text-lg text-textColorTwo flex items-end'>Leverage LinkedIn Ads to connect with decision-makers, grow your network, and generate high-quality B2B leads for your business.
                            </p>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default ExploreOtherServices;