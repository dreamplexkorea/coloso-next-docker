"use client";

import { createContext, useContext } from "react";
import type { Swiper as SwiperType } from "swiper";

interface CarouselContextValue {
  swiperInstance: SwiperType | null;
  isBeginning: boolean;
  isEnd: boolean;
  isReady: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return ctx;
}

export { CarouselContext };
export type { CarouselContextValue };
