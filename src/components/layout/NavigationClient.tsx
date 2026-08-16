"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Category, PromotionItem } from "@/lib/types";
import { CloseIcon, MenuIcon } from "@/components/icons";

/* ── 애니메이션 Variants ── */

const EASE = [0.22, 1, 0.36, 1] as const;

/** 데스크톱 드롭다운 패널 */
const dropdownVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: EASE,
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
  exit: {
    opacity: 0,
    y: -2,
    transition: { duration: 0.1, ease: EASE },
  },
};

/** 카테고리 컬럼 stagger */
const columnVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.12, ease: EASE },
  },
};

/** 모바일 풀스크린 메뉴 */
const mobileMenuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASE,
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

/** 모바일 메뉴 아이템 */
const mobileItemVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: EASE },
  },
};

/* ── 컴포넌트 ── */

interface NavigationClientProps {
  categories: Category[];
  menuItems: PromotionItem[];
}

/** 뱃지 컴포넌트 - 박스를 제거하고 아이콘만 반환 (초슬림 버전) */
function CourseBadge({ type }: { type: string }) {
  const icons: Record<string, string> = {
    HOT: "🔥",
    인기: "🔥",
    NEW: "✨",
    베스트: "🏆",
    프리미엄: "👑",
    빠른마감: "⏰",
    스타: "⭐",
    초등전용: "🐥",
  };

  return (
    <span className="text-[1.1rem] leading-none" title={type}>
      {icons[type] || ""}
    </span>
  );
}

/** 카테고리 드롭다운 + 모바일 메뉴 (Client Component) */
export function NavigationClient({ categories, menuItems }: NavigationClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePartId, setActivePartId] = useState<string>(categories[0]?.id || "");
  const [openMobilePart, setOpenMobilePart] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeCategory = categories.find(cat => cat.id === activePartId) || categories[0];

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsCategoryOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 150);
  }, []);

  const openMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobilePart = (id: string) => setOpenMobilePart(prev => prev === id ? null : id);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 데스크톱: 카테고리 버튼 */}
      <div
        className="hidden shrink-0 lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex items-center gap-[6px] whitespace-nowrap px-[4px] py-[10px] text-[1.3rem] font-semibold text-text-primary transition-colors hover:text-accent"
          aria-expanded={isCategoryOpen}
          aria-haspopup="true"
        >
          <MenuIcon width={15} height={13} />
          <span>체험 카테고리</span>
        </button>
      </div>

      {/* 모바일: 햄버거 버튼 */}
      <button
        className="shrink-0 flex items-center justify-center p-[8px] lg:hidden"
        aria-label="메뉴"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>

      {/* 데스크톱: 사이드바 스타일 메가 메뉴 */}
      <AnimatePresence>
        {isCategoryOpen && (
          <motion.div
            key="desktop-dropdown"
            className="absolute inset-x-0 top-full z-50 hidden lg:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={shouldReduceMotion ? undefined : dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mx-auto max-w-[1120px] px-[16px]">
              <div className="flex overflow-hidden rounded-[16px] border border-grey-800 bg-white/98 shadow-[0_32px_64px_-16px_rgba(15,30,60,0.18)] backdrop-blur-[20px]">
                
                {/* 좌측 사이드바 (LNB) - 콤팩트 */}
                <div className="w-[230px] border-r border-grey-800 bg-grey-900/40 p-[6px]">
                  <nav className="flex flex-col gap-[2px]">
                    {categories.map((cat) => {
                      const isActive = activePartId === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setActivePartId(cat.id)}
                          className={`group relative flex items-center gap-[10px] rounded-[8px] px-[14px] py-[9px] text-left transition-all duration-200 ${
                            isActive 
                              ? "bg-white shadow-sm ring-1 ring-grey-800" 
                              : "hover:bg-white/60"
                          }`}
                        >
                          <span 
                            className={`flex h-[18px] w-[24px] items-center justify-center rounded-[4px] text-[0.75rem] font-black transition-colors ${
                              isActive ? "" : "bg-grey-800 text-grey-300"
                            }`}
                            style={isActive ? { backgroundColor: `${cat.themeColor}15`, color: cat.themeColor } : {}}
                          >
                            {cat.partNumber}
                          </span>
                          <span className="text-[1.4rem]">{cat.icon}</span>
                          <span className={`text-[1.2rem] font-bold tracking-tight transition-colors ${
                            isActive ? "text-text-primary" : "text-grey-300"
                          }`}>
                            {cat.label}
                          </span>
                          {isActive && (
                            <motion.div 
                              layoutId="active-indicator"
                              className="absolute right-[10px] text-[0.8rem] text-grey-300"
                            >
                              ▶
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* 우측 콘텐츠 영역 (Course Grid) - 슬림 */}
                <div className="flex-1 bg-white p-[28px] pb-[20px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePartId}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18, ease: EASE }}
                      className="flex flex-col"
                    >
                      {/* 파트 헤더 */}
                      <div className="mb-[18px] flex items-center gap-[10px] border-b border-grey-800 pb-[12px]">
                        <span className="text-[2rem]">{activeCategory.icon}</span>
                        <div>
                          <span className="text-[1rem] font-black tracking-widest text-grey-300 uppercase">Part {activeCategory.partNumber}</span>
                          <h3 className="text-[1.55rem] font-black text-text-primary leading-tight">
                            {activeCategory.label}
                          </h3>
                        </div>
                      </div>

                      {/* 수업 그리드 (3열) */}
                      <ul className="grid grid-cols-3 gap-x-[16px] gap-y-[4px]">
                        {activeCategory.subCategories.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.href}
                              className="group flex flex-col items-start gap-[2px] rounded-[6px] p-[8px] transition-all duration-200 hover:bg-surface-light hover:ring-1 hover:ring-grey-800"
                              onClick={() => setIsCategoryOpen(false)}
                            >
                              <div className="flex flex-row items-start gap-[4px]">
                                <span className="text-[1.2rem] font-bold leading-[1.4] text-text-primary group-hover:text-accent">
                                  {sub.label}
                                </span>
                                {sub.badges && sub.badges.length > 0 && (
                                  <div className="flex shrink-0 gap-[2px] pt-[3px]">
                                    {sub.badges.map((b) => <CourseBadge key={b} type={b} />)}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 모바일: 풀스크린 오버레이 (초슬림 아코디언) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] flex flex-col bg-background lg:hidden"
            variants={shouldReduceMotion ? undefined : mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex shrink-0 items-center justify-between px-[16px] py-[12px] border-b border-grey-800 bg-white shadow-sm">
              <span className="text-[1.5rem] font-black tracking-tight text-text-primary uppercase">Menu</span>
              <button
                onClick={closeMenu}
                aria-label="메뉴 닫기"
                className="rounded-full bg-grey-800 p-[6px]"
              >
                <CloseIcon width={16} height={16} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-[16px] py-[12px]">
              {categories.map((cat) => {
                const isOpen = openMobilePart === cat.id;
                return (
                  <motion.div
                    key={cat.id}
                    className="mb-[8px] overflow-hidden rounded-[12px] border border-grey-800 bg-white shadow-sm"
                    variants={shouldReduceMotion ? undefined : mobileItemVariants}
                  >
                    <button
                      className="flex w-full items-center justify-between p-[12px]"
                      onClick={() => toggleMobilePart(cat.id)}
                    >
                      <div className="flex items-center gap-[8px]">
                        <span className="flex h-[20px] w-[26px] items-center justify-center rounded-[4px] bg-grey-900 text-[0.8rem] font-black text-grey-300">
                          {cat.partNumber}
                        </span>
                        <span className="text-[1.6rem]">{cat.icon}</span>
                        <h3 className="text-[1.35rem] font-bold text-text-primary">
                          {cat.label}
                        </h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-[1.1rem] text-grey-300"
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="border-t border-grey-800 bg-surface-light px-[12px] py-[4px]"
                        >
                          {cat.subCategories.map((sub) => (
                            <li key={sub.id} className="border-b border-grey-800/50 last:border-none">
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between py-[10px]"
                                onClick={closeMenu}
                              >
                                <div className="flex items-center gap-[5px]">
                                  <span className="text-[1.25rem] font-semibold text-text-primary">
                                    {sub.label}
                                  </span>
                                  {sub.badges && sub.badges.length > 0 && (
                                    <div className="flex gap-[3px]">
                                      {sub.badges.map((b) => <CourseBadge key={b} type={b} />)}
                                    </div>
                                  )}
                                </div>
                                <span className="text-[1.1rem] text-grey-300">→</span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
