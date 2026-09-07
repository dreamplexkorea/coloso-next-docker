"use client";

import type { RequiredTool } from "@/lib/types";
import { useCurriculumSelection } from "./CurriculumSelection";
import { RequiredTools } from "./RequiredTools";

export function CurriculumPreparation({ tools }: { tools: RequiredTool[] }) {
  const plan = useCurriculumSelection()?.plan;
  if (!plan && !tools.length) return null;
  return <section id="preparation" className="dp-preparation" aria-label="준비·운영 안내">
    {plan ? <>
      <p className="dp-eyebrow">BEFORE THE CLASS</p>
      <h2 className="dp-section-title">수업 전에 함께 준비할 것</h2>
      <p className="dp-preparation-context">{plan.label}{plan.status === "proposal" ? " · 운영 협의 후 확정하는 준비안입니다." : "의 준비 안내입니다."}</p>
      <div className="dp-preparation-grid">
        {[{ title: "학교에서", items: plan.preparation.school }, { title: "드림플렉스에서", items: plan.preparation.dreamplex }].map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
      </div>
      <details className="dp-alternatives"><summary>학교 조건이 다를 때</summary><ul>{plan.preparation.alternatives.map((item) => <li key={item}>{item}</li>)}</ul></details>
    </> : <RequiredTools tools={tools} />}
  </section>;
}
