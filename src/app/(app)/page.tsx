'use client';
import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import '../globals.css';
export default function Home() {
  return (
    <div className=" space-y-24">
       <Hero />
       <WhatWeDo/>
    </div>
  );
}
