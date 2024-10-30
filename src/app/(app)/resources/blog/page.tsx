'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import axios from "axios"
import { ArrowRight, Loader2, Search } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react"
import { Blog } from '@/types/types'


export default function Blogs() {

    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [msg, setMsg] = useState('')

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
            const getBlog = await axios.get(`/api/searchblog?query=${searchQuery}`)
            setBlogs(getBlog.data)
        } catch (error) {
            console.log(error, 'error on search blog')
        } finally {
            setIsLoading(false)
        }
    }, [searchQuery])

    useEffect(() => {
        if (!searchQuery) {
            fetchBlogs()
        }
    }, [fetchBlogs, searchQuery])

    // console.log(blogs)
    // console.log(blogs)
    return (
        <div className="max-w-7xl mx-auto space-y-16">
            <div className="w-1/3 ml-auto">
                <div className="flex items-center space-x-4 relative">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                            searchBlog()
                        }}
                        value={searchQuery}
                        className="flex-shrink-0 w-full px-4 py-2 text-textColorOne border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary" />
                    {/* <Button className="absolute right-1 w-24 px-10 rounded-full bg-buttonColor text-foreground hover:bg-buttonHoverColor">
                        <Search size={25} />
                    </Button> */}
                    <div onClick={() => searchBlog()} className="w-24 absolute right-1 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                        <div className="flex-1 flex justify-center items-center py-[6px] text-center bg-black  rounded-full hover:scale-95 transition-all duration-300">
                            <Search size={25} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {
                    isLoading ?
                        <div className="flex justify-center items-center h-screen"><Loader2 size={60} className="w-10 h-10 mx-auto animate-spin" /></div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
                            {
                                blogs.map((blog) => <>
                                    <Link href={`/blogs/${blog.slug.current}`} key={blog._id}>
                                        <Card className="border border-borderColor h-full max-w-96 rounded-2xl group">
                                            <CardHeader className="space-y-3">
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
                                                    {
                                                        blog.categories == null ? <>"Unknown"</>
                                                            :
                                                            <Badge className="bg-buttonColor text-foreground hover:bg-secondary w-fit text-center">
                                                                {blog.categories.map((category, index) => (<span key={index}>{category.title}</span>))}
                                                            </Badge>
                                                    }
                                                    <p>{new Date(blog?._createdAt).toDateString()}</p>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
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
        </div>
    )
}
