'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import axios from "axios"
import { ArrowRight, Loader2, Search } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { cache, useCallback, useEffect, useState } from "react"
import { Blog } from '@/types/types'
import { Separator } from "@/components/ui/separator";


export default function Blogs() {

    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedBlog, setSearchedBlog] = useState<Blog[]>([])

    const fetchBlogs = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('/api/getallblogs')
            setBlogs(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const searchBlog = useCallback(async () => {
        setIsLoading(true)
        try {
            const getBlog = await axios.get(`/api/searchblog?query=${encodeURIComponent(searchQuery)}`)
            setSearchedBlog(getBlog.data)
            // setBlogs(getBlog.data)
        } catch (error) {
            console.log(error, 'error on search blog')
        } finally {
            setIsLoading(false)
        }
    }, [searchQuery])

    useEffect(() => {
        fetchBlogs()
    }, [fetchBlogs])

console.log(blogs)
    return (
        <div className="max-w-7xl mx-auto space-y-16 py-16">
            <div className="w-full mx-auto space-y-7">
                <div className="space-y-5">
                    <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center">Stay Uptodate with <br /> <span className="text-secondary">Prospectiv</span></p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex h-5 justify-center items-center space-x-4 text-center">
                        <div>
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/company/about-us'>About Us</Link>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/resources/resource-hub'>White Paper
                            </Link>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/result/success-story'>Success Stories
                            </Link>
                        </div>
                        <Separator className="hidden md:block" orientation="vertical" />
                        <div className="hidden md:block">
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/company/careers'>Openings
                            </Link>
                        </div>
                        <Separator orientation="vertical" />
                        <div className="hidden md:block">
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/company/life-at-prospectiv'>Life at Prospect
                            </Link>
                        </div>
                    </div>
                    <div className="flex h-5 justify-center items-center gap-3 md:hidden">
                        <div>
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/company/careers'>Openings
                            </Link>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <Link className="text-sm lg:text-lg hover:text-secondary hover:border-b border-secondary" href='/company/life-at-prospectiv'>Life at Prospect
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 relative px-5">
                    <div className="relative flex items-center w-full h-12 md:max-w-[70%] lg:max-w-[55%] rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Discover Blog..."
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                searchBlog()
                            }}
                            value={searchQuery}
                        />

                    </div>
                </div>
            </div>

            <div className="min-h-96 p-5">
                {
                    isLoading ?
                        <div className="flex justify-center items-center h-screen absolute left-1/2 top-1/2 transform -translate-x-1/2"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div>
                        :
                        <div className="lg:ml-5">
                            {
                                searchedBlog.length > 0 ?
                                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
                                        {
                                            searchedBlog.map((blog) => <>
                                                <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                                                    <Card className="flex flex-col border border-borderColor h-full max-w-96 rounded-2xl group">
                                                        <CardHeader className="space-y-3 p-3 lg:p-5">
                                                            <div className="overflow-hidden">
                                                                <Image
                                                                    src={blog.mainImage.asset.url}
                                                                    width={500}
                                                                    height={500}
                                                                    alt='blog_thumbnail'
                                                                    className="rounded-lg object-cover group-hover:scale-110 transition-all duration-300 border border-borderColor"
                                                                />
                                                            </div>
                                                            <div className="flex justify-start gap-3">
                                                                {/* {
                                                                    blog.categories == null ? <>"Unknown"</>
                                                                        :
                                                                        <Badge className="bg-buttonColor text-foreground hover:bg-secondary w-fit text-center">
                                                                            {blog.categories.map((category, index) => (<span key={index}>{category?.title}</span>))}
                                                                        </Badge>
                                                                } */}
                                                                <p className="text-sm lg:text-md">{new Date(blog?._createdAt).toDateString()}</p>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="flex flex-col flex-grow p-3 lg:p-5">
                                                            <h2 className="text-xl font-bold line-clamp-2">{blog.title}</h2>
                                                            <p className="text-lg text-textColorTwo line-clamp-2"><PortableText value={blog.body} /></p>
                                                        </CardContent>
                                                        <CardFooter>
                                                            <div className="w-full flex justify-end items-end">
                                                                <ArrowRight size={30} />
                                                            </div>
                                                        </CardFooter>
                                                    </Card>
                                                </Link>
                                            </>)
                                        }
                                    </div>
                                    :
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
                                        {
                                            blogs.map((blog) => <>
                                                <Link href={`/blogs/${blog.slug.current}`} key={blog._id}>
                                                    <Card className="flex flex-col border border-borderColor h-full max-w-96 rounded-2xl group">
                                                        <CardHeader className="space-y-3 p-3 lg:p-5">
                                                            <div className="overflow-hidden">
                                                                <Image
                                                                    src={blog.mainImage.asset.url}
                                                                    width={500}
                                                                    height={500}
                                                                    alt='blog_thumbnail'
                                                                    className="rounded-lg group-hover:scale-110 transition-all duration-300 border border-borderColor"
                                                                />
                                                            </div>
                                                            <div className="flex justify-start gap-3">
                                                                {/* {
                                                                    blog.categories == null ? <>"Unknown"</>
                                                                        :
                                                                        <Badge className="bg-buttonColor text-foreground hover:bg-secondary w-fit text-center">
                                                                            {blog.categories.map((category, index) => (<span key={index}>{category.title}</span>))}
                                                                        </Badge>
                                                                } */}
                                                                <p className="text-sm lg:text-md">{new Date(blog?._createdAt).toDateString()}</p>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="flex flex-col flex-grow p-3 lg:p-5">
                                                            <h2 className="text-xl font-bold line-clamp-2">{blog.title}</h2>
                                                            <p className="text-lg text-textColorTwo line-clamp-2"><PortableText value={blog.body} /></p>
                                                        </CardContent>
                                                        <CardFooter>
                                                            <div className="w-full flex justify-end items-end">
                                                                <ArrowRight size={30} />
                                                            </div>
                                                        </CardFooter>
                                                    </Card>
                                                </Link>
                                            </>)
                                        }
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}