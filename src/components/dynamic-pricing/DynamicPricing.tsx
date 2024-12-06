import { ArrowRightCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const DynamicPricing = () => {

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
        <div className="p-5 relative">
            <div className='max-w-7xl mx-auto '>
                <div className="flex flex-col lg:flex-row">
                    <div className="space-y-5">
                        <div
                            ref={animateRef}
                            className="space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">Dynamic Pricing</h2>
                            <p className="text-md lg:text-lg text-textColorTwo lg:max-w-[80%] mx-auto">
                                We use demand-based pricing to adjust the cost of a lead credit based its true value. For example, if
                                CPM reduces, so does the cost of a credit. We pull data from across our cold email, LinkedIn Ads and
                                Google Ads efforts to calculate a true cost per lead, so you never pay for more than you have to.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
                            <div
                                ref={cardOne}
                                className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                                <div>
                                    <h3 className="text-2xl font-bold">CPMs Reduce</h3>
                                    <p className="text-lg text-textColorTwo">Lead Cost Decreases</p>
                                </div>
                                <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                            </div>
                            <div
                                ref={cardTwo}
                                className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                                <div>
                                    <h3 className="text-2xl font-bold">CPMs Increase</h3>
                                    <p className="text-lg text-textColorTwo">Lead Cost Increases</p>
                                </div>
                                <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                            </div>
                            <div
                                ref={cardThree}
                                className="bg-card border-l-2 border-secondary p-5 flex items-center justify-between group hover:bg-[#fe316f0a] tramsition duration-300 cursor-pointer rounded-r-xl">
                                <div>
                                    <h3 className="text-2xl font-bold">Only  Pay It’s Worth</h3>
                                    <p className="text-lg text-textColorTwo">Pay The Best Price</p>
                                </div>
                                <ArrowRightCircle size={40} className='group-hover:text-secondary tramsition duration-300 ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicPricing;