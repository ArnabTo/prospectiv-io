import { OPENINGS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function GET(reqest: Request) {
    try {
        const response = await client.fetch(OPENINGS_QUERY);
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch openings" }), { status: 500 });
    }
}