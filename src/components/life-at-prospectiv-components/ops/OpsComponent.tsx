import AwardsSection from "@/components/awards-section/AwardsSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { lifeAtProspectivTextContent } from "@/lib/TextContent";
import HeaderImage from '@/public/assets//ourteam.jpg'
import Image from "next/image";
import MeetOurPeople from "../MeetOurPeople";
import BenefitsOfProspectiv from "../BenefitsOfProspectiv";
import CultureAndPerks from "../CultureAndPerks";
import OurRecruitementProcess from "../meet-our-team-page/OurRecruitementProcess";
import Link from "next/link";

const OpsComponent = () => {
    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <div
                    className='w-full h-[24rem] bg-no-repeat bg-cover bg-center bg-fixed opacity-20'
                    style={{
                        backgroundImage: `url(${HeaderImage.src})`,
                    }}
                >
                </div>
                <div className='w-full mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3 space-x-5'>
                    <h1 className='text-6xl font-extrabold '><span className='text-secondary'>Ops</span> </h1>
                    <p className='text-textColorTwo text-lg text-center font-bold mx-auto'></p>
                    <div className='flex justify-center items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='text-textColorTwo text-sm md:text-lg' href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-textColorTwo text-sm md:text-lg'>Company</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-textColorTwo text-sm md:text-lg'>Life at Prospectiv</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className='text-secondary text-sm md:text-lg'>Operations Executive at Prospectiv</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>

            <AwardsSection />

            <div className="max-w-7xl mx-auto p-5 space-y-24">
                <div className="space-y-7">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="min-w-[50%] rounded-xl overflow-hidden ">
                            <Image className="w-full rounded-xl hover:scale-110 transition-all duration-300 ease-linear" src={lifeAtProspectivTextContent.ops.sectionOne.contentOne.imageContent} width={500} height={500} alt="" />
                        </div>
                        <p className="text-textColorTwo text-lg leading-8">{lifeAtProspectivTextContent.ops.sectionOne.contentOne.textContent}</p>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-5">
                        <div className="min-w-[50%] rounded-xl overflow-hidden">
                            <Image className="w-full rounded-xl hover:scale-110 transition-all duration-300 ease-linear" src={lifeAtProspectivTextContent.ops.sectionOne.contentOne.imageContent} width={500} height={500} alt="" />
                        </div>
                        <p className="text-textColorTwo text-lg leading-8">{lifeAtProspectivTextContent.ops.sectionOne.contentOne.textContent}</p>
                    </div>
                </div>

                <MeetOurPeople />

                <div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <div className="lg:w-1/2 mx-auto space-y-5">
                            <h2 className="text-xl lg:text-4xl font-bold">Our Office</h2>
                            <p className="text-textColorTwo text-lg leading-8">Our offices are creative, fun and foster collaboration. They are conveniently located in the heart of Skopje, on the Macedonian Square.</p>
                            <div className="w-60 flex lg:mx-0 rounded-full shadow-lg duration-300 transform group-hover:scale-105">
                                <Link href="/result/awards-and-recognition" className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 py-3 rounded-full hover:bg-buttonHoverColor">
                                    Awards and Recognitions
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image src='https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' width={1000} height={500} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
                <BenefitsOfProspectiv />

                <CultureAndPerks />

                <OurRecruitementProcess />
            </div>
        </div>
    );
};

export default OpsComponent;