import type { WideBannerItem } from "@/lib/types";
import { WideBannerClient } from "./WideBannerClient";

interface WideBannerProps {
  items: WideBannerItem[];
}

/** 와이드 배너 (Server Component) — items 데이터를 Client에 전달 */
export function WideBanner({ items }: WideBannerProps) {
  return (
    <section className="my-[40px] py-[16px]" aria-label="프로모션 배너">
      <WideBannerClient items={items} />
    </section>
  );
}
