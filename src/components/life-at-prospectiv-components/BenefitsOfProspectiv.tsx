'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../../app/custom.css';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';

const BenefitsOfProspectiv = () => {

    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);
    const lottieRefFour = useRef(null);

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
            <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10 space-y-5'>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='md:max-w-lg lg:max-w-[300px] xl:max-w-md space-y-7 mx-auto'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start'>Benefits of Prospectiv</h1>
                    <p className='text-md lg:text-lg text-textColorTwo text-center lg:text-start'>
                        Our benefits vary by location, but the core perks remain consistent no matter where you're based.
                    </p>
                    <div className="w-60 lg:w-full md:max-w-60 mx-auto lg:mx-0 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group">
                        <Link href="/demo" className="flex-1 font-bold text-xl text-center bg-black px-5 py-4 rounded-full group-hover:scale-95 transition-all duration-300">
                            Book a Demo
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='px-5'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                        }}
                        className='mySwiper w-60 md:w-96 lg:w-[500px] mx-auto lg:mx-0'
                    >
                        <SwiperSlide className='bg-gradient-to-tr from-secondary via-gradientColorThree to-gradientColorFour'>
                            <div
                                className=' rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                                onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefOne}
                                        animationData={require('@/public/assets/lottie-icons/Advantage.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>
                                    Career Progression Plan
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>
                                    We provide a clear career path with regular 360-degree feedback, ensuring continuous learning and growth as a professional.
                                </p>
                                {/* <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>
                            We offer a well-structured career progression path supported by regular 360-degree feedback. Everyone has a clear path, so you’ll continually learn and grow as a professional.
                        </p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-gradient-to-tr from-secondary via-gradientColorThree to-gradientColorFour'>
                            <div
                                className=' rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                                onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefTwo}
                                        animationData={require('@/public/assets/lottie-icons/medicine box.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>
                                    Private Healthcare Insurance
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>
                                    We look out for your health with a high level of private medical care.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-gradient-to-tr from-secondary via-gradientColorThree to-gradientColorFour'>
                            <div
                                className=' rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                                onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefThree}
                                        animationData={require('@/public/assets/lottie-icons/share.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>
                                    Company Profit Sharing
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>
                                    We believe in sharing in our success, so we reward your loyalty using 10% of our yearly profits.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='bg-gradient-to-tr from-secondary via-gradientColorThree to-gradientColorFour'>
                            <div
                                className=' rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                                onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                                onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                            >
                                <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                                    <Lottie
                                        lottieRef={lottieRefFour}
                                        animationData={require('@/public/assets/lottie-icons/calendar V3.json')}
                                        loop={false} // Play only once
                                        autoplay={false} // Disable autoplay
                                    />
                                </div>
                                <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>
                                    Extended Annual Leave
                                </h3>
                                <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>
                                    We provide additional annual leave allowance above the standard paid leave determined by law.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
};

export default BenefitsOfProspectiv;