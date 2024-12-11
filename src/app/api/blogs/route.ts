import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export async function GET(request: Request) {
    try {
        const response = await client.fetch(POST_QUERY,{}, { cache: 'no-cache' });
        return new Response(JSON.stringify(response), { status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
         });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return new Response(JSON.stringify({ message: "Failed to fetch blogs" }), { status: 500 });
    }
}

