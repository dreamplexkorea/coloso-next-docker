import { NextResponse } from "next/server";
import { getProductBySlug, saveProduct } from "@/lib/data/products";
import type { CourseDetail } from "@/lib/types";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/** GET /api/admin/products/[slug] — 상품 상세 조회 */
export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return NextResponse.json({ error: "상품을 찾을 수 없습니다" }, { status: 404 });
  }
  return NextResponse.json(product);
}

/** PUT /api/admin/products/[slug] — 상품 수정 */
export async function PUT(request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const body = (await request.json()) as CourseDetail;

  // 기본 검증
  if (!body.title || !body.slug) {
    return NextResponse.json({ error: "필수 필드가 누락되었습니다 (title, slug)" }, { status: 400 });
  }

  // slug 일관성 유지
  body.slug = slug;

  saveProduct(slug, body);
  return NextResponse.json({ ok: true, slug });
}
