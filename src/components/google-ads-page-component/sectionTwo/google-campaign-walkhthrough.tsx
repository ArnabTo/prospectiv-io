'use client'
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
    <div className="overflow-x-hidden xl:overflow-visible relative py-32">
      <div className="w-full max-w-7xl mx-auto px-5 py-12">
        <h2 className="lg:w-1/2 mx-auto text-2xl md:text-4xl font-bold text-center mb-12 text-foreground">
          How we execute high performing
          Google Ads campaigns
        </h2>

        {/* small device content */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {
              executionData.map((item) => (
                <div
                 key={item.id}
                 onClick={() => handleItemClick(item.id)}
                 className={`bg-card border border-borderColor rounded-3xl p-5 mb-4 space-y-5 h-full`}>
                  <div className='w-10 h-10 mx-auto rounded-full text-2xl font-bold flex items-center justify-center bg-secondary p-5'>
                    {item.id}
                  </div>
                  <div className={`text-center flex-grow`}>
                    <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
                    <p className="text-lg text-textColorTwo mt-2">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* large device content */}
        {/* <div className="relative hidden xl:block">
        
          <div className="absolute h-1 bg-buttonColor top-1/2 transform -translate-y-1/2 left-0 right-0 z-0" />


          <div className="relative z-10 flex flex-nowrap md:flex-wrap justify-between items-center">
            {executionData.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col items-center"
                role="button"
                tabIndex={0}
                onClick={() => handleItemClick(item.id)}
                onKeyPress={(e) => e.key === "Enter" && handleItemClick(item.id)}
              >
              
                <div className='w-10 h-10 rounded-full text-2xl font-bold flex items-center justify-center bg-secondary p-5'>
                  {item.id}
                </div>

             
                <div className={`absolute top-16 bg-card border border-borderColor text-center rounded-2xl shadow-lg p-5 min-w-80 max-w-96 group-hover:scale-105
                transition-all duration-300 ease-in-out ${selectedId === item.id ? "scale-105 bg-secondary" : ""}`}>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-lg text-textColorTwo mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div
          className="blur-[100px] w-full max-w-[35%] min-h-[90%] absolute left-[30%] top-0 -z-10 animate-spin-slow transition-all">
          <div className="bg-gradientColorOne absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
          <div className="bg-gradientColorTwo absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
          <div className="bg-gradientColorThree absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
        </div>
    </div>
  );
};

export default GoogleAdsCampaignWalkThrough;