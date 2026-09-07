"use client";

import { useEffect, useRef, useState } from "react";
import { detailSectionLabels, type DetailSectionId } from "@/lib/detailTemplates";

/** 실제 렌더링되는 섹션의 순서를 그대로 사용한다. */
export function TabNavigation({ sections }: { sections: DetailSectionId[] }) {
  const [activeTab, setActiveTab] = useState<string>(sections[0] ?? "");
  const isClickScrolling = useRef(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      if (!isClickScrolling.current) {
        const first = sections.find((id) => visible.has(id));
        if (first) setActiveTab(first);
      }
    }, { rootMargin: "-120px 0px -60% 0px", threshold: 0 });
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => { observer.disconnect(); clearTimeout(resetTimer.current); };
  }, [sections]);

  function handleTabClick(event: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const element = document.getElementById(targetId);
    if (!element) return;
    event.preventDefault();
    setActiveTab(targetId);
    isClickScrolling.current = true;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 140,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => { isClickScrolling.current = false; }, 1000);
  }

  if (!sections.length) return null;
  return (
    <nav aria-label="프로그램 상세 목차" className="sticky top-[56px] z-[50] w-full border-b border-slate-200 bg-white/95 backdrop-blur-md lg:top-[64px]">
      <div className="mx-auto flex max-w-[1120px] items-center overflow-x-auto px-[16px] sm:px-[24px]">
        {sections.map((id) => <a key={id} href={`#${id}`} aria-current={activeTab === id ? "location" : undefined} onClick={(event) => handleTabClick(event, id)}
          className={`relative shrink-0 px-[14px] py-[20px] text-[1.4rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-[-4px] sm:px-[20px] ${activeTab === id ? "text-[#2B6B9A]" : "text-slate-600 hover:text-[#2B6B9A]"}`}>
          {detailSectionLabels[id]}
          {activeTab === id && <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#2B6B9A]" />}
        </a>)}
      </div>
    </nav>
  );
}
