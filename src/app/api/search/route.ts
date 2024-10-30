// pages/api/search.js
import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    // Perform the search with the match operator
    const results = await client.fetch(
      `*[_type == "your_document_type" && title match $query]{
        _id,
        title,
        slug,
        body,
        // Add other fields you want to retrieve
      }`,
      { query: `${query}*` } // Allows partial matches
    );

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching search results', error });
  }
}
