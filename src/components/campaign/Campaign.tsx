import Link from "next/link";
import { motion } from 'framer-motion';
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Campaign = () => {

    const animateRef = useRef(null);

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
        })
    }, []);

    return (
        <div className="relative max-w-7xl px-5 mx-auto lg:py-24">
            {/* Glowing background wrapper */}
            <div className="absolute max-w-[80%] mx-auto inset-0 bg-gradient-to-r from-gradientColorOne via-gradientColorTwo to-gradientColorThree opacity-40 blur-3xl z-[-1] rounded-3xl"></div>

            <div ref={animateRef}
                className="lg:max-w-[80%] mx-auto bg-card flex flex-col xl:flex-row items-center gap-5 p-5 lg:p-10 rounded-3xl relative z-10 border border-borderColor">
                <div className="p-3 xl:max-w-[50%] mx-auto text-center">
                    <h2 className="text-3xl font-bold">Launch Your Campaign In As Little As 2 Weeks.</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-60 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="/demo" className="flex-1 font-bold text-lg bg-black px-10 text-center py-5 rounded-full hover:scale-95 transition-all duration-300">
                            Book a Demo
                        </Link>
                    </div>
                    <div className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform">
                        <Link href="/pricing" className="flex-1 font-semibold text-lg bg-buttonColor text-foreground text-center lg:px-10 py-5 rounded-full hover:bg-buttonHoverColor hover:scale-95 transition-all duration-300">
                            See Our Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
