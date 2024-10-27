import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export const fetchBlogs = async() =>{
    const response = await client.fetch(POST_QUERY);

    return response
}