"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { CourseDetail } from "@/lib/types";
import { ProductEditor } from "./_components/ProductEditor";

export default function AdminProductEditPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/products/${params.slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("상품을 찾을 수 없습니다");
        return r.json();
      })
      .then(setProduct)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px] text-[15px] text-gray-400">
        불러오는 중...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-[60px]">
        <p className="text-[15px] text-red-500 mb-[16px]">{error || "상품을 찾을 수 없습니다"}</p>
        <button
          onClick={() => router.push("/admin/products")}
          className="text-[14px] text-blue-600 hover:underline"
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  return <ProductEditor initialData={product} />;
}
