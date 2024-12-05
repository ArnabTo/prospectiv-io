import { useRef } from 'react';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { color, motion, useScroll } from 'framer-motion';
import CarouselCard from './CarsouselCard';


const CarouselComp = () => {


    const projects = [
        {
            title: "Cold Email",
            description: `Cold email is a cost-effective method that allows for highly personalised and direct
outreach to decision-makers, thriving in niche markets like HR tech, cybersecurity, and
boutique consulting, where scalability and customisation are key advantages.`,
            src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            color: "#BBACAF"
        },
        {
            title: "LinkedIn Ads",
            description: `LinkedIn Ads excels in precisely targeting specific professional roles and reaching a
professional audience, making it perfect for industries like B2B SaaS, professional services,
and consulting, where tailored ad formats and content promotion drive engagement.`,
            src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
            color: "#977F6D"
        },
        {
            title: "Google Ads.",
            description: `Google Ads targets high-intent users actively searching for solutions, making it highly
effective for industries like software, IT services, and industrial equipment, with the ability
to generate fast results and scale campaigns efficiently`,
            src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        <div ref={container} className='relative mt-20'>
            <div>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.005);
                        return <CarouselCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </div>
            {/* <div
                className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-12 lg:-right-10 -z-10 transition-all">
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
                <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
                <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
            </div> */}
        </div>

    );
};

export default CarouselComp;