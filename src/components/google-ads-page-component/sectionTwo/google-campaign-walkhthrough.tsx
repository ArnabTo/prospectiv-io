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
    <section className="relative pt-32 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-5 py-12">
        <h2 className="lg:w-1/2 mx-auto text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
          How we execute high performing
          Google Ads campaigns
        </h2>

        {/* small device content */}
        <div className="md:hidden">
          {
            executionData.map((event, index) => (
              <div key={event.id} className=" rounded-2xl p-5 flex flex-col items-center text-center mb-5">
                <div className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2`}>
                  <span className="w-10 h-10 flex justify-center items-center rounded-full text-primary-foreground text-lg font-bold bg-secondary text-foreground">{event.id}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-normal lg:text-lg text-textColorTwo">{event.description}</p>
              </div>
            ))
          }
        </div>

        {/* large device content */}
        <div className="hidden md:block relative w-full 2xl:flex justify-center items-center md:overflow-x-auto 2xl:overflow-x-visible">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between min-w-max px-4 py-8">
            {executionData.map((event, index) => (
              <React.Fragment key={event.id}>
                {index > 0 && (
                  <div className="hidden md:block w-24 h-0.5 bg-gray-300" aria-hidden="true" />
                )}
                <div className=" rounded-2xl p-5 flex flex-col items-center text-center w-72 sm:w-80 md:w-64 lg:w-80">
                  <div className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2`}>
                    <span className="w-10 h-10 flex justify-center items-center rounded-full text-primary-foreground text-lg font-bold bg-secondary text-foreground">{event.id}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-normal lg:text-lg text-textColorTwo">{event.description}</p>
                </div>
              </React.Fragment>
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