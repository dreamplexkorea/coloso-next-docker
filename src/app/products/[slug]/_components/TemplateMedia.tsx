"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

/** 사진이 없거나 로딩에 실패하면 내용 중심의 대체 구성을 사용한다. */
export function TemplateMedia({ src, alt, sizes, priority = false, className, fallback = null }: {
  src?: string; alt: string; sizes: string; priority?: boolean; className?: string; fallback?: ReactNode;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  if (!src || failedSource === src) return <>{fallback}</>;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className ?? "object-cover"} onError={() => setFailedSource(src)} />;
}
