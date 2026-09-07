import type { CourseDetail } from "@/lib/types";
import { getProductBySlug, getAllProductSlugs, getAllProducts } from "./products";

/** slug로 강의 상세 정보 조회 */
export function getCourseDetail(slug: string): CourseDetail | null {
  return getProductBySlug(slug);
}

/** 전체 등록된 slug 목록 반환 (정적 생성용) */
export function getAllCourseSlugs(): string[] {
  return getAllProductSlugs();
}

/** 전체 상품 데이터 반환 */
export function getAllCourseDetails(): CourseDetail[] {
  return getAllProducts();
}
