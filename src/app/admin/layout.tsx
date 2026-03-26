"use client";

import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // 로그인 페이지는 레이아웃 없이 렌더링
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontSize: "16px" }}>
      {/* 상단 바 */}
      <header className="bg-white border-b border-gray-200 px-[24px] py-[14px] flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <a href="/admin/products" className="text-[18px] font-bold text-gray-900">
            Dreamplex Admin
          </a>
          <span className="text-[13px] text-gray-400">상품 에셋 관리</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-[13px] text-gray-500 hover:text-gray-800 transition-colors"
        >
          로그아웃
        </button>
      </header>

      {/* 콘텐츠 */}
      <main className="max-w-[1200px] mx-auto px-[24px] py-[32px]">{children}</main>
    </div>
  );
}
