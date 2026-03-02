import type { HeroSlide } from "@/lib/types";
import { HeroBannerClient } from "./HeroBannerClient";

interface HeroBannerProps {
  slides: HeroSlide[];
  nextSectionHref?: string;
  nextSectionLabel?: string;
}

/** 히어로 배너 (Server Component) — slides 데이터를 Client에 전달 */
export function HeroBanner({
  slides,
  nextSectionHref = "#home-quick-links",
  nextSectionLabel = "카테고리 바로가기",
}: HeroBannerProps) {
  return (
    <section aria-label="메인 배너">
      <HeroBannerClient
        slides={slides}
        nextSectionHref={nextSectionHref}
        nextSectionLabel={nextSectionLabel}
      />
    </section>
  );
}
