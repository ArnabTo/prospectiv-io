'use client';
import BlogSection from "@/components/Blogs/BlogSection";
import Campaign from "@/components/campaign/Campaign";
import ColdEmailHero from "@/components/cold-email/cold-email-hero/ColdEmailHero";
import ColdEmailSuccess from "@/components/cold-email/cold-email-success-count/ColdEmailSuccess";
import ExploreOtherServices from "@/components/cold-email/explore-services/ExploreOtherServices";
import HowItWork from "@/components/how-it-works/HowItWork";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import WhyProsPective from "@/components/whyprospective/WhyProsPective";


const ColdEmail = () => {
    return (
        <div className="space-y-24">
            <ColdEmailHero/>
            <WhyProsPective />
             <ColdEmailSuccess/>
            <WhatWeDo/>
            <HowItWork/>
            <ExploreOtherServices/>
            <Campaign />
        </div>
    );
};

export default ColdEmail;