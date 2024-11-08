'use client'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Link from 'next/link';
import { useRef } from 'react';

const CultureAndPerks = () => {

    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);
    const lottieRefFour = useRef(null);

    const perSpectiveValuesLottieOne = useRef(null);
    const perSpectiveValuesLottieTwo = useRef(null);
    const perSpectiveValuesLottieThree = useRef(null);
    const perSpectiveValuesLottieFour = useRef(null);

    const handleMouseEnter = (lottieRef: React.RefObject<any>) => {
        if (typeof document !== 'undefined') {
          lottieRef?.current?.play(); // Play animation on hover
        }
      };
    
      const handleMouseLeave = (lottieRef: React.RefObject<any>) => {
        if (typeof document !== 'undefined') {
          lottieRef?.current?.stop(); // Stop the animation when hover ends
        }
      };


    return (
        <div>
       <div className='space-y-7 px-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>Culture and perks</h1>
                    </motion.div>

                    <div className='space-y-10'>
                        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                                onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefOne}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Learning and development</h3>
                                    <p className='text-textColorTwo text-lg'>We’ve built our own learning platform to aid your personal and professional growth. Additional support comes from mentorship, external training and certification.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                                onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefTwo}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Hybrid working</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        For face-to-face time with your colleagues, work from our offices two days a week: centrally located and packed with perks and treats. And for those days when you need some quiet time to fully focus, work from home.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                                onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefThree}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Wellbeing package</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        Our wellbeing budget is adapted to the needs of our people: regular sports, social activities and lots of healthy snacks.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className='bg-card border border-borderColor rounded-2xl p-5 lg:p-7 space-y-5'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <h3 className='text-3xl font-bold'>Your work matters</h3>
                                    <p className='text-textColorTwo text-lg'>
                                        We have an open-door policy and value your opinion. Ideas are heard and genuinely put into practice.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                viewport={{ once: true }}
                                className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 transition-all">
                                <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                                <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                                <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                            </motion.div>
                           
                        </div>
                        <div className="w-60 lg:w-full max-w-72 flex mx-auto rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="/company/careers" className="flex-1 font-bold text-lg text-center bg-black py-5 rounded-full hover:scale-95 transition-all duration-300">
                                See open opportunities
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CultureAndPerks;