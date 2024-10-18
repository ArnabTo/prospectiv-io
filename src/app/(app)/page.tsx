'use client';
import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import '../globals.css';
import WhyProsPective from "@/components/whyprospective/WhyProsPective";
import HowItWork from "@/components/how-it-works/HowItWork";
export default function Home() {
  return (
    <div className=" space-y-24">
       <Hero />
       <WhyProsPective/>
       <WhatWeDo/>
       <HowItWork/>
    </div>
  );
}
