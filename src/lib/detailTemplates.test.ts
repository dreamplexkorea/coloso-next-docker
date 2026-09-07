import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import test from "node:test";
import type { CourseDetail, Review } from "./types.ts";
import { curriculumDesigns } from "./data/curriculumPlans.ts";
import { buildTemplatePreviewHref, detailSectionLabels, detailTemplates, getAvailableDetailSections, getVisibleDetailSections, isDetailTemplateId, programTemplateAssignments, resolveDetailTemplate } from "./detailTemplates.ts";

const directory = new URL("./data/products/", import.meta.url);
const files = readdirSync(directory).filter((name) => name.endsWith(".ts") && name !== "index.ts");
const courses: CourseDetail[] = await Promise.all(files.map(async (name) => (await import(new URL(name, directory).href)).default));

test("다섯 템플릿은 첫 화면과 섹션 순서가 다르고, 모든 공통 섹션을 한 번씩 보존한다", () => {
  assert.equal(detailTemplates.length, 5);
  assert.equal(new Set(detailTemplates.map((item) => item.hero)).size, 5);
  assert.equal(new Set(detailTemplates.map((item) => item.sections.join(","))).size, 5);
  assert.equal(new Set(detailTemplates.map((item) => item.curriculum)).size, 4);
  for (const template of detailTemplates) {
    assert.deepEqual([...template.sections].sort(), Object.keys(detailSectionLabels).sort());
  }
});

test("모든 실제 프로그램에 유효한 기본 템플릿을 배정하고 오래된 배정을 남기지 않는다", () => {
  assert.ok(courses.length > 0);
  assert.deepEqual(courses.map((course) => course.slug).sort(), Object.keys(programTemplateAssignments).sort());
  for (const course of courses) {
    assert.ok(isDetailTemplateId(programTemplateAssignments[course.slug]), course.slug);
    assert.equal(resolveDetailTemplate(course).id, course.detailTemplate ?? programTemplateAssignments[course.slug]);
  }
});

test("모든 프로그램을 다른 템플릿으로 바꿔도 제공되는 섹션이 사라지거나 중복되지 않는다", () => {
  for (const course of courses) {
    const design = Object.hasOwn(curriculumDesigns, course.slug) ? curriculumDesigns[course.slug] : undefined;
    const available = getAvailableDetailSections(course, Boolean(design?.plans.length));
    const expected = Object.entries(available).filter(([, exists]) => exists).map(([id]) => id).sort();
    for (const template of detailTemplates) {
      assert.deepEqual(getVisibleDetailSections(template, available).sort(), expected, `${course.slug}/${template.id}`);
    }
  }
});

test("빈 내용의 탭과 근거가 없거나 다른 프로그램의 후기는 노출하지 않는다", () => {
  const empty = { ...courses[0], introSections: [], targetAudience: [], expectedOutcomes: [], curriculum: [], requiredTools: [], relatedCourses: [], reviews: [] };
  const available = getAvailableDetailSections(empty, false);
  for (const id of ["program-intro", "curriculum", "preparation", "related", "reviews"] as const) assert.equal(available[id], false);
  assert.equal(getAvailableDetailSections(empty, true).preparation, true);
  assert.equal(getAvailableDetailSections(empty, true).curriculum, true);
  const review: Review = { id: "review", rating: 5, title: "수업 후기", content: "원문", authorName: "작성자", authorGrade: "중학교" };
  for (const invalid of [review, { ...review, evidence: "원문", programSlug: "another-program" }, { ...review, evidence: "   ", programSlug: empty.slug }]) {
    assert.equal(getAvailableDetailSections({ ...empty, reviews: [invalid] }, false).reviews, false);
  }
  assert.equal(getAvailableDetailSections({ ...empty, reviews: [{ ...review, evidence: "원문 확인", programSlug: empty.slug }] }, false).reviews, true);
});

test("개별 설정과 미리보기의 우선순위를 지키고 미리보기가 원본 설정을 바꾸지 않는다", () => {
  const course = { slug: "giants-shoulder-ai-literacy", detailTemplate: "school" as const };
  assert.equal(resolveDetailTemplate(course).id, "school");
  assert.equal(resolveDetailTemplate(course, "showcase").id, "showcase");
  assert.equal(resolveDetailTemplate(course).id, "school");
});

test("알 수 없는 템플릿, 중복 쿼리, 프로토타입 이름은 기본 구성으로 돌아간다", () => {
  for (const invalid of [undefined, null, "", "missing", "constructor", "__proto__", ["expert", "school"], { id: "expert" }]) {
    assert.equal(isDetailTemplateId(invalid), false);
    assert.equal(resolveDetailTemplate({ slug: "giants-shoulder-ai-literacy" }, invalid).id, "roadmap");
  }
  for (const slug of ["new-program", "constructor", "__proto__"]) assert.equal(resolveDetailTemplate({ slug }).id, "school");
});

test("미리보기 주소에서 프로그램과 템플릿을 분리하고 특수문자를 이스케이프한다", () => {
  const slug = "학교 체험/테스트?program=other&plan=bad";
  const url = new URL(buildTemplatePreviewHref(slug, "showcase"), "https://example.test");
  assert.equal(decodeURIComponent(url.pathname.slice("/products/".length)), slug);
  assert.equal(url.searchParams.get("previewTemplate"), "showcase");
  assert.deepEqual([...url.searchParams.keys()], ["previewTemplate"]);
});
