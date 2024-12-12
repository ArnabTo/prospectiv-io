import { defineQuery } from "next-sanity";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

export const GOOGLE_HERO_TEXTCONTENT_QUERY = defineQuery(`
*[_type == "googleherodata" && defined(slug.current)] | order(_createdAt desc){
  headline,
  subline,
  bannerImageOne{
            asset->{
                _id,
                url
            }
        },
        bannerImageTwo{
            asset->{
                _id,
                url
            }
        },
}
  `)
export const LINKEDIN_HERO_TEXTCONTENT_QUERY = defineQuery(`
*[_type == "linkedinherodata" && defined(slug.current)] | order(_createdAt desc){
  headline,
  subline,
  bannerImageOne{
            asset->{
                _id,
                url
            }
        },
        bannerImageTwo{
            asset->{
                _id,
                url
            }
        },
}
  `)
export const COLDEMAIL_HERO_TEXTCONTENT_QUERY = defineQuery(`
*[_type == "coldemailherodata" && defined(slug.current)] | order(_createdAt desc){
  headline,
  subline,
        bannerImage{
            asset->{
                _id,
                url
            }
        },
}
  `)
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
            social,
            position,
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
export const WHITEPAPER_QUERY_BY_SLUG = defineQuery(`
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
    content_type,
    publishedAt,
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

export const  SUCCESSSTORY_QUERY = defineQuery(`
  *[_type == "successstory" && defined(slug.current)] | order(_createdAt desc){
    title,
    "slug": slug.current,
    cost_per_lead,
    lead_rate,
    response_rate,
    role,
    created_at,
    video_url,
    company_logo{
      asset->{
        _id,
        url 
      },
      alt
    } ,
} 
`)
export const  SUCCESSSTORY_DEATILS_QUERY = defineQuery(`
  *[_type == "successstory" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    body,
    publishedAt,
    company_website,
    company_location,
    company_service,
    deal_cycle,
    target_location,
    company_size,
    role,
    cost_per_lead,
    lead_rate,
    response_rate,
    created_at,
    video_url,
    thumbnail{
      asset->{
        _id,
        url 
      },
      alt
    } ,
    company_logo{
      asset->{
        _id,
        url 
      },
      alt
    } ,
} 
`)

export const  AWARDS_QUERY = defineQuery(`
  *[_type == "awards" && defined(title)] | order(_createdAt desc){
    _id,
  title,
  slug,
  award_name,
  category,
  year,
  award_url,
  thumbnail{
    asset->{
      _id,
      url
    },
    alt
  }
} 
`)