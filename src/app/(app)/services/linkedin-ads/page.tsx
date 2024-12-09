import LinkedinAdsHero from "@/components/linkedin-ads-page/sectionOne/LinkedinAdsHero";
import LinkedinAdsServices from "@/components/linkedin-ads-page/sectionTwo/LinkedinAdsServices";


const LinkedinAds = () => {
    return (
        <div className="space-y-24">
            <LinkedinAdsHero/>
            <LinkedinAdsServices/>
        </div>
    );
};

export default LinkedinAds;