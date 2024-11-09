'use client';
import { Award } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Separator } from '../ui/separator';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Marquee from '../ui/marquee';

const AwardsSection = () => {
    const [awards, setAwards] = useState<Award[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAwards = useCallback(async () => {
        setIsLoading(true);
        try {
            const getAwards = await axios.get('/api/getawards');
            setAwards(getAwards.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAwards();
    }, [fetchAwards]);

    // Double the awards array for seamless infinite scroll
    const duplicatedAwards = [...awards, ...awards];

    const plugin = React.useRef(
      Autoplay({ delay: 1000, stopOnInteraction: true })
    );

    return (
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full mb-24"
    >
        <div>
            <Marquee>
                {duplicatedAwards.map((award, index) => (
                    <div key={index} className="w-52 h-52 flex justify-center items-center">
                    <Image
                        src={award.thumbnail.asset.url}
                        alt={`Award ${index + 1}`}
                        width={1000}
                        height={1000}
                    />
                </div>
                ))}
            </Marquee>
        </div>
    </motion.div>
    );
};

export default AwardsSection;