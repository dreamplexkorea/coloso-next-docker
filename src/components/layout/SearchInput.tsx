"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/components/icons";

/** 검색 인풋 (Client Component) — 상태 관리 필요 */
export function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative flex items-center justify-end">
      <h2 className="a11y">Search Input</h2>

      {/* 데스크톱: 항상 보이는 검색 폼 */}
      <form
        onSubmit={handleSubmit}
        className={`hidden items-center gap-[8px] rounded-[8px] bg-surface-light px-[12px] py-[8px] lg:flex ${
          isExpanded ? "w-[320px]" : "w-[240px]"
        } transition-all duration-200`}
      >
        <SearchIcon width={20} height={20} />
        <input
          required
          type="text"
          minLength={2}
          autoComplete="off"
          className="flex-1 bg-transparent text-[1.4rem] text-text-primary outline-none placeholder:text-grey-400"
          placeholder="어떤 강의를 찾으시나요?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        />
      </form>

      {/* 모바일: 검색 아이콘 토글 */}
      <button
        className="flex items-center justify-center p-[8px] lg:hidden"
        aria-label="검색"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <SearchIcon />
      </button>

      {/* 모바일: 확장된 검색 폼 */}
      {isExpanded && (
        <form
          onSubmit={handleSubmit}
          className="absolute right-0 top-full z-50 mt-[4px] flex w-[calc(100vw-32px)] items-center gap-[8px] rounded-[8px] bg-surface-light px-[12px] py-[8px] lg:hidden"
        >
          <SearchIcon width={20} height={20} />
          <input
            required
            type="text"
            minLength={2}
            autoComplete="off"
            autoFocus
            className="flex-1 bg-transparent text-[1.4rem] text-text-primary outline-none placeholder:text-grey-400"
            placeholder="어떤 강의를 찾으시나요?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setIsExpanded(false)}
          />
        </form>
      )}
    </section>
  );
}
