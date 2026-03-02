import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { QuickLinkItem } from "@/lib/types";

interface QuickLinksProps {
  items: QuickLinkItem[];
}

/** 퀵 링크 (Server Component) — 카테고리 바로가기 */
export function QuickLinks({ items }: QuickLinksProps) {
  return (
    <section
      id="home-quick-links"
      className="quicklinks-cinematic-section relative z-20 -mt-[26px] py-[26px] sm:-mt-[34px]"
      aria-label="카테고리 바로가기"
    >
      <Container>
        <div className="flex gap-[16px] overflow-x-auto scrollbar-hide sm:gap-[20px] md:justify-center">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="quicklink-cinematic-item flex flex-shrink-0 flex-col items-center gap-[8px]"
            >
              <div className="quicklink-cinematic-chip flex h-[56px] w-[56px] items-center justify-center overflow-hidden rounded-[20px] bg-surface-light sm:h-[64px] sm:w-[64px]">
                {item.emoji ? (
                  <span className="text-[2.4rem] sm:text-[2.8rem]">{item.emoji}</span>
                ) : item.iconSrc ? (
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-[1.4rem] font-bold text-grey-300">
                    {item.label.charAt(0)}
                  </span>
                )}
              </div>
              <span className="quicklink-cinematic-label whitespace-nowrap text-[1.2rem] text-grey-200 sm:text-[1.3rem]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
