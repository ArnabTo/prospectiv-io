'use client';
import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import '../globals.css';
import WhyProsPective from "@/components/whyprospective/WhyProsPective";
import HowItWork from "@/components/how-it-works/HowItWork";
import SuccessCounts from "@/components/counts/SuccessCounts";
import Campaign from "@/components/campaign/Campaign";
import BlogSection from "@/components/Blogs/BlogSection";
import Omni from "@/components/omni-channel/Omni";
import CarouselComp from "@/components/omni-channel/CarouselComp";
import PayPerLead from "@/components/pay-per-lead/PayPerLead";
import DynamicPricing from "@/components/dynamic-pricing/DynamicPricing";
import PayperleadDynamic from "@/components/joint-section/payperlead-dynamic";
export default function Home() {

  return (

    <div className="space-y-24">
      <Hero />
      <WhyProsPective />
      <Omni />
      <SuccessCounts />
      {/* <PayPerLead/>
      <DynamicPricing/> */}
      <PayperleadDynamic/>
      <WhatWeDo />
      <HowItWork />
      <BlogSection />
      <Campaign />
    </div>

  );
}
