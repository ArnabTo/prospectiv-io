
import { motion } from 'framer-motion';
import '../../app/globals.css'
import Link from 'next/link';
import ImageOne from '@/public/assets/whatwedoone.jpeg'
import ImageTwo from '@/public/assets/whatwedonetow.svg'
import ImageThree from '@/public/assets/whatwedothree.svg'
import Image from 'next/image';
import { WhatWeDoTextContent } from '@/lib/TextContent';


const WhatWeDo = () => {
    return (
        
        <section className='max-w-7xl mx-auto px-5 lg:py-24 overflow-hidden'>
            <div className='space-y-16'>
                <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5}}
                viewport={{ once: true }}
                className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>{WhatWeDoTextContent?.heading?.heading}</h1>
                    <div className='space-y-5'>
                        <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                           {WhatWeDoTextContent?.heading?.paragraph}
                        </p>
                        <div className="w-60 lg:w-full md:max-w-60 flex mx-auto lg:mx-0 rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="/demo" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <div className='space-y-10'>
                    <div className='flex flex-col-reverse lg:flex-row gap-5'>
                        <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.5, delay: 0.5}}
                        viewport={{ once: true }}
                        className='flex flex-col gap-5 w-full lg:w-[40%] relative'>
                            <div className='bg-card rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                        1
                                    </div>
                                    <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent1?.heading}</h1>
                                    <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent1?.paragraph}</p>
                                </div>
                            </div>
                            <div className='bg-card rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-4 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                   2
                               </div>
                               <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent2?.heading}</h1>
                               <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent2?.paragraph}</p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-24 -z-10 animate-spin-slow transition-all">
                                <div className="bg-gradientColorTwo absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorFive absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorFour absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.5, delay: 0.8}}
                        viewport={{ once: true }}
                        className='w-full lg:w-[60%]'>
                            <Image src={ImageTwo} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </motion.div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row-reverse gap-5'>
                        <div className='w-full lg:w-[40%] relative'>
                            <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0}}
                            transition={{ duration: 0.5, delay: 0.5}}
                            viewport={{ once: true }}
                            className='bg-card  h-full rounded-3xl border border-borderColor flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-foreground font-bold text-xl text-textColorOne p-3 rounded-lg max-w-12 text-center'>
                                        3
                                    </div>
                                    <h1 className='text-3xl font-bold'>{WhatWeDoTextContent?.cardTextContent3?.heading}</h1>
                                   <p className='text-md lg:text-lg text-textColorTwo'>{WhatWeDoTextContent?.cardTextContent3?.paragraph}</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-44 lg:right-52 -z-10 animate-spin-slow transition-all">
                                <div className="bg-gradientColorOne absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorTwo absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorThree absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </div>
                        <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.5, delay: 0.8}}
                        viewport={{ once: true }}
                        className='w-full lg:w-[60%]'>
                            <Image src={ImageThree} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </motion.div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
