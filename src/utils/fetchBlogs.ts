import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export const fetchBlogs = async () => {
    const response = await fetch('/api/blogs')
    const blogs = await response.json()
    console.log(blogs)
    return blogs
}