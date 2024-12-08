'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

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

  return (
    <section className="overflow-x-hidden xl:overflow-visible relative pt-32">
      <div className="w-full max-w-7xl mx-auto px-5 py-12">
        <h2 className="lg:w-1/2 mx-auto text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
          How we execute high performing
          Google Ads campaigns
        </h2>

        {/* small device content */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
            {
              executionData.map((item) => (
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * item.id }}
                viewport={{ once: true }}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`bg-card border border-borderColor rounded-3xl p-5 mb-4 space-y-5 h-full pt-10`}>
                  <div className='w-10 h-10 mx-auto rounded-full text-2xl font-bold flex items-center justify-center bg-secondary p-5'>
                    {item.id}
                  </div>
                  <div className={`text-center flex-grow`}>
                    <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
                    <p className="text-lg text-textColorTwo mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>

      </div>
      <div
        className="blur-[100px] w-full max-w-[35%] min-h-[60%] absolute left-[30%] top-40 -z-10 transition-all">
        <div className="bg-gradientColorOne absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
        <div className="bg-gradientColorTwo absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
        <div className="bg-gradientColorThree absolute rounded-full w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
      </div>
    </section>
  );
};

export default GoogleAdsCampaignWalkThrough;