import { client } from "@/sanity/lib/client";
import { useCallback, useEffect, useState } from "react";
import { POST_QUERY_BY_SLUG } from "@/sanity/lib/queries";
import axios from "axios";


const BlogPost = () => {

    const [blog, setBlog] = useState([]);

    const fetchBlog = useCallback(async ()=>{
        try {
            const getBlog = await axios.get('/api/getblogpost/[slug]');
            console.log(getBlog)
            setBlog(getBlog.data)
        } catch (error) {
            console.log(error)
        }
    } ,[])
    
    useEffect(() => {
        fetchBlog()
    }, [fetchBlog])

    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

export default BlogPost;