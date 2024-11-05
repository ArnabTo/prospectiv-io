import { defineQuery } from "next-sanity";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

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
    *[_type == "openings" && defined(slug.current)] | order(_createdAt desc){
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

export const BLOG_SEARCH_QUERY = defineQuery(`
*[_type == "post" && title match $params.query + "*"]{
  title,
  "slug": slug.current,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  _createdAt,
  body,
  categories[]->{
            title
        }
}
`)

export const WHITEPAPER_QUERY = defineQuery(`
*[_type == "whitepaper" && defined(slug.current)] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    body,
    download_link,
    content_type,
    thumbnail {
      asset -> {
        _id,
        url
      },
      alt
    }
  }
`)

export const GUIDE_QUERY = defineQuery(`
*[_type == "guide" && defined(slug.current)] | order(_createdAt desc){
  title,
  "slug": slug.current,
  body, 
  download_link,
  content_type,
  thumbnail{
    asset->{
      _id,
      url
    },
    alt
  },
}
`)

export const GUIDE_QUERY_BY_SLUG = defineQuery(`
  *[_type == "guide" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    body,
    download_link,
    content_type,
    thumbnail{
      asset->{
        _id,
        url
      },
      alt
    } 
 }
`)

export const WEBINAR_QUERY = defineQuery(`
  *[_type == "webinar" && defined(slug.current)] | order(_createdAt desc){
    title,
    "slug": slug.current,
    body,
    webinar_url,
    content_type,
    publishedAt,
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
    thumbnail{
      asset->{
        _id,
        url
      },
      alt
    } 
} 
`)

export const WEBINAR_BY_SLUG = defineQuery(`
  *[_type == "webinar" && slug.current == $slug][0]{
        title,
    "slug": slug.current,
    body,
    webinar_url,
    content_type,
    publishedAt,
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
    thumbnail{
      asset->{
        _id,
        url
      },
      alt
    } 
 }
`)

// export const WHITEPAPER_QUERY = defineQuery(`
// *[_type == "whitepaper" && defined(slug.current)] | order(_createdAt desc){
//   title,
//   "slug": slug.current,
//   body,
//   download_link,
//   content_type,
//   thumbnail{
//     asset->{
//       _id,
//       url
//     },
//     alt
//   },
// }
// `)

// export const GUIDE_QUERY = defineQuery(`
// *[_type == "guide" && defined(slug.current)] | order(_createdAt desc){
//   title,
//   "slug": slug.current,
//   body,
//   download_link,
//   content_type,
//   thumbnail{
//     asset->{
//       _id,
//       url
//     },
//     alt
//   },
// }
// `)

// export const WEBINAR_QUERY = defineQuery(`
//   *[_type == "webinar" && defined(slug.current)] | order(_createdAt desc){
//     title,
//     "slug": slug.current,
//     body,
//     webinar_link,
//     content_type,
//     author->{
//               name,
//               bio,
//               image{
//                   asset->{
//                       _id,
//                       url
//                   }
//               }
//           },
//           thumbnail{
//       asset->{
//         _id,
//         url
//       },
//       alt
//     },
//   }
//   `)