import Link from "next/link";
import type { PromotionItem, Category } from "@/lib/types";
import { NavigationClient } from "./NavigationClient";

interface NavigationProps {
  promotionItems: PromotionItem[];
  menuItems: PromotionItem[];
  categories: Category[];
}

/** 네비게이션 (Server Component) — 프로모션 메뉴 + 카테고리 */
export function Navigation({ promotionItems, menuItems, categories }: NavigationProps) {
  return (
    <nav className="relative border-b border-grey-800 bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center gap-[4px] overflow-x-auto px-[16px] scrollbar-hide lg:overflow-visible">
        {/* 카테고리 드롭다운(데스크톱) + 모바일 햄버거 — 양쪽 모두 접근 가능 */}
        <NavigationClient categories={categories} menuItems={menuItems} />

        {/* 프로모션 바 (모바일에서만 보임) */}
        <ul className="flex items-center gap-[4px] lg:hidden">
          {promotionItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`whitespace-nowrap px-[8px] py-[10px] text-[1.3rem] font-semibold ${
                  item.highlight
                    ? "text-black hover:[text-shadow:0.3px_0_0_currentColor]"
                    : "text-grey-300 hover:text-text-primary"
                } transition-all`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 데스크톱 메뉴 아이템 */}
        <ul className="hidden items-center gap-[4px] lg:flex">
          {menuItems.map((item) => (
            <li key={item.href + item.label}>
              <Link
                href={item.href}
                className={`whitespace-nowrap px-[8px] py-[10px] text-[1.5rem] font-bold ${
                  item.highlight
                    ? "text-black hover:[text-shadow:0.4px_0_0_currentColor]"
                    : "text-grey-300 hover:text-text-primary"
                } transition-all`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
