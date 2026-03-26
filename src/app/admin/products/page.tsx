"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProductItem {
  slug: string;
  title: string;
  heroImageSrc: string;
  status: string;
  instructorName: string;
}

export default function AdminProductListPage() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px] text-[15px] text-gray-400">
        상품 목록 불러오는 중...
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[22px] font-bold text-gray-900">
          상품 관리 <span className="text-[15px] font-normal text-gray-400">({products.length}개)</span>
        </h1>
        <input
          type="text"
          placeholder="상품명 또는 slug로 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-[12px] py-[8px] border border-gray-300 rounded-[8px] text-[14px] w-[280px] outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {filtered.map((p) => (
          <button
            key={p.slug}
            onClick={() => router.push(`/admin/products/${p.slug}`)}
            className="bg-white rounded-[10px] border border-gray-200 overflow-hidden hover:shadow-md transition-shadow text-left"
          >
            {/* 썸네일 */}
            <div className="aspect-[3/2] bg-gray-100 relative overflow-hidden">
              {p.heroImageSrc ? (
                <img
                  src={p.heroImageSrc}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/10 text-[48px] font-bold">
                  {p.title.charAt(0)}
                </div>
              )}
            </div>

            {/* 정보 */}
            <div className="p-[14px]">
              <p className="text-[14px] font-semibold text-gray-900 line-clamp-1">{p.title}</p>
              <p className="text-[12px] text-gray-400 mt-[4px]">{p.slug}</p>
              <div className="flex items-center justify-between mt-[8px]">
                <span className="text-[11px] text-gray-500">{p.instructorName}</span>
                <span className="text-[11px] px-[6px] py-[2px] bg-green-50 text-green-600 rounded-[4px]">
                  {p.status}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[14px] text-gray-400 py-[60px]">
          검색 결과가 없습니다
        </p>
      )}
    </div>
  );
}
