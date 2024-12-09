import GoogleAdsCompanies from "@/components/google-ads-page-component/sectionSeven/GoogleAdsCompanies";
import GoogleContact from "@/components/google-ads-page-component/sectionTen/GoogleContact";
import HappyClient from "@/components/google-ads-page-component/serctionSix/HappyClient";
import ExploreOtherServices from "@/components/linkedin-ads-page/sectionFive/ExploreOtherServices";
import OurProcess from "@/components/linkedin-ads-page/sectionFour/OurProcess";
import LinkedinAdsHero from "@/components/linkedin-ads-page/sectionOne/LinkedinAdsHero";
import OurGoal from "@/components/linkedin-ads-page/sectionSeven/OurGoal";
import LinkedinFaq from "@/components/linkedin-ads-page/sectionSix/LinkedinFaq";
import OurImpact from "@/components/linkedin-ads-page/sectionThree/OurImpact";
import LinkedinAdsServices from "@/components/linkedin-ads-page/sectionTwo/LinkedinAdsServices";


const LinkedinAds = () => {
    return (
        <div className="space-y-24">
            <LinkedinAdsHero/>
            <LinkedinAdsServices/>
            <OurImpact/>
            <OurProcess/>
            <HappyClient/>
            <OurGoal/>
            <GoogleAdsCompanies/>
            <LinkedinFaq/>
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

export default LinkedinAds;