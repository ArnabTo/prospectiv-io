import { useRef } from 'react';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { color, motion, useScroll } from 'framer-motion';
import CarouselCard from './CarsouselCard';
import EmailMarket from '@/public/assets/emailmarket.jpg'
import LinkedInAds from '@/public/assets/linkedinads.png'
import GoogleAds from '@/public/assets/googleads.png'

const CarouselComp = () => {


    const projects = [
        {
            title: "Cold Email",
            description: `Cold email is a cost-effective method that allows for highly personalised and direct
outreach to decision-makers, thriving in niche markets like HR tech, cybersecurity, and
boutique consulting, where scalability and customisation are key advantages.`,
            imgcontent: EmailMarket,
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            color: "#BBACAF"
        },
        {
            title: "LinkedIn Ads",
            description: `LinkedIn Ads excels in precisely targeting specific professional roles and reaching a
professional audience, making it perfect for industries like B2B SaaS, professional services,
and consulting, where tailored ad formats and content promotion drive engagement.`,
            imgcontent: LinkedInAds,
            link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
            color: "#977F6D"
        },
        {
            title: "Google Ads",
            description: `Google Ads targets high-intent users actively searching for solutions, making it highly
effective for industries like software, IT services, and industrial equipment, with the ability
to generate fast results and scale campaigns efficiently`,
            imgcontent: GoogleAds,
            link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
            color: "#C2491D"
        },

    ]

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <div ref={container} className='relative mt-20 pb-20'>
            <div>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.005);
                        return <CarouselCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </div>
        </div>

    );
};

export default CarouselComp;