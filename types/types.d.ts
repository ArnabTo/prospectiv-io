export interface HeroContent {
    headline: string;
    subline: string;
    bannerImageOne: {
        asset: {
            _id: string;
            url: string;
        };
    };
    bannerImageTwo: {
        asset: {
            _id: string;
            url: string;
        };
    };
}
export interface HeroContentColdEmail {
    headline: string;
    subline: string;
    bannerImage: {
        asset: {
            _id: string;
            url: string;
        };
    };
}
export interface Testimonial {
    name: string; // Name of the person giving the testimonial
    position: string; // Position of the person giving the testimonial
    testimonial: string; // The actual testimonial text
    avatar?: {
        asset: {
            _id: string;
            url: string;
        };
    };
    logo?: {
        asset: {
            _id: string;
            url: string;
        };
    };
    rating: number; // Rating provided (required)
  }
  
// export interface HeroContentColdEmail {
//     headline: string;
//     subline: string;
//     bannerImageOne: {
//         asset: {
//             _id: string;
//             url: string;
//         };
//     };
//     bannerImageTwo: {
//         asset: {
//             _id: string;
//             url: string;
//         };
//     };
//     bannerImageThree: {
//         asset: {
//             _id: string;
//             url: string;
//         };
//     };
// }

export interface Blog {
    _id: string;
    title: string;
    slug: {
        current: string
    };
    body: any;
    mainImage: {
        asset: {
            url: string
        }
    };
    categories: [
        {
            title: string
        }
    ];
    author: {
        name: string
        bio: []
        image: {
            asset: {
                url: string
            }
        }
    };
    _createdAt: string
}
export interface BlogPost {
    _id: string;
    title: string;
    body: any;
    slug: {
        current: string
    };
    mainImage: {
        asset: {
            url: string
        }
    };
    categories: [
        {
            title: string
        }
    ];
    author: {
        name: string
        bio: [],
        position:string,
        social:{
            linkedin: string,
            facebook: string,
            twitter: string
        }
        image: {
            asset: {
                url: string
            }
        }
    };
    _createdAt: string
    headings?: Array<HTMLHeadingElement | string>
}

export interface Openings {
    title: string;
    slug: string;
    type: string;
    location: string;
    description: any;
    link: string;
    _createdAt: string;
    deadline: string;
}

export interface Whitepaper {
    title: string;
    slug: string;
    thumbnail: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    body: any;
    download_link: string;
    content_type: string;
}


export interface Guide {
    title: string;
    slug: string;
    thumbnail: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    body: any; 
    download_link: string;
    content_type: string;
}


export interface Webinar {
    title: string;
    slug: string;
    thumbnail: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };

    author: {
        name: string
        bio: []
        image: {
            asset: {
                url: string
            }
        }
    };
    body: any;
    publishedAt: string;
    webinar_url: string;
    content_type: string;
}

// Define the available currencies
export type Currency = 'USD' | 'EUR' | 'GBP';

// Define a type for ROI calculation results
export interface ROIResults {
  generatedRevenue: number;
  prospects: number;
  leads: number;
  proposals: number;
  closedDeals: number;
}

export interface SuccessStoryType {
    _id: string;
    title: string;
    slug: string;
    company_location: string;
    company_service: string;
    deal_cycle?: string;
    target_location: string;
    company_website: string;
    company_size: string;
    role: string;
    cost_per_lead: number;
    lead_rate: number;
    response_rate: number;
    body: BlockContent[];
    created_at?: string;
    video_url: string;
    thumbnail?: {
        _type: 'image';
        asset: SanityImageAsset;
        alt?: string;
    };
    company_logo?: {
        _type: 'image';
        asset: SanityImageAsset;
        alt?: string;
    };
}

export interface Award {
    _id: string;
    _type: 'awards';
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    award_name: string;
    category: 'gold' | 'silver' | 'bronze';
    year: string;
    award_url: string;
    thumbnail: {
      asset: {
        url: string;
      };
      alt?: string;
    };
  }
  