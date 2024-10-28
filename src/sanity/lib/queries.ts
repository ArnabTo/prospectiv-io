import { defineQuery } from "next-sanity";

export const POST_QUERY = defineQuery(`
    *[_type == "post" && defined(slug.current)] | order(_createdAt desc) [0...3]{
        _id,
        _createdAt,
        title,
        slug,
        body,
        mainImage{
            asset->{
                _id,
                url
            }
        }
    }
`);
export const POST_QUERY_BY_SLUG = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        body,
        mainImage{
            ...,
            asset->{
                _id,
                url
            }
        },
        author->{
            name,
            bio,
            image{
                asset->{
                    _id,
                    url
                }
            }
        },
        
        categories[]->{
            title
        }
    }
`)
