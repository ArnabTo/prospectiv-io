'use client'
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';

const PerspectivValues = () => {

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
            <div className='space-y-20 p-5'>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='lg:w-5/6 mx-auto text-center space-y-5'>
                    <h3 className='text-4xl font-bold'>Perspectiv values</h3>
                    <p className='text-textColorTwo text-lg'>
                        Our values permeate Prospectiv through our behaviours, both as people and across our business. They influence the way we hire new people, develop employees, review performance, evaluate reward and achieve promotion.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                        onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieOne)}
                        onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieOne)}
                    >
                        <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={perSpectiveValuesLottieOne}
                                animationData={require('@/public/assets/lottie-icons/Down Payment.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div className='space-y-3 text-center lg:text-start'>
                            <h3 className='text-2xl font-bold text-secondary'>We invest</h3>
                            <p className='text-textColorTwo text-lg'>We invest in the long-term success of our business, our products and services. We invest in our exceptional people, in personal development, training and career progression. We invest in high performing facilities and work environments for our teams to thrive in.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                        onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieTwo)}
                        onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieTwo)}
                    >
                        <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={perSpectiveValuesLottieTwo}
                                animationData={require('@/public/assets/lottie-icons/Trophy.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div className='space-y-3 text-center lg:text-start'>
                            <h3 className='text-2xl font-bold text-secondary'>We are ambitious</h3>
                            <p className='text-textColorTwo text-lg'>
                                We are ambitious and have an entrepreneurial spirit that is focused, energising and relentless. We set ambitious goals and clear paths to success. We value career progression and encourage passionate and imaginative collaboration between like-minded and driven professionals.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 lg:gap-10'
                        onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieThree)}
                        onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieThree)}
                    >
                        <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={perSpectiveValuesLottieThree}
                                animationData={require('@/public/assets/lottie-icons/Team.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div className='space-y-3 text-center lg:text-start'>
                            <h3 className='text-2xl font-bold text-secondary'>We are people</h3>
                            <p className='text-textColorTwo text-lg'>
                                We are people and we are proud of our exceptional teams and their identities. We are supportive and promote each other’s success and we give back to our communities through impactful initiatives. We encourage teamwork, inclusivity and respect. Our people are empowered.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 lg:gap-10'
                        onMouseEnter={() => handleMouseEnter(perSpectiveValuesLottieFour)}
                        onMouseLeave={() => handleMouseLeave(perSpectiveValuesLottieFour)}
                    >
                        <div className='w-16 lg:w-1/2 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={perSpectiveValuesLottieFour}
                                animationData={require('@/public/assets/lottie-icons/Partnership.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <div className='space-y-3 text-center lg:text-start'>
                            <h3 className='text-2xl font-bold text-secondary'>We are open</h3>
                            <p className='text-textColorTwo text-lg'>
                              We are open and transparent in everything we do. We are clear about who we are, what we do and how we do it. We encourage an open-door approach to ensure every team member is valued, heard and supported.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PerspectivValues;