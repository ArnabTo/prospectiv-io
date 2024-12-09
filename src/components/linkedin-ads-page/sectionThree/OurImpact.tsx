'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from 'react-countup';
import GraphSvg from '@/public/assets/graph.svg'
import { Banknote, Building, Currency, Zap } from "lucide-react";
const OurImpact = () => {

    const [startCounting, setStartCounting] = useState(false);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStartCounting(true)}
                className="max-w-7xl mx-auto p-5 space-y-5">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="xl:w-1/2 md:flex lg:flex-col justify-between items-center gap-5">
                        <div className="md:w-1/2 lg:w-full text-center md:text-start space-y-2 mb-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Impact</h2>
                            <p className="text-lg text-textColorTwo">As a leading LinkedIn Ads Agency, we are obsessed with growth from the platform, and our ideal clients are too.</p>
                        </div>
                        <div
                            className="w-60 flex rounded-full mx-auto lg:ml-[0px] bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="/demo" className="flex-1 font-bold text-lg text-center bg-black px-10 py-5 rounded-full hover:scale-95 transition-all duration-300">
                                Book a Demo
                            </Link>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                        <motion.div
                            className="bg-gradient-to-br from-buttonHoverColor to-background
                  rounded-2xl shadow-2xl border-4 border-white/20 
                  p-6 w-full mx-auto lg:max-w-xs
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-4xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <div className="bg-white/20 rounded-full p-3 mb-2">
                                    <Banknote className="text-white w-8 h-8" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}
                                        end={40}
                                        duration={1}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix="£"
                                        suffix="M"
                                        decimals={0}
                                        className="text-5xl font-bold text-secondary"
                                    />
                                </div>
                                <motion.div
                                    className="w-full h-1 bg-white/30 rounded-full mt-4"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                                <div className="text-center text-textColorTwo space-y-1">
                                    <p className="text-2xl font-semibold">Managed to spend</p>
                                    <p className="text-lg tracking-wider">on Ads</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-gradient-to-br from-buttonHoverColor to-background
                  rounded-2xl shadow-2xl border-4 border-white/20 
                  p-6 w-full mx-auto lg:max-w-xs
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-4xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col items-center justify-center space-y-3">
                                <div className="bg-white/20 rounded-full p-3 mb-2">
                                    <Building className="text-white w-8 h-8" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}
                                        end={75}
                                        duration={1}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix=""
                                        suffix="+"
                                        decimals={0}
                                        className="text-5xl font-bold text-secondary"
                                    />
                                </div>
                                <motion.div
                                    className="w-full h-1 bg-white/30 rounded-full mt-4"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                                <div className="text-center text-textColorTwo space-y-1">
                                    <p className="text-2xl font-semibold">Companies We've </p>
                                    <p className="text-lg tracking-wider">helped to grow</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OurImpact;