"use client";

import Link from "next/link";
import { CartIcon } from "@/components/icons";

/** 헤더 우측 액션 버튼 (Client Component) */
export function HeaderActions() {
  return (
    <div className="flex items-center gap-[2px]">
      <Link
        href="/ai-quote"
        aria-label="AI에게 견적요청"
        className="hidden rounded-[8px] px-[12px] py-[6px] text-[1.3rem] font-semibold text-primary transition-colors hover:text-text-primary sm:block"
      >
        AI에게 견적요청
      </Link>
      <Link
        href="/dream-team"
        aria-label="드림팀 소개"
        className="hidden rounded-[8px] px-[12px] py-[6px] text-[1.3rem] font-semibold text-primary transition-colors hover:text-text-primary sm:block"
      >
        드림팀 소개
      </Link>
      <Link
        href="/cart"
        className="flex items-center justify-center p-[8px]"
        aria-label="장바구니"
      >
        <CartIcon />
      </Link>
    </div>
  );
}
