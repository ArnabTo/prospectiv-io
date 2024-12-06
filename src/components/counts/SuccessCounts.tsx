import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';

const SuccessCounts = () => {
    // State to track when the section is in view
    const [startCounting, setStartCounting] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-5 overflow-hidden">
            <div
                className="flex flex-col xl:flex-row justify-between items-center gap-2 lg:gap-10 mx-auto bg-card border border-borderColor p-5 lg:p-10 rounded-3xl">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='p-2'
                >
                    <h3 className="text-5xl font-extrabold">
                        Our results <span className="text-secondary">in numbers</span>
                    </h3>
                </motion.div>

                <div className="relative w-full">
                    <div className="flex flex-col xl:flex-row justify-start items-start md:justify-center lg:gap-8">
                        <div className="space-y-5 p-2 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-md lg:text-2xl text-foreground">Podshop</p>
                                <span className='flex flex-col items-start gap-2'>
                                    <h3 className="text-4xl lg:text-6xl text-secondary font-bold">
                                        <CountUp
                                            start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                            end={40}
                                            duration={1}
                                            useEasing={true}
                                            useGrouping={true}
                                            separator=","
                                            prefix="£"
                                            suffix="k"
                                            decimals={0}
                                        />
                                    </h3>
                                    <p className="text-md lg:text-xl text-textColorTwo">Deal from Cold Email</p>
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:ml-10"
                            >
                                <p className="text-md lg:text-2xl text-foreground">Madsocial</p>
                                <span className='flex flex-col items-start gap-2'>
                                    <h3 className="text-4xl lg:text-6xl text-gradientColorFour font-bold">
                                        <CountUp
                                            start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                            end={30}
                                            duration={3}
                                            useEasing={true}
                                            useGrouping={true}
                                            separator=","
                                            prefix=""
                                            suffix=""
                                            decimals={0}
                                        />
                                    </h3>
                                    <p className="text-md lg:text-lg text-textColorTwo">Days Deal Closed Using Cold Email</p>
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="lg:ml-10"
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg lg:text-xl text-foreground">Out of Bounds</p>
                                <span className='flex flex-col items-start gap-2'>
                                    <h3 className="text-4xl lg:text-6xl text-secondary font-bold flex gap-3">
                                        <CountUp
                                            start={startCounting ? 0 : undefined} // Start counting when in view
                                            end={18.9}
                                            duration={3}
                                            decimal='.'
                                            useEasing={true}
                                            useGrouping={true}
                                            separator=","
                                            suffix="k"
                                            decimals={1}
                                        />
                                    </h3>
                                    <p className="text-md lg:text-xl text-textColorTwo">Deal Closed In 6 Weeks</p>
                                </span>
                            </motion.div>
                        </div>
                        {/* 
                        <div className=" p-2 rounded-lg">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="lg:ml-10"
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg lg:text-xl text-foreground">Out of Bounds</p>
                                <span className='flex items-end gap-2'>
                                    <h3 className="text-4xl lg:text-6xl text-secondary font-bold flex gap-3">
                                        <CountUp
                                            start={startCounting ? 0 : undefined} // Start counting when in view
                                            end={18.9}
                                            duration={3}
                                            decimal='.'
                                            useEasing={true}
                                            useGrouping={true}
                                            separator=","
                                            suffix="k"
                                            decimals={1}
                                        />
                                    </h3>
                                    <p className="text-md lg:text-xl text-textColorTwo">Deal Closed In 6 Weeks</p>
                                </span>
                            </motion.div>
                        </div> */}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 left-32 lg:bottom-6 -z-10 animate-spin-slow transition-all"
                    >
                        <div className="bg-gradientColorFour absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorTwo absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounts;
