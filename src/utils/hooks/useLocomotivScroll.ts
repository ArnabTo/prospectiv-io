// @ts-nocheck

'use client';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotiveScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
    
    if (!scrollEl) {
      console.warn('No scroll container found');
      return;
    }

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      // Add any other options you need
    });

    // Clean up on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
}