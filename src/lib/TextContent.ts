import { title } from "process";
import { text } from "stream/consumers";

const HeroSectionTextContent = {
    heading: 'Drive More Sales Meetings with Your Ideal Customers.',
    paragraph: 'Helping small-to-medium-sized service-based businesses book more sales meetings effortlessly, so you can focus on growing your business.'
}

// WhyProspective section
const whyProspectiveTextContent = {
    'heading': {
        heading: 'Why Choose Prospectiv ?',
        paragraph: 'Delivering Qualified Sales Meetings for SME Service-Based Businesses with Proven ROI in Just 30 Days'
    },
    'cardTextContent1': {
        heading: 'Driving Sales Success for SMEs',
        paragraph: 'We specialise in setting qualified sales meetings for SME service-based businesses.'
    },
    'cardTextContent2': {
        heading: 'Maximizing ROI for SME Service Providers',
        paragraph: 'Our typical clients make a return on their investment in circa 30 days.'
    },
    'cardTextContent3': {
        heading: 'Empowering SMEs with £1M in Pipeline Success',
        paragraph: 'We’ve attributed over £1,000,000 ($1.3M) in pipeline for our clients in 2024.can you create a title for these options.'
    },
}

// what we do section
const WhatWeDoTextContent = {
    'heading': {
        heading: 'You do your best work while we do the hard work',
        paragraph: 'Prospectiv’s done-for-you lead generation service is designed to help companies swiftly and consistently generate leads.',
    },
    'cardTextContent1': {
        heading: 'Unearth new opportunities',
        paragraph: 'Speak to ideal clients that are outside your network. Discover new markets and grow your business',
    },
    'cardTextContent2': {
        heading: 'Speak With Qualified Leads',
        paragraph: 'Speak with truly qualified opportunities to grow your sales.',
    },
    'cardTextContent3': {
        heading: 'Easily Scalable',
        paragraph: 'Our services are designed to scale with our clients growth, supporting their long-term success in the marketplace.',
    },
};

// how its work section
const HowItWorkTextContent = {
    'heading': {
        heading: 'Cold Email Lead Generation',
        paragraph: 'Launch hyper-targeted lead generation campaigns in just two weeks with our proven six-step process.',
    },
    'cardTextContent1': {
        heading: 'Identify Your ICP',
        paragraph: 'You tell us about your target clients and what makes you unique.',
    },
    'cardTextContent2': {
        heading: 'Create a Database',
        paragraph: 'Create a DatabaseWe source and identify an audience of decision makers.',
    },
    'cardTextContent3': {
        heading: 'Write Personalised Emails',
        paragraph: 'We write on-brand and engaging emails.',
    },
    'cardTextContent4': {
        heading: 'Campaign Goes Live',
        paragraph: 'Your outreach goes live, personalised for each prospect.',
    },
    'cardTextContent5': {
        heading: 'New Sales Enquiries',
        paragraph: 'New sales enquiries are sent directly to your team in real time.',
    },
    'cardTextContent6': {
        heading: 'Scale The Campaign',
        paragraph: 'We continue to scale our efforts and increase ROI.',
    },
}


// life at prospectiv
const lifeAtProspectivTextContent = {
    'heading': {
        heading: 'Life at Prospectiv',
        paragraph: `We're the people behind the prospects. For all the clever tech, what makes the Sopro service stand out is the people. As we like to tell our clients, we’re a team, not a tool.`,
    },
    'mettingPeople': {
        heading: 'Meet Our People',
        paragraph: `We bring together vast knowledge and expertise, while also making Sopro a place to grow, learn, achieve, and have fun.`
    },
    'ourteam': {
        heading: 'Our Team',
        paragraph: `We love all our teams equally! To learn more about any team or apply, check out their pages below.`,
    },
    'culture': {
        'heading': {
            heading: 'Culture and perks',
        },
        'sections': {
            'learningAndDevelopment': {
                heading: 'Learning and development',
                paragraph: `We’ve built our own learning platform to aid your personal and professional growth. Additional support comes from mentorship, external training and certification.`,
            },
            'hybridWorking': {
                heading: 'Hybrid working',
                paragraph: `For face-to-face time with your colleagues, work from our offices two days a week: centrally located and packed with perks and treats. And for those days when you need some quiet time to fully focus, work from home.`,
            },
            'wellbeingPackage': {
                heading: 'Wellbeing package',
                paragraph: `Our wellbeing budget is adapted to the needs of our people: regular sports, social activities and lots of healthy snacks.`,
            },
            'yourWorkMatters': {
                heading: 'Your work matters',
                paragraph: `We have an open-door policy and value your opinion. Ideas are heard and genuinely put into practice.`,
            }
        },
    }
}

const aboutUsPageTextContent = {
    'heading': {
        heading: 'About Us',
        paragraph: 'Prospectiv is more than a tool: we are smart humans with unrivalled expertise and powerful technology. Our teams have doubled in size every year, thanks to the expertise, dedication and passion of our people.'
    },
    'founder': {
        heading: 'From Two Founders to a Growing Team: The Prospectiv Journey',
        paragraph: `In 2015, driven by a shared vision and a passion for innovation, founders Ryan and Rob launched Prospectiv with one unique idea—focusing on the numbers. Today, while delivering transparent and measurable ROI remains at our core, we've grown into a full team of professionals who bring expertise, enthusiasm, and the strength of human connection to everything we do. Together, we’ve made remarkable strides in a short period, and the journey continues.`,
    },
    'prospectiValues': {
        'heading': {
            heading: 'Prospectiv Values',
            paragraph: ` Our values permeate Sopro through our behaviours, both as people and across our business. They influence the way we hire new people, develop employees, review performance, evaluate reward and achieve promotion.`
        },
        'contentOne': {
            heading: 'We invest',
            paragraph: `e invest in the long-term success of our business, our products and services. We invest in our exceptional people, in personal development, training and career progression. We invest in high performing facilities and work environments for our teams to thrive in.`
        },
        'contentTwo': {
            heading: 'We are ambitious',
            paragraph: `We are ambitious and have an entrepreneurial spirit that is focused, energising and relentless. We set ambitious goals and clear paths to success. We value career progression and encourage passionate and imaginative collaboration between like-minded and driven professionals.`
        },
        'contentThree': {
            heading: 'We are people',
            paragraph: `We are people and we are proud of our exceptional teams and their identities. We are supportive and promote each other’s success and we give back to our communities through impactful initiatives. We encourage teamwork, inclusivity and respect. Our people are empowered.`
        },
        'contentFour': {
            heading: 'We are open',
            paragraph: `  We are open and transparent in everything we do. We are clear about who we are, what we do and how we do it. We encourage an open-door approach to ensure every team member is valued, heard and supported.`
        },
    },
    'meetCampaignMember': {
        'heading': {
            heading: 'Meet your campaign team',
            paragraph: `Sopro clients get a dedicated two person team that work tirelessly to improve campaign performance. But those two are the tip of the iceberg, with an army of circa 300 experts backing them up.`
        },
        content: [
            {
                heading: 'Customer Success',
                paragraph: `The face of Sopro, and your go to trusted advisors. Our Customer Success team are proactive, innovative, and creative. And they'll go the extra mile to build the campaign you deserve.`,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
            },
            {
                heading: 'Operations',
                paragraph: `The wizards behind the campaigns, these guys don't rest until they've pulled every lever and tweaked every button, in their never-ending pursuit of the perfect campaign.`,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
            },
            {
                heading: 'Tech',
                paragraph: `The brains behind our world-class software, this team of self-confessed geeks build systems that deliver emails at an astonishing rate, and create cutting edge tech to take prospecting to the next level.`,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
            },
            {
                heading: 'Compliance and data',
                paragraph: `The number boffins, our compliance and data experts are next-level clever, making sure everything we do is best in class and watertight.`,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
            }

        ]
        ,
        'contentOne': {

        },
        'contentTwo': {

        },
        'contentThree': {

        },
        'contentFour': {

        },

    },
    'leaderShipTeam': {
        'heading': {
            heading: 'Our Leadership Team',
            paragraph: `Every member of our team is focused on delivering success for our clients. And while we can't introduce every Sopro employee, you can meet our leadership team here.`
        },
        contents: [
            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
            },

            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
            },

            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
            },


        ],
        // contentOne: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
        // },
        // contentTwo: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
        // },
        // contentThree: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`
        // },
    },
    'casestudy': {
        heading: `We're our own best case study`,
        textContentOne: `70% of our new business comes from our own email marketing campaigns`,
        textContentTwo: `We’re proud of the success stories we’ve created for our clients, transforming businesses large and small through optimised email marketing. Back in 2015, Prospectiv’s first customer was… Prospectiv. We used our own technology to grow our business, perfecting the service through those initial campaigns.`,
        textContentThree: `Discover what’s possible for your business.`,
        cta: 'See open opportunities'
    },
    'allWinings': {
        heading: {
            heading: 'All winning together',
            paragraph: `From the beginning, we aimed to offer clients more than just logins and weekly reports. Prospectiv became a supportive marketing service focused on transparency, compliance, and protecting client reputations. With a team aligned to this vision, recognition and awards soon followed, fueling our drive even further.`
        },
        images: [
            'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
        ]
    }
}

const carrerPageTextContent = {
    'heading': {
        heading: 'Find your Oppurtunities',
        paragraph: `We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Sopro a great place to work, and reward everyone who joins us.`,
    },
    exploreus: {
        heading: 'Explore About Us',
        content: [
            {
                link: '/life-at-prospectiv',
                image: 'https://sopro.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
                title: 'Carrers',
                description: `Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →`
            },
            {
                link: '/life-at-prospectiv',
                image: 'https://sopro.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
                title: 'Carrers',
                description: `Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →`
            },
            {
                link: '/life-at-prospectiv',
                image: 'https://sopro.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
                title: 'Carrers',
                description: `Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →`
            },
        ]
    }

}

const pricingPageTextContent = {
    'heading': {
        heading: 'Pricing',
        paragraph: `We’re passionate about helping our clients sell more, and believe having a happy team helps us to do that.
                        We work hard to make Sopro a great place to work, and reward everyone who joins us.`,
    },
    whatsincluded: {
        contentOne: {
            heading: 'Sales engagement service',
            paragraph: `You receive enquiries directly and do what you do best.`,
        },
        contentTwo: {
            heading: 'Multi-channel prospecting',
            paragraph: `Bespoke, expert campaigns with multiple touchpoints - email, social, and more`,
        },
        contentThree: {
            heading: 'Best-in-class data',
            paragraph: `A unique and up-to-date list of prospects, built for, and owned by, you`,
        },
        contentFour: {
            heading: 'Prospect tracking',
            paragraph: `Get notified when individuals in your campaign visit your site and show buyer intent`,
        },
        contentFive: {
            heading: 'Onboarding and optimisation',
            paragraph: `Your team of two continually analyse and improve your campaigns.`,
        },
        contentSix: {
            heading: 'Client portal access',
            paragraph: `Real-time, in-depth campaign reporting for total transparency and control`,
        },
        contentSeven: {
            heading: 'LinkedIn outreach',
            paragraph: `Improve campaign performance by sending LinkedIn messages to high intent prospects`,
        },
        contentEight: {
            heading: 'Gifting service option',
            paragraph: `Create deeper connections with your prospects by adding redeemable gifts to your outreach`,
        },
    },

    companyRaing: [
        {
            logo: 'https://i.ibb.co/88FPxMJ/google.png',
            rating: 5
        },
        {
            logo: 'https://i.ibb.co/88FPxMJ/google.png',
            rating: 4
        },
        {
            logo: 'https://i.ibb.co/88FPxMJ/google.png',
            rating: 4.5
        },
        {
            logo: 'https://i.ibb.co/88FPxMJ/google.png',
            rating: 4.6
        },
        {
            logo: 'https://i.ibb.co/88FPxMJ/google.png',
            rating: 5
        },
    ]
}

const legalPageContent = {
    cookies: {
        section: [
            {
                id: "introduction",
                title: 'Introduction',
                contents: [
                    {
                        id: 1.1,
                        content: `We are committed to safeguarding the privacy and accuracy of the personal data of our website visitors, service users and email recipients..`
                    },
                    {
                        id: 1.2,
                        content: `This policy applies where we are acting as a Data Controller with respect to the personal data of our website visitors, service users, email recipients and personal data collected from public sources; in other words, where we determine the purposes and means of the processing of that personal data.`
                    },
                    {
                        id: 1.3,
                        content: `In this policy, “we”, “us” and “our” refer to Prospect Global Ltd – trading as Sopro.`
                    },
                    {
                        id: 1.4,
                        content: `Reference to a Data Subject means a natural person whose personal data is processed by a Data Controller or a Data Processor, in other words, you.`
                    },
                ]
            },
            {
                id: 'what-are-cookies',
                title: 'What are cookies?',
                textContent: `Cookies and similar technologies are small text documents or code, frequently containing a unique identification code. When you visit websites or use mobile application, a computer will ask your computer/device for permission to save this file on your computer/device and gain access to this information. Information collected through cookies may include the date and time of your visit and how you use a particular website.`
            },
            {
                id: 'what-do-we-use-cookies',
                title: 'Why do we use cookies?',
                textContent: `Cookies make sure that during your visit to our site that you can remain logged in, all information you might want to carry over from one page goes to the next and that you can browse safely and smoothly. Cookies also allow us to see how our website is used and importantly how we can improve it, as well as allowing us to potentially present you with targeted marketing that matches your personal interests.`
            },
            {
                id: 'what-types-of-cookies-do-we-use',
                title: 'What types of cookies do we use?',
                update: '11/10/2024, 07:14',
                contents: [
                    {
                        title: 'Essential',
                        textContent: `These cookies are necessary for the website to function properly. Vital actions can be performed by using these cookies such as saving your cookie preferences for this website or logging in to our portal.`,
                        headers: ['Name', 'Purpose', 'Domain', 'Expiration time', 'Provider', 'Type'],
                        rows: [
                            {
                                "name": "__cf_bm [5x]",
                                "purpose": "The __cf_bm cookie is a cookie necessary to support Cloudflare Bot Management, currently in private beta. As part of our bot management service, this cookie helps manage incoming traffic that matches criteria associated with bots.",
                                "domain": ".hsforms.net, .hsforms.com, .t.co, .hubspot.com, .vimeo.com",
                                "expiration": "29 minutes",
                                "provider": {
                                    title: "Cloudflare",
                                    sitelink: 'https://www.cloudflare.com/en-gb/privacypolicy/'
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "__hssrc",
                                "purpose": "Whenever HubSpot changes the session cookie, this cookie is also set to determine if the visitor has restarted their browser. If this cookie does not exist when HubSpot manages cookies, it is considered a new session.",
                                "domain": ".sopro.io",
                                "expiration": "Session",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__tmbid",
                                "purpose": "This cookie is associated with Crimtan Holding Limited for the purpose of consented relevant advertising.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_cfuvid [3x]",
                                "purpose": "This cookie is a part of the services provided by Cloudflare - Including load-balancing, deliverance of website content and serving DNS connection for website operators.",
                                "domain": ".hsforms.com, .hubspot.com, .vimeo.com",
                                "expiration": "Session",
                                "provider": {
                                    title: "Cloudflare",
                                    sitelink: 'https://www.cloudflare.com/en-gb/privacypolicy/'
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "cookiefirst-consent",
                                "purpose": "This cookie saves your cookie preferences for this website. You can change these or withdraw your consent easily.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": {
                                    title: "Cookie First",
                                    sitelink: 'https://cookiefirst.com/legal/data-processing-agreement/'
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "cookiefirst-consent",
                                "purpose": "This cookie saves your cookie preferences for this website. You can change these or withdraw your consent easily.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    title: "Cookie First",
                                    sitelink: 'https://cookiefirst.com/legal/data-processing-agreement/'
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "cookiefirst-id",
                                "purpose": "This cookie contains your unique ID so CookieFirst can identify unique visitors to this website.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    title: "Cookie First",
                                    sitelink: 'https://cookiefirst.com/legal/data-processing-agreement/'
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "JSESSIONID",
                                "purpose": "This is a general purpose session cookie used by websites written in JSP. Usually used to maintain an anonymous user session by the server.",
                                "domain": ".nr-data.net",
                                "expiration": "Session",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "pa_enabled",
                                "purpose": "This item determines the device used to access the website. This allows the website to be formatted accordingly.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "PHPSESSID",
                                "purpose": "Cookie generated by applications based on the PHP language. This is a general purpose identifier used to maintain user session variables.",
                                "domain": "sopro.io",
                                "expiration": "Session",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hssc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".sopro.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hstc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".sopro.io",
                                "expiration": "6 months",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics.",
                                "domain": ".sopro.io",
                                "expiration": "2 years",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga_********",
                                "purpose": "This cookie stores a unique ID for a website visitor and tracks how the visitor uses the website. The data is used for statistics.",
                                "domain": ".sopro.io",
                                "expiration": "2 years",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_gat_UA-****",
                                "purpose": "The _gat_UA cookie is a variation of the Google Analytics _gat cookie. It is used to limit the collection of data on high-traffic websites.",
                                "domain": ".sopro.io",
                                "expiration": "a few seconds",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_gid",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics.",
                                "domain": ".sopro.io",
                                "expiration": "a day",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSession_******",
                                "purpose": "A cookie that holds the current session data. This ensures that subsequent requests within the session window will be attributed to the same Hotjar session.",
                                "domain": ".sopro.io",
                                "expiration": "29 minutes",
                                "provider": "Hotjar Ltd",
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSessionUser_******",
                                "purpose": "Hotjar cookie that is set when a user first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID.",
                                "domain": ".sopro.io",
                                "expiration": "a year",
                                "provider": "Hotjar Ltd",
                                "type": "Cookie"
                            },
                            {
                                "name": "_obid",
                                "purpose": "This cookie is set when a user lands on the site, containing a unique ID relating to the email that was clicked on.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_id.***.*****",
                                "purpose": "Matomo / Piwik cookie, used to store a few details about the user such as the unique visitor ID.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_ses.***.**",
                                "purpose": "This cookie is used to record visitors' behavior on the website. It is used to collect statistics about website usage.",
                                "domain": "sopro.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "hubspotutk",
                                "purpose": "This cookie is used to keep track of a visitor's identity. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.",
                                "domain": ".sopro.io",
                                "expiration": "64 years",
                                "provider": "",
                                "type": "Cookie"
                            }
                        ]
                    },
                    {
                        title: 'Functional',
                        textContent: `These cookies enable more functionality for visitors to our website. These cookies can be set by our external service providers or by our own website. Some example functionalities that may be enabled when this category is accepted include: live chat services and watching embedded videos.`,
                        headers: ['Name', 'Purpose', 'Domain', 'Expiration time', 'Provider', 'Type'],
                        rows: [
                            {
                                name: 'hubspotutk',
                                purpose: 'This cookie name is associated with websites built on the HubSpot platform. HubSpot reports its purpose as user authentication. As a persistent rather than a session cookie, it cannot be classified as Strictly Necessary.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                "provider": {
                                    title: "Hubshot",
                                    sitelink: 'https://legal.hubspot.com/privacy-policy'
                                },
                                type: 'Local storage'
                            },
                            {
                                name: 'li_gc',
                                purpose: "This is a cookie from LinkedIn and is used for storing visitors' consent regarding the use of cookies for non-essential purposes.",
                                domain: '.linkedin.com',
                                expiration: '6 months',
                                "provider": {
                                    title: "LinkedIn",
                                    sitelink: 'https://www.linkedin.com/legal/privacy-policy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'lidc',
                                purpose: 'Cookie from LinkedIn used by share buttons and advertising tags.',
                                domain: '.linkedin.com',
                                expiration: '2 months',
                                "provider": {
                                    title: "LinkedIn",
                                    sitelink: 'https://www.linkedin.com/legal/privacy-policy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'pa',
                                purpose: 'This item registers the speed and performance of the website. This function can be used in the context of statistics and load balancing.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'VISITOR_INFO1_LIVE',
                                purpose: 'This cookie allows YouTube to check bandwidth usage.',
                                domain: '.youtube.com',
                                expiration: '6 months',
                                "provider": {
                                    title: "YouTube",
                                    sitelink: 'https://policies.google.com/privacy?hl=nl'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'vuid',
                                purpose: 'This is a cookie from Vimeo used for the video player on our website.',
                                domain: '.vimeo.com',
                                expiration: '2 years',
                                "provider": {
                                    title: "Vimeo",
                                    sitelink: 'https://vimeo.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'YSC',
                                purpose: 'Registers unique IDs and keeps statistics on which videos users have viewed from YouTube.',
                                domain: '.youtube.com',
                                expiration: 'Session',
                                "provider": {
                                    title: "YouTube",
                                    sitelink: 'https://policies.google.com/privacy?hl=nl'
                                },
                                type: 'Cookie'
                            }
                        ]
                    },
                    {
                        "title": "Advertising/Tracking",
                        "headers": ["Name", "Purpose", "Domain", "Expiration time", "Provider", "Type"],
                        "rows": [
                            {
                                "name": "__hssc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".sopro.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hstc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".sopro.io",
                                "expiration": "6 months",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics. Data transfer to third countries: USA. Google LLC. is certified under the Data Privacy Framework, indicating that your rights as a data subject can be guaranteed.",
                                "domain": ".sopro.io",
                                "expiration": "2 years",
                                "provider": {
                                    "title": "Google LLC.",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga_********",
                                "purpose": "This cookie stores a unique ID for a website visitor and tracks how the visitor uses the website. The data is used for statistics. Data transfer to third countries: USA. Google LLC. is certified under the Data Privacy Framework, indicating that your rights as a data subject can be guaranteed.",
                                "domain": ".sopro.io",
                                "expiration": "2 years",
                                "provider": {
                                    "title": "Google LLC.",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_gat_UA-****",
                                "purpose": "The _gat_UA cookie is a variation of the Google Analytics _gat cookie. It is used to limit the collection of data on high-traffic websites. The cookie is set by the Google Analytics tracking code and it contains the unique ID of the tracking account or website to which it relates. The _gat_UA cookie is typically used to throttle the request rate, which means it limits the amount of data that Google Analytics can collect from the website.",
                                "domain": ".sopro.io",
                                "expiration": "a few seconds",
                                "provider": {
                                    "title": "Google LLC",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_gid",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics. Data transfer to third countries: USA. Google LLC. is certified under the Data Privacy Framework, indicating that your rights as a data subject can be guaranteed.",
                                "domain": ".sopro.io",
                                "expiration": "a day",
                                "provider": {
                                    "title": "Google LLC.",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSession_******",
                                "purpose": "A cookie that holds the current session data. This ensures that subsequent requests within the session window will be attributed to the same Hotjar session.",
                                "domain": ".sopro.io",
                                "expiration": "29 minutes",
                                "provider": {
                                    "title": "Hotjar Ltd",
                                    "sitelink": "https://www.hotjar.com/legal/policies/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSessionUser_******",
                                "purpose": "Hotjar cookie that is set when a user first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID.",
                                "domain": ".sopro.io",
                                "expiration": "a year",
                                "provider": {
                                    "title": "Hotjar Ltd",
                                    "sitelink": "https://www.hotjar.com/legal/policies/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_obid",
                                "purpose": "This cookie is set when a user lands on the site, containing a unique ID relating to the email that was clicked on.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_id.***.*****",
                                "purpose": "Matomo / Piwik cookie, used to store a few details about the user such as the unique visitor ID.",
                                "domain": ".sopro.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_ses.***.**",
                                "purpose": "This cookie is used to record visitors' behavior on the website. It is used to collect statistics about website usage, such as the time of the last visit to the website. The cookie does not contain any personal data and is used solely for website analysis.",
                                "domain": ".sopro.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "hubspotutk",
                                "purpose": "This cookie name is associated with websites built on the HubSpot platform. This cookie is used to keep track of a visitor's identity. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.",
                                "domain": ".sopro.io",
                                "expiration": "64 years",
                                "provider": "",
                                "type": "Cookie"
                            }
                        ]
                    },
                    {
                        title: 'Advertising/Tracking',
                        textContent: `These cookies are set by external advertising partners and are used for the profiling and tracking of data across multiple websites. If you accept these cookies, we may show you our advertisements on other websites based on your user profile and preferences. These cookies also save data about how many visitors have seen or clicked on our advertisements to better optimise our advertising campaigns.`,
                        headers: ['Name', 'Purpose', 'Domain', 'Expiration time', 'Provider', 'Type'],
                        rows: [
                            {
                                name: '_fbp',
                                purpose: 'This cookie is used by Facebook for advertising purposes and conversion tracking.',
                                domain: '.sopro.io',
                                expiration: '3 months',
                                "provider": {
                                    title: "Meta Inc.",
                                    sitelink: 'https://www.facebook.com/privacy/center/'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: '_gcl_au',
                                purpose: "This cookie is set by Google Adsense for experiments with 'cross-website' advertising.",
                                domain: '.sopro.io',
                                expiration: '3 months',
                                "provider": {
                                    title: "Google LLC",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: '_MarketMapper',
                                purpose: 'This cookie is set when a user submits a Market Mapper form, containing a unique ID relating to the form submitted. It is used for website customization.',
                                domain: 'sopro.io',
                                expiration: 'a year',
                                "provider": {
                                    title: "Prospectiv",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: '_obid_visit',
                                purpose: 'This is used to identify a site session across multiple pages and is not linked to any personal data.',
                                domain: 'sopro.io',
                                expiration: '4 hours',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: '_uetsid',
                                purpose: 'Contains the session ID for a unique session on the site, used by Microsoft Advertising.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                "provider": {
                                    title: "Mircosoft",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Local storage'
                            },
                            {
                                name: '_uetsid',
                                purpose: 'This cookie is used by Bing to determine what ads should be shown that may be relevant to the end user perusing the site.',
                                domain: '.sopro.io',
                                expiration: 'a day',
                                "provider": {
                                    title: "Bing (Microsoft)",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: '_uetsid_exp',
                                purpose: 'Contains the expiry-date for the local storage and cookie with the corresponding name.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                "provider": {
                                    title: "Microsoft",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Local storage'
                            },
                            {
                                name: '_uetvid',
                                purpose: 'UET assigns this unique, anonymized visitor ID, representing a unique visitor. UET stores this data in a first-party cookie and local storage.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                "provider": {
                                    title: "Microsoft",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Local storage'
                            },
                            {
                                name: '_uetvid',
                                purpose: 'This cookie is used by Bing to determine which ads are served that may be relevant to the end user browsing the site.',
                                domain: '.sopro.io',
                                expiration: 'a year',
                                "provider": {
                                    title: "Bing (Microsoft)",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: '_uetvid_exp',
                                purpose: 'Contains the expiry-date for the cookie or local storage item with corresponding name.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                "provider": {
                                    title: "Microsoft",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Local storage'
                            },
                            {
                                name: 'bcookie',
                                purpose: 'Cookie from LinkedIn used by share buttons and advertising tags.',
                                domain: '.linkedin.com',
                                expiration: 'a year',
                                provider: 'LinkedIn',
                                type: 'Cookie'
                            },
                            {
                                name: 'IDE',
                                purpose: 'Cookie from Double Click (Google) which helps analyze and optimize advertising campaigns.',
                                domain: '.doubleclick.net',
                                expiration: 'a year',
                                "provider": {
                                    title: 'DoubleClick (Google)',
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'lastExternalReferrer',
                                purpose: 'This item is used to determine the origin of your visit.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'lastExternalReferrerTime',
                                purpose: 'This item is used for visitor evaluation.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'msToken',
                                purpose: 'This cookie collects information on user behavior on multiple websites, used to optimize the relevance of advertisements.',
                                domain: '.tiktok.com',
                                expiration: '10 days',
                                "provider": {
                                    title: 'Tiktok',
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'muc_ads',
                                purpose: 'This is a cookie set by twitter.com for optimizing ad relevance by collecting visitor navigation data.',
                                domain: '.t.co',
                                expiration: '2 years',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'MUID',
                                purpose: 'Widely used by Microsoft as a unique user ID, it synchronizes across Microsoft domains for tracking.',
                                domain: '.bing.com',
                                expiration: 'a year',
                                "provider": {
                                    title: "Microsoft",
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'personalization_id',
                                purpose: 'Carries information about user interactions with website and advertisements for tracking and targeting.',
                                domain: '.twitter.com',
                                expiration: '120 years',
                                "provider": {
                                    title: 'Twitter',
                                    sitelink: 'https://policies.google.com/privacy'
                                },
                                type: 'Cookie'
                            },
                            {
                                name: 'sp_landing',
                                purpose: 'Used to implement Spotify audio content and record user interaction, serving statistics and marketing purposes.',
                                domain: '.spotify.com',
                                expiration: 'a day',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'sp_t',
                                purpose: 'Used to implement Spotify audio content and record user interaction, serving statistics and marketing purposes.',
                                domain: '.spotify.com',
                                expiration: 'a year',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'ttwid',
                                purpose: 'This cookie is used by TikTok for tracking the use of embedded services.',
                                domain: '.tiktok.com',
                                expiration: 'a year',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'VISITOR_PRIVACY_METADATA',
                                purpose: 'Tracks and enriches user privacy settings on YouTube.',
                                domain: '.youtube.com',
                                expiration: '6 months',
                                provider: 'YouTube (Google LLC)',
                                type: 'Cookie'
                            },
                            {
                                name: 'bid',
                                purpose: 'This cookie has not yet been given a description.',
                                domain: '.consentag.eu',
                                expiration: '5 months',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'cid_c7d053c8f1794c558d2450b1590a47cb',
                                purpose: 'This cookie has not yet been given a description.',
                                domain: '.ctnsnet.com',
                                expiration: 'a year',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: 'TAoQCJWQ_bkBEL6awr8D,4402039883940',
                                purpose: 'This cookie has not yet been given a description.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'TAoQCJWQ_bkBEL6awr8D,4402039883940_expiresAt',
                                purpose: 'This cookie has not yet been given a description.',
                                domain: 'sopro.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            }
                        ],
                    },
                    {
                        "headers": ["Name", "Purpose", "Domain", "Expiration time", "Provider", "Type"],
                        "rows": [
                            {
                                "name": "_fbp",
                                "purpose": "This cookie is used by Facebook for advertising purposes and conversion tracking.",
                                "domain": ".sopro.io",
                                "expiration": "3 months",
                                "provider": {
                                    "title": "Meta Inc.",
                                    "sitelink": "https://www.facebook.com/privacy/center/"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_gcl_au",
                                "purpose": "This cookie is set by Google Adsense for experiments with 'cross-website' advertising.",
                                "domain": ".sopro.io",
                                "expiration": "3 months",
                                "provider": {
                                    "title": "Google LLC",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_MarketMapper",
                                "purpose": "This cookie is set when a user submits a Market Mapper form, containing a unique ID relating to the form submitted. It is used for website customization.",
                                "domain": "sopro.io",
                                "expiration": "a year",
                                "provider": {
                                    "title": "Prospectiv",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_obid_visit",
                                "purpose": "This is used to identify a site session across multiple pages and is not linked to any personal data.",
                                "domain": "sopro.io",
                                "expiration": "4 hours",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_uetsid",
                                "purpose": "Contains the session ID for a unique session on the site, used by Microsoft Advertising.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    "title": "Microsoft",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "_uetsid",
                                "purpose": "This cookie is used by Bing to determine what ads should be shown that may be relevant to the end user perusing the site.",
                                "domain": ".sopro.io",
                                "expiration": "a day",
                                "provider": {
                                    "title": "Bing (Microsoft)",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_uetsid_exp",
                                "purpose": "Contains the expiry-date for the local storage and cookie with the corresponding name.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    "title": "Microsoft",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "_uetvid",
                                "purpose": "UET assigns this unique, anonymized visitor ID, representing a unique visitor. UET stores this data in a first-party cookie and local storage.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    "title": "Microsoft",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "_uetvid",
                                "purpose": "This cookie is used by Bing to determine which ads are served that may be relevant to the end user browsing the site.",
                                "domain": ".sopro.io",
                                "expiration": "a year",
                                "provider": {
                                    "title": "Bing (Microsoft)",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "_uetvid_exp",
                                "purpose": "Contains the expiry-date for the cookie or local storage item with corresponding name.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": {
                                    "title": "Microsoft",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Local storage"
                            },
                            {
                                "name": "bcookie",
                                "purpose": "Cookie from LinkedIn used by share buttons and advertising tags.",
                                "domain": ".linkedin.com",
                                "expiration": "a year",
                                "provider": "LinkedIn",
                                "type": "Cookie"
                            },
                            {
                                "name": "IDE",
                                "purpose": "Cookie from Double Click (Google) which helps analyze and optimize advertising campaigns.",
                                "domain": ".doubleclick.net",
                                "expiration": "a year",
                                "provider": {
                                    "title": "DoubleClick (Google)",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "lastExternalReferrer",
                                "purpose": "This item is used to determine the origin of your visit.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "lastExternalReferrerTime",
                                "purpose": "This item is used for visitor evaluation.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "msToken",
                                "purpose": "This cookie collects information on user behavior on multiple websites, used to optimize the relevance of advertisements.",
                                "domain": ".tiktok.com",
                                "expiration": "10 days",
                                "provider": {
                                    "title": "Tiktok",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "muc_ads",
                                "purpose": "This is a cookie set by twitter.com for optimizing ad relevance by collecting visitor navigation data.",
                                "domain": ".t.co",
                                "expiration": "2 years",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "MUID",
                                "purpose": "Widely used by Microsoft as a unique user ID, it synchronizes across Microsoft domains for tracking.",
                                "domain": ".bing.com",
                                "expiration": "a year",
                                "provider": {
                                    "title": "Microsoft",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "personalization_id",
                                "purpose": "Carries information about user interactions with website and advertisements for tracking and targeting.",
                                "domain": ".twitter.com",
                                "expiration": "120 years",
                                "provider": {
                                    "title": "Twitter",
                                    "sitelink": "https://policies.google.com/privacy"
                                },
                                "type": "Cookie"
                            },
                            {
                                "name": "sp_landing",
                                "purpose": "Used to implement Spotify audio content and record user interaction, serving statistics and marketing purposes.",
                                "domain": ".spotify.com",
                                "expiration": "a day",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "sp_t",
                                "purpose": "Used to implement Spotify audio content and record user interaction, serving statistics and marketing purposes.",
                                "domain": ".spotify.com",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "ttwid",
                                "purpose": "This cookie is used by TikTok for tracking the use of embedded services.",
                                "domain": ".tiktok.com",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "VISITOR_PRIVACY_METADATA",
                                "purpose": "Tracks and enriches user privacy settings on YouTube.",
                                "domain": ".youtube.com",
                                "expiration": "6 months",
                                "provider": "YouTube (Google LLC)",
                                "type": "Cookie"
                            },
                            {
                                "name": "bid",
                                "purpose": "This cookie has not yet been given a description.",
                                "domain": ".consentag.eu",
                                "expiration": "5 months",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "cid_c7d053c8f1794c558d2450b1590a47cb",
                                "purpose": "This cookie has not yet been given a description.",
                                "domain": ".ctnsnet.com",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "TAoQCJWQ_bkBEL6awr8D,4402039883940",
                                "purpose": "This cookie has not yet been given a description.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "TAoQCJWQ_bkBEL6awr8D,4402039883940_expiresAt",
                                "purpose": "This cookie has not yet been given a description.",
                                "domain": "sopro.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            }
                        ]
                    },
                ],
            },
            {
                id: 'how-to-manage-cookies',
                title: 'Managing cookies',
                content: [
                    {
                        id: 5.1,
                        textContent: `Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies on most mainstream browsers via these links:`,
                        link_content: [
                            'https://support.google.com/chrome/answer/95647?hl=en (Chrome);',
                            'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences (Firefox);',
                            'http://www.opera.com/help/tutorials/security/cookies/ (Opera);',
                            'https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies (Internet Explorer);',
                            'https://support.apple.com/kb/PH21411 (Safari)',
                            'https://support.apple.com/kb/PH21411 (Safari); and',
                        ]
                    },
                    {
                        id: 5.2,
                        textContent: `Blocking all cookies will have a negative impact upon the usability of many websites.`
                    },
                    {
                        id: 5.3,
                        textContent: `If you block cookies, you will not be able to use all the features on our website.`
                    }
                ]
            },
        ],
    },
    privacy_policy: {
        section: [
            {
                title: 'Who are we?',
                textContent: `We are Prospect Global Ltd – trading as Sopro.io. We are a tech company providing digital marketing services to our global client base. Our processing is based primarily on the use of publicly available data to identify sales prospects for our clients. As such, your privacy is important to us, we take our responsibilities seriously and will always respond quickly and courteously to any request. You can contact us using the details below:`,
                contactContent: {
                    email: 'prospectiv@example.com',
                    telephone: '+44 20 7004 7004',
                    address: 'Sopro, 27-29 North Street, Brighton, BN1 1EB',
                    telephoneTwo: '+44 20 7004 7004'
                }
            },
            {
                title:'Our GDPR Policy',
                content: [
                    {
                        id: 1,
                        textContent: `We are committed to safeguarding the privacy and accuracy of the personal data of our website visitors, service users and email recipients.`,
                    },{
                        id: 2,
                        textContent:`This policy applies where we are acting as a Controller with respect to the personal data of our website visitors, service users, email recipients and personal data collected from public sources; in other words, where we determine the purposes and means of the processing of that personal data.`
                    }
                ]
            }
        ]
    }
}
export {
    HeroSectionTextContent,
    whyProspectiveTextContent,
    WhatWeDoTextContent,
    HowItWorkTextContent,
    lifeAtProspectivTextContent,
    aboutUsPageTextContent,
    carrerPageTextContent,
    pricingPageTextContent,
    legalPageContent
}
