"use client";

import { useRef, useState, useEffect } from "react";

interface ExpandableTextProps {
  text: string;
  className?: string;
  clampClass: string; // e.g. "line-clamp-3"
}

/** 잘린 텍스트에 "더보기/접기" 토글을 표시하는 클라이언트 컴포넌트 */
export function ExpandableText({ text, className = "", clampClass }: ExpandableTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    };

    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div>
      <p
        ref={ref}
        className={`${className} ${expanded ? "" : clampClass}`}
      >
        {text}
      </p>
      {(isClamped || expanded) && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-[1.1rem] font-medium text-[var(--color-primary,#2B6B9A)] hover:underline"
        >
          {expanded ? "접기" : "더보기"}
        </button>
      )}
    </div>
  );
}
