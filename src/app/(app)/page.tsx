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
import PayperleadDynamic from "@/components/joint-section/payperlead-dynamic";
import Walkthrough from "@/components/walkthrough/Walkthrough";
import FlexibleLead from "@/components/flexible-lead/FlexibleLead";
export default function Home() {

  return (

    <div className="space-y-24">
      <Hero />
      <Omni />
      <FlexibleLead/>
      <SuccessCounts />
      <PayperleadDynamic/>
      <Walkthrough />
      <BlogSection />
      <Campaign />
    </div>

  );
}
