"use client";

import { useState } from "react";

interface SectionEditorProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function SectionEditor({ title, defaultOpen = false, children }: SectionEditorProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-[10px] border border-gray-200 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-[20px] py-[14px] flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
        <span className="text-[18px] text-gray-400">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-[20px] pb-[20px] space-y-[16px]">{children}</div>}
    </div>
  );
}
