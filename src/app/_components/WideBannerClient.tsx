"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import type { WideBannerItem } from "@/lib/types";
import { swiperConfig } from "@/lib/config";

import "swiper/css";
import "swiper/css/pagination";

interface WideBannerClientProps {
  items: WideBannerItem[];
}

/** 와이드 배너 Swiper (Client Component) — loop + autoplay */
export function WideBannerClient({ items }: WideBannerClientProps) {
  const config = swiperConfig.wideBanner;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={config.autoplay}
      loop={config.loop}
      speed={config.speed}
      pagination={{ clickable: true }}
      className="h-[120px] w-full sm:h-[160px] md:h-[200px]"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            href={item.href}
            className="relative flex h-full w-full items-center justify-center"
            style={{ backgroundColor: item.backgroundColor }}
          >
            {/* 실제 이미지 (URL이 있을 때만) */}
            {item.image.mobile && (
              <Image
                src={item.image.mobile}
                alt={item.alt}
                fill
                className="object-cover md:hidden"
                sizes="100vw"
              />
            )}
            {item.image.desktop && (
              <Image
                src={item.image.desktop}
                alt={item.alt}
                fill
                className="hidden object-cover md:block"
                sizes="100vw"
              />
            )}
            {/* 이미지 없을 때 텍스트 표시 */}
            {!item.image.desktop && (
              <span className="relative z-[1] text-[1.6rem] font-bold text-white/80 sm:text-[2rem]">
                {item.alt}
              </span>
            )}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
