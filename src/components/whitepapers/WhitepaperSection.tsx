import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { motion } from 'framer-motion';
import { Whitepaper } from "@/types/types";

const WhitePaperSection = () => {

    const [whitepapers, setWhitePapers] = useState<Whitepaper[]>([])

    const fetchWhitepapers = useCallback(async () => {
        try {
            const response = await axios.get('/api/getwhitepaper')
            setWhitePapers(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchWhitepapers()
    }, [fetchWhitepapers])

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 lg:py-24">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">Explore more Whitepapers</h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
                    {
                        whitepapers.length > 0 && whitepapers.map((paper) => {
                            return (
                                <Link href={`/resources/resource-hub/whitepaper/${paper.slug}`} key={paper.slug}>
                                    <Card className="border border-borderColor flex flex-col h-full rounded-2xl group">
                                        <CardHeader className="flex-grow">
                                            <h3 className="text-xl font-bold">{paper?.title}</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="overflow-hidden">
                                                <Image
                                                    className="h-60 rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                    src={paper.thumbnail.asset.url}
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

                <div className="w-60 flex rounded-full mx-auto shadow-lg duration-300 transform group-hover:scale-105">
                    <Link href="/resources/resource-hub" className="flex-1 font-semibold text-lg text-center bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 py-4 rounded-full hover:bg-buttonHoverColor">
                        All Contents
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhitePaperSection;