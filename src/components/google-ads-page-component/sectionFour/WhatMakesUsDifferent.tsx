'use client'
import { useRef } from "react";
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const WhatMakesUsDifferent = () => {

    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);
    const lottieRefFour = useRef(null);
    const lottieRefFive = useRef(null);
    const lottieRefSix = useRef(null);


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
        <section className="overflow-hidden">
            <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-7">What makes us different</motion.h1>
            <div className="max-w-7xl mx-auto relative">
                <div className=" rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-5 lg:p-10">
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                        onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefOne}
                                animationData={require('@/public/assets/lottie-icons/Team.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            Small team of experts
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                        We are a dedicated team of senior LinkedIn Ads specialists with over a decade of expertise. By maintaining a focused team, we deliver personalized, high-quality solutions tailored to your goals.
                        </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                        onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefTwo}
                                animationData={require('@/public/assets/lottie-icons/Activity.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            Proactiveness
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                            We invest ourselves into your business and vertical as a natural extension of your team. Regular calls, fast responses, and strategic guidance. We constantly come up with new hypotheses and strategies to increase your ROI.
                        </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                        onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefThree}
                                animationData={require('@/public/assets/lottie-icons/Animation - 1733592899947.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            Transparency
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                        We maintain full transparency by sharing data, account setups, and tactics with our clients. From the initial call, we walk you through every step of our process and methodology. Additionally, we document the entire setup, ensuring you're informed and in control at all times.
                        </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                        onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefFour}
                                animationData={require('@/public/assets/lottie-icons/note.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            No contract required
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                        Unlike most agencies, we don’t require long-term contracts. Our transparent pricing is a fixed monthly fee, offered on a month-to-month basis. We trust our results and ethics will earn your long-term partnership—no commitments needed.
                        </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefFive)}
                        onMouseLeave={() => handleMouseLeave(lottieRefFive)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefFive}
                                animationData={require('@/public/assets/lottie-icons/Currency.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            No minimum ad spend
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                        Unlike many agencies, we don’t impose minimum ad spend requirements. Our flexible approach allows you to align your investment with your budget and goals, giving you full control to scale as results grow.
                        </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                        className='bg-card p-5 lg:p-8 space-y-5 border border-borderColor rounded-3xl card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefSix)}
                        onMouseLeave={() => handleMouseLeave(lottieRefSix)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefSix}
                                animationData={require('@/public/assets/lottie-icons/play.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold transition-all duration-1000'>
                            Fast onboarding
                        </h3>
                        <p className='text-textColorTwo text-lg transition-all duration-1000'>
                        Our streamlined onboarding process ensures your campaigns are live within two weeks of our initial call. We prioritize momentum in marketing, launching quickly without compromising on quality or strategy.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }} 
                    className="blur-[100px] w-full max-w-[50%] min-h-[60%] absolute left-[20%] top-20 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;