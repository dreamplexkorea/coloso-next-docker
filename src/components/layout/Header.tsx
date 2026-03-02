import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./SearchInput";
import { HeaderActions } from "./HeaderActions";
import { Navigation } from "./Navigation";
import { promotionBarItems, navigationMenuItems, categories } from "@/lib/data/navigation";

/** 헤더 (Server Component) — 로고 + 검색 + 액션 + 네비게이션 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* 상단 헤더바 */}
      <section className="mx-auto flex max-w-[1120px] items-center justify-between px-[16px] py-[8px] border-b border-grey-800">
        {/* 로고 */}
        <h1>
          <span className="a11y">Dreamplex</span>
          <Link href="/" aria-label="Dreamplex" className="logo-shimmer logo-animated inline-block">
            <Image src="/logo.svg" alt="Dreamplex" height={43} width={144} className="h-[43px] w-auto" />
          </Link>
        </h1>

        {/* 검색 + 액션 */}
        <div className="flex items-center gap-[8px]">
          <SearchInput />
          <HeaderActions />
        </div>
      </section>

      {/* 네비게이션 */}
      <Navigation
        promotionItems={promotionBarItems}
        menuItems={navigationMenuItems}
        categories={categories}
      />
    </header>
  );
}
