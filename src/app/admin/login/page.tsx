"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin/products");
    } else {
      const data = await res.json();
      setError(data.error || "로그인에 실패했습니다");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[400px] p-[32px] bg-white rounded-[12px] shadow-lg">
        <h1 className="text-[24px] font-bold text-center mb-[8px]">관리자 로그인</h1>
        <p className="text-[14px] text-gray-500 text-center mb-[32px]">
          상품 에셋 관리 시스템
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
          <div>
            <label className="block text-[14px] font-medium mb-[6px]">아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] text-[15px] outline-none focus:border-blue-500"
              placeholder="아이디를 입력하세요"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium mb-[6px]">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[12px] py-[10px] border border-gray-300 rounded-[8px] text-[15px] outline-none focus:border-blue-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {error && (
            <p className="text-[13px] text-red-500 bg-red-50 px-[12px] py-[8px] rounded-[6px]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !username || !password}
            className="w-full py-[12px] bg-blue-600 text-white rounded-[8px] text-[15px] font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}
