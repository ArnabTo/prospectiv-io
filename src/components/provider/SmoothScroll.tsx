'use client';
import { useRef } from 'react';
import useLocomotiveScroll from '@/utils/hooks/useLocomotivScroll';

export default function SmoothScroll({ children }: any) {
  const containerRef = useRef(null);
  useLocomotiveScroll();

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}