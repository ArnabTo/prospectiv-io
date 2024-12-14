'use client'
import GoogleFaq from '@/components/google-ads-page-component/sectionEight/GoogleFaq';
import WhatYouWillGet from '@/components/google-ads-page-component/sectionFive/WhatYouWillGet';
import WhatMakesUsDifferent from '@/components/google-ads-page-component/sectionFour/WhatMakesUsDifferent';
import ExploreOtherServices from '@/components/google-ads-page-component/sectionNine/ExploreOtherServices';
import GoogleHero from '@/components/google-ads-page-component/sectionOne/google-section-one';
import GoogleAdsCompanies from '@/components/google-ads-page-component/sectionSeven/GoogleAdsCompanies';
import GoogleContact from '@/components/google-ads-page-component/sectionTen/GoogleContact';
import WhatOurAgencyDo from '@/components/google-ads-page-component/sectionThree/WhatOurAgencyDo';
import GoogleAdsCampaignWalkThrough from '@/components/google-ads-page-component/sectionTwo/google-campaign-walkhthrough';
import HappyClient from '@/components/google-ads-page-component/serctionSix/HappyClient';
import { useEffect } from 'react';


const GoogleAds = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
      }, []); 
      
    return (
        <div className='space-y-24'>
            <GoogleHero />
            <GoogleAdsCampaignWalkThrough />
            <WhatOurAgencyDo />
            <WhatMakesUsDifferent />
            <WhatYouWillGet />
            <HappyClient />
            <GoogleAdsCompanies />
            <GoogleFaq />
            <div className='overflow-hidden'>
                <div className='relative max-w-7xl mx-auto'>
                    <ExploreOtherServices />
                    <GoogleContact />

                    <div
                        className=" blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-0 lg:-right-10 -z-10 transition-all">
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                        <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                        <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAds; 