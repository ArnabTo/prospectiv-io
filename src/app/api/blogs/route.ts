import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export async function GET(request: Request){
    try {
        const response = await client.fetch(POST_QUERY);
        // console.log(response)
        return new Response(JSON.stringify(response), {status: 200})
    } catch (error) {
        console.log(error)
        
    }
}