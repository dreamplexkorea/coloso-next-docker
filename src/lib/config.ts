// Config-driven: 사이트 전체 설정을 한 곳에서 관리 — easy to modify

export const siteConfig = {
  name: "콜로소",
  tagline: "업계 최고 전문가의 온라인 클래스",
  description:
    "콜로소는 업계 최고 전문가의 온라인 클래스를 제공합니다. 드로잉, 디자인, 영상, 사진, 금융, 비즈니스 등 다양한 분야의 전문 강의를 만나보세요.",
  url: "https://coloso.co.kr",
  locale: "ko_KR",
} as const;

// Swiper 설정 — 섹션별로 다른 슬라이더 동작 정의
export const swiperConfig = {
  hero: {
    effect: "fade" as const,
    autoplay: { delay: 4000, disableOnInteraction: false },
    loop: true,
    speed: 600,
  },
  carousel: {
    slidesPerView: "auto" as const,
    spaceBetween: 16,
    speed: 400,
  },
  wideBanner: {
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 500,
  },
} as const;
