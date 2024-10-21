'use client';
import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import '../globals.css';
import WhyProsPective from "@/components/whyprospective/WhyProsPective";
import HowItWork from "@/components/how-it-works/HowItWork";
import SuccessCounts from "@/components/counts/SuccessCounts";
import Campaign from "@/components/campaign/Campaign";
import Partners from "@/components/partners/Partners";
export default function Home() {
  return (
    <div className="space-y-24">
       <Hero />
       <Partners/>
       <WhyProsPective/>
       <SuccessCounts/>
       <WhatWeDo/>
       <HowItWork/>
       <Campaign/>
    </div>
  );
}
