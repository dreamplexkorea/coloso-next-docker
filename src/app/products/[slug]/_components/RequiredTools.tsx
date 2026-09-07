import type { RequiredTool } from "@/lib/types";

interface RequiredToolsProps {
  tools: RequiredTool[];
}

/** 사용 프로그램 — 필수 도구 카드 그리드 */
export function RequiredTools({ tools }: RequiredToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="py-[40px]">
      <h2 className="mb-[24px] text-[2rem] font-bold text-[var(--color-text-primary)] sm:text-[2.4rem]">
        수업 도구·준비물
      </h2>

      <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center gap-[10px] rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-[var(--color-surface)] p-[20px] text-center"
          >
            {/* 아이콘 */}
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-white">
              {tool.iconSrc ? (
                <img
                  src={tool.iconSrc}
                  alt={tool.name}
                  className="h-[32px] w-[32px] object-contain"
                />
              ) : (
                <span className="text-[1.8rem] font-bold text-[var(--color-text-tertiary)]">
                  {tool.name.charAt(0)}
                </span>
              )}
            </div>

            {/* 이름 */}
            <h3 className="text-[1.4rem] font-bold text-[var(--color-text-primary)]">
              {tool.name}
            </h3>

            {/* 설명 */}
            <p className="text-[1.2rem] leading-[1.5] text-[var(--color-text-hint)]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
