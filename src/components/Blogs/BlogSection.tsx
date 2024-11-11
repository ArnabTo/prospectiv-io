import { fetchBlogs } from "@/utils/fetchBlogs";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { motion } from 'framer-motion';
import { Blog } from "@/types/types";

const BlogSection = () => {

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
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
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;