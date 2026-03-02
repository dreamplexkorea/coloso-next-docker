"use client";

import { useEffect, useRef, useState } from "react";

const tabs = [
  { label: "프로그램 소개", targetId: "program-intro" },
  { label: "커리큘럼", targetId: "curriculum" },
  { label: "Master", targetId: "educator" },
  { label: "수강생 후기", targetId: "reviews" },
  { label: "유의사항", targetId: "notice" },
];

/** 탭 네비게이션 — 콜소 스타일의 미니멀 하이컨트라스트 디자인 */
export function TabNavigation() {
  const [activeTab, setActiveTab] = useState(tabs[0].targetId);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const sectionEls = tabs
      .map((tab) => document.getElementById(tab.targetId))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        // 가장 많이 보이는 섹션을 활성화
        const visibleEntry = entries.find(e => e.isIntersecting);
        if (visibleEntry) {
          setActiveTab(visibleEntry.target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
    );

    for (const el of sectionEls) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleTabClick(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    setActiveTab(targetId);
    isClickScrolling.current = true;

    // 헤더 높이를 고려한 오프셋 스크롤
    const offset = 140; 
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    const resetScrollFlag = () => { isClickScrolling.current = false; };
    setTimeout(resetScrollFlag, 1000);
  }

  return (
    <nav className="sticky top-[56px] z-[50] w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md lg:top-[64px]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-start overflow-x-auto px-[16px] scrollbar-hide sm:px-[24px] lg:px-[32px]">
        {tabs.map((tab) => (
          <a
            key={tab.targetId}
            href={`#${tab.targetId}`}
            onClick={(e) => handleTabClick(e, tab.targetId)}
            className={`relative flex shrink-0 items-center px-[12px] py-[20px] text-[1.4rem] font-black uppercase tracking-tight transition-all sm:px-[20px] lg:px-[24px] ${
              activeTab === tab.targetId
                ? "text-[#2B6B9A]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.label}
            {/* 활성화 표시 언더라인 */}
            <span 
              className={`absolute bottom-0 left-0 h-[3px] w-full bg-[#2B6B9A] transition-transform duration-300 ease-out ${
                activeTab === tab.targetId ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

