"use client";

import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { swiperConfig } from "@/lib/config";
import { CarouselContext } from "./CarouselContext";
import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselSkeleton } from "./CarouselSkeleton";

import "swiper/css";

interface CarouselSliderProps {
  children: React.ReactNode;
  thumbnailRatio?: "16:9" | "3:4";
}

export function CarouselSlider({ children, thumbnailRatio }: CarouselSliderProps) {
  const config = swiperConfig.carousel;
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const updateNavState = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const onSwiper = useCallback(
    (swiper: SwiperType) => {
      setSwiperInstance(swiper);
      updateNavState(swiper);
      setIsReady(true);
    },
    [updateNavState],
  );

  const slides = React.Children.map(children, (child, index) => (
    <SwiperSlide key={index} className="!w-auto">
      {child}
    </SwiperSlide>
  ));

  return (
    <CarouselContext.Provider value={{ swiperInstance, isBeginning, isEnd, isReady }}>
      <div className="carousel-container relative group/carousel overflow-x-clip">
        {/* 스켈레톤: Swiper 준비 전 표시 */}
        {!isReady && <CarouselSkeleton thumbnailRatio={thumbnailRatio} />}

        {/* Swiper: 준비 후 fade-in */}
        <div className={`transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}>
          <Swiper
            slidesPerView={config.slidesPerView}
            spaceBetween={config.spaceBetween}
            speed={config.speed}
            className="!overflow-visible"
            onSwiper={onSwiper}
            onSlideChange={updateNavState}
            onReachBeginning={(swiper) => setIsBeginning(swiper.isBeginning)}
            onReachEnd={(swiper) => setIsEnd(swiper.isEnd)}
          >
            {slides}
          </Swiper>
        </div>

        <CarouselNavigation />
      </div>
    </CarouselContext.Provider>
  );
}
