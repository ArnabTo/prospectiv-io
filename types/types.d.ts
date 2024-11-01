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
        bio: []
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
    body: any; // Replace 'any' with a more specific type if using a rich text component
    download_link: string;
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
        name: string;
        bio: string;
        image: {
            asset: {
                _id: string;
                url: string;
            };
        };
    };
    body: any; // Replace 'any' with a more specific type if using a rich text component
    content_link: string;
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
    body: any; // Replace 'any' with a more specific type if using a rich text component
    download_link: string;
}
