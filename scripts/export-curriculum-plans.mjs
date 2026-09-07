import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { curriculumDesigns } from "../src/lib/data/curriculumPlans.ts";
import { getPlanMinutes, validateCurriculumDesign } from "../src/lib/curriculum.ts";

// 화면과 교사용 검토 문서가 같은 원본을 사용한다.
const titles = {
  "giants-shoulder-ai-literacy": "거인의 어깨 — AI 리터러시",
  "magician-career-experience": "마술사 진로체험",
  "barista-experience": "바리스타 진로체험",
};
const cell = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
const lines = [
  "# 드림플렉스 상세 수업 설계안",
  "",
  "원본: `src/lib/data/curriculumPlans.ts`. `npm run docs:curriculum`으로 다시 생성한다.",
  "",
  "아래 내용은 기존 프로그램 주제를 바탕으로 작성한 수업 제안이다. 운영 시간·도구·재료·학년 조건을 담당자가 확인한 뒤 확정한다. 차시별 시간은 활동의 합계이며 쉬는 시간은 별도다.",
  "",
  "| 프로그램 | 구성 | 수업 시간 | 최종 결과물 | 상태 |",
  "|---|---|---|---|---|",
];
for (const [slug, design] of Object.entries(curriculumDesigns)) {
  const errors = validateCurriculumDesign(design);
  if (errors.length) throw new Error(`${slug}: ${errors.join(" / ")}`);
  for (const plan of design.plans) {
    lines.push(`| ${titles[slug] ?? slug} | ${cell(plan.label)} | ${getPlanMinutes(plan)}분 (${plan.sessionMinutes}분 × ${plan.sessions.length}) | ${cell(plan.finalOutput)} | ${plan.status === "proposal" ? "제안" : "확정"} |`);
  }
}
for (const [slug, design] of Object.entries(curriculumDesigns)) {
  lines.push("", `## ${titles[slug] ?? slug}`, "", `프로그램 주소: \`/products/${slug}\``);
  for (const plan of design.plans) {
    lines.push("", `### ${plan.label}`, "", plan.summary, "", `- 추천 대상: ${plan.audience}`, `- 최종 결과물: ${plan.finalOutput}`, `- 기획 근거: ${plan.source}`, "");
    for (const [index, session] of plan.sessions.entries()) {
      lines.push(`#### ${index + 1}차시. ${session.title} (${plan.sessionMinutes}분)`, "", `학습 목표: ${session.objective}`, "", "| 활동 | 시간 | 학생이 하는 일 |", "|---|---|---|");
      for (const activity of session.activities) lines.push(`| ${cell(activity.title)} | ${activity.minutes}분 | ${cell(activity.studentAction)} |`);
      lines.push("", `- 차시 결과물: ${session.output}`, `- 배움을 확인하는 기준: ${session.assessment}`, `- 진행·참여 안내: ${session.instructorNotes}`, "");
    }
    lines.push("학년별 조정:", "", "| 대상 | 조정 방법 |", "|---|---|");
    for (const item of plan.adaptations) lines.push(`| ${cell(item.audience)} | ${cell(item.approach)} |`);
    for (const [title, items] of [["학교 준비", plan.preparation.school], ["드림플렉스 준비", plan.preparation.dreamplex], ["조건이 다를 때", plan.preparation.alternatives], ["확정 전 확인", plan.openQuestions]]) {
      lines.push("", `${title}:`, "", ...items.map((item) => `- ${item}`));
    }
  }
}
const output = new URL("../docs/02-design/dreamplex-curriculum-blueprints.md", import.meta.url);
mkdirSync(fileURLToPath(new URL("../docs/02-design/", import.meta.url)), { recursive: true });
writeFileSync(output, lines.join("\n") + "\n");
console.log("Updated docs/02-design/dreamplex-curriculum-blueprints.md");
