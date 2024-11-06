import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SuccessStoryType } from "@/types/types";
import axios from "axios";


const SuccessSection = () => {

    const [successStories, setSuccessStories] = useState<SuccessStoryType[]>([]);
  

    const fetchStories = useCallback(async () => {
        const getStories = await axios.get('/api/getsuccessstories');
        setSuccessStories(getStories.data.slice(0, 3));
    }, [])

    useEffect(() => {
        fetchStories();
    }, [fetchStories])

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center">Explore other success stories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    successStories.map((story, index) => (
                        <Link href={`/result/success-story/${story.slug}`} key={index}>
                            <Card className=" border-none relative group">
                                <CardHeader>
                                    <div className="h-40 bg-foreground rounded-xl">
                                        <Image className="w-full h-full rounded-xl object-contain"
                                            src={story?.company_logo?.asset?.url}
                                            width={200} height={200} alt='' />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-textColorTwo">
                                        {story.title}
                                    </p>
                                </CardContent>

                                <CardFooter className="p-5 border border-borderColor rounded-xl flex justify-center items-center">
                                    <div className="flex justify-between items-center gap-5">
                                        <span className="text-center">
                                            <p className="text-2xl text-center font-bold text-secondary">${story?.cost_per_lead}</p>
                                            <p className="text-xs text-textColorTwo uppercase">cost per lead</p>
                                        </span>
                                        <span className="text-center">
                                            <p className="text-2xl text-center font-bold text-secondary">{story?.response_rate}%</p>
                                            <p className="text-xs text-textColorTwo uppercase">Response rate</p>
                                        </span>
                                        <span className="flex flex-col justify-center items-center">
                                            <p className="text-2xl text-center font-bold text-secondary">{story?.lead_rate}%</p>
                                            <p className="text-xs text-textColorTwo uppercase">Lead rate</p>
                                        </span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SuccessSection;