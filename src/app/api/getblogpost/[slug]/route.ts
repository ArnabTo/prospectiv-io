import { client } from "@/sanity/lib/client";
import { POST_QUERY_BY_SLUG } from "@/sanity/lib/queries";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;

    try {
        const response = await client.fetch(POST_QUERY_BY_SLUG, { slug })
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}