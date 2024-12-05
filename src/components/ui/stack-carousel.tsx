'use client';

import useMeasure from 'react-use-measure';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  HTMLAttributes,
} from 'react';
import { HTMLMotionProps, motion, MotionConfig } from 'framer-motion';

export default function CarouselRoot({
  children,
  slideCount,
  gap = 24,
  slideLeftAfterXSlides = 0,
  ...props
}: {
  slideCount: number;
  gap?: number;
  slideLeftAfterXSlides?: number;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <MotionConfig
      transition={{
        type: 'spring',
        bounce: 0,
        mass: 1,
        stiffness: 100,
        damping: 20,
      }}
    >
      <CarouselProvider
        slideCount={slideCount}
        gap={gap}
        slideLeftAfterXSlides={
          slideLeftAfterXSlides < 0 ? 0 : slideLeftAfterXSlides
        }
      >
        <div {...props}>{children}</div>
      </CarouselProvider>
    </MotionConfig>
  );
}

function CarouselSlides({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full flex flex-col overflow-hidden relative" {...props}>
      {children}
    </div>
  );
}

function CarouselSlide({
  index,
  className,
  ...props
}: HTMLMotionProps<'div'> & { index: number }) {
  const {
    activeSlide,
    leftOffset,
    height,
    setHeight,
    gap,
    setDragX,
    dragX,
    handleChangeSlide,
  } = useCarousel();
  const [tentativeNewSlide, setTentativeNewSlide] = useState<null | number>(
    null
  );
  const [ref, bounds] = useMeasure();

  const cardGap = gap * index;
  const cardOffset = Math.max(0, index - activeSlide);
  const top = cardGap - leftOffset;
  const offsetY = (bounds.height ?? 0) * cardOffset + top;
  const y = activeSlide >= index ? top : Math.max(top, offsetY) + dragX;

  useEffect(() => {
    if (bounds.height > height) {
      setHeight(bounds.height);
    }
  }, [height, bounds.height]);

  const calculateDragSlideChange = (dragAmount: number, slideWidth: number) => {
    const totalXOffset = Math.abs(dragAmount);
    const direction = dragAmount < 0 ? -1 : 1;
    const totalSlidesChanged = Math.floor(totalXOffset / slideWidth);
    return totalSlidesChanged * direction * -1;
  };

  return (
    <motion.div
      {...props}
      className={'cursor-grab active:cursor-grabbing ' + className}
      initial={{
        y: `calc(calc(100% * ${index}) + ${cardGap}px)`,
      }}
      animate={{
        y,
      }}
      style={{
        position: index > 0 ? 'absolute' : 'relative',
        flexShrink: 0,
        width: '100%',
        height: '100%',
      }}
      drag="y"
      dragConstraints={{ top: y }}
      dragSnapToOrigin
      onDrag={(e, info) => {
        setDragX(info.offset.y);
        setTentativeNewSlide(
          calculateDragSlideChange(info.offset.y, bounds.height)
        );
      }}
      onDragEnd={(e, info) => {
        setDragX(0);
        setTentativeNewSlide(null);
        handleChangeSlide(
          calculateDragSlideChange(info.offset.y, bounds.height)
        );
      }}
      transition={
        Math.abs(dragX) > 0
          ? { duration: 0, type: 'tween' }
          : {
              type: 'spring',
              bounce: 0,
              mass: 1,
              stiffness: 100,
              damping: 20,
            }
      }
      ref={ref}
    />
  );
}

type CarouselContextProps = {
  activeSlide: number;
  leftOffset: number;
  handleChangeSlide: (slideCount: number) => void;
  setActiveSlide: Dispatch<SetStateAction<number>>;
  slideCount: number;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  gap: number;
  slideLeftAfterXSlides: number;
  setSlideLeftAfterXSlides: Dispatch<SetStateAction<number>>;
  dragX: number;
  setDragX: Dispatch<SetStateAction<number>>;
};

const CarouselContext = createContext<CarouselContextProps>({
  activeSlide: 0,
  leftOffset: 0,
  handleChangeSlide: () => {},
  setActiveSlide: () => {},
  slideCount: 0,
  height: 0,
  setHeight: () => {},
  gap: 24,
  slideLeftAfterXSlides: 0,
  setSlideLeftAfterXSlides: () => {},
  dragX: 0,
  setDragX: () => {},
});

function CarouselProvider({
  children,
  slideCount,
  gap,
  slideLeftAfterXSlides,
}: {
  children: ReactNode;
  slideCount: number;
  gap: number;
  slideLeftAfterXSlides: number;
}) {
  const [slidesX, setSlideLeftAfterXSlides] = useState(slideLeftAfterXSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const [height, setHeight] = useState(0);
  const [dragX, setDragX] = useState(0);
  const leftOffset = Math.max(0, activeSlide - slidesX) * gap;

  const handleChangeSlide = (slide: number) => {
    const lastSlide = slideCount - 1;

    setActiveSlide((curr) => {
      const next = Math.max(0, Math.min(lastSlide, curr + slide));
      return next;
    });
  };

  const value = {
    activeSlide,
    setActiveSlide,
    handleChangeSlide,
    leftOffset,
    slideCount,
    height,
    setHeight,
    gap,
    slideLeftAfterXSlides: slidesX,
    setSlideLeftAfterXSlides,
    dragX,
    setDragX,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}

function useCarousel() {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
}

export { CarouselRoot, CarouselSlide, CarouselSlides, useCarousel };
