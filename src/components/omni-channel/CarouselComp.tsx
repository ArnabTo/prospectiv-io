import { useRef } from 'react';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { color, motion, useScroll } from 'framer-motion';
import CarouselCard from './CarsouselCard';


const CarouselComp = () => {

    
const projects = [
    {
        title: "Matthias Leidinger",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
        color: "#BBACAF"
    },
    {
        title: "Clément Chapillon",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
        src: "https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
        color: "#977F6D"
    },
    {
        title: "Zissou",
        description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
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
  
    useEffect( () => {
      const lenis = new Lenis()
  
      function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    })

    return (
        <div ref={container} className='relative mt-20'>
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <CarouselCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                })
            }
        </div>

    );
};

export default CarouselComp;