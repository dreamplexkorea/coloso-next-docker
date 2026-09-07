import type { CourseDetail } from "@/lib/types";
import type { IntroLayout } from "@/lib/detailTemplates";
import { ClassIntro } from "./ClassIntro";
import { TemplateMedia } from "./TemplateMedia";

export function TemplateIntro({ course, layout }: { course: CourseDetail; layout: IntroLayout }) {
  if (layout === "story") return <ClassIntro sections={course.introSections} targetAudience={course.targetAudience} expectedOutcomes={course.expectedOutcomes} />;
  return (
    <section id="program-intro" className={`dp-intro dp-intro-${layout}`} aria-labelledby="intro-title">
      <p className="dp-eyebrow">DREAMPLEX CLASS</p>
      <h2 id="intro-title" className="dp-section-title">{layout === "gallery" ? "직접 만들어보며 배우는 것" : "우리 학생에게 맞는 수업인가요?"}</h2>
      {layout === "gallery" && Boolean(course.expectedOutcomes?.length) && <div className="dp-outcome-grid">{course.expectedOutcomes!.map((item, index) => <article key={item.title}><span className="dp-index">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>}
      {Boolean(course.targetAudience?.length) && <div className="dp-audiences"><h3>이런 학생에게 추천합니다</h3><dl>{course.targetAudience!.map((audience) => <div key={audience.grade}><dt>{audience.grade}</dt><dd>{audience.description}{audience.tags.length > 0 && <p className="dp-audience-tags">{audience.tags.map((tag) => `#${tag}`).join(" · ")}</p>}</dd></div>)}</dl></div>}
      {layout === "compact" && Boolean(course.expectedOutcomes?.length) && <div className="dp-outcome-list"><h3>기대하는 배움</h3><ul>{course.expectedOutcomes!.map((item) => <li key={item.title}><strong>{item.title}</strong><p>{item.description}</p></li>)}</ul></div>}
      <div className="dp-intro-articles">
        {course.introSections.map((section, index) => <article key={`${index}-${section.title}`}>
          {section.imageSrc && <div className="dp-media dp-intro-media"><TemplateMedia src={section.imageSrc} alt={section.title} sizes="(min-width: 960px) 520px, 100vw" /></div>}
          <div className="dp-intro-article-copy"><p className="dp-eyebrow">{section.subtitle ?? `POINT ${String(index + 1).padStart(2, "0")}`}</p><h3>{section.title}</h3><p>{section.description}</p></div>
        </article>)}
      </div>
    </section>
  );
}
