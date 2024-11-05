import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { motion } from 'framer-motion';
import { Guide } from "@/types/types";

const GuideSection = () => {

    const [guides, setGuides] = useState<Guide[]>([])

    const fetchGuides = useCallback(async () => {
        try {
            const response = await axios.get('/api/getguides')
            setGuides(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchGuides()
    }, [fetchGuides])

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 lg:py-24">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">Explore more guides</h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
                    {
                        guides.length > 0 && guides.map((guide) => {
                            return (
                                <Link href={`/resources/resource-hub/guide/${guide.slug}`} key={guide.slug}>
                                    <Card className="border border-borderColor flex flex-col h-full rounded-2xl group">
                                        <CardHeader className="flex-grow">
                                            <h3 className="text-xl font-bold">{guide?.title}</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="overflow-hidden">
                                                <Image
                                                    className="h-60 rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                    src={guide.thumbnail.asset.url}
                                                    width={500} height={500}
                                                    alt="blog" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default GuideSection;