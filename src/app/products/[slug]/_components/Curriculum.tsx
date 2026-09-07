import type { CurriculumChapter } from "@/lib/types";
import type { CurriculumLayout } from "@/lib/detailTemplates";
import { CurriculumImageCarousel } from "./CurriculumImageCarousel";

/** 기존 수업 데이터도 같은 템플릿의 배치 규칙을 따른다. */
export function Curriculum({ chapters, layout = "chapters" }: { chapters: CurriculumChapter[]; layout?: CurriculumLayout }) {
  return (
    <section id="curriculum" className={`dp-curriculum dp-curriculum-${layout} dp-legacy-curriculum`} aria-labelledby="curriculum-title">
      <p className="dp-eyebrow">CLASS STRUCTURE</p>
      <h2 id="curriculum-title" className="dp-section-title">수업에서 만나는<br />주제와 활동</h2>
      <p className="dp-section-description">프로그램의 주요 주제와 활동 순서를 안내합니다.<br />학년별 활동과 준비 조건은 상담에서 확인해주세요.</p>
      <ol className="dp-session-list">
        {chapters.map((chapter, index) => (
          <li key={chapter.id} id={`chapter-${chapter.id}`} className="dp-session">
            <div className="dp-session-number"><span>{String(index + 1).padStart(2, "0")}</span><p>주제 {index + 1}</p></div>
            <article className="dp-legacy-chapter">
              <h3>{chapter.title}</h3>
              {chapter.learningPoint && <p className="dp-learning-point">{chapter.learningPoint}</p>}
              <details className="dp-session-detail" open={layout !== "compact"}>
                <summary>활동 자세히 보기</summary>
                {Boolean(chapter.carouselImages?.length) && <div className="dp-chapter-images"><CurriculumImageCarousel images={chapter.carouselImages!} alt={chapter.title} /></div>}
                {Boolean(chapter.lessons?.length) && <ul className="dp-lesson-list">
                  {chapter.lessons!.map((lesson, lessonIndex) => <li key={lesson.id}>
                    <span>{String(lessonIndex + 1).padStart(2, "0")}</span>
                    <div><h4>{lesson.title}</h4>{lesson.duration && <p>{lesson.duration}</p>}</div>
                  </li>)}
                </ul>}
              </details>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
