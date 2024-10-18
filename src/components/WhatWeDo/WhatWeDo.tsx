
import { motion } from 'framer-motion';
import '../../app/globals.css'
import Link from 'next/link';
import ImageOne from '@/public/assets/whatwedoone.jpeg'
import ImageTwo from '@/public/assets/whatwedonetow.jpg'
import ImageThree from '@/public/assets/whatwedothree4.png'
import Image from 'next/image';
const WhatWeDo = () => {
    return (
        // <section className='max-w-7xl mx-auto px-5 py-24 overflow-hidden'>
        //     <div className='flex flex-col lg:flex-row-reverse flex-start justify-between gap-10'>
        //         <div className='sticky top-5 md:max-w-lg lg:max-w-[300px] xl:max-w-md space-y-5 mx-auto'>
        //             <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>You do your best work while we do the hard work</h1>
        //             <p className='text-lg text-textColorTwo text-center lg:text-start'>
        //                 Prospectiv’s done-for-you lead generation service is designed to help companies swiftly and consistently generate leads.
        //             </p>
        //             <div className="w-full md:max-w-60 flex rounded-full bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
        //                 <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
        //                     Book a Demo
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className='relative'>
        //             <div className='flex flex-col gap-10'>
        //                 <div className='bg-card  rounded-2xl flex flex-col-reverse md:flex-row justify-between '>
        //                     <div className='space-y-4 px-5 lg:px-16 py-10 w-full min-w-[60%] md:max-w-[80%]'>
        //                         <div className='bg-smallCard font-bold text-xl text-foreground text-lg p-3 rounded-lg max-w-12 text-center'>
        //                             1
        //                         </div>
        //                         <h1 className='text-3xl font-bold'>Unearth new opportunities</h1>
        //                         <p className='text-lg text-textColorTwo'>Speak to ideal clients that are outside your network. Discover new markets and grow your business</p>
        //                     </div>
        //                     <div>
        //                         <Image src={ImageOne} width={500} height={500} alt="image" className='h-full rounded-t-2xl lg:rounded-t-none lg:rounded-r-lg' />
        //                     </div>
        //                 </div>

        //                 <div className='bg-card  rounded-2xl flex flex-col-reverse md:flex-row justify-between '>
        //                     <div className='space-y-4 px-5 lg:px-16 py-10 w-full min-w-[60%] md:max-w-[80%]'>
        //                         <div className='bg-smallCard font-bold text-xl text-foreground p-3 rounded-lg max-w-12 text-center'>
        //                             2
        //                         </div>
        //                         <h1 className='text-3xl font-bold'>Speak With Qualified Leads</h1>
        //                         <p className='text-lg text-textColorTwo'>Speak with truly qualified opportunities to grow your sales.</p>
        //                     </div>
        //                     <div>
        //                         <Image src={ImageTwo} width={500} height={500} alt="image" className='h-full rounded-t-2xl lg:rounded-t-none lg:rounded-r-lg' />
        //                     </div>
        //                 </div>
        //                 <div className='bg-card rounded-2xl flex flex-col-reverse md:flex-row justify-between '>
        //                     <div className='space-y-4 px-5 lg:px-16 py-10 w-full min-w-[60%] md:max-w-[80%]'>
        //                         <div className='bg-smallCard font-bold text-xl text-foreground p-3 rounded-lg max-w-12 text-center'>
        //                             3
        //                         </div>
        //                         <h1 className='text-3xl font-bold'>Easily Scalable</h1>
        //                         <p className='text-lg text-textColorTwo'>Our services are designed to scale with our clients' growth, supporting their long-term success in the marketplace.</p>
        //                     </div>
        //                     <div>
        //                         <Image src={ImageThree} width={500} height={500} alt="image" className='h-full rounded-t-2xl lg:rounded-t-none lg:rounded-r-lg' />
        //                     </div>
        //                 </div>
        //             </div>
        //             <motion.div
        //                 initial={{ opacity: 0, scale: 0.9 }}
        //                 whileInView={{ opacity: 1, scale: 1 }}
        //                 transition={{ duration: 0.5 }}
        //                 viewport={{ once: true }}
        //                 className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-40 -z-10 animate-spin-slow transition-all">
        //                 <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
        //                 <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
        //                 <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
        //             </motion.div>
        //         </div>
        //     </div>
        // </section>
        <section className='max-w-7xl mx-auto px-5 py-24 overflow-hidden'>
            <div className='space-y-16'>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>You do your best work while we do the hard work</h1>
                    <div className='space-y-5'>
                        <p className='text-lg text-textColorTwo text-center lg:text-start'>
                            Prospectiv’s done-for-you lead generation service is designed to help companies swiftly and consistently generate leads.
                        </p>
                        <div className="w-full md:max-w-60 flex rounded-full bg-gradient-to-tr from-[#6f86ff] via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                            <Link href="#" className="flex-1 font-bold text-xl text-center bg-black px-10 lg:px-10 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='space-y-10'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-5 w-[40%] relative'>
                            <div className='bg-card rounded-3xl flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-smallCard font-bold text-xl text-foreground p-3 rounded-lg max-w-12 text-center'>
                                        1
                                    </div>
                                    <h1 className='text-3xl font-bold'>Unearth new opportunities</h1>
                                    <p className='text-lg text-textColorTwo'>Speak to ideal clients that are outside your network. Discover new markets and grow your business</p>
                                </div>
                            </div>
                            <div className='bg-card  rounded-3xl flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-4 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                <div className='bg-smallCard font-bold text-xl text-foreground p-3 rounded-lg max-w-12 text-center'>
                                   2
                               </div>
                               <h1 className='text-3xl font-bold'>Speak With Qualified Leads</h1>
                               <p className='text-lg text-textColorTwo'>Speak with truly qualified opportunities to grow your sales.</p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-24 -z-10 animate-spin-slow transition-all">
                                <div className="bg-[#fe316f] absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-[#1766ff] absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-[#6923ff] absolute rounded-full  w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </div>
                        <div className='w-[60%]'>
                            <Image src={ImageTwo} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </div>
                    </div>
                    <div className='flex flex-row-reverse gap-5'>
                        <div className='w-[40%] relative'>
                            <div className='bg-card  h-full rounded-3xl flex flex-col-reverse md:flex-row justify-between '>
                                <div className='space-y-3 px-5 lg:px-10 py-5 w-full min-w-[60%] md:max-w-[80%]'>
                                    <div className='bg-smallCard font-bold text-xl text-foreground p-3 rounded-lg max-w-12 text-center'>
                                        3
                                    </div>
                                    <h1 className='text-3xl font-bold'>Easily Scalable</h1>
                                   <p className='text-lg text-textColorTwo'>Our services are designed to scale with our clients' growth, supporting their long-term success in the marketplace.</p>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[40%] absolute bottom-1/2 right-10 md:right-44 lg:bottom-56 lg:right-24 -z-10 animate-spin-slow transition-all">
                                <div className="bg-[#6f86ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-[#fe316f] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-[#d220ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                        </div>
                        <div className='w-[60%]'>
                            <Image src={ImageThree} width={500} height={500} alt="image" className='w-full rounded-3xl' />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;