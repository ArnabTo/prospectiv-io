import { defineQuery } from "next-sanity";

export const ALL_POST_QUERY = defineQuery(`
    *[_type == "post" && defined(slug.current)] | order(_createdAt desc){
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
`);
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
        "headings": body[style in ["h1", "h2", "h3", "h4", "h5", "h6"]],
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


export const OPENINGS_QUERY = defineQuery(`
    *[_type == "openings"]{
  title,
  "slug": slug.current,
  type,
  location,
  description,
  link
}`)
export const OPENINGS_QUERY_BY_SLUG = defineQuery(`
 *[_type == "openings" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  type,
  location,
  description,
  link,
  _createdAt,
  deadline
}`)