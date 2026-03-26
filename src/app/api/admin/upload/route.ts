import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

/** POST /api/admin/upload — 이미지 업로드 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const slug = formData.get("slug") as string | null;
  const field = formData.get("field") as string | null; // hero, intro-1, chapter-1-1 등

  if (!file || !slug) {
    return NextResponse.json({ error: "file과 slug는 필수입니다" }, { status: 400 });
  }

  // 파일 확장자 검증
  const ext = path.extname(file.name).toLowerCase();
  const allowed = [".webp", ".jpg", ".jpeg", ".png", ".gif"];
  if (!allowed.includes(ext)) {
    return NextResponse.json(
      { error: `허용되지 않는 파일 형식입니다. (${allowed.join(", ")})` },
      { status: 400 },
    );
  }

  // 파일 크기 제한 (10MB)
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "파일 크기는 10MB 이하여야 합니다" }, { status: 400 });
  }

  // slug 안전성 검증
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: "올바르지 않은 slug입니다" }, { status: 400 });
  }

  // 저장 디렉토리 생성
  const dir = path.join(process.cwd(), "public", "images", "products", slug);
  fs.mkdirSync(dir, { recursive: true });

  // 파일명 결정
  const filename = field ? `${field}${ext}` : `${Date.now()}${ext}`;
  const filePath = path.join(dir, filename);

  // 파일 저장
  const arrayBuffer = await file.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

  const publicPath = `/images/products/${slug}/${filename}`;
  return NextResponse.json({ ok: true, path: publicPath });
}
