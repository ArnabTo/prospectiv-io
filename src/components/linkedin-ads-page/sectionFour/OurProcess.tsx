'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Audit from '@/public/assets/audit-2.png'
import PositionImage from '@/public/assets/positioning.png'
import ContentStrategy from '@/public/assets/content-strategy.png'
import AssetCreation from '@/public/assets/asset-creation.png'
import Optimization from '@/public/assets/ab-testing-optimisation-1.png'
import Exprerimentation from '@/public/assets/experiment.png'
import Reporting from '@/public/assets/reporting-1.png'
import Image from "next/image";
const OurProcess = () => {
    const [activeStep, setActiveStep] = useState(0);

    const Process = [
        {
            title: 'Audit',
            description: 'A comprehensive review of your Linkedin Ad Account to look at historical data and activity, helping inform our campaign objectives and recommended strategy.',
            imageContent: Audit
        },
        {
            title: 'Positioning',
            description: 'We gain a deep understanding of the space you want to occupy in the minds of your target audience by identifying your ideal customers, their interests, and how your product is uniquely positioned to provide solutions to their problems.',
            imageContent: PositionImage
        },
        {
            title: 'Targeting & Content Strategy ',
            description: 'We develop a personalised advertising strategy that fits your objectives on the platform. By diversifying ad formats and targeting different stages of customer awareness, we ensure variety and build a holistic brand presence.',
            imageContent: ContentStrategy
        },
        {
            title: 'Asset Creation',
            description: 'We create, or brief the relevant assets to deliver the content strategy, prioritising what we plan to activate on a cold audience first.',
            imageContent: AssetCreation
        },
        {
            title: 'Experimentation',
            description: 'Continuous split testing across targeting, creative, and copy allows us to quickly hone in on what is likely to deliver the best results. Using the data to refine effective lead magnets, that target decision makers.',
            imageContent: Exprerimentation
        },
        {
            title: 'Optimization',
            description: [
                "**Performance Analysis:** Ensuring your ads operate at peak performance is our priority. We delve deep into metrics to understand ad behaviour",
                "**CRO(Conversion Rate Optimization):**Tweaking ads to improve poor conversion rates, from clicks to leads",
                "**Landing Page Enhancement:** Ensuring the transition from ad to website is seamless and effective"
            ],
            imageContent: Optimization
        },
        {
            title: 'Reporting',
            description: [
                "**Performance Reports:** Understand your campaign's end-to-end performance through detailed reports.",
                "**Insightful Analytics:** Beyond numbers, we provide actionable insights for continuous growth.",
                "**Feedback Sessions:** Bi-weekly scheduled sessions ensure we’re aligned with your goals and visions."
            ],
            imageContent: Reporting
        },
    ]

    return (
        <div>
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-5">
                        <div className="space-y-3 md:w-1/2 text-center md:text-start">
                            <h1 className="text-3xl lg:text-4xl font-bold">Our Process</h1>
                            <p className="text-lg text-textColorTwo">Tried and tested by our LinkedIn Advertising experts to ensure you receive the best results and ROI</p>
                        </div>
                        <div
                            className="w-6o flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="pricing" className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 py-5 rounded-full hover:bg-buttonHoverColor">
                                See Our Pricing
                            </Link>
                        </div>
                    </div>
                    <Separator className="mb-5" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Process Steps Sidebar */}
                        <div className="space-y-2 bg-card">
                            {Process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`
                                    flex items-center gap-4 p-4 rounded-2xl border border-borderColor cursor-pointer transition-all duration-300 group
                                    ${activeStep === index
                                            ? 'bg-background text-secondary shadow-lg'
                                            : 'hover:bg-gray-100 text-gray-600'}
                                `}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CircleCheckBig />
                                    </motion.div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-lg text-foreground group-hover:text-secondary">{`Step ${index + 1}: ${step.title}`}</h3>
                                    </div>
                                    <ChevronRight className="text-gray-400" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Active Step Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card border border-borderColor rounded-3xl shadow-2xl p-8 space-y-4 flex flex-col xl:flex-row justify-center items-center gap-5"
                            >
                                <div>
                                    <motion.h2
                                        className="text-3xl font-bold text-secondary mb-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {Process[activeStep].title}
                                    </motion.h2>
                                    <motion.p
                                        className="text-lg text-textColorTwo leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {Array.isArray(Process[activeStep].description) ? (
                                            // If description is an array, render it as a list
                                            <ul className="space-y-2">
                                                {Process[activeStep].description.map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.3 + index * 0.1 }}
                                                        className="list-disc"
                                                    >
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        ) : (
                                            // Otherwise, render description as plain text
                                            <p>{Process[activeStep].description}</p>
                                        )}
                                    </motion.p>
                                </div>
                                <motion.div
                                    className="min-w-[50%] flex justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        alt="image"
                                        src={Process[activeStep].imageContent}
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;