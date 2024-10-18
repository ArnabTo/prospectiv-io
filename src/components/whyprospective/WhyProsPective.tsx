import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ImageOne from '@/public/assets/whyporspectiveone.png'
import ImageTwo from '@/public/assets/whyporspectivtwo.png'
import ImageThree from '@/public/assets/whyporspectivethree.png'
const WhyProsPective = () => {
    return (
        <div className='max-w-7xl mx-auto px-5 py-24 overflow-hidden'>
            <div className='flex flex-col lg:flex-row flex-start justify-between gap-10'>
                <div className='sticky top-5 md:max-w-lg lg:max-w-[300px] xl:max-w-md space-y-5 mx-auto'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>Why Choose Prospectiv ?</h1>
                    <p className='text-lg text-textColorTwo text-center lg:text-start'>
                        Delivering Qualified Sales Meetings for SME Service-Based Businesses with Proven ROI in Just 30 Days
                    </p>
                    <div className="w-full md:max-w-60 flex rounded-full bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                        <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-5 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                           How does it work ?
                        </Link>
                    </div>
                </div>
                <div className='relative'>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-card rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10 p-10'>
                            <div>
                              <Image src={ImageOne} width={200} height={200} alt="image" className=' max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                            </div>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>Driving Sales Success for SMEs</h1>
                                <p className='text-lg text-textColorTwo'>We specialise in setting qualified sales meetings for SME service-based businesses. </p>
                            </div>
                        </div>

                        <div className='bg-card rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10 p-10'>
                            <div>
                              <Image src={ImageTwo} width={200} height={200} alt="image" className=' max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                            </div>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>Maximizing ROI for SME Service Providers</h1>
                                <p className='text-lg text-textColorTwo'>Our typical clients make a return on their investment in circa 30 days.</p>
                            </div>
                        </div>

                        <div className='bg-card rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10 p-10'>
                            <div>
                              <Image src={ImageThree} width={200} height={200} alt="image" className=' max-w-20 rounded-t-2xl lg:rounded-r-2xl' />
                            </div>
                            <div className='space-y-4 w-full'>
                                <h1 className='text-3xl font-extrabold'>Empowering SMEs with £1M in Pipeline Success</h1>
                                <p className='text-lg text-textColorTwo'> We’ve attributed over £1,000,000 ($1.3M) in pipeline for our clients in 2024.can you create a title for these options.</p>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-40 -z-10 animate-spin-slow transition-all">
                        <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyProsPective;