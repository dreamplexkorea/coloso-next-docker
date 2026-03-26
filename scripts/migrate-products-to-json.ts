/**
 * TS → JSON 일회성 마이그레이션 스크립트
 *
 * 사용법: npx tsx scripts/migrate-products-to-json.ts
 *
 * 기존 products/index.ts에서 모든 상품을 가져와 JSON 파일로 저장합니다.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 기존 TS 모듈에서 모든 상품 데이터 로딩
import { getAllProducts } from "../src/lib/data/products/index.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "src", "lib", "data", "products-json");

fs.mkdirSync(OUT_DIR, { recursive: true });

const products = getAllProducts();

let count = 0;
for (const product of products) {
  const filePath = path.join(OUT_DIR, `${product.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(product, null, 2), "utf-8");
  count++;
  console.log(`✓ ${product.slug}.json`);
}

console.log(`\n완료: ${count}개 상품을 JSON으로 변환했습니다.`);
