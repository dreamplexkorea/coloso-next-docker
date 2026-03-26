"use client";

import { useState, useRef } from "react";

interface ImageUploaderProps {
  slug: string;
  field: string; // hero, intro-0, chapter-0-0 등
  currentSrc: string;
  onUploaded: (path: string) => void;
  label?: string;
}

export function ImageUploader({ slug, field, currentSrc, onUploaded, label }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    form.append("slug", slug);
    form.append("field", field);

    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    const data = await res.json();
    setUploading(false);

    if (data.ok && data.path) {
      onUploaded(data.path);
    } else {
      alert(data.error || "업로드에 실패했습니다");
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) uploadFile(file);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <div className="space-y-[8px]">
      {label && <label className="block text-[13px] font-medium text-gray-700">{label}</label>}

      {/* 현재 이미지 미리보기 */}
      {currentSrc && (
        <div className="relative rounded-[8px] overflow-hidden bg-gray-100 max-w-[320px]">
          <img
            src={currentSrc}
            alt="현재 이미지"
            className="w-full h-auto object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* 업로드 영역 */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-[8px] p-[20px] text-center cursor-pointer transition-colors
          ${dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400 bg-gray-50"}
          ${uploading ? "pointer-events-none opacity-60" : ""}
        `}
      >
        {uploading ? (
          <p className="text-[13px] text-gray-500">업로드 중...</p>
        ) : (
          <>
            <p className="text-[13px] text-gray-500">
              이미지를 드래그하거나 클릭해서 업로드
            </p>
            <p className="text-[11px] text-gray-400 mt-[4px]">
              .webp, .jpg, .png (최대 10MB)
            </p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/webp,image/jpeg,image/png,image/gif"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* 현재 경로 표시 */}
      {currentSrc && (
        <p className="text-[11px] text-gray-400 truncate">현재: {currentSrc}</p>
      )}
    </div>
  );
}
