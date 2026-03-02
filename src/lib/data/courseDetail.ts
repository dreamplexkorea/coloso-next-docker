import type { CourseDetail } from "@/lib/types";
import { getProductBySlug, getAllProductSlugs, getAllProducts } from "./products";

// 기본 fallback 데이터 slug
const DEFAULT_SLUG = "giants-shoulder-ai-literacy";

/** slug로 강의 상세 정보 조회 */
export function getCourseDetail(slug: string): CourseDetail | null {
  // 1. 정확한 slug 매치 시도
  const exact = getProductBySlug(slug);
  if (exact) return exact;

  // 2. fallback: 기본 프로그램 데이터를 slug만 교체하여 반환
  const fallback = getProductBySlug(DEFAULT_SLUG);
  if (fallback) return { ...fallback, slug };

  return null;
}

/** 전체 등록된 slug 목록 반환 (정적 생성용) */
export function getAllCourseSlugs(): string[] {
  return getAllProductSlugs();
}

/** 전체 상품 데이터 반환 */
export function getAllCourseDetails(): CourseDetail[] {
  return getAllProducts();
}
