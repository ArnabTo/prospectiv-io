import { ArrowRightCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const PayPerLead = () => {

    const animateRef = useRef(null);
    const gradientBgRef = useRef(null);
    const cardOne = useRef(null);
    const cardTwo = useRef(null);
    const cardThree = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timer = setTimeout(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: animateRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                }
            });

            tl.fromTo(animateRef.current, {
                opacity: 0,
                y: 10,
                scale: 0.9
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7
            })
                .fromTo(cardOne.current, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6
                }, "+=0.1") // Wait 0.2s after previous animation
                .fromTo(cardTwo.current, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, "+=0.1")
                .fromTo(cardThree.current, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, "+=0.1")

                .fromTo(gradientBgRef.current, {
                    opacity: 0,
                    scale: 0.9
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5
                });
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-5 pt-36">
            <div className="flex flex-col lg:flex-row relative">
                <div className="space-y-5">
                    <div
                    ref={animateRef}
                    className="space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">Pay per Lead</h2>
                        <p className="text-md lg:text-lg text-textColorTwo lg:max-w-[80%] mx-auto">Committed to our confidence in our lead generation system, Prospectiv’s lead generation
                            services come without a fixed-term contract. You only pay for as few or as many leads as
                            you need and we’ll deliver.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                        <div
                        ref={cardOne}
                        className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                            <div>
                                <h3 className="text-2xl font-bold">Choose How Many</h3>
                                <p className="text-lg text-textColorTwo">Start From 10 Leads.</p>
                            </div>
                            <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                        </div>
                        <div
                        ref={cardTwo}
                        className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                            <div>
                                <h3 className="text-2xl font-bold">Campaign Launch</h3>
                                <p className="text-lg text-textColorTwo">Launch In 2 Weeks.</p>
                            </div>
                            <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                        </div>
                        <div
                        ref={cardThree}
                        className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                            <div>
                                <h3 className="text-2xl font-bold">Leads Delivered</h3>
                                <p className="text-lg text-textColorTwo">And Booked Into Meetings.</p>
                            </div>
                            <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                        </div>
                    </div>
                </div>

                <div
                    ref={gradientBgRef}
                    className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                    <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                    <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                    <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                </div>
            </div>
        </div>
    );
};

export default PayPerLead;