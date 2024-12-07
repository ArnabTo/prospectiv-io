
import WhatMakesUsDifferent from '@/components/google-ads-page-component/sectionFour/WhatMakesUsDifferent';
import GoogleHero from '@/components/google-ads-page-component/sectionOne/google-section-one';
import WhatOurAgencyDo from '@/components/google-ads-page-component/sectionThree/WhatOurAgencyDo';
import GoogleAdsCampaignWalkThrough from '@/components/google-ads-page-component/sectionTwo/google-campaign-walkhthrough';
import React from 'react';

const GoogleAds = () => {
    return (
        <div className='space-y-24'>
            <GoogleHero />
            <GoogleAdsCampaignWalkThrough />
            <WhatOurAgencyDo/>
            <WhatMakesUsDifferent/>
        </div>
    );
};

export default GoogleAds; 