'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './carouselStyle.css';
import Link from 'next/link';


const CarouselCard = ({ i, title, description, src, url, color, progress, range, targetScale }: any) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer relative">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card border border-borderColor"
      >
        <div className="flex h-full">
          <div className="bg-buttonHoverColor w-1/2 relative p-12 rounded-l-3xl space-y-3">
            <h2 className='text-5xl pt-8 pb-1 font-bold text-start text-secondary'>{title}.</h2>
            <p className=' text-textColorTwo text-lg'>{description}</p>

            <div
              className="w-60 flex rounded-full bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
              <Link href="/demo" className="flex-1 font-bold text-lg bg-black px-10 xl:px-16 py-3 rounded-full hover:scale-95 transition-all duration-300">
                Learn more.
              </Link>
            </div>
          </div>

          <div className="imageContainer bg-card p-12">
            {/* <motion.div className="inner" style={{ scale: imageScale }}>
            <Image  width={500} height={500} src='https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="image" />
          </motion.div> */}
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                className='rounded-3xl h-full'
                width={1000}
                height={1000}
                alt=''
                src='https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CarouselCard;