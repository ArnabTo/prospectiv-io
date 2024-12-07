'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './carouselStyle.css';
import Link from 'next/link';


const CarouselCard = ({ i, title, description, imgcontent, url, color, progress, range, targetScale }: any) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className=" h-fit flex items-center justify-center sticky top-0 p-5">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className=" flex relative -top-6 md:min-w-[500px] h-fit rounded-3xl origin-top border border-borderColor"
      >
        <div className="flex flex-col lg:flex-row h-full">
          <div className="bg-buttonHoverColor w-full lg:w-1/2 relative p-5 lg:p-12 rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none space-y-3">
            <h2 className='text-3xl lg:text-5xl pt-8 pb-1 font-bold text-start text-secondary'>{title}.</h2>
            <p className=' text-textColorTwo text-lg'>{description}</p>

            <div
              className="w-60 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
              <Link href="/demo" className="flex-1 font-bold text-lg bg-black text-center px-10 xl:px-16 py-3 rounded-full hover:scale-95 transition-all duration-300">
                Learn more.
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586]  p-10 w-full lg:w-3/5 min-h-full mx-auto max-h-[500px] overflow-hidden rounded-b-3xl lg:rounded-l-none rounded-r-3xl">
            <motion.div className="w-full h-full flex justify-center items-center rounded-3xl mx-auto" style={{ scale: imageScale }} >
              <Image 
                className='rounded-3xl h-full object-cover border border-borderColor shadow-lg'
                width={500}
                height={500}
                alt='service-image'
                src={imgcontent} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CarouselCard;