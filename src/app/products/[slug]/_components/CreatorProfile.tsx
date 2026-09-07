import type { InstructorProfile } from "@/lib/types";
import { TemplateMedia } from "./TemplateMedia";

/** 사진이 없는 강사진은 이름·소개·활동을 중심으로 표시한다. */
export function CreatorProfile({ instructor }: { instructor: InstructorProfile }) {
  return (
    <section id="educator" className="dp-educator">
      <div className={`dp-educator-profile ${instructor.avatarSrc ? "dp-educator-with-photo" : ""}`}>
        {instructor.avatarSrc && <div className="dp-educator-photo dp-media">
          <TemplateMedia src={instructor.avatarSrc} alt={instructor.name} sizes="(min-width: 960px) 280px, 100vw"
            fallback={<div className="dp-media-copy"><p>{instructor.name}<br />{instructor.role}</p></div>} />
        </div>}
        <div>
          <p className="dp-eyebrow">운영 강사진</p>
          <h2 className="dp-section-title">{instructor.name}</h2>
          <p className="dp-educator-role">{instructor.role}</p>
          {instructor.quote && <blockquote className="dp-educator-quote">“{instructor.quote}”</blockquote>}
          {instructor.bio && <p className="dp-section-description">{instructor.bio}</p>}
        </div>
        {instructor.career.length > 0 && <div className="dp-educator-career">
          <h3>주요 활동</h3>
          <ul>{instructor.career.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>}
      </div>
      {!!instructor.interview?.length && <div className="dp-interview">
        <h3>수업에 대해 자주 묻는 질문</h3>
        {instructor.interview.map((item, index) => <details key={item.question} open={index === 0}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>)}
      </div>}
    </section>
  );
}
