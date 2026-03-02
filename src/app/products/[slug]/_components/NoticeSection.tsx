import type { NoticeDetail } from "@/lib/types";

interface NoticeSectionProps {
  notice: NoticeDetail;
}

/** 유의사항 — 교육 프로그램 운영 안내 */
export function NoticeSection({ notice }: NoticeSectionProps) {
  return (
    <section className="border-t border-[rgba(0,0,0,0.08)] py-[40px]">
      <h2 className="mb-[24px] text-[2rem] font-bold text-[var(--color-text-primary)] sm:text-[2.4rem]">
        유의사항
      </h2>

      {/* 운영 안내 */}
      {notice.operationGuide && (
        <NoticeBlock title="프로그램 운영 안내" items={notice.operationGuide} />
      )}

      {/* 교육 과정 안내 */}
      <NoticeBlock title="교육 과정 안내" items={notice.learningPolicy} />

      {/* 장비 안내 */}
      <NoticeBlock title="장비 안내" items={notice.deviceLimit} />

      {/* 저작권 안내 */}
      <NoticeBlock title="저작권 안내" items={notice.intellectualProperty} />

      {/* 사후 관리 안내 */}
      <NoticeBlock title="사후 관리 안내" items={notice.coachingInfo} />
    </section>
  );
}

function NoticeBlock({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-[24px]">
      <h3 className="mb-[10px] text-[1.4rem] font-bold text-[var(--color-text-primary)]">
        {title}
      </h3>
      <ul className="space-y-[6px]">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-[8px] text-[1.2rem] leading-[1.6] text-[var(--color-text-tertiary)]"
          >
            <span className="mt-[6px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-[var(--color-accent,#4AADE6)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
