
import WhatYouWillGet from '@/components/google-ads-page-component/sectionFive/WhatYouWillGet';
import WhatMakesUsDifferent from '@/components/google-ads-page-component/sectionFour/WhatMakesUsDifferent';
import GoogleHero from '@/components/google-ads-page-component/sectionOne/google-section-one';
import GoogleAdsCompanies from '@/components/google-ads-page-component/sectionSeven/GoogleAdsCompanies';
import WhatOurAgencyDo from '@/components/google-ads-page-component/sectionThree/WhatOurAgencyDo';
import GoogleAdsCampaignWalkThrough from '@/components/google-ads-page-component/sectionTwo/google-campaign-walkhthrough';
import HappyClient from '@/components/google-ads-page-component/serctionSix/HappyClient';
import React from 'react';

const GoogleAds = () => {
    return (
        <div className='space-y-24'>
            <GoogleHero />
            <GoogleAdsCampaignWalkThrough />
            <WhatOurAgencyDo/>
            <WhatMakesUsDifferent/>
            <WhatYouWillGet/>
            <HappyClient/>
            <GoogleAdsCompanies/>
        </div>
    );
};

export default GoogleAds; 