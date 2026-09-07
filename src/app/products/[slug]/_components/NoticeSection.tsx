"use client";

import type { NoticeDetail } from "@/lib/types";
import { getPlanMinutes } from "@/lib/curriculum";
import { useCurriculumSelection } from "./CurriculumSelection";

export function NoticeSection({ notice }: { notice: NoticeDetail }) {
  const plan = useCurriculumSelection()?.plan;
  return (
    <section className="dp-notice">
      <h2 className="dp-section-title">운영 유의사항</h2>
      {plan && <p className="dp-preparation-context">
        현재 선택: {plan.label} · {getPlanMinutes(plan)}분 (쉬는 시간 별도)
        {plan.status === "proposal" && " · 학교와 운영 조건을 협의한 후 확정하는 수업 설계안입니다."}
      </p>}
      <div className="dp-notice-grid">
        <NoticeBlock title="프로그램 운영" items={notice.operationGuide} />
        <NoticeBlock title="교육 과정" items={notice.learningPolicy} />
        <NoticeBlock title="장비·환경" items={notice.deviceLimit} />
        <NoticeBlock title="자료·저작권" items={notice.intellectualProperty} />
        <NoticeBlock title="수업 후 지원" items={notice.coachingInfo} />
      </div>
    </section>
  );
}

function NoticeBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return <div><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
