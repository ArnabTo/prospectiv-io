'use client';
import Rating from "@/components/rating/RatingComponent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { TESTIMONIAL_QUERY } from "@/sanity/lib/queries";
import { Testimonial } from "@/types/types";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HappyClient = () => {
    const [visibleClients, setVisibleClients] = useState(3);
    const [clients, setClients] = useState<Testimonial[]>([]);
    const [seeAll, setSeeAll] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const fetchTesimonials = async () => {
        try {
            const response = await client.fetch(TESTIMONIAL_QUERY, {}, { cache: 'no-cache' });
            setClients(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchTesimonials();
    }, []);

    const handleShowAllClients = () => {
        setSeeAll(true);
        setVisibleClients(clients.length);
    };

    const handleShowLessClients = () => {
        setSeeAll(false);
        setVisibleClients(3);
    };

    return (
        <section className="p-5 py-16">
            <div className="max-w-7xl mx-auto space-y-10">

                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="lg:w-1/2 text-center lg:text-start space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold">
                            Happy Clients
                        </motion.h1>
                        <p className="text-lg text-textColorTwo">Getuplead is proud to have worked with some of the most successful companies in the world.</p>
                    </div>
                    <div
                        className="w-60 flex rounded-full mx-auto lg:ml-auto shadow-lg duration-300 transform group-hover:scale-105">
                        <Link href="/pricing" className="flex-1 font-semibold text-center text-lg bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 py-5 rounded-full hover:bg-buttonHoverColor">
                            See Our Pricing
                        </Link>
                    </div>
                </div>
                <Separator />
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
                            {clients.slice(0, visibleClients).map((client, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    key={index} className="bg-background border border-borderColor rounded-2xl p-5 space-y-5 h-full flex flex-col justify-between">
                                    <div className="flex justify-start items-center gap-5">
                                        <Avatar className="w-16 h-16 border border-secondary">
                                            <AvatarImage src={client?.avatar?.asset.url} alt="clients_avatar" />
                                            <AvatarFallback>{client.name}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-xl">{client.name}</h4>
                                            <p className="text-lg text-secondary">{client.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-center gap-5">
                                        {
                                            client.logo?.asset.url &&
                                            <Image src={client.logo?.asset?.url} width={100} height={100} alt="company-logo" />
                                        }
                                        <Rating rating={client.rating} />
                                    </div>
                                    <div className="space-y-5 flex-grow">
                                        <p className="text-lg text-textColorTwo">{client.testimonial}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                }
                {
                    seeAll ?
                        <div onClick={handleShowLessClients}
                            className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                            <div className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                Show less
                            </div>
                        </div>
                        :
                        <div onClick={handleShowAllClients}
                            className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                            <div className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 px-10 xl:px-16 py-5 rounded-full hover:bg-buttonHoverColor">
                                Show All
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default HappyClient;