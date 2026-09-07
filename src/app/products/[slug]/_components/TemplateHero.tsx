"use client";

import Link from "next/link";
import type { CourseDetail } from "@/lib/types";
import type { DetailTemplate } from "@/lib/detailTemplates";
import { buildCurriculumQuoteHref, getPlanMinutes } from "@/lib/curriculum";
import { ProductHero } from "./ProductHero";
import { TemplateMedia } from "./TemplateMedia";
import { useCurriculumSelection } from "./CurriculumSelection";

export function TemplateHero({ course, template }: { course: CourseDetail; template: DetailTemplate }) {
  const plan = useCurriculumSelection()?.plan;
  const quoteHref = buildCurriculumQuoteHref(course.slug, plan?.id);
  const highlights = plan ? [
    { label: "추천 대상", value: plan.audience },
    { label: "선택 구성", value: `${plan.sessions.length}차시` },
    { label: "수업 시간", value: `${getPlanMinutes(plan)}분 · 쉬는 시간 별도` },
    { label: "운영 안내", value: plan.status === "proposal" ? "수업 설계안 · 협의 후 확정" : "운영 확인된 구성" },
  ] : course.programHighlights?.length ? course.programHighlights : [
    { label: "대상", value: course.meta.level }, { label: "구성", value: `${course.meta.totalLessons}차시` },
    { label: "시간", value: course.meta.totalDuration }, { label: "안내", value: course.status },
  ];
  const output = plan?.finalOutput || course.expectedOutcomes?.map((item) => item.title).join(" · ") || course.subtitle;
  const steps = plan
    ? plan.sessions.map((session) => ({ title: session.title, href: `#session-${session.id}` }))
    : course.curriculum.map((chapter) => ({ title: chapter.title, href: `#chapter-${chapter.id}` }));
  const proof = (course.heroProofStats ?? []).filter((stat) => stat.evidence?.trim());

  const facts = <dl className="dp-facts">{highlights.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>;
  const actions = <div className="dp-actions">
    <a className="dp-button dp-button-outline" href={template.id === "school" ? "#preparation" : "#curriculum"}>{template.id === "school" ? "준비·운영 조건 보기" : "상세 커리큘럼 보기"}</a>
    <Link className="dp-button dp-button-primary" href={quoteHref}>우리 학교 견적 살펴보기</Link>
  </div>;
  const heading = <>
    <p className="dp-eyebrow">{course.heroChips?.join(" · ") || course.tags.join(" · ")}</p>
    <h1 className="dp-title">{course.title}</h1>
    <p className="dp-description">{plan?.summary ?? course.subtitle}</p>
  </>;
  const outcome = <div className="dp-outcome"><p>{plan?.status === "proposal" ? "이 수업안에서 완성하는 것" : "이 수업에서 배우는 것"}</p><strong>{output}</strong></div>;

  if (template.hero === "cinematic") return <ProductHero course={{ ...course, heroSubcopy: plan?.summary ?? course.heroSubcopy, programHighlights: highlights }} quoteHref={quoteHref} />;

  return (
    <section className={`product-hero dp-hero dp-hero-${template.hero}`} data-hero-layout={template.hero}>
      <div className="dp-shell">
        {template.hero === "split" && <>
          <div className="dp-split">
            <div className="dp-hero-copy">{heading}{actions}</div>
            <figure className="dp-showcase-figure">
              <div className="dp-media dp-showcase-media"><TemplateMedia src={course.heroImageSrc} alt={course.title} priority sizes="(min-width: 960px) 560px, 100vw" fallback={<div className="dp-media-copy">{outcome}</div>} /></div>
              <figcaption>{plan?.finalOutput ?? course.heroHeadline ?? course.title}</figcaption>
            </figure>
          </div>
          {facts}
        </>}

        {template.hero === "journey" && <>
          <div className="dp-journey-heading"><div>{heading}{actions}</div>{outcome}</div>
          {steps.length > 0 && <ol className="dp-journey-steps" aria-label="수업 단계">{steps.map((step, index) => <li key={step.href}><a href={step.href}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong></a></li>)}</ol>}
          {facts}
        </>}

        {template.hero === "brief" && <div className="dp-brief">
          <div className="dp-hero-copy">{heading}{actions}</div>
          <aside className="dp-school-summary" aria-label="학교 수업 요약"><h2>우리 학교 수업 한눈에</h2>{facts}{outcome}</aside>
        </div>}

        {template.hero === "portrait" && <>
          <div className="dp-portrait">
            <div className="dp-expert-image dp-media"><TemplateMedia src={course.instructor.avatarSrc} alt={course.instructor.name} priority sizes="(min-width: 960px) 380px, 100vw" fallback={<div className="dp-expert-name"><p>프로그램 운영팀</p><strong>{course.instructor.name}</strong><span>{course.instructor.role}</span></div>} /></div>
            <div className="dp-hero-copy">{heading}{course.instructor.quote && <blockquote className="dp-expert-quote">“{course.instructor.quote}”</blockquote>}{actions}</div>
          </div>
          {facts}
        </>}

        {proof.length > 0 && <dl className="dp-proof">{proof.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>}
      </div>
    </section>
  );
}
