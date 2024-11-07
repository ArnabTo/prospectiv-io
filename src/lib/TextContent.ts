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
        paragraph: `We're the people behind the prospects. For all the clever tech, what makes the prospectiv service stand out is the people. As we like to tell our clients, we’re a team, not a tool.`,
    },
    'mettingPeople': {
        heading: 'Meet Our People',
        paragraph: `We bring together vast knowledge and expertise, while also making prospectiv a place to grow, learn, achieve, and have fun.`
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
            paragraph: ` Our values permeate prospectiv through our behaviours, both as people and across our business. They influence the way we hire new people, develop employees, review performance, evaluate reward and achieve promotion.`
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
            paragraph: `prospectiv clients get a dedicated two person team that work tirelessly to improve campaign performance. But those two are the tip of the iceberg, with an army of circa 300 experts backing them up.`
        },
        content: [
            {
                heading: 'Customer Success',
                paragraph: `The face of prospectiv, and your go to trusted advisors. Our Customer Success team are proactive, innovative, and creative. And they'll go the extra mile to build the campaign you deserve.`,
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
            paragraph: `Every member of our team is focused on delivering success for our clients. And while we can't introduce every prospectiv employee, you can meet our leadership team here.`
        },
        contents: [
            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
            },

            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
            },

            {
                name: 'John Doe',
                position: 'CEO',
                email: 'uR4Uv@example.com',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                                                When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
            },


        ],
        // contentOne: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
        // },
        // contentTwo: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
        // },
        // contentThree: {
        //     name: 'John Doe',
        //         position: 'CEO',
        //             email: 'uR4Uv@example.com',
        //                 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
        //                     textContent: ` Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
        //                                         When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at prospectiv: he wrote the first line of code and now manages a team of over 30 engineers.`
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
                        We work hard to make prospectiv a great place to work, and reward everyone who joins us.`,
    },
    exploreus: {
        heading: 'Explore About Us',
        content: [
            {
                link: '/life-at-prospectiv',
                image: 'https://prospectiv.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
                title: 'Carrers',
                description: `Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →`
            },
            {
                link: '/life-at-prospectiv',
                image: 'https://prospectiv.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
                title: 'Carrers',
                description: `Once people join Prospectiv, they don't tend to leave. Our team turnover rate is 8%, compared to the UK average of 15%. →`
            },
            {
                link: '/life-at-prospectiv',
                image: 'https://prospectiv.io/wp-content/uploads/2023/07company/careers_bottom.jpg',
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
                        We work hard to make prospectiv a great place to work, and reward everyone who joins us.`,
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
                        content: `In this policy, “we”, “us” and “our” refer to Prospect Global Ltd – trading as prospectiv.`
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
                                "domain": ".prospectiv.io",
                                "expiration": "Session",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__tmbid",
                                "purpose": "This cookie is associated with Crimtan Holding Limited for the purpose of consented relevant advertising.",
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "PHPSESSID",
                                "purpose": "Cookie generated by applications based on the PHP language. This is a general purpose identifier used to maintain user session variables.",
                                "domain": "prospectiv.io",
                                "expiration": "Session",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hssc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".prospectiv.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hstc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".prospectiv.io",
                                "expiration": "6 months",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics.",
                                "domain": ".prospectiv.io",
                                "expiration": "2 years",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga_********",
                                "purpose": "This cookie stores a unique ID for a website visitor and tracks how the visitor uses the website. The data is used for statistics.",
                                "domain": ".prospectiv.io",
                                "expiration": "2 years",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_gat_UA-****",
                                "purpose": "The _gat_UA cookie is a variation of the Google Analytics _gat cookie. It is used to limit the collection of data on high-traffic websites.",
                                "domain": ".prospectiv.io",
                                "expiration": "a few seconds",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_gid",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics.",
                                "domain": ".prospectiv.io",
                                "expiration": "a day",
                                "provider": "Google LLC",
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSession_******",
                                "purpose": "A cookie that holds the current session data. This ensures that subsequent requests within the session window will be attributed to the same Hotjar session.",
                                "domain": ".prospectiv.io",
                                "expiration": "29 minutes",
                                "provider": "Hotjar Ltd",
                                "type": "Cookie"
                            },
                            {
                                "name": "_hjSessionUser_******",
                                "purpose": "Hotjar cookie that is set when a user first lands on a page with the Hotjar script. It is used to persist the Hotjar User ID.",
                                "domain": ".prospectiv.io",
                                "expiration": "a year",
                                "provider": "Hotjar Ltd",
                                "type": "Cookie"
                            },
                            {
                                "name": "_obid",
                                "purpose": "This cookie is set when a user lands on the site, containing a unique ID relating to the email that was clicked on.",
                                "domain": "prospectiv.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_id.***.*****",
                                "purpose": "Matomo / Piwik cookie, used to store a few details about the user such as the unique visitor ID.",
                                "domain": "prospectiv.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_ses.***.**",
                                "purpose": "This cookie is used to record visitors' behavior on the website. It is used to collect statistics about website usage.",
                                "domain": "prospectiv.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "hubspotutk",
                                "purpose": "This cookie is used to keep track of a visitor's identity. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.",
                                "domain": ".prospectiv.io",
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
                                domain: 'prospectiv.io',
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
                                domain: 'prospectiv.io',
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
                                "domain": ".prospectiv.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "__hstc",
                                "purpose": "This cookie name is linked to websites that are built on the HubSpot platform. This name is reported by them as being used for website analysis.",
                                "domain": ".prospectiv.io",
                                "expiration": "6 months",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_ga",
                                "purpose": "Registers a unique ID for a website visitor to track how the visitor uses the website. The data is used for statistics. Data transfer to third countries: USA. Google LLC. is certified under the Data Privacy Framework, indicating that your rights as a data subject can be guaranteed.",
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": "prospectiv.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_id.***.*****",
                                "purpose": "Matomo / Piwik cookie, used to store a few details about the user such as the unique visitor ID.",
                                "domain": ".prospectiv.io",
                                "expiration": "a year",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_pk_ses.***.**",
                                "purpose": "This cookie is used to record visitors' behavior on the website. It is used to collect statistics about website usage, such as the time of the last visit to the website. The cookie does not contain any personal data and is used solely for website analysis.",
                                "domain": ".prospectiv.io",
                                "expiration": "29 minutes",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "hubspotutk",
                                "purpose": "This cookie name is associated with websites built on the HubSpot platform. This cookie is used to keep track of a visitor's identity. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.",
                                "domain": ".prospectiv.io",
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
                                domain: '.prospectiv.io',
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
                                domain: '.prospectiv.io',
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
                                domain: 'prospectiv.io',
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
                                domain: 'prospectiv.io',
                                expiration: '4 hours',
                                provider: '',
                                type: 'Cookie'
                            },
                            {
                                name: '_uetsid',
                                purpose: 'Contains the session ID for a unique session on the site, used by Microsoft Advertising.',
                                domain: 'prospectiv.io',
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
                                domain: '.prospectiv.io',
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
                                domain: 'prospectiv.io',
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
                                domain: 'prospectiv.io',
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
                                domain: '.prospectiv.io',
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
                                domain: 'prospectiv.io',
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
                                domain: 'prospectiv.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'lastExternalReferrerTime',
                                purpose: 'This item is used for visitor evaluation.',
                                domain: 'prospectiv.io',
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
                                domain: 'prospectiv.io',
                                expiration: 'Persistent',
                                provider: '',
                                type: 'Local storage'
                            },
                            {
                                name: 'TAoQCJWQ_bkBEL6awr8D,4402039883940_expiresAt',
                                purpose: 'This cookie has not yet been given a description.',
                                domain: 'prospectiv.io',
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
                                "domain": ".prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
                                "expiration": "4 hours",
                                "provider": "",
                                "type": "Cookie"
                            },
                            {
                                "name": "_uetsid",
                                "purpose": "Contains the session ID for a unique session on the site, used by Microsoft Advertising.",
                                "domain": "prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": ".prospectiv.io",
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
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "lastExternalReferrerTime",
                                "purpose": "This item is used for visitor evaluation.",
                                "domain": "prospectiv.io",
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
                                "domain": "prospectiv.io",
                                "expiration": "Persistent",
                                "provider": "",
                                "type": "Local storage"
                            },
                            {
                                "name": "TAoQCJWQ_bkBEL6awr8D,4402039883940_expiresAt",
                                "purpose": "This cookie has not yet been given a description.",
                                "domain": "prospectiv.io",
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
        update: {
            textContent: `This policy was last updated on 1 March 2022.`
        },
        section: [
            {
                id: 'who-are-we',
                title: 'Who are we?',
                textContent: `We are Prospect Global Ltd – trading as prospectiv.io. We are a tech company providing digital marketing services to our global client base. Our processing is based primarily on the use of publicly available data to identify sales prospects for our clients. As such, your privacy is important to us, we take our responsibilities seriously and will always respond quickly and courteously to any request. You can contact us using the details below:`,
                contactContent: {
                    email: 'prospectiv@example.com',
                    telephone: '+44 20 7004 7004',
                    address: 'prospectiv, 27-29 North Street, Brighton, BN1 1EB',
                    telephoneTwo: '+44 20 7004 7004'
                }
            },
            {
                id: 'our-gdpr-policy',
                title: 'Our GDPR Policy',
                contents: [
                    {
                        id: 2.1,
                        textContent: `We are committed to safeguarding the privacy and accuracy of the personal data of our website visitors, service users and email recipients.`,
                    }, {
                        id: 2.2,
                        textContent: `This policy applies where we are acting as a Controller with respect to the personal data of our website visitors, service users, email recipients and personal data collected from public sources; in other words, where we determine the purposes and means of the processing of that personal data.`
                    }, {
                        id: 2.3,
                        textContent: `This policy also applies where we determine the purpose and means of the processing jointly with our clients and other companies, or where we are acting as a Processor, working on behalf of our clients to process data as required by them. In this policy, “We”, “Us” and “Our” refer to Prospect Global Ltd – trading as prospectiv.`
                    }, {
                        id: 2.4,
                        textContent: `Any reference to a Data Subject means a natural person whose personal data is processed by us as a Data Controller, Joint Controller or as a Data Processor, in other words, you.`
                    }, {
                        id: 2.5,
                        textContent: `Any reference to the GDPR applies to both the UK GDPR and EU GDPR. Likewise, any reference to EU countries will also apply to the UK. This will remain the case so long as the UK is subject to an adequacy decision by the EU. Should there be a conflict between the two, the version that grants data subjects the greatest protection will apply.`
                    }
                ]
            },
            {
                id: 'how-we-use-your-personal-data',
                title: 'How We use Your personal data?',
                textcontent: `We want to be clear with you about how we use your data, so in this section we talk about the general categories of personal data that we may process and, in the case of personal data that we did not obtain directly from you, we’ll tell you where we got your data and the purposes for which we may process your data; finally, and very importantly, we’ll explain the legal bases of the processing which applies to us and you.`,
                contents: [
                    {
                        id: 3.1,
                        title: 'Usage Data',
                        textContent: `We may process data about your use of our website and services (“Usage Data”). The Usage Data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the Usage Data is Google Analytics as well as our analytics tracking system. This Usage Data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website and services, and tailoring any communication with you. We, of course, use this data to help us run our business as well as we can.`,
                    },
                    {
                        id: 3.2,
                        title: 'Account Data',
                        textContent: `We may process your Account Data (“Account Data”). The Account Data may include your name, email address, company information, and other contact and other related information we may collect about you. The source of the Account Data is generally you or your employer. The Account Data may be processed for the purposes of providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is the performance of a contract between you and us [or your employer] and/or taking steps, at your request, to enter into such a contract. In some cases, we may also rely on Legitimate Interest as our lawful basis where we use your data for marketing purposes or in order to operate our business and improve our services.`
                    },
                    {
                        id: 3.3,
                        title: 'Service Data',
                        textContent: `We may process your personal data that are provided in the course of the use of our services (“Service Data”). The Service Data may include name, email address, telephone number, and other related information. The source of the Service Data is you or your employer. The Service Data may be processed for the purposes of providing our services and communicating with you. The legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.`
                    },
                    {
                        id: 3.4,
                        title: 'Enquiry Data',
                        textContent: `We may process information contained in any enquiry you submit to us regarding goods and/or services (“Enquiry Data”). The Enquiry Data may be processed for the purposes of us offering, marketing and selling relevant goods and/or services to you. The legal basis for this processing is consent, which may be withdrawn by you at any time by contacting us, or contract and/or legitimate interest where your requests represent an invitation to send you information about our services.`
                    },
                    {
                        id: 3.5,
                        title: 'Notification Data',
                        textContent: `We may process information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters (“Notification Data”). The Notification Data may be processed for the purposes of sending you the relevant notifications and/or newsletters. The legal basis for this processing is consent, which may be withdrawn by you at any time by contacting us.`
                    },
                    {
                        id: 3.6,
                        title: 'Correspondence Data',
                        textContent: `We may process information contained in or relating to any communication that you send to us (“Correspondence Data”). The Correspondence Data may include your name, email address and the communication content and metadata associated with the communication. Our website will generate the metadata associated with communications made using the website contact forms. The Correspondence Data may be processed for the purposes of communicating with you and record-keeping. The legal basis for this processing is our legitimate interests, namely the proper administration of our website, business and communications with users.`
                    },
                    {
                        id: 3.7,
                        title: 'Public Data',
                        textContent: `We may process information found on public social networking profiles and other from other publicly available sources (“Public Data”). This data may include name, employment information, career information. education details, job title, and other relevant information. Public Data may be processed for the purposes of offering, marketing and selling relevant goods and/or services to you and/or your employer. The legal basis for this processing is our legitimate interests, namely the administration of our business, to develop our business, and in order for us to make a profit.`
                    },
                    {
                        id: 3.8,
                        title: 'Legal Claims Data',
                        textContent: `We may process any of your personal data identified in this policy where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure (“Legal Claims Data”). The legal basis for this processing is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights and the legal rights of others.`
                    },
                    {
                        id: 3.9,
                        title: 'Personal Use Data',
                        textContent: `We may process any of your personal data identified in this policy where necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional advice (“Professional Use Data”). The legal basis for processing Professional Use Data is our legitimate interests, namely the proper protection of our business against risks.`
                    },
                    {
                        id: 3.10,
                        title: 'Third Party Data',
                        textContent: `We may process any of your personal data where we purchase this data from a third party. This includes name, address, email, phone number, other contact details, employment details etc.. Where we purchase data, we will ensure that the supplier has the appropriate lawful basis in place and is GDPR compliant. We will also ensure that we have appropriate evidence of consent where necessary, or have an alternative appropriate lawful basis and GDPR compliance processes in place to allow us to use your data.`
                    }
                ],
                endTextCotent: `In addition to the specific purposes for which we may process your personal data set out in this Section, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.`,
            },
            {
                title: 'Our Legitimate Interest',
                id: 'our-legitimate-interest',
                content: {
                    _id: 4.1,
                    textContent: `Our lawful bases for processing include our Legitimate Interest to process your data. In this regard, we have carefully considered your rights and expectations of privacy and our rights, alongside the rights of our clients, to run our business. We have considered the impact on your privacy as a result of our processing of your data and completed a balancing assessment to consider the impact on the data subjects involved and also completed a Data Protection Impact Assessment to ensure we take appropriate precautions with all data. These Legitimate Interest and Data Protection Impact Assessments helped us ensure that the rights of the data subjects are not unduly impacted and that processing of data in this way is acceptable.`
                }
            },
            {
                title: 'Source of your Personal Data',
                id: 'source-of-your-personal-data',
                content: {
                    _id: 5.1,
                    textContent: `We use a range of sources to provide our services, including public domain and social media sources. Our approach is based on carefully targeting business contacts with offers that we believe they will be interested in. We carefully select representatives from businesses and then only send relevant offers. Where we source data from other third parties, we will ensure these companies are GDPR compliant and that your rights are at all times protected.`
                }
            },
            {
                title: 'Data sharing',
                id: 'data-sharing',
                contents: [
                    {
                        id: 6.1,
                        textContent: `We don’t routinely sell or share your data with other companies other than in order to provide our services to them and to meet our obligations as a company. prospectiv is a prospecting and lead generation company, where we have collected your data in order to provide our service to our clients, we share your data only with that specific client. Where this is the case, we will respect your right to be informed and ensure that you are given the option to opt-out of marketing at first contact and in all subsequent communications. The privacy policy of our client will include their contact details to ensure you are able to exercise your rights at any time.`
                    },
                    {
                        id: 6.2,
                        textContent: `In addition, we may disclose your personal data to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries, together known as “Group Companies”) insofar as reasonably necessary for the purposes, and on the legal bases, set out in this policy.`
                    },
                    {
                        id: 6.3,
                        textContent: `We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedures.`
                    },
                    {
                        id: 6.4,
                        textContent: `We may also disclose your personal data to our suppliers, partners and other carefully managed third parties as required to operate our company and provide our services. Where this is the case, we will always ensure appropriate technical and administrative controls are in place.`
                    },
                    {
                        id: 6.5,
                        textContent: `As you would expect, in addition to the specific disclosures of personal data set out above, we may disclose your personal data where such disclosure is necessary for compliance with a binding legal obligation.`
                    }
                ]
            },
            {
                title: 'International transfers of your personal data',
                id: 'international-transfers-of-your-personal-data',
                contents: [
                    {
                        id: 7.1,
                        textContent: `In this section we provide information about the circumstances in which your personal data may be transferred to countries outside the European Economic Area (“EEA”). We, and our other Group Companies, have offices and facilities in the Republic of North Macedonia where your personal data may be processed. Transfers to the Republic of North Macedonia will be protected by appropriate technical and administrative safeguards included in our Terms of Contract for data processing agreed between us and our Republic of North Macedonia counterparts, which of course includes the standard clauses required under GDPR.`
                    },
                    {
                        id: 7.2,
                        textContent: `Remember that personal data that you submit for publication through our website or services may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.`
                    },
                    {
                        id: 7.3,
                        textContent: `Our website contains links to external websites run by other organisations. This privacy policy applies only to our websites not those external websites that we link to, who will have their own privacy policies. We are not responsible for these external websites and their privacy policies and practices. In addition, if you linked to our website from an external site, we cannot be responsible for the privacy policies and practices of the owners and operators of that external website and recommend that you check the privacy policy of that external site.`
                    }
                ]
            },
            {
                title: 'Retaining and deleting your personal data',
                id: 'retaining-and-deleting-your-personal-data',
                contents: [
                    {
                        id: 8.1,
                        textContent: `This section sets out our data retention policies and procedure, which are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal data. Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.`
                    },
                    {
                        id: 8.2,
                        textContent: `Notwithstanding the other provisions of this section, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.`
                    }
                ]
            },
            {
                title: 'Cookies',
                id: 'cookies',
                content: {
                    _id: 9.1,
                    textContent: `By using our website and agreeing to this policy, you consent to our use of cookies, in accordance with the terms of our cookie policy.`
                }
            },
            {
                title: 'Automated Processing',
                id: 'automated-processing',
                content: {
                    _id: 10.1,
                    textContent: `We may use automated processing and decision making to verify your contact details and to determine whether to contact you as part of a prospecting campaign on behalf of our clients. This decision making is simply used to determine whether the campaign is likely to be of interest to you and to verify your contact details.`
                }
            },
            {
                title: 'The rights of data subjects',
                id: 'the-rights-of-data-subjects',
                contents: [
                    {
                        _id: 11.1,
                        textContent: `In this section we have summarised the rights that you have under data protection law. Some of the rights are complex, and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and gu_ance from the regulatory authorities for a full explanation of these rights.`
                    },
                    {
                        _id: 11.2,
                        textContent: `Your principal rights under data protection law are:`,
                        subContents: [
                            {
                                _id: `11.2.1`,
                                textContent: `The right to be informed`
                            },
                            {
                                _id: `11.2.2`,
                                textContent: `The right to access`
                            },
                            {
                                _id: `11.2.3`,
                                textContent: `The right to rectification`
                            },
                            {
                                _id: `11.2.4`,
                                textContent: `The right to erasure`
                            },
                            {
                                _id: `11.2.5`,
                                textContent: `The right to restrict processing`
                            },
                            {
                                _id: `11.2.6`,
                                textContent: `The right to object to processing`
                            },
                            {
                                _id: `11.2.7`,
                                textContent: `The right to data portability`
                            },
                            {
                                _id: `11.2.8`,
                                textContent: `Rights related to automated decision-making including profiling`
                            },
                            {
                                _id: `11.2.9`,
                                textContent: `The right to complain to a supervisory authority; and`
                            },
                            {
                                _id: `11.2.10`,
                                textContent: `The right to withdraw consent.`
                            },
                        ]
                    },
                    {
                        _id: 11.3,
                        textContent: `The Right to be Informed. This is the right of Data Subjects to know details regarding the processing of their data and how we acquired their data, this information is included in this Privacy Policy.`
                    },
                    {
                        _id: 11.4,
                        textContent: `The Right to Access. You have the right to confirm as to whether or not we process your personal data and, where we do, access to the personal data, together with certain additional information. That additional information includes details of the purposes of the processing, the categories of personal data concerned and the recipients of the personal data. Providing the rights and freedoms of others are not affected, we will supply to you a copy of your personal data upon request and within one month of verification of your identity (we may extend the time within which we must provide the information by a further two months if the request is particularly complex, or if there are numerous requests and we will let you know if this is the case). The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee.`
                    },
                    {
                        _id: 11.5,
                        textContent: `The Right to Rectification. You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed. If the request is accepted by us, the rectification will be completed within one month (may be extended by us by a further two months if complex). We will use all reasonable endeavours to notify any third party with whom we have shared the data of any rectifications made.`
                    },
                    {
                        _id: 11.6,
                        textContent: `The Right to Erasure (also known as the “Right to be Forgotten”). In some circumstances you have the right to the erasure of your personal data without undue delay. However, there are exclusions to the right to erasure. We will use all reasonable endeavours to notify any third party with whom we have shared the data of any actioned erasure requests.`
                    },
                    {
                        _id: 11.7,
                        textContent: `The Right to Restrict Processing. In some circumstances you have the right to restrict the processing of your personal data. Where processing has been restricted, we may continue to store your personal data. However, we will only otherwise process it: with your consent; for the establishment, exercise or defence of legal claims; for the protection of the rights of another natural or legal person; or for reasons of important public interest. We will use all reasonable endeavours to notify any third party with whom we have shared the data of any restriction placed on the processing of your data.`
                    },
                    {
                        _id: 11.8,
                        textContent: `The Right to Object to Processing. You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for certain tasks. If you make such an objection, we will cease to process the personal information unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or if the processing is for the establishment, exercise or defence of legal claims.`
                    },
                    {
                        _id: 11.9,
                        textContent: `The Right to Data Portability. To the extent that the legal basis for our processing of your personal data is:`,
                        subContents: [
                            {
                                _id: "a",
                                textContent: `consent; or`
                            },
                            {
                                _id: "b",
                                textContent: `that the processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract; and`
                            },
                            {
                                _id: "c",
                                textContent: `such processing is carried out by automated means.`
                            },
                        ],
                        endTextContent: `You have the right to receive your personal data from us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others.`
                    },
                    {
                        _id: 11.10,
                        textContent: `Rights related to automated decision-making including profiling. We do not solely use automated decision making (including profiling) when processing your data, automated processing will be used to verify your contact details and determine if the campaign will be of interest to you. You have the right to object to decisions, should they be based purely on automated processing.`
                    },
                    {
                        _id: 11.11,
                        textContent: `Right to Complain. If you consider that our processing of your personal information infringes data protection laws, you should first contact us. If you are dissatisfied with the outcome, you have a legal right to lodge a complaint with a Supervisory Authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement.`
                    },
                ],
            },
            {
                id: 'contacting-us-concerning-the-contents-of-this-privacy-policy',
                title: 'Contacting us concerning the contents of this Privacy Policy',
                contents: [
                    {
                        _id: 12.1,
                        textContent: `If Your query relates to this Privacy Policy or should you wish to exercise one of Your Data Protection Rights as a Data Subject, you can contact us in the following ways:`,
                        subContents: [
                            {
                                _id: "a",
                                textContent: `By post to Our registered office`
                            },
                            {
                                _id: "b",
                                textContent: `prospectiv@example.com`
                            },
                            {
                                _id: "c",
                                textContent: `+44 207 030 3340`
                            }
                        ]
                    },
                    {
                        _id: 12.2,
                        textContent: `If you remain unsatisfied by our response you may complain to the Information Commissioners offices at the following address:`,
                        address: `Information Commissioner’s Office
                       Wycliffe House
                       Water Lane
                           Wilmslow
                     Cheshire
                     SK9 5AF`,
                        website: 'www.ico.org.uk'
                    }
                ]
            },
            {
                title: 'Amendments to this policy',
                id: 'amendments-to-this-policy',
                contents: [
                    {
                        _id: 13.1,
                        textContent: `We may update this policy from time to time by publishing a new version on our website.`
                    },
                    {
                        _id: 13.2,
                        textContent: `You should check this page occasionally to ensure you are happy with any changes to this policy.`
                    },
                    {
                        _id: 13.3,
                        textContent: `We may notify you of changes to this policy by email.`
                    }
                ],
            },

        ]
    },
    terms: {
        endTextContent: `You can contact Prospect Global Ltd. by email on ryan@prospectiv.io.`,
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                contents: [
                    'These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and Prospect Global Ltd., the owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately.',
                    'In these terms and conditions, User or Users means any third party that accesses the Website and is not either (i) employed by Prospect Global Ltd. and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Prospect Global Ltd. and accessing the Website in connection with the provision of such services.',
                    'You must be at least 18 years of age to use this Website. By using the Website and agreeing to these terms and conditions, you represent and warrant that you are at least 18 years of age.'
                ]
            },
            {
                id: 'intellectual-property-and-acceptable-use',
                title: 'Intellectual property and acceptable use',
                ulContents: [
                    {
                        _id: 1,
                        textContent: `All Content included on the Website, unless uploaded by Users, is the property of Prospect Global Ltd., our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users. By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site without the owner’s prior written permission.`
                    },
                    {
                        _id: 2,
                        textContent: `You may, for your own personal, non-commercial use only, do the following:`,
                        subContents: [
                            'retrieve, display and view the Content on a computer screen',
                            'print one copy of the Content'
                        ]
                    },
                    {
                        _id: 3,
                        textContent: `You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the written permission of Prospect Global Ltd..`,
                    }
                ]
            },
            {
                id: 'prohibited-use',
                title: 'Prohibited use',
                textContent: `You may not use the Website for any of the following purposes:`,
                subContents: [
                    `in any way which causes, or may cause, damage to the Website or interferes with any other person’s use or enjoyment of the Website;`,
                    `in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable or in breach of any applicable law, regulation, governmental order;`,
                    `making, transmitting or storing electronic copies of Content protected by copyright without the permission of the owner.`
                ]
            },
            {
                id: 'links-to-other-websites',
                title: 'Links to other websites',
                contents: [
                    `This Website may contain links to other sites. Unless expressly stated, these sites are not under the control of Prospect Global Ltd. or that of our affiliates.`,
                    `We assume no responsibility for the content of such Websites and disclaim liability for any and all forms of loss or damage arising out of the use of them.`,
                    `The inclusion of a link to another site on this Website does not imply any endorsement of the sites themselves or of those in control of them.`
                ]
            },
            {
                id: 'privacy-policy-and-cookies-policy',
                title: 'Privacy Policy and Cookies Policy',
                textContent: `Use of the Website is also governed by our Privacy Policy and Cookies Policy, which are incorporated into these terms and conditions by this reference. To view the Privacy Policy and Cookies Policy, please click on the following:`,
                linkOne: 'https://prospectiv.io/legal/#privacy-policy',
                linkTwo: 'https://prospectiv.io/legal/#cookie-policy'
            },
            {
                id: 'availability-of-the-website-and-disclaimers',
                title: 'Availability of the Website and disclaimers',
                contents: [
                    `Any online facilities, tools, services or information that Prospect Global Ltd. makes available through the Website (the Service) is provided “as is” and on an “as available” basis. We give no warranty that the Service will be free of defects and/or faults. To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality. Prospect Global Ltd. is under no obligation to update information on the Website.`,
                    `Whilst Prospect Global Ltd. uses reasonable endeavours to ensure that the Website is secure and free of errors, viruses and other malware, we give no warranty or guaranty in that regard and all Users take responsibility for their own security, that of their personal details and their computers.`,
                    `Prospect Global Ltd. accepts no liability for any disruption or non-availability of the Website.`,
                    `Prospect Global Ltd. reserves the right to alter, suspend or discontinue any part (or the whole of) the Website including, but not limited to, any products and/or services available. These terms and conditions shall continue to apply to any modified version of the Website unless it is expressly stated otherwise.`
                ]
            },
            {
                id: 'limitation-of-liability',
                title: 'Limitation of liability',
                contents: [
                    {
                        _id: 1,
                        textContent: `Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or your liabilities in any way that is not permitted under applicable law.`
                    },
                    {
                        _id: 2,
                        textContent: `We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.`
                    },
                    {
                        _id: 3,
                        textContent: `To the maximum extent permitted by law, Prospect Global Ltd. accepts no liability for any of the following:`,
                        subContents: [
                            `any business losses, such as loss of profits, income, revenue, anticipated savings, business, contracts, goodwill or commercial opportunities;`,
                            `loss or corruption of any data, database or software;`,
                            `any special, indirect or consequential loss or damage.`
                        ]
                    }
                ]
            },
            {
                id: 'general',
                title: 'General',
                contents: [
                    `You may not transfer any of your rights under these terms and conditions to any other person. We may transfer our rights under these terms and conditions where we reasonably believe your rights will not be affected.`,
                    `These terms and conditions may be varied by us from time to time. Such revised terms will apply to the Website from the date of publication. Users should check the terms and conditions regularly to ensure familiarity with the then current version.`,
                    `These terms and conditions together with the Privacy Policy and Cookies Policy contain the whole agreement between the parties relating to its subject matter and supersede all prior discussions, arrangements or agreements that might have taken place in relation to the terms and conditions.`,
                    `The Contracts (Rights of Third Parties) Act 1999 shall not apply to these terms and conditions and no third party will have any right to enforce or rely on any provision of these terms and conditions.`,
                    `If any court or competent authority finds that any provision of these terms and conditions (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of these terms and conditions will not be affected.`,
                    `Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.`,
                    `This Agreement shall be governed by and interpreted according to the law of England and Wales and all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the English and Welsh courts.`
                ]
            },
            {
                id: "prospect-global-layoutdashboard-details",
                title: "Prospect Global LayoutDashboard. details",
                textContent: `Prospect Global Ltd. is a company incorporated in England and Wales with registered number 09648733 whose registered address is 33 Wrotham Road,, Borough Green,, Borough Green, Sevenoaks,, Kent, TN15 8DD and it operates the website`,
                websiteUrl: 'https://prospectiv.io/',
                textContentPart: `. The registered VAT number is GB234026052.`
            }
        ]
    },
    gdpr_statement: {
        title: 'Prospectiv GDPR Compliance Statement',
        textContent: `This statement sets out the operating procedures prospectiv undertakes to ensure GDPR best practice is observed to the greatest extent possible, at all times.`,
        sections: [
            {
                id: 'what-is-gdpr',
                title: 'What is GDPR?',
                contents: [
                    `The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection, storage, and processing of personal information from individuals who live in the European Union (EU).`,
                    `The Information Commissioner’s Office is the UK regulator dealing with the Data Protection Act 2018 and the General Data Protection Regulation and the Privacy and Electronic Communications (EC Directive) Regulations 2003 across the UK.`,
                    `The ICO are like the data protection police and we need to make sure we always keep on their good side. Our determination to be 100% GDPR and PECR compliance will do exactly that!`,
                    `It is important to take GDPR compliance very seriously, since the penalties for non-compliance are punitive and designed to be painful. You definitely don’t want to be on the receiving end of an ICO investigation or enforcement notice!`
                ]
            },
            {
                id: 'prospectivs-gdpr-compliance',
                title: 'prospectiv and GDPR compliance',
                textContent: `In addition to appointing a compliance officer to oversee our adherence to the rules, prospectiv have engaged 3rd party compliance expertise to audit and advise on best practice. This investment enables us to assure clients that GDPR best practices are strictly observed wherever possible, at all times.`
            },
            {
                id: 'prospectivs-relationship-with-you',
                title: 'prospectiv’s relationship with you',
                textContent: `To put this in the language of GDPR and the ICO:`,
                textUlContents: [
                    `We are Joint Controllers. Yes – Joint Controllers. Even though, as a service provider, we are essentially working for you, it is important to recognise that we are both responsible for deciding who to target, what data to collect, how the data is processed, what messages we send them and how their data will be collected, processed, and stored. This decision is pretty fundamental to how we operate so if you have any questions let’s talk!`,
                    `Just to make all our lives easier we have incorporated a comprehensive Data Sharing Agreement within prospectiv’s standard Terms of Service. This sets out how we work together as Joint Controllers and how we support each other if we ever receive a GDPR request.`
                ]
            },
            {
                id: 'is-prospectivs-marketing-activity-compliant',
                title: `Is prospectiv’s marketing activity compliant?`,
                textContent: `Let’s look at this carefully. prospectiv’s services are designed and offered solely to help businesses promote to other businesses. I.e. B2B marketing only. In which case PECR allows email marketing provided material is relevant and we and allow the recipient to opt-out of future emails. In this respect prospectiv is naturally compliant. Now for GDPR, GDPR always applies and actually applies to all aspects of collection, storage, and processing of data. prospectiv has been designed to be compliant and has established technical and operational systems to make sure this is the case. For example, before launching new client activity, prospectiv conducts an in-depth assessment to establish if the product or service, combined with the proposed targeting, meets the criteria for GDPR and PECR compliant business to business (B2B) marketing. A key part of this assessment is called the Legitimate Interest Assessment (LIA), we have completed a LIA for us and also a standard LIA for each of our clients. We have also created a standard Privacy Policy update for client use as needed, this includes all the relevant clauses you need plus references to prospectiv to make everything clear to the data subject – just let us know if you need a copy of any of these.`,
                textContentHeadline: `Want to know more about how Legitimate Interest applies?`,
                textContents: [
                    `If prospectiv determines that your planned B2B prospecting activity does not meet the criteria for Legitimate Interests within the scope of GDPR or if your approach would breach some other part of the regulations [including PECR] then we cannot support the activity within any regions subject to GDPR.`,
                    `In the context of our Services, Legitimate Interest is the relevant lawful basis for processing as defined in GDPR. GDPR sets out a number of permissible circumstances (or categories) under which Personally Identifiable Information (PII) can be stored and processed, the most appropriate category in the case of most B2B marketing is Legitimate Interests. This link explains the Legitimate Interests basis for storing and processing PII: https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/legitimate-interests/ To ensure client activity falls into this category, prior to engaging, we will carry out a full Legitimate Interests Assessment (LIA) with each new client. Essentially the LIA is a questionnaire containing a series of questions about your scenario. There are 3 areas that need to be satisfied for Legitimate Interests to be used as a basis for processing PII:`
                ],
                textContentUl: [
                    `Identify a legitimate interest – The legitimate interest can be your own interests or the interests of third parties. They can include commercial interests, individual interests or broader societal benefits. The data processing is generally in your interests – whether it be to increase market share, increase brand awareness, or engage business leaders.`,
                    `Show that the processing is necessary to achieve it – Can the same result be achieved differently? Core to the prospectiv service is the efficiency and constant drive to be the most cost-effective sales channel which we believe cannot be replicated using other methods.`,
                    `Balance it against the individual’s interests, rights and freedoms – Would the individual expect their data to be used in this way? Would an individual who lists publicly their role within a company expect to be contacted about services that may help that company or their department within the company? No data processing may replace or infringe the individuals interests or cause unjustified harm`
                ]
            },
            {
                id: 'lia-failures',
                title: 'LIA Failures',
                textContent: `If Sopro determines that your planned B2B prospecting activity does not meet the criteria for Legitimate Interests within the scope of GDPR or if your approach would breach some other part of the regulations [including PECR] then we cannot support the activity within any regions subject to GDPR.`

            },
            {
                id: 'rights-of-individuals',
                title: 'Rights of Individuals',
                textContents: [
                    `Privacy Policy – All messages sent will contain a link to a privacy policy that explains to the user exactly what their rights are as well as the type of data that is held about them and by who. prospectiv will provide a template privacy policy or review your existing one to ensure it meets the required standard. A link to our Privacy Policy which is based upon this template is here:`,
                    `https://prospectiv.io/privacy-policy/`,
                    `This standard privacy link would typically be contained in the email signature of any outbound messaging, in the case of messaging as part of client campaign activity, the privacy link will be that of our client’s own privacy policy.`,

                    `Opting Out & Exclusion Lists – All recipients are able to opt out easily to prevent further email communication being received. All replies to prospecting emails are logged and those prospects are added to your campaign exclusion list within 24 hours. prospectiv allows import of existing exclusion lists in advance of campaign activity. Exclusions can be submitted in the form of individual email addresses or full domains and will prevent communications being issued to those email addresses or domains listed.`,

                    `Subject Access Requests – All individuals have the right to request a copy of all data you hold on them. To support this data subjects can email any SAR requests to`,
                    `dpo@prospectiv.io`,
                    `and we will return this data within 72 hours.`,

                    `Right to be Forgotten – All individuals have the right to have some or all of their data removed (to be ‘forgotten’) at any time.. A conflict does arise in removing or forgetting an email address whilst at the same time keeping this address on an exclusion list to prevent future mailings. Where we have removed data, we will move the email address to a separate exclusion list, encrypted using a one-way hashing algorithm (SHA1), ensuring we are able to prevent any future messages being sent to the customer whilst continuing to honour their right to be forgotten.`
                ],
            },
            {
                id: 'pecr-and-sending-of-b2b-messages',
                title: 'PECR and sending of B2B messages',
                textContent: `Whilst GDPR controls the storage and processing of personal data in the UK, sending messages is regulated under the Privacy and Electronic communications Regulations (PECR). This is very clear as to the requirements on business communication: “You can email or text any corporate body (a company, Scottish partnership, limited liability partnership or government body). However, it is good practice – and good business sense – to keep a ‘do not email or text’ list of any businesses that object or opt out and screen any new marketing lists against that.” https://ico.org.uk/for-organisations/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/`
            },
            {
                id: 'proepective-employees',
                title: 'prospectiv Employees',
                textContent: `All prospectiv employees undergo GDPR, PECR and general compliance training, this covers the GDPR rule set in detail, the relevance and impact of those rules on prospectiv and our clients, and the steps we take to ensure best practice is observed at all times. We also make clear the consequences (I.e. penalties) associated with failure to meet the strict GDPR standards.`
            },
            {
                id: 'clientResponsibility',
                title: 'Client responsibility',
                textContent: `Whilst prospectiv continues to take extensive measures to ensure best practice with respect to GDPR and PECR across all client activity, clients should take note that responsibility for compliance vests (in different forms) with each party. prospectiv cannot be abreast of the constantly evolving regulatory frameworks in all countries at all times, as such it is important that you, as the client, have knowledge of your local regulatory climate and ensure your business operates within the relevant regulatory frameworks.`
            },
            {
                id: 'summary',
                title: 'In Summary:',
                textContent: `prospectiv has worked hard to develop a compliant platform providing innovative marketing services and technology for our clients and at all times respecting the rights of the data subjects whose information we collect. Compliance is now part of what we do and ongoing due-diligence is just part of how we operate. Compliance is central to our identity as a business.`
            },
        ]
    },
    usCompliance: {
        title: 'Sopro CAN-SPAM and CCPA compliance statement',
        textContent: `This statement sets out the operating procedures Sopro undertakes to ensure CAN-SPAM and CCPA best practice is observed to the greatest extent possible, at all times.`,
        sections: [
            {
                id: 'what-is-can-spam',
                title: 'What is CAN-SPAM?',
                textContent: `In place since 2003, the primary regulation governing B2B sales in the US is the Controlling the Assault of Non-Solicited Pornography And Marketing Act of 2003 (CAN-SPAM). As email marketing started to gain momentum in the early noughties, this act was introduced to keep things in check.`,
                textContentLink:`Read the rules of CAN-SPAM.`,
                textLink: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'
            },
            {
                id: 'what-is-ccpa',
                title: 'What is CCPA?',
                contents: [
                    `The California Consumer Privacy Act (CCPA) was introduced in 2020, and only applies if you’re sending sales emails to contacts within California. It gives Californians the right to know exactly what personal data companies are collecting about them.`,
                    `Under the CCPA, Californians are able to access – and request the deletion of – any personal data that companies have collected on them.`,
                ],
                textUlContents: {
                    contentOne: {
                        title: `The CCPA applies if you meet the following requirements:`,
                        ulContents: [
                            `Your company has a gross annual revenue of more than $25 million`,
                            `Your company gets more than 50% of its annual revenue from California residents`,
                            `Your company buys, sells, or receives personal information of more than 50,000 California residents`,
                        ],
                    },
                    contentTwo: {
                        title: `Under CCPA, Californian recipients have the right to request:`,
                        ulContents: [
                            `What kinds of personal data your company has collected on them`,
                            `If their personal information has been sold or shared – and who has it (this also means informing people of if you’ve had a breach involving their data)`,
                            `That their personal information is not sold`,
                            `The deletion of the personal information (AKA the right to be forgotten)`,
                            `Not be discriminated against for exercising their rights under CCPA`,
                        ]
                    }
                }
            },
            {
                id: 'sopro-and-can-spam-ccpa-compliance',
                title: 'Sopro and CAN-SPAM/CCPA compliance',
                textContent: `In addition to appointing a compliance officer to oversee our adherence to the rules, Sopro has engaged 3rd party compliance expertise to audit and advise on best practice. This investment enables us to assure clients that CAN-SPAM and CCPA best practices are strictly observed wherever possible, at all times.`
            },
            {
                title: 'Sopro’s relationship with you',
                id: 'sopro-relationship-with-you',
                contents: [
                    `When it comes to CAN-SPAM and the CCPA, we’re joint controllers. Even though we’re working for you as a service provider, it’s important to recognise that we’re both responsible for: deciding who to target, what data to collect, and how that data is collected, processed, and stored.`,
                    `We’ve also incorporated a comprehensive Data Sharing Agreement within Sopro’s standard Terms of Service - just to make everything easier. This agreement sets out how we work together as Joint Controllers and how we support each other if we ever receive a data request.`,
                    `This decision is fundamental to how we operate, so please ask if you have any questions!`
                ]
            },
            {
                id: 'is-sopro-marketing-activity-compliant',
                title: 'Is Sopro’s marketing activity compliant?',
                contents: [
                    `Of course! Compliance is built into everything we do at Sopro - our business wouldn’t be able to operate without it.`,
                    `Sopro’s services are designed and offered solely to help businesses promote to other businesses (i.e. B2B marketing only). We ensure that the email marketing provided material is relevant and allow the recipient to opt out of future emails. Sopro has also established technical and operational systems to ensure all aspects of data collection, storage, and processing are compliant.`,
                    `Before launching new client activity, we conduct an in-depth assessment to establish if the product or service, combined with the proposed targeting, meets the criteria for compliant business to business (B2B) marketing. A key part of this assessment is called the Legitimate Interest Assessment (LIA). We also have a standard privacy policy update for clients to use as needed, which includes all the relevant clauses plus references to Sopro to make everything clear to the data subject. Just let us know if you need a copy of any of these.`
                ]
            },
            {
                id: 'rights-of-individuals',
                title: 'Rights of individuals',
                contents: [
                    {
                        title: 'Rights of individuals',
                        textContent: [
                            `All messages sent will contain a link to a privacy policy that explains to the user exactly what their rights are as well as the type of data that is held about them and by who. Sopro will provide a template privacy policy or review your existing one to ensure it meets the required standard. Here’s a link to our privacy policy:`,
                            `https://sopro.io/privacy-policy/`,
                            `This standard privacy link would typically be contained in the email signature of any outbound messaging, in the case of messaging as part of client campaign activity, the privacy link will be that of our client’s own privacy policy.`
                        ]
                    },
                    {
                        title: 'Opting out and exclusion lists',
                        textContent: `All recipients are able to opt out easily to prevent further email communication being received. All replies to prospecting emails are logged and those prospects are added to your campaign exclusion list within 24 hours. Sopro allows import of existing exclusion lists in advance of campaign activity. Exclusions can be submitted in the form of individual email addresses or full domains and will prevent communications being issued to those email addresses or domains listed.`
                    },
                    {
                        title: 'Subject access requests (SAR)',
                        textContent: `All individuals have the right to request a copy of all data you hold on them. To support this data subjects can email any SAR requests to dpo@sopro.io and we will return this data within 72 hours.`,
                    }, {
                        title: 'Right to be forgotten',
                        textContent: `All individuals have the right to have some or all of their data removed (to be ‘forgotten’) at any time. A conflict does arise in removing or forgetting an email address whilst at the same time keeping this address on an exclusion list to prevent future mailings. Where we have removed data, we will move the email address to a separate exclusion list, encrypted using a one-way hashing algorithm (SHA1), ensuring we are able to prevent any future messages being sent to the customer whilst continuing to honour their right to be forgotten.`
                    }
                ]
            },
            {
                id: 'sopro-employees',
                title:"Sopro employees",
                textContent:`All Sopro employees undergo both general and region-specific compliance training, this covers the CAN-SPAM and CCPA rule set in detail, the relevance and impact of those rules on Sopro and our clients, and the steps we take to ensure best practice is observed at all times. We also make clear the consequences (i.e. penalties) associated with failure to meet the strict standards.`,
            },
            {
                id: 'your-responsibility',
                title:'Your responsibility',
                textContent:`Whilst Sopro continues to take extensive measures to ensure best practice with respect to CAN-SPAM and CCPA across all client activity, clients should take note that responsibility for compliance rests (in different forms) with each party. Sopro cannot be abreast of the constantly evolving regulatory frameworks in all countries at all times, as such it is important that you, as the client, have knowledge of your local regulatory climate and ensure your business operates within the relevant regulatory frameworks.`,
            },
            {
                id: 'summary',
                title:'In Summary',
                textContent:`Sopro has worked hard to develop a compliant platform providing innovative marketing services and technology for our clients and at all times respecting the rights of the data subjects whose information we collect. Compliance is part of what we do and ongoing due diligence is core to how we operate.`,
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
