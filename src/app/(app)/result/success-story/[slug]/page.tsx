'use client';
import { SuccessStoryType } from "@/types/types";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/rich-text-component/RichTextComponent";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SuccessSection from "@/components/successstorysection/SuccessSection";
import { motion } from 'framer-motion';



const StoryDetails = () => {

    const params = useParams();
    const [storyDetails, setStoryDetails] = useState<SuccessStoryType>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchStoryDetails = useCallback(async () => {
        setIsLoading(true);
        try {
            const getStoryDetails = await axios.get(`/api/getsuccessstories/successstorydetails/${params.slug}`);
            setStoryDetails(getStoryDetails.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchStoryDetails()
    }, [fetchStoryDetails])

    // console.log(storyDetails)
    return (
        <div className="py-32">
            <div className="max-w-7xl mx-auto space-y-24">
                {isLoading ? <div className="flex justify-center items-center h-screen"><Loader2 size={40} className="animate-spin" /></div>
                    :
                    <div className="flex flex-col lg:flex-row-reverse justify-center gap-5">
                        <div className="max-w-[70%] space-y-7">
                            <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            ><h1 className="text-3xl font-bold">{storyDetails?.title}</h1></motion.div>
                            <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            >
                                <Image
                                    src={storyDetails?.thumbnail?.asset?.url}
                                    width={800} height={800}
                                    alt='thumbnail'
                                    className="w-full rounded-xl shadow-lg brightness-50 hover:brightness-100 transition-all duration-300"
                                />
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="border bg-card border-borderColor rounded-3xl p-10 flex flex-col justify-center items-center">
                                    <CountUp
                                        start={0}
                                        end={storyDetails?.lead_rate ?? 0}
                                        duration={2}
                                        prefix="$"
                                        className="text-6xl font-extralight text-secondary"
                                    />
                                    <p className="text-lg font-normal text-textColorTwo border-b border-gradientColorOne py-5">cost per lead</p>
                                </motion.div>
                                <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="border bg-card border-borderColor rounded-3xl p-10 flex flex-col justify-center items-center">
                                    <CountUp
                                        start={0}
                                        end={storyDetails?.lead_rate ?? 0}
                                        duration={2}
                                        suffix="%"
                                        className="text-6xl font-extralight text-secondary"
                                    />
                                    <p className="text-lg font-normal text-textColorTwo border-b border-gradientColorOne py-5">cost per lead</p>
                                </motion.div>
                                <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="border bg-card border-borderColor rounded-3xl p-10 flex flex-col justify-center items-center">
                                    <CountUp
                                        start={0}
                                        end={storyDetails?.response_rate ?? 0}
                                        duration={2}
                                        suffix="%"
                                        className="text-6xl font-extralight text-secondary"
                                    />
                                    <p className="text-lg font-normal text-textColorTwo border-b border-gradientColorOne py-5">cost per lead</p>
                                </motion.div>
                            </div>

                            <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            >
                                <PortableText value={storyDetails?.body} components={RichTextComponent} />
                            </motion.div>
                        </div>
                        <div className="hidden lg:block sticky top-20"
                            style={{
                                height: `calc(100vh - 150px)`
                            }}>
                            <div className="flex flex-col gap-5">
                                <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="border border-borderColor p-5 rounded-2xl">
                                    <p className="text-lg font-bold">Website</p>
                                    <Link className="text-gradientColorOne" href={storyDetails?.company_website ?? ''}>{storyDetails?.company_website}</Link>
                                    <Separator orientation="horizontal" className="my-5" />
                                    <div className="space-y-5">
                                        <h4 className="text-xl font-bold">Company Profile</h4>
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Location:</span> {storyDetails?.location}</p>
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Product/Service:</span> {storyDetails?.company_service}</p>
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Deal cycle:</span> {storyDetails?.deal_cycle}</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="border border-borderColor p-5 rounded-2xl">
                                    <p className="text-lg font-bold">Target Profile</p>
                                    <Separator orientation="horizontal" className="my-5" />
                                    <div className="space-y-5">
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Location:</span> {storyDetails?.location}</p>
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Company size:</span> {storyDetails?.company_size}</p>
                                        <p className="text-md flex flex-col"><span className="text-secondary font-bold">Role/Function:</span> {storyDetails?.role}</p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                }

                <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                >
                    <SuccessSection />
                </motion.div>
            </div>
        </div>
    );
};

export default StoryDetails;