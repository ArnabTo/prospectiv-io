import { GUIDE_QUERY_BY_SLUG } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    try {   
        const response = await client.fetch(GUIDE_QUERY_BY_SLUG, { slug })
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}