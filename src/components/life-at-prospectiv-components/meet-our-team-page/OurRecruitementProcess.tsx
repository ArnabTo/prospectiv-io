'use client'
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const OurRecruitementProcess = () => {

    const lottieRefs = {
        screening: useRef<LottieRefCurrentProps>(null),
        initialChat: useRef<LottieRefCurrentProps>(null),
        task: useRef<LottieRefCurrentProps>(null),
        techInterview: useRef<LottieRefCurrentProps>(null)
    };


    const steps = [
        {
            title: "Screening",
            description: "Send us your CV. Or your portfolio. Or even better a Github link full of half finished hobby projects and a stack overflow username.",
            lottieRef: lottieRefs.screening,
            animationData: require('@/public/assets/lottie-icons/file.json') // Replace with your actual animation file
        },
        {
            title: "Initial chat",
            description: "Initial interview to meet you, explain the role and make sure we look to be a good fit for each other.",
            lottieRef: lottieRefs.initialChat,
            animationData: require('@/public/assets/lottie-icons/chat.json') // Replace with your actual animation file
        },
        {
            title: "Task",
            description: "For some roles, you may be given a task that simulates the job's technology or responsibilities. Our past tests reflect creative, inspired work from candidates.",
            lottieRef: lottieRefs.task,
            animationData: require('@/public/assets/lottie-icons/checklist.json') // Replace with your actual animation file
        },
        {
            title: "Tech Interview",
            description: "An in-depth interview with your potential line manager and a senior team member. No whiteboard coding or sorting algorithms—just relevant technical questions.",
            lottieRef: lottieRefs.techInterview,
            animationData: require('@/public/assets/lottie-icons/Hire.json') // Replace with your actual animation file
        }
    ];
    const handleMouseEnter = (ref: any) => {
        if (ref.current) {
            ref.current.play();
        }
    };

    const handleMouseLeave = (ref: any) => {
        if (ref.current) {
            ref.current.stop();
        }
    };
    return (
        <div className="w-full mx-auto px-4">
            <div className='rounded-xl'>
                <div className='rounded-xl lg:p-7 text-center flex flex-col justify-center items-center h-fit'>
                    <h2 className='text-3xl font-bold'>Our engineering recruitment process</h2>
                    <p className='text-textColorTwo mt-4'>We keep it simple - all roles follow the same four step process.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex flex-col md:flex-row gap-4">
                                <Card className='border-none bg-transparent'>
                                    <CardHeader>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 * index }}
                                            viewport={{ once: true }}
                                            className="flex flex-col items-center space-y-5 w-full"
                                            onMouseEnter={() => handleMouseEnter(step.lottieRef)}
                                            onMouseLeave={() => handleMouseLeave(step.lottieRef)}
                                        >
                                            {/* Lottie container with fixed dimensions */}
                                            <div className="w-24 h-24 bg-foreground p-1 rounded-full flex items-center justify-center relative">
                                                <div className='absolute left-0 top-0 text-md font-bold bg-secondary w-5 h-5 m-auto rounded-full flex justify-center items-center'>{index + 1}</div>
                                                <Lottie
                                                    lottieRef={step.lottieRef}
                                                    animationData={step.animationData}
                                                    loop={false}
                                                    autoplay={false}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </motion.div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3 text-center w-full">
                                            <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                                            <p className="text-textColorTwo text-base md:text-lg">{step.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Arrow - Only show between items, not after the last one */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center">
                                        <ArrowRight size={30} className="transform rotate-0 lg:rotate-0" />
                                    </div>
                                )}
                                 {index < steps.length - 1 && (
                                    <div className="lg:hidden flex items-center justify-center">
                                        <ArrowDown size={30} className="transform rotate-0 lg:rotate-0" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <ArrowDown size={50} />
                        <div className="w-60 lg:w-full flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                            <Link href="/company/careers" className="flex-1 font-semibold text-lg bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                See Open Roles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurRecruitementProcess;