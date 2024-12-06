import DynamicPricing from "../dynamic-pricing/DynamicPricing";
import PayPerLead from "../pay-per-lead/PayPerLead";
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const PayperleadDynamic = () => {

    const gradientBgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: gradientBgRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });

        tl.fromTo(gradientBgRef.current, {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5
        });
    }, []);

    return (
        <div className="relative overflow-hidden lg:overflow-visible max-w-7xl mx-auto space-y-10">
            <PayPerLead />
            <DynamicPricing />
            <div
                ref={gradientBgRef}
                className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 -z-10 animate-spin-slow transition-all">
                <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </div>
            {/* <div 
               ref={gradientBgRef}
                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </div> */}
        </div>
    );
};

export default PayperleadDynamic;