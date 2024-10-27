import { fetchBlogs } from "@/utils/fetchBlogs";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";


interface Blog {
    _id: string;
    title: string;
    mainImage: {
        asset: {
            url: string
        }
    };
    _createdAt: string
}
const BlogSection: React.FC = () => {

    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        try {
            fetchBlogs().then((data) => {
                setBlogs(data)
            })
        } catch (error) {
            console.log(error)
        }
    })
    // console.log(blogs)
    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 lg:py-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Explore our blogs</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {
                        blogs.length > 0 && blogs.map((blog) => {
                            return (
                                <Link href='#' key={blog._id}>
                                    <Card className="border border-borderColor">
                                        <CardHeader>
                                            <h3 className="text-xl font-bold">{blog?.title}</h3>
                                            <Image
                                                className="rounded-xl"
                                                src={blog.mainImage.asset.url}
                                                width={500} height={500}
                                                alt="blog" />
                                        </CardHeader>
                                        <CardContent>
                                          <p className="text-lg text-textColorTwo">published at: {blog._createdAt}</p>
                                        </CardContent>
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