import { fetchBlogs } from "@/utils/fetchBlogs";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { motion } from 'framer-motion';
import { Blog } from "@/types/types";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const BlogSection = () => {

    const animateRef = useRef(null);
    useEffect(() => {
        // Register the plugin first
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Make sure the ref exists
        if (!animateRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: animateRef.current,
                start: 'top bottom',
                toggleActions: 'play none none none',
                once: true
            }
        })

        tl.fromTo(animateRef.current, {
            opacity: 0,
            y: 100,
            rotateX: 90,
            transformOrigin: "center bottom",
            perspective: 1000
        }, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power4.out"
        })

        // Add scroll-based animation
        const st = ScrollTrigger.create({
            trigger: animateRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
            onEnter: () => gsap.to(animateRef.current, { opacity: 1, rotateX: 0 }),
            onLeave: () => gsap.to(animateRef.current, { opacity: 0, rotateX: 90 }),
            onEnterBack: () => gsap.to(animateRef.current, { opacity: 1, rotateX: 0 }),
            onLeaveBack: () => gsap.to(animateRef.current, { opacity: 0, rotateX: 90 })
        });

        // Cleanup
        return () => {
            st.kill();
        };
    }, []);

    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchBlogs = useCallback(async () => {
        try {
            const response = await axios.get('/api/blogs')
            setBlogs(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchBlogs()
    }, [fetchBlogs])

    return (
        <section>
            <div className="max-w-7xl mx-auto lg:py-24">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">Discover how Prospectiv helps you sell more</h1>
                <div ref={animateRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
                    {
                        blogs.length > 0 && blogs.map((blog) => {
                            return (
                                <Link href={`/blogs/${blog.slug.current}`} key={blog._id}>
                                    <Card className="border border-borderColor flex flex-col h-full rounded-2xl group">
                                        <CardHeader className="flex-grow">
                                            <h3 className="text-xl font-bold">{blog?.title}</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="overflow-hidden">
                                                <Image
                                                    className="rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                    src={blog.mainImage.asset.url}
                                                    width={500} height={500}
                                                    alt="blog" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <p className="text-md lg:text-lg text-textColorTwo">published at: {new Date(blog?._createdAt).toDateString()}</p>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSection;