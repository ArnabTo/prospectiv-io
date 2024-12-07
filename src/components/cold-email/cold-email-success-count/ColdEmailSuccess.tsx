import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';

const ColdEmailSuccess = () => {
    // State to track when the section is in view
    const [startCounting, setStartCounting] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-5 overflow-hidden">
            <div
                className="w-fit flex flex-col xl:flex-row justify-between items-center gap-2 lg:gap-10 mx-auto bg-card border border-borderColor p-5 lg:p-10 rounded-3xl">
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
                    <div className="flex flex-col md:flex-row justify-start items-start md:justify-center lg:gap-8">
                        <div className="space-y-5 p-2 rounded-lg flex flex-col items-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-md lg:text-xl text-textColorTwo">Campaign Run</p>
                                <h3 className="text-4xl lg:text-6xl text-secondary font-bold">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                        end={1000}
                                        duration={1}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix=""
                                        suffix="+"
                                        decimals={0}
                                    />
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="md:ml-10"
                            >
                                <p className="text-md lg:text-2xl text-textColorTwo">Happy Clients</p>
                                <h3 className="text-4xl lg:text-6xl text-secondary font-bold">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                        end={50}
                                        duration={3}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix=""
                                        suffix="+"
                                        decimals={0}
                                    />
                                </h3>
                            </motion.div>
                        </div>

                        <div className="p-2 rounded-lg space-y-5 flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg lg:text-xl text-textColorTwo">Attributed in 2024</p>
                                <h3 className="text-4xl lg:text-6xl text-gradientColorFour font-bold flex gap-3">
                                    <CountUp
                                        start={startCounting ? 0 : undefined} // Start counting when in view
                                        end={1.3}
                                        duration={3}
                                        decimal='.'
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix="$"
                                        suffix="M+"
                                        decimals={1}
                                    />
                                </h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="md:ml-16"
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg lg:text-xl text-textColorTwo">Leads Delivered</p>
                                <h3 className="text-4xl lg:text-6xl text-gradientColorFour font-bold flex gap-3">
                                    <CountUp
                                        start={startCounting ? 0 : undefined} // Start counting when in view
                                        end={13500}
                                        duration={3}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        suffix="+"
                                    />
                                </h3>
                            </motion.div>
                        </div>
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

export default ColdEmailSuccess;
