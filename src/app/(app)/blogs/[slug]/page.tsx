'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Loader2, Tag } from "lucide-react";
import calculateReadingTime from "@/components/reading-time-caculator/ReadingTimeCalculator";
import BlogSection from "@/components/Blogs/BlogSection";
import { motion } from 'framer-motion';
import RichTextComponent from "@/components/rich-text-component/RichTextComponent";
import '../../../custom.css'
import Link from "next/link";
import LinkedInLogo from '@/public/assets/icons8-linkedin-480.png'
import InstagramLogo from '@/public/assets//icons8-instagram-480.png'
import FacebookLogo from '@/public/assets/icons8-facebook-480.png'

interface Params {
    params: {
        slug: string
    }
}
interface Blog {
    _id: string;
    title: string;
    body: any;
    slug: {
        current: string
    };
    mainImage: {
        asset: {
            url: string
        }
    };
    categories: [
        {
            title: string
        }
    ];

    author: {
        name: string
        bio: []
        image: {
            asset: {
                url: string
            }
        }
    };
    _createdAt: string
}
const BlogDetails = () => {

    const params = useParams();
    console.log(params.slug)

    const [blog, setBlog] = useState<Blog>()
    const [isLoading, setIsLoading] = useState(false)

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
    }, [])

    useEffect(() => {
        fetchBlog()
    }, [fetchBlog])

    console.log(blog)



    const readingTime = blog ? calculateReadingTime(blog.body) : "";
    console.log(readingTime)
    return (


        // <div className="max-w-7xl mx-auto space-y-44 p-5 lg:px-10">
        //     <div>
        //         {
        //             isLoading ?
        //                 (
        //                     <div className="flex justify-center items-center h-screen">
        //                         <Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" />
        //                     </div>
        //                 )
        //                 : (
        //                     <div>
        //                         {
        //                             blog && (
        //                                 <div>
        //                                     <div className="space-y-10">
        //                                         <div className="max-w-[70%] mx-auto space-y-5">
        //                                             <div>
        //                                                 <Breadcrumb>
        //                                                     <BreadcrumbList>
        //                                                         <BreadcrumbItem>
        //                                                             <BreadcrumbLink className='text-md lg:text-lg' href="/">Home</BreadcrumbLink>
        //                                                         </BreadcrumbItem>
        //                                                         <BreadcrumbSeparator />
        //                                                         <BreadcrumbItem>
        //                                                             <BreadcrumbPage className='text-secondary text-md lg:text-lg'>Blogs</BreadcrumbPage>
        //                                                         </BreadcrumbItem>
        //                                                         <BreadcrumbSeparator />
        //                                                         <BreadcrumbItem>
        //                                                             <BreadcrumbPage className='text-secondary text-md lg:text-lg'>{blog?.title}</BreadcrumbPage>
        //                                                         </BreadcrumbItem>
        //                                                     </BreadcrumbList>
        //                                                 </Breadcrumb>
        //                                             </div>
        //                                             <motion.div
        //                                             initial={{ opacity: 0, scale: 0.9 }}
        //                                             animate={{ opacity: 1, scale: 1 }}
        //                                             transition={{ duration: 0.5 }}
        //                                             viewport={{ once: true }}
        //                                             className="flex gap-5">
        //                                                 <p className="flex items-center gap-2 text-md lg:text-lg text-textColorTwo"><Calendar size={20} /> {new Date(blog?._createdAt).toDateString()}</p>
        //                                                 <p className="flex items-center gap-2 text-md lg:text-lg text-textColorTwo"><Calendar size={20} /> {readingTime}</p>
        //                                             </motion.div>
        //                                             <motion.div
        //                                             initial={{ opacity: 0, y: 10 }}
        //                                             animate={{ opacity: 1, y: 0 }}
        //                                             transition={{ duration: 0.5 }}
        //                                             className="space-y-7">
        //                                                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{blog?.title}</h1>
        //                                                 <div className="max-w-[20%] flex items-center gap-3">
        //                                                     <Avatar className="max-w-16">
        //                                                         <AvatarImage className="rounded-full mx-auto" src={blog?.author?.image?.asset?.url} alt="@shadcn" />
        //                                                         <AvatarFallback>{blog?.author?.name}</AvatarFallback>
        //                                                     </Avatar>
        //                                                     <span>
        //                                                         {blog?.author?.name}
        //                                                     </span>
        //                                                 </div>
        //                                             </motion.div>
        //                                         </div>
        //                                         <div className="w-full h-[1px] bg-borderColor max-w-[70%] mx-auto"></div>
        //                                         <div className="space-y-10">
        //                                             <Image
        //                                                 className="w-full h-auto max-w-[80%] object-contain mx-auto border border-borderColor rounded-2xl"
        //                                                 src={blog?.mainImage?.asset.url}
        //                                                 width={500}
        //                                                 height={500}
        //                                                 alt="blog_thumbnail"
        //                                             />

        //                                             <motion.div className="max-w-[70%] mx-auto space-y-10">
        //                                                 <motion.p
        //                                                  initial={{ opacity: 0, y: 10}}
        //                                                  animate={{ opacity: 1, y: 0}}
        //                                                  transition={{ duration: 1}}
        //                                                  viewport={{ once: true }}
        //                                                 className="text-md lg:text-lg text-textColorTwo"><PortableText value={blog.body} /></motion.p>

        //                                             <motion.div
        //                                             initial={{ opacity: 0, y: 10 }}
        //                                             animate={{ opacity: 1, y: 0 }}
        //                                             transition={{ duration: 0.5 }}
        //                                             viewport={{ once: true }}
        //                                             className="bg-buttonHoverColor mx-auto p-12 rounded-2xl flex flex-col lg:flex-row items-center gap-10 shadow-2xl group hover:shadow-none transform hover:translate-y-2 transition-all duration-300">
        //                                                     <div className="rounded-full overflow-hidden">
        //                                                         <Image
        //                                                             className="rounded-full group-hover:scale-105 transition-all duration-300"
        //                                                             src={blog?.author?.image?.asset?.url}
        //                                                             width={500} height={500} alt="author_image" />
        //                                                     </div>
        //                                                     <div className="space-y-5">
        //                                                         <h3 className="text-3xl font-bold">{blog?.author?.name}</h3>
        //                                                         <p className="text-lg text-textColorTwo">
        //                                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nostrum! Odit eligendi dolore neque, fugit exercitationem ab distinctio, animi temporibus velit repudiandae delectus architecto a accusamus perferendis quod veritatis quo.
        //                                                         </p>
        //                                                     </div>
        //                                                 </motion.div>
        //                                             </motion.div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             )
        //                         }
        //                     </div>

        //                 )
        //         }
        //     </div>

        //     <div>
        //         <BlogSection />
        //     </div>
        // </div>
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
                                        <div className="col-span-3">
                                            <article className="space-y-10">
                                                <section>
                                                    <div>
                                                        <Image className="w-full h-3/4 object-contain rounded-2xl" src={blog?.mainImage?.asset?.url} width={500} height={500} alt="blog_thumbnail" />
                                                        <div className="flex items-center justify-start gap-5 mt-3">
                                                           {
                                                            blog.categories == null? <>"Unknown"</> 
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
                                                <div>
                                                    <PortableText value={blog.body} components={RichTextComponent} />
                                                </div>
                                            </article>

                                        </div>
                                        <div className="hidden md:block col-span-1 sticky top-16"
                                            style={{
                                                height: `calc(100vh - 95px)`
                                            }}
                                        >
                                            <div className="border border-borderColor rounded-2xl p-5 space-y-4 hover:shadow-2xl group cursor-pointer ">
                                                <div className="flex items-center gap-3">
                                                    <Image className="w-1/4 rounded-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                        src={blog?.author?.image?.asset?.url} width={500} height={500}
                                                        alt="author_image" />
                                                    <span>
                                                        <p className="text-foreground text-lg font-bold group-hover:text-secondary">{blog?.author?.name}</p>
                                                        <PortableText value={blog.author.bio} components={RichTextComponent} />
                                                    </span>
                                                </div>
                                                <div className="flex flex-row gap-3 justify-center items-center">
                                                    <div className='bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                        <Link href='#'><Image className='max-w-10 p-2' src={LinkedInLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                    </div>
                                                    <div className='bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                        <Link href='#'><Image className='max-w-10 p-2' src={InstagramLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                    </div>
                                                    <div className='bg-smallCard rounded-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary'>
                                                        <Link href='#'><Image className='max-w-10 p-2' src={FacebookLogo} width={200} height={200} alt="LinkedIn" /></Link>
                                                    </div>
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
    );
};

export default BlogDetails;