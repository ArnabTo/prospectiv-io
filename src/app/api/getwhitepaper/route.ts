import { client } from "@/sanity/lib/client";
import { WHITEPAPER_QUERY } from "@/sanity/lib/queries";
export async function GET() {
    try {
        const response = await client.fetch(WHITEPAPER_QUERY);
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch whitepapers" }), {
            status: 500,
        });
    }
}