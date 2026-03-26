/**
 * 상품 데이터 로더
 * products-json/ 디렉토리의 JSON 파일을 slug 기반으로 관리합니다.
 */
import type { CourseDetail } from "@/lib/types";
import fs from "node:fs";
import path from "node:path";

const JSON_DIR = path.join(process.cwd(), "src", "lib", "data", "products-json");

function loadAllProducts(): CourseDetail[] {
  const files = fs.readdirSync(JSON_DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(JSON_DIR, f), "utf-8");
    return JSON.parse(raw) as CourseDetail;
  });
}

function buildProductMap(): Record<string, CourseDetail> {
  const map: Record<string, CourseDetail> = {};
  for (const product of loadAllProducts()) {
    map[product.slug] = product;
  }
  return map;
}

/** slug로 상품 상세 데이터 조회 */
export function getProductBySlug(slug: string): CourseDetail | null {
  const filePath = path.join(JSON_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as CourseDetail;
}

/** 전체 상품 slug 목록 */
export function getAllProductSlugs(): string[] {
  return fs
    .readdirSync(JSON_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

/** 전체 상품 데이터 */
export function getAllProducts(): CourseDetail[] {
  return loadAllProducts();
}

/** 상품 데이터 저장 (어드민용) */
export function saveProduct(slug: string, data: CourseDetail): void {
  const filePath = path.join(JSON_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

const productMap = buildProductMap();
export default productMap;
