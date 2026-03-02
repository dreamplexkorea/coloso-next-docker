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

/** 카테고리 드롭다운 + 모바일 메뉴 (Client Component) */
export function NavigationClient({ categories, menuItems }: NavigationClientProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          className="flex items-center gap-[6px] whitespace-nowrap px-[4px] py-[10px] text-[1.4rem] font-semibold text-text-primary"
          aria-expanded={isCategoryOpen}
          aria-haspopup="true"
        >
          <MenuIcon width={16} height={14} />
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

      {/* 데스크톱: 카테고리 드롭다운 패널 */}
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
              <div className="relative overflow-hidden rounded-[12px] border border-grey-800 bg-white/95 p-[28px] shadow-[0_12px_40px_-8px_rgba(15,30,60,0.12),0_4px_12px_-2px_rgba(15,30,60,0.06)] backdrop-blur-[12px]">
                {/* 상단 accent 그라디언트 라인 */}
                <div className="absolute inset-x-[28px] top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

                <div className="grid grid-cols-5 gap-[20px]">
                  {categories.map((cat) => (
                    <motion.div
                      key={cat.id}
                      className="min-w-0"
                      variants={shouldReduceMotion ? undefined : columnVariants}
                    >
                      <h3 className="mb-[10px] flex items-center gap-[6px] text-[1.4rem] font-bold text-text-primary">
                        <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent/60" />
                        {cat.label}
                      </h3>
                      <ul className="space-y-[2px]">
                        {cat.subCategories.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.href}
                              className="block rounded-[6px] px-[8px] py-[5px] text-[1.3rem] text-grey-300 transition-all duration-200 hover:bg-surface-light hover:pl-[12px] hover:text-text-primary"
                              onClick={() => setIsCategoryOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 모바일: 풀스크린 오버레이 */}
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
            <div className="flex shrink-0 items-center justify-between px-[16px] py-[12px]">
              <span className="text-[1.6rem] font-bold text-text-primary">메뉴</span>
              <button
                onClick={closeMenu}
                aria-label="메뉴 닫기"
                className="p-[8px]"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-[16px] py-[16px]">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  className="mb-[24px]"
                  variants={shouldReduceMotion ? undefined : mobileItemVariants}
                >
                  <h3 className="mb-[8px] text-[1.5rem] font-bold text-text-primary">
                    {cat.label}
                  </h3>
                  <ul className="space-y-[8px]">
                    {cat.subCategories.map((sub) => (
                      <motion.li
                        key={sub.id}
                        variants={shouldReduceMotion ? undefined : mobileItemVariants}
                      >
                        <Link
                          href={sub.href}
                          className="block text-[1.4rem] text-grey-300 transition-colors hover:text-text-primary"
                          onClick={closeMenu}
                        >
                          {sub.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
