import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/data/products";

/** GET /api/admin/products — 전체 상품 목록 */
export async function GET() {
  const products = getAllProducts();
  const list = products.map((p) => ({
    slug: p.slug,
    title: p.title,
    heroImageSrc: p.heroImageSrc,
    status: p.status,
    instructorName: p.instructor.name,
  }));
  return NextResponse.json(list);
}
