import { AWARDS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try {
        const awards = await client.fetch(AWARDS_QUERY);
        return new Response(JSON.stringify(awards), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch awards" }), { status: 500 });
    }
}