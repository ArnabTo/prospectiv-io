
import { BLOG_SEARCH_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
    try {

        const url = new URL(request.url);
        const query = url.searchParams.get("query")

        if (!query) {
            return new Response(JSON.stringify({ message: "Query parameter is required" }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        "Cache-Control": "no-store", // Prevent caching to always fetch fresh data
                    },
                });
        }

        const response = await client.fetch(BLOG_SEARCH_QUERY, { params: { query } });
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return new Response(JSON.stringify({ message: "Failed to fetch blogs" }), { status: 500 });
    }
}
