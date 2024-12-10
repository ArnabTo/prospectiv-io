import { ALL_POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function GET(reqest: Request) {
    try {
        const response = await client.fetch(ALL_POST_QUERY,{}, { cache: 'no-cache' });
        return new Response(JSON.stringify(response), {status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch blogs" }), { status: 500 });
    }
}