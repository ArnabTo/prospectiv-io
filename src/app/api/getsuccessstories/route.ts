import { client } from "@/sanity/lib/client";
import { SUCCESSSTORY_QUERY } from "@/sanity/lib/queries";

export async function GET() {
    try {
        const response = await client.fetch(SUCCESSSTORY_QUERY,{}, { cache: 'no-cache' });
        return new Response(JSON.stringify(response), { status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
         });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch success stories" }), {
            status: 500,
        });
    }
}