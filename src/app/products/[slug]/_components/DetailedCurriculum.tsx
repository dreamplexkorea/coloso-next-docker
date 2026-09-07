"use client";

import Link from "next/link";
import { buildCurriculumQuoteHref, getPlanMinutes, type CurriculumDesign } from "@/lib/curriculum";
import { useCurriculumSelection } from "./CurriculumSelection";

export function DetailedCurriculum({ slug, design }: { slug: string; design: CurriculumDesign }) {
  const selection = useCurriculumSelection();
  const plan = selection?.plan;
  if (!plan) return null;

  return (
    <section id="curriculum" className="scroll-mt-[150px] border-t border-slate-200 py-[56px] sm:py-[80px]" aria-labelledby="curriculum-title">
      <div className="mb-[32px] grid gap-[24px] lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <p className="mb-[12px] text-[1.4rem] font-bold tracking-[0.14em] text-primary">DREAMPLEX CURRICULUM</p>
          <h2 id="curriculum-title" className="text-[3.2rem] font-extrabold leading-[1.3] tracking-[-0.03em] sm:text-[4.4rem]">학생이 직접 해보고,<br />설명할 수 있는 수업</h2>
        </div>
        <p className="max-w-[520px] text-[1.6rem] leading-[1.8] text-text-secondary">차시별 활동과 결과물을 살펴보고 학교에 맞는 구성을 선택하세요. 학년과 시간표에 맞춰 운영 조건을 함께 협의합니다.</p>
      </div>

      <fieldset className="mb-[24px]">
        <legend className="mb-[12px] text-[1.6rem] font-bold">수업 구성 선택</legend>
        <div className="flex flex-wrap gap-[8px]">
          {design.plans.map((option) => (
            <label key={option.id} className="cursor-pointer">
              <input className="peer sr-only" type="radio" name={`curriculum-${slug}`} value={option.id} checked={option.id === plan.id} onChange={() => selection.selectPlan(option.id)} />
              <span className="block rounded-[6px] border border-slate-300 px-[18px] py-[14px] text-[1.5rem] font-semibold text-text-secondary transition-colors peer-checked:border-[#0F1E2E] peer-checked:bg-[#0F1E2E] peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-primary">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div key={plan.id}>
        <div className="border-l-[4px] border-primary bg-[#F0F6FA] px-[20px] py-[24px] sm:px-[28px]" aria-live="polite" aria-atomic="true">
          <p className="mb-[10px] text-[1.4rem] font-bold text-primary">{plan.status === "proposal" ? "수업 설계안 · 운영 협의 후 확정" : "운영 확인된 수업 구성"}</p>
          <h3 className="text-[2.2rem] font-bold">{plan.label}</h3>
          <p className="mt-[10px] text-[1.6rem] leading-[1.8]">{plan.summary}</p>
          <dl className="mt-[24px] grid gap-[20px] border-t border-primary/15 pt-[20px] sm:grid-cols-3">
            <div><dt className="text-[1.4rem] text-text-secondary">추천 대상</dt><dd className="mt-[6px] text-[1.6rem] font-semibold">{plan.audience}</dd></div>
            <div><dt className="text-[1.4rem] text-text-secondary">수업 시간</dt><dd className="mt-[6px] text-[1.6rem] font-semibold">{plan.sessions.length}차시 · 총 {getPlanMinutes(plan)}분</dd><dd className="mt-[4px] text-[1.4rem] text-text-secondary">차시당 {plan.sessionMinutes}분 · 쉬는 시간 별도</dd></div>
            <div><dt className="text-[1.4rem] text-text-secondary">수업 후 남는 결과물</dt><dd className="mt-[6px] text-[1.6rem] font-semibold">{plan.finalOutput}</dd></div>
          </dl>
        </div>

        <ol className="mt-[40px] divide-y divide-slate-200 border-y border-slate-200">
          {plan.sessions.map((session, index) => (
            <li key={session.id} className="grid gap-[20px] py-[32px] lg:grid-cols-[160px_1fr] lg:gap-[32px] lg:py-[40px]">
              <div className="flex items-baseline gap-[12px] lg:block">
                <p className="text-[3.6rem] font-extrabold leading-none tracking-[-0.04em] text-primary sm:text-[4.8rem]">{String(index + 1).padStart(2, "0")}</p>
                <p className="text-[1.4rem] font-semibold text-text-secondary lg:mt-[12px]">{index + 1}차시 · {plan.sessionMinutes}분</p>
              </div>
              <div className="min-w-0">
                <h4 className="text-[2.2rem] font-bold leading-[1.4] sm:text-[2.6rem]">{session.title}</h4>
                <p className="mt-[12px] text-[1.6rem] leading-[1.8] text-text-secondary">{session.objective}</p>
                <ol className="mt-[24px] space-y-[20px]">
                  {session.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="grid grid-cols-[48px_1fr] gap-[12px] sm:grid-cols-[60px_1fr]">
                      <span className="pt-[2px] text-[1.4rem] font-semibold text-primary">{activity.minutes}분</span>
                      <div><p className="text-[1.6rem] font-bold">{activity.title}</p><p className="mt-[4px] text-[1.6rem] leading-[1.8] text-text-secondary">{activity.studentAction}</p></div>
                    </li>
                  ))}
                </ol>
                <dl className="mt-[24px] space-y-[12px] border-l-2 border-slate-300 pl-[16px] text-[1.5rem] leading-[1.8]">
                  <div><dt className="font-bold">완성하는 것</dt><dd className="text-text-secondary">{session.output}</dd></div>
                  <div><dt className="font-bold">배움을 확인하는 기준</dt><dd className="text-text-secondary">{session.assessment}</dd></div>
                </dl>
                <details className="mt-[20px] text-[1.5rem] leading-[1.8]">
                  <summary className="cursor-pointer py-[8px] font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-4">진행·참여 안내</summary>
                  <p className="mt-[8px] text-text-secondary">{session.instructorNotes}</p>
                </details>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-[40px]">
          <h3 className="mb-[20px] text-[2.2rem] font-bold">학년에 따라 이렇게 조정합니다</h3>
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {plan.adaptations.map((item) => <div key={item.audience} className="grid gap-[8px] py-[20px] sm:grid-cols-[200px_1fr]"><dt className="text-[1.6rem] font-bold">{item.audience}</dt><dd className="text-[1.6rem] leading-[1.8] text-text-secondary">{item.approach}</dd></div>)}
          </dl>
        </div>

        <div id="preparation" className="mt-[40px] scroll-mt-[150px]">
          <h3 className="mb-[20px] text-[2.2rem] font-bold">수업 전에 함께 준비할 것</h3>
          <div className="grid gap-[24px] sm:grid-cols-2">
            {[{ title: "학교에서", items: plan.preparation.school }, { title: "드림플렉스에서", items: plan.preparation.dreamplex }].map((group) => (
              <div key={group.title} className="border-t-2 border-[#0F1E2E] pt-[16px]"><h4 className="text-[1.8rem] font-bold">{group.title}</h4><ul className="mt-[12px] list-disc space-y-[10px] pl-[20px] text-[1.6rem] leading-[1.8] text-text-secondary">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            ))}
          </div>
          <details className="mt-[24px] border-y border-slate-200 py-[16px] text-[1.6rem] leading-[1.8]"><summary className="cursor-pointer py-[8px] font-bold">학교 조건이 다를 때</summary><ul className="mt-[12px] list-disc space-y-[8px] pl-[20px] text-text-secondary">{plan.preparation.alternatives.map((item) => <li key={item}>{item}</li>)}</ul></details>
        </div>

        <div className="mt-[32px] flex flex-col gap-[20px] bg-[#0F1E2E] p-[24px] text-white sm:p-[32px] lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0"><p className="text-[1.8rem] font-bold">{plan.label} 구성으로 상담하기</p>{plan.openQuestions.length > 0 && <p className="mt-[10px] text-[1.5rem] leading-[1.8] text-slate-300">함께 확인할 내용: {plan.openQuestions.join(" · ")}</p>}</div>
          <Link href={buildCurriculumQuoteHref(slug, plan.id)} className="shrink-0 rounded-[6px] bg-white px-[24px] py-[16px] text-center text-[1.6rem] font-bold text-[#0F1E2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">이 구성으로 견적 살펴보기</Link>
        </div>
      </div>
    </section>
  );
}
