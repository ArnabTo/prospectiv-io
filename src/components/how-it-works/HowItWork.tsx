import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import './cardHover.css';
import { HowItWorkTextContent } from '@/lib/TextContent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HowItWork = () => {
    // Create separate refs for each Lottie animation
    const lottieRefOne = useRef(null);
    const lottieRefTwo = useRef(null);
    const lottieRefThree = useRef(null);
    const lottieRefFour = useRef(null);
    const lottieRefFive = useRef(null);
    const lottieRefSix = useRef(null);
    const animateRef = useRef(null);
    const contentRef = useRef(null);
    const gradientBgRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: animateRef.current,
                start: 'top bottom',
                toggleActions: 'play none none none',
                once: true
            }
        })

        tl.fromTo(animateRef.current, {
            opacity: 0,
            y: 10,
            scale: 0.9
        }, {
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.5
        })
        .fromTo(contentRef.current, {
            opacity: 0,
            y: 10,
            scale: 0.9
        }, {
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.5
        })
        .fromTo(gradientBgRef.current, {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1, 
            scale: 1,
            duration: 0.5
        });
    }, []);
    
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
        <div className="max-w-7xl mx-auto px-5 pb-16 lg:py-28 space-y-10 overflow-hidden">
            <div ref={animateRef}
                className="w-full lg:max-w-[70%] mx-auto text-center space-y-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{HowItWorkTextContent?.heading?.heading}</h1>
                <p className="text-textColorTwo text-lg lg:max-w-[70%] mx-auto">{HowItWorkTextContent?.heading?.paragraph}</p>
            </div>

            <div className='relative space-y-5'>
                <div ref={contentRef}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                   
                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefOne)}
                        onMouseLeave={() => handleMouseLeave(lottieRefOne)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefOne}
                                animationData={require('@/public/assets/search.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent1?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent1?.paragraph}</p>
                    </div>

                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefTwo)}
                        onMouseLeave={() => handleMouseLeave(lottieRefTwo)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefTwo}
                                animationData={require('../../public/assets/Database.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent2?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent2?.paragraph}</p>
                    </div>

                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer  '
                        onMouseEnter={() => handleMouseEnter(lottieRefThree)}
                        onMouseLeave={() => handleMouseLeave(lottieRefThree)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefThree}
                                animationData={require('../../public/assets/mail.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent3?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent3?.paragraph}</p>
                    </div>

                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefFour)}
                        onMouseLeave={() => handleMouseLeave(lottieRefFour)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefFour}
                                animationData={require('../../public/assets/play.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent4?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent4?.paragraph}</p>
                    </div>

                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefFive)}
                        onMouseLeave={() => handleMouseLeave(lottieRefFive)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefFive}
                                animationData={require('../../public/assets/notification.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent5?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent5?.paragraph}</p>
                    </div>
       
                    <div
                        className='bg-card rounded-2xl p-5 lg:p-10 space-y-5 border border-solid border-borderColor card-animation group cursor-pointer'
                        onMouseEnter={() => handleMouseEnter(lottieRefSix)}
                        onMouseLeave={() => handleMouseLeave(lottieRefSix)}
                    >
                        <div className='max-w-16 bg-foreground rounded-lg p-1 group-hover:bg-foreground transition-all duration-1000'>
                            <Lottie
                                lottieRef={lottieRefSix}
                                animationData={require('../../public/assets/analytics.json')}
                                loop={false} // Play only once
                                autoplay={false} // Disable autoplay
                            />
                        </div>
                        <h3 className='text-3xl font-bold group-hover:text-foreground group-hover:font-extrabold transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent6?.heading}</h3>
                        <p className='text-textColorTwo text-lg group-hover:text-foreground group-hover:font-medium transition-all duration-1000'>{HowItWorkTextContent?.cardTextContent6?.paragraph}</p>
                    </div>
                </div>

                <div ref={gradientBgRef}
                    className="blur-[100px] w-full max-w-[35%] min-h-[90%] absolute left-[30%] top-0 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
