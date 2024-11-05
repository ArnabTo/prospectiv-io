'use client';
import { Webinar } from '@/types/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '@/components/rich-text-component/RichTextComponent';
import Image from 'next/image';
import Link from 'next/link';
import BlogSection from '@/components/Blogs/BlogSection';


const WebinarDetails = () => {
    const params = useParams();

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
        <div className='max-w-7xl mx-auto space-y-7'>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='lg:max-w-[70%] space-y-7'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold '>{webinar?.title}</h1>
                    <div>
                        {webinar?.webinar_url ? (
                            <iframe
                                width="560" height="315"
                                src={getEmbedUrl(webinar.webinar_url)}
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
                <div>
                    {
                        webinar?.author && (
                            <div className='border border-borderColor rounded-xl p-5 space-y-3'>
                                <div className='rounded-full'>
                                    <Image className='rounded-full' src={webinar?.author?.image?.asset?.url} width={100} height={100} alt='author' />
                                </div>
                                <div>
                                    <p className='text-lg text-textColorTwo'><b className='text-secondary'>Author:</b> {webinar?.author?.name}</p>
                                    <p className='text-lg text-textColorTwo'><b className='text-secondary'>Published on:</b> {new Date(webinar?.publishedAt ?? '').toLocaleDateString('en-US', {
                                        month: 'short', // 'Nov'
                                        day: '2-digit', // '05'
                                        year: 'numeric', // '2024'
                                    })
                                    }</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div>
                <p className='text-center text-xl mb-5'>Find out what Prospectiv could do for your new business</p>
                <div className="w-60 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
                    <Link href="" className="flex-1 font-bold text-lg text-center bg-black py-4 rounded-full hover:scale-95 transition-all duration-300">
                        Book a Demo
                    </Link>
                </div>

                <BlogSection />
            </div>
        </div>
    );
};

export default WebinarDetails;