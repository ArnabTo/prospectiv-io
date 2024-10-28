import { fetchBlogs } from "@/utils/fetchBlogs";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { motion } from 'framer-motion';

interface Blog {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage: {
        asset: {
            url: string
        }
    };
    _createdAt: string
}
const BlogSection: React.FC = () => {

    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchBlogs = useCallback(async () => {
        try {
            const response = await axios.get('/api/blogs')
            console.log(response)
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
            <div className="max-w-7xl mx-auto px-5 lg:py-24">
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
                                    <Card className="border border-borderColor flex flex-col h-full">
                                        <CardHeader className="flex-grow">
                                            <h3 className="text-xl font-bold">{blog?.title}</h3>
                                            <Image
                                                className="rounded-xl"
                                                src={blog.mainImage.asset.url}
                                                width={500} height={500}
                                                alt="blog" />
                                        </CardHeader>
                                        <CardContent className="mt-auto">
                                            <p className="text-md lg:text-lg text-textColorTwo">published at: {new Date(blog?._createdAt).toDateString()}</p>
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

export default BlogSection;