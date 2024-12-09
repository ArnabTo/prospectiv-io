'use client'
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface ExecutionStepProps {
  step: {
    id: number
    title: string
    description: string
  }
  index: number
  isActive: boolean
  controls: any
}

const GoogleAdsCampaignWalkThrough = () => {
  const [selectedId, setSelectedId] = useState(null);

  const executionData = [
    {
      id: 1,
      title: "Analyzing your ideal client",
      description: "The first step is learning about your business, ideal client, and goals. From there, we'll segment your target audiences based on years of experience and our B2B expertise.",
    },
    {
      id: 2,
      title: "Keyword research & competitor ads analysis",
      description: "Choosing the right keywords to bid on is the foundation of success. We'll research keywords and the competition to create Google Ads campaigns that drives sales.",
    },
    {
      id: 3,
      title: "Set up and launch your campaigns",
      description: "We'll set up your Google Ads campaigns with the most relevant keywords and ad copy. Multiple ad variations are tested to achieve the highest conversion rates possible.",
    },
    {
      id: 4,
      title: "Optimization & team meetings",
      description: "The work on Google Ads isn't done yet! We’ll be testing new bidding strategies, fresh ads copy & schedule strategy calls to maximize your results.",
    }
  ];

  const handleItemClick = (id: any) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const [activeStep, setActiveStep] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const animateSteps = async () => {
      await controls.start('visible')
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % executionData.length)
      }, 5000)
      return () => clearInterval(interval)
    }
    animateSteps()
  }, [controls])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }


  return (
    <section className="relative pt-32 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-5 py-12">
        <h2 className="lg:w-1/2 mx-auto text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
          How we execute high performing
          Google Ads campaigns
        </h2>
        <div className="mx-auto px-4 py-16">
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-buttonColor transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1 }}
            />
            {executionData.map((step, index) => (
              <ExecutionStep
                key={step.id}
                step={step}
                index={index}
                isActive={index === activeStep}
                controls={controls}
              />
            ))}
          </div>
        </div>

      </div>
      <div
        className="opacity-[0.5] blur-[100px] w-full max-w-[35%] min-h-[60%] absolute left-[30%] top-40 -z-10 transition-all">
        <div className="bg-gradientColorOne absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
        <div className="bg-gradientColorTwo absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
        <div className="bg-gradientColorThree absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
      </div>
    </section>
  );
};

export default GoogleAdsCampaignWalkThrough;



function ExecutionStep({ step, index, isActive, controls }: ExecutionStepProps) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative flex flex-col items-center mb-8">
      <motion.div
        className={`
        flex flex-col-reverse md:flex-row items-center w-full
        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <motion.div
          className={`
          w-full md:w-1/2 p-4 md:p-6 
          bg-background md:bg-card border border-borderColor rounded-2xl shadow-lg 
          mb-4 md:mb-0 z-10 relative
          ${index % 2 === 0 ? 'md:mr-8 md:-ml-2' : 'md:ml-8 md:-mr-2'}
        `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-base md:text-lg text-textColorTwo">{step.description}</p>
        </motion.div>
        <motion.div
          className={`
          w-10 h-10 md:w-12 md:h-12 
          bg-secondary rounded-full 
          flex items-center justify-center 
          text-white font-bold 
          mb-4 md:mb-0 z-20 relative
          ${isActive ? 'ring-4 ring-[#fa8bba]' : ''}
        `}
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, repeat: isActive ? Infinity : 0, repeatType: 'reverse' }}
        >
          {step.id}
        </motion.div>
      </motion.div>
    </div>
  )
}
