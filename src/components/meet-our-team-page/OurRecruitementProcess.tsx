'use client'
import { motion } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';

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
            animationData: require('@/public/assets/file.json') // Replace with your actual animation file
        },
        {
            title: "Initial chat",
            description: "Initial interview to meet you, explain the role and make sure we look to be a good fit for each other.",
            lottieRef: lottieRefs.initialChat,
            animationData: require('@/public/assets/chat.json') // Replace with your actual animation file
        },
        {
            title: "Task",
            description: "For some roles, you may be given a task that simulates the job's technology or responsibilities. Our past tests reflect creative, inspired work from candidates.",
            lottieRef: lottieRefs.task,
            animationData: require('@/public/assets/checklist.json') // Replace with your actual animation file
        },
        {
            title: "Tech Interview",
            description: "An in-depth interview with your potential line manager and a senior team member. No whiteboard coding or sorting algorithms—just relevant technical questions.",
            lottieRef: lottieRefs.techInterview,
            animationData: require('@/public/assets/Hire.json') // Replace with your actual animation file
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
                <div className='rounded-xl p-5 lg:p-7 flex flex-col justify-center items-center h-fit'>
                    <h2 className='text-3xl font-bold'>Our engineering recruitment process</h2>
                    <p className='text-textColorTwo mt-4'>We keep it simple - all roles follow the same four step process.</p>
                </div>
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
                                        <div className="w-24 h-24 bg-foreground p-1 rounded-full flex items-center justify-center">
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
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default OurRecruitementProcess;