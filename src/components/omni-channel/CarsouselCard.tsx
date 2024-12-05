'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './carouselStyle.css';


const CarouselCard = ({i, title, description, src, url, color, progress, range, targetScale}: any) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="cardContainer">
    <motion.div
      style={{
        scale,
        top: `calc(-5vh + ${i * 25}px)`,
      }}
      className="card border border-borderColor"
    >
      <div className="body">
        <div className="description bg-buttonHoverColor rounded-l-3xl">
          <p>{description}</p>
          <span>
            <a href={url} target="_blank" rel="noopener noreferrer">
              See more
            </a>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        <div className="imageContainer bg-card">
          {/* <motion.div className="inner" style={{ scale: imageScale }}>
            <Image  width={500} height={500} src='https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="image" />
          </motion.div> */}
          <motion.div className="inner" style={{ scale: imageScale }}>
          <Image 
          width={500}
          height={500}
          alt=''
          src='https://images.pexels.com/photos/18876270/pexels-photo-18876270/free-photo-of-red-cabin-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
  )
}

export default CarouselCard;