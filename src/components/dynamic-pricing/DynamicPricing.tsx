import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Link from 'next/link';
import React, { useRef } from 'react';

const DynamicPricing = () => {

    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);

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
        <section
            className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center p-5 py-16 space-y-6 gap-5"
        >
            <div className="lg:w-1/2 text-center lg:text-start sticky top-0 md:top-10 lg:top-28 xl:top-30 2xl:top-40 self-start space-y-5">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
                >
                 Dynamic Pricing
                </h2>
                <p
                    className="text-lg md:text-xl lg:text-2xl text-textColorTwo"
                >
                    Our demand-based pricing adjusts lead credit costs to reflect true value. If CPM drops, so does the credit cost. We calculate the true cost per lead using data from cold email, LinkedIn Ads, and Google Ads, ensuring you only pay what's necessary.
                </p>

                <div
                    className="w-60 flex rounded-full mx-auto lg:mx-0 bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                    <Link href="/demo" className="flex-1 font-bold text-lg text-center bg-black px-10 py-5 rounded-full hover:scale-95 transition-all duration-300">
                        See Our Pricing
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-col">
                <div
                  
                    className="bg-card group transition duration-300 rounded-r-xl mb-5 border border-borderColor rounded-3xl"
                    onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                    onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                >
                    <div className="p-5 flex flex-col lg:flex-row justify-start items-center gap-5">
                        <div className='min-w-24 bg-foreground rounded-lg p-1 group-hover:bg-foreground ring-4 group-hover:ring-secondary/80 transition-all duration-300'>
                            <Lottie
                                lottieRef={lottieRefOne}
                                animationData={require('../../public/assets/lottie-icons/download.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-bold"
                            >
                               CPMs Reduce
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xl text-textColorTwo"
                            >
                                Lead Cost Decreases
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div
                  
                    className="bg-card group transition duration-300 rounded-r-xl mb-5 border border-borderColor rounded-3xl"
                    onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                    onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                >
                    <div className="p-5 flex flex-col lg:flex-row justify-start items-center gap-5">
                        <div className='min-w-24 bg-foreground rounded-lg p-1 group-hover:bg-foreground ring-4 group-hover:ring-secondary/80 transition-all duration-300'>
                            <Lottie
                                lottieRef={lottieRefTwo}
                                animationData={require('../../public/assets/lottie-icons/upload.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-bold"
                            >
                               CPMs Increase
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xl text-textColorTwo"
                            >
                               Lead Cost Increases
                            </motion.p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-card group transition duration-300 rounded-r-xl mb-5 border border-borderColor rounded-3xl"
                    onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                    onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                >
                    <div className="p-5 flex flex-col lg:flex-row justify-start items-center gap-5">
                        <div className='min-w-24 bg-foreground rounded-lg p-1 group-hover:bg-foreground ring-4 group-hover:ring-secondary/80 transition-all duration-300'>
                            <Lottie
                                lottieRef={lottieRefThree}
                                animationData={require('../../public/assets/lottie-icons/Down Payment.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl font-bold"
                            >
                               Only  Pay It’s Worth
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xl text-textColorTwo"
                            >
                              Pay The Best Price
                            </motion.p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DynamicPricing;
