import type { NoticeDetail } from "@/lib/types";

interface NoticeSectionProps {
  notice: NoticeDetail;
}

/** 유의사항 — 교육 프로그램 운영 안내 */
export function NoticeSection({ notice }: NoticeSectionProps) {
  return (
    <section className="w-full border-t border-[rgba(0,0,0,0.08)] bg-[#F8FAFC] py-[60px] lg:py-[80px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">
        <h2 className="mb-[32px] text-[2.4rem] font-black text-[#0F1E2E] sm:text-[2.8rem]">
          유의사항
        </h2>
        <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}

function NoticeBlock({ title, items }: { title: string; items: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-[16px] bg-white p-[24px] shadow-[0_1px_4px_rgba(15,30,46,0.06)]">
      <h3 className="mb-[14px] text-[1.5rem] font-bold text-[#0F1E2E]">
        {title}
      </h3>
      <ul className="space-y-[8px]">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-[10px] text-[1.3rem] leading-[1.7] text-[#64748B]"
          >
            <span className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#4AADE6]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
