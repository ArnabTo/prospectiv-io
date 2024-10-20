import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './glow.css'
import CountUp from 'react-countup';

const Intro = () => {
    const [showBlackScreen, setShowBlackScreen] = useState(true);
    const [showText, setShowText] = useState(true);
    const [showCounter, setShowCounter] = useState(false); // Changed to false initially

    useEffect(() => {
        // Disable scrolling by setting body overflow to hidden
        document.body.style.overflow = 'hidden';

        const textTimer = setTimeout(() => setShowText(false), 1500); // Text disappears after 3 seconds
        const blackScreenTimer = setTimeout(() => setShowBlackScreen(false), 3000); // Black screen disappears after 5 seconds

        // Cleanup after intro finishes
        return () => {
            clearTimeout(textTimer);
            clearTimeout(blackScreenTimer);
            // Enable scrolling again by removing overflow hidden
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        // Remove scroll lock once the intro finishes (when showBlackScreen is false)
        if (!showBlackScreen) {
            document.body.style.overflow = '';
        }
    }, [showBlackScreen]);

    return (
        <>
            <AnimatePresence>
                {showBlackScreen && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="bg-black w-full h-screen fixed top-0 left-0 z-40"
                    />
                )}
                {showBlackScreen && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute -top-60 -left-24 lg:-left-52 z-50 animate-spin-slow transition-all"
                    >
                        <div className="bg-[#6f86ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-[#fe316f] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-[#d220ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                )}
                {showBlackScreen && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:-bottom-44 lg:right-0 z-50 transition-all"
                    >
                        <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-[#1766ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-[#6923ff] absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showText && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
                    >
                        <div className="flex h-screen w-full items-center justify-center">
                            <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white via-white to-white bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none">
                              Prospectiv
                            </span>
                            <h1
                                className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-white to-white bg-clip-text text-7xl font-extrabold text-transparent text-center select-auto">
                              Prospectiv
                            </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showText && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="fixed top-0 left-0 w-full h-full z-50 flex items-end justify-center"
                    >
                        <CountUp
                            start={0}
                            end={100}
                            duration={3}
                            className="text-white text-lg font-normal z-50"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Intro;
