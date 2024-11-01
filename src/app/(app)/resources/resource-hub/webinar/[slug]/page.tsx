'use client';
import { Webinar } from '@/types/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '@/components/rich-text-component/RichTextComponent';

const WebinarDetails = () => {
    const params = useParams();
    console.log(params)
    const [webinar, setWebinar] = useState<Webinar | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWebinar = useCallback(async () => {
        setIsLoading(true);
        try {
            const getWebinar = await axios.get(`/api/getwebinarwithslug/${params.slug}`);
            setWebinar(getWebinar.data)
        } catch (error) {
            console.log(error, 'error on fetch webinar')
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchWebinar()
    }, [fetchWebinar])

    console.log(webinar)

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return url; // For other URLs like Google Drive, use as-is
        }
    };
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className='lg:max-w-[70%] space-y-7'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold '>{webinar?.title}</h1>
                    <div>
                        {webinar?.webinar_link ? (
                            <iframe
                                width="560" height="315"
                                src={getEmbedUrl(webinar.webinar_link)}
                                title="Webinar Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>No video available</p>
                        )}
                    </div>
                    <p><PortableText value={webinar?.body} components={RichTextComponent} /></p>
                </div>
            </div>
        </div>
    );
};

export default WebinarDetails;