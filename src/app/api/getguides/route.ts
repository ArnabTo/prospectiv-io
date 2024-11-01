import { client } from "@/sanity/lib/client";
import { GUIDE_QUERY } from "@/sanity/lib/queries";

export async function GET(request: Request) {
    try {
        const response = await client.fetch(GUIDE_QUERY);
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to fetch guides" }), {
            status: 500,
        });
    }
}