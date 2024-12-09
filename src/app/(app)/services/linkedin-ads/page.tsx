import OurProcess from "@/components/linkedin-ads-page/sectionFour/OurProcess";
import LinkedinAdsHero from "@/components/linkedin-ads-page/sectionOne/LinkedinAdsHero";
import OurImpact from "@/components/linkedin-ads-page/sectionThree/OurImpact";
import LinkedinAdsServices from "@/components/linkedin-ads-page/sectionTwo/LinkedinAdsServices";


const LinkedinAds = () => {
    return (
        <div className="space-y-24">
            <LinkedinAdsHero/>
            <LinkedinAdsServices/>
            <OurImpact/>
            <OurProcess/>
        </div>
    );
};

export default LinkedinAds;