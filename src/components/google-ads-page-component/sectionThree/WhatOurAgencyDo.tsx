import Image from "next/image";
import GoogleAds from '@/public/assets/googleads.png'
const WhatOurAgencyDo = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto space-y-24 p-5">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">What our B2B Google Ads Agency do?</h2>
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-28 justify-center items-center">
                        <div className="lg:max-w-[50%] space-y-4">
                            <h3 className="text-2xl md:text-4xl font-bold">Keyword research and competitor's analysis</h3>
                            <p className="text-md lg:text-lg text-textColorTwo">
                                Keywords play an important role in making the Google ads more effective. First, we provide the service of perfect keyword analysis. We'll research keywords and the competition to create an extensive and relevant keyword list. We use industry leading tools and decades of keyword research experience to create the best Keywords list.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                                We will also analyze historical data and current performance in your accounts to find valuable insights that will guide our initial strategy. The main goal of conducting this audit is to create a Google ads strategy that drive B2B sales and positive ROI.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                                Then we organize Google ads campaign and ad group structures with the most relevant ads and landing pages.
                            </p>
                        </div>
                        <div className="lg:max-w-[40%] rounded-xl lg:rounded-3xl">
                            <Image
                                className="rounded-xl lg:rounded-3xl"
                                src='https://images.pexels.com/photos/5833767/pexels-photo-5833767.jpeg?auto=compress&cs=tinysrgb&w=600'
                                width={800}
                                height={800}
                                alt='agency-image'
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-28  justify-center items-center">
                        <div className="lg:max-w-[50%] space-y-4">
                            <h3 className="text-2xl md:text-4xl font-bold">Campaign management and optimization</h3>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            Google Ads ROI requires aggressive optimization, constant testing and offering a relevant, timely offer to users. Our B2B Google Ads Agency create granular campaign structures, compelling ad copy and landing pages creation to achieve the highest conversion rate possible.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            We monitor and optimize your campaigns on a daily basis. We go through new data and take insights to squeeze out more alpha which means more revenue from your ad campaigns.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            Scale your SaaS PPC campaign results and grow your business with campaign strategy and execution from our experienced Google Ads agency team.
                            </p>
                        </div>
                        <div className="lg:max-w-[40%] rounded-xl lg:rounded-3xl">
                            <Image
                                className="rounded-xl lg:rounded-3xl"
                                src='https://images.pexels.com/photos/5833767/pexels-photo-5833767.jpeg?auto=compress&cs=tinysrgb&w=600'
                                width={800}
                                height={800}
                                alt='agency-image'
                            />
                        </div>
                    </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-28  justify-center items-center">
                        <div className="lg:max-w-[50%] space-y-4">
                            <h3 className="text-2xl md:text-4xl font-bold">Monitoring conversions and reporting</h3>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            Many Google Ads agencies operate on a "set it and forget it" model. We’re quite the opposite. We monitor your accounts daily, are in touch with you weekly, and are consistently pushing your ROI forward. We aim to provide a best-in-class service and operate as an extension of your marketing team.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            After the initial campaign has been run, you will receive weekly reports. This will allow you to see results in real-time and can give you a competitive edge. These reports will measure the return on investment (ROI), and we will go through these with you to help you understand the results.
                            </p>
                            <p className="text-md lg:text-lg text-textColorTwo">
                            From setting up accurate tracking and reporting with Google Tag Manager, Google Analytics, and Google Data Studio along with SEMRush, Google Search Console, and Power Analytics we have all the data along with the insights to make it actionable.
                            </p>
                        </div>
                        <div className="lg:max-w-[40%] rounded-xl lg:rounded-3xl bg-gradient-to-tr from-[#ED4A8D] to-[#5C55F6]">
                            <Image
                                className="rounded-xl lg:rounded-3xl"
                                src={GoogleAds}
                                width={800}
                                height={800}
                                alt='agency-image'
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default WhatOurAgencyDo;