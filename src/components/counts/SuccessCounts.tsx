import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useState } from 'react';

const SuccessCounts = () => {
    // State to track when the section is in view
    const [startCounting, setStartCounting] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-2 overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2 bg-card border border-borderColor p-5 lg:p-10 rounded-3xl">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-textColorTwo">Our Numbers</p>
                    <h3 className="text-6xl font-extrabold">
                        Our results <span className="text-secondary">in <br /> numbers</span>
                    </h3>
                </motion.div>

                <div className="relative">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="space-y-5 p-5 rounded-lg">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg text-textColorTwo">Successful Projects</p>
                                <h3 className="text-7xl text-secondary font-bold">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                        end={1000}
                                        duration={0.5}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        prefix="$"
                                        suffix="+"
                                        decimals={0}
                                    />
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="lg:ml-10"
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg text-textColorTwo">Happy Clients</p>
                                <h3 className="text-7xl text-secondary font-bold flex gap-3">
                                    <CountUp
                                        start={startCounting ? 0 : undefined} // Start counting when in view
                                        end={15}
                                        duration={5}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        suffix="k+"
                                        decimals={0}
                                    />
                                </h3>
                            </motion.div>
                        </div>

                        <div className="space-y-5 p-5 rounded-lg">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                onViewportEnter={() => setStartCounting(true)} // Trigger counting when in view
                            >
                                <p className="text-lg text-textColorTwo">Attributed</p>
                                <h3 className="text-7xl text-[#6923ff] font-bold">
                                    <CountUp
                                        start={startCounting ? 0 : undefined}// Start counting when in view
                                        end={1.3}
                                        duration={5}
                                        useEasing={true}
                                        useGrouping={true}
                                        separator=","
                                        decimal="."
                                        decimals={1}
                                        prefix="$"
                                        suffix="M+"
                                    />
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="lg:ml-10"
                            >
                                <p className="text-lg text-textColorTwo">Satisfied Clients</p>
                                <h3 className="text-7xl text-[#6923ff] font-bold">
                                <CountUp
                                       start={startCounting ? 0 : undefined}// Start counting when the section is in view
                                        end={13500}
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
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 left-32 lg:bottom-6 -z-10 animate-spin-slow transition-all"
                    >
                        <div className="bg-[#6923ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-[#fe316f] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-[#6923ff] absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounts;
