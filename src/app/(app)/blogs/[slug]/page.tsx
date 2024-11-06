'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { Calendar, Loader2, Tag } from "lucide-react";
import calculateReadingTime from "@/components/reading-time-caculator/ReadingTimeCalculator";
import BlogSection from "@/components/Blogs/BlogSection";
import { motion } from 'framer-motion';
import { RichTextComponent } from "@/components/rich-text-component/RichTextComponent";
import Link from "next/link";
import LinkedInLogo from '@/public/assets/icons8-linkedin-480.png'
import InstagramLogo from '@/public/assets//icons8-instagram-480.png'
import FacebookLogo from '@/public/assets/icons8-facebook-480.png'
import { slugify } from "@/utils/helper";
import ScrollProgressBar from "@/components/PageScrollProgressBar/ProgressBar";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/types/types";

// interface Params {
//     params: {
//         slug: string
//     }
// }
const BlogDetails = () => {

    const params = useParams();
    const [blog, setBlog] = useState<BlogPost>()
    const [isLoading, setIsLoading] = useState(false)
    const [activeHeading, setActiveHeading] = useState<string | null>(null);

    const fetchBlog = useCallback(async () => {
        setIsLoading(true)
        try {
            const getBlog = await axios.get(`/api/getblogpost/${params.slug}`)
            setBlog(getBlog.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [params.slug])

    useEffect(() => {
        fetchBlog()
    }, [fetchBlog])

    useEffect(() => {
        const handleScrollSpy = () => {
            const headings = document.querySelectorAll('article h2, article h3'); // Adjust selectors based on heading levels
            let activeId: string | null = null;

            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 200) { // Adjust range for better effect
                    activeId = heading.id;
                }
            });

            if (activeId) {
                setActiveHeading(activeId);
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => {
            window.removeEventListener('scroll', handleScrollSpy);
        };
    }, []);

    const readingTime = blog ? calculateReadingTime(blog.body) : "";

    return (
        <div>
            <ScrollProgressBar />
            <div>
                <Separator orientation="horizontal" />
            </div>
            <div className="space-y-20">

                {
                    isLoading ? (
                        <div className="flex justify-center items-center h-screen">
                            <Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" />
                        </div>
                    )
                        :
                        (
                            <div className="max-w-screen-2xl mx-auto">
                                {
                                    blog && (
                                        <div className="max-w-7xl ml-auto md:grid md:grid-cols-4 gap-5 px-5 lg:px-10">
                                            <div className="col-span-3 py-16">
                                                <div>
                                                    <article className="space-y-10">
                                                        <section>
                                                            <div>
                                                                <Image className="w-full h-3/4 object-contain rounded-2xl" src={blog?.mainImage?.asset?.url} width={500} height={500} alt="blog_thumbnail" />
                                                                <div className="flex items-center justify-start gap-5 mt-3">
                                                                    {
                                                                        blog.categories == null ? <>Unknown</>
                                                                            :
                                                                            (<p className="flex items-center gap-2 text-md text-textColorTwo">
                                                                                <Tag size={20} />
                                                                                {blog.categories.map((category, index) => (<span key={index}>{category.title}</span>))}</p>)
                                                                    }

                                                                    <p className="flex items-center gap-2 text-md text-textColorTwo"><Calendar size={20} /> {new Date(blog?._createdAt).toDateString()}</p>
                                                                    <p className="flex items-center gap-2 text-md text-textColorTwo"><Calendar size={20} /> {readingTime}</p>
                                                                </div>
                                                            </div>
                                                            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mt-8">{blog.title}</h1>
                                                        </section>
                                                        <section>
                                                            <PortableText value={blog.body} components={RichTextComponent} />
                                                        </section>
                                                    </article>

                                                </div>
                                            </div>
                                            <div className="hidden md:block col-span-1 sticky top-16 border-l border-borderColor px-3"
                                                style={{
                                                    height: `calc(100vh - 150px)`
                                                }}
                                            >
                                                <div className="py-16 space-y-5">
                                                    <div className="border border-borderColor rounded-2xl p-5 space-y-4 hover:shadow-2xl group cursor-pointer">
                                                        <div className="flex flex-col lg:flex-row items-center gap-3">
                                                            <Image className="w-1/4 rounded-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                                src={blog?.author?.image?.asset?.url} width={500} height={500}
                                                                alt="author_image" />
                                                            <span>
                                                                <p className="text-lg font-bold text-secondary">{blog?.author?.name}</p>
                                                                <PortableText value={blog.author.bio} components={RichTextComponent} />
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-row gap-3 justify-start items-center">
                                                            <div className='bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                                <Link href='#'><Image className='max-w-10 p-2' src={LinkedInLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                            </div>
                                                            <div className='bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                                <Link href='#'><Image className='max-w-10 p-2' src={InstagramLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                            </div>
                                                            <div className='hidden lg:block bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                                <Link href='#'><Image className='max-w-10 p-2 mx-auto' src={FacebookLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                            </div>
                                                        </div>
                                                        <div className='lg:hidden bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                            <Link href='#'><Image className='max-w-10 p-2 mx-auto' src={FacebookLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Toc headings={blog?.headings || []} activeHeading={activeHeading} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                }

                <div>
                    <BlogSection />
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

const Toc = ({ headings, activeHeading }: { headings: any[], activeHeading: string | null }) => {
    return (
        <div>
            <h3 className="text-md lg:text-xl font-bold">Table of Contents</h3>
            <div className="flex flex-col justify-start items-start">
                <nav className="w-full">
                    <ul>
                        {headings.map((heading, index) => {
                            const headingId = slugify(heading?.children[0]?.text);
                            return (
                                <li
                                    key={index}
                                    className={`w-full text-start my-3 px-3 py-2 rounded-full line-clamp-1 
                                    ${activeHeading === headingId ? 'bg-secondary text-white' : 'bg-smallCard'}`}
                                >
                                    <Link href={`#${headingId}`} aria-current={activeHeading === headingId ? 'true' : 'false'} className="line-clamp-1">
                                        {heading?.children[0]?.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}