'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className='bg-gradient-to-r from-gradientColorOne via-gradientColorFour to-gradientColorTwo'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        zIndex: 99,
      }}
    />
  );
};

export default ScrollProgressBar;
