import assert from "node:assert/strict";
import test from "node:test";
import { buildCurriculumQuoteHref, describeCurriculumSelection, getPlanMinutes, selectCurriculumPlan, validateCurriculumDesign } from "./curriculum.ts";
import { curriculumDesigns } from "./data/curriculumPlans.ts";

test("모든 수업안에 차시별 완결성과 일치하는 시간 배분이 있다", () => {
  for (const [slug, design] of Object.entries(curriculumDesigns)) {
    assert.deepEqual(validateCurriculumDesign(design), [], slug);
    for (const plan of design.plans) assert.equal(getPlanMinutes(plan), plan.sessions.length * plan.sessionMinutes);
  }
  const ai = curriculumDesigns["giants-shoulder-ai-literacy"];
  assert.deepEqual(ai.plans.map((plan) => [plan.sessions.length, getPlanMinutes(plan)]), [[2, 100], [4, 200], [6, 300]]);
});

test("수업 시간이 맞지 않거나 결과물이 빠진 수업을 발견한다", () => {
  const design = structuredClone(curriculumDesigns["barista-experience"]);
  design.plans[0].sessions[0].activities[0].minutes = -5;
  design.plans[0].sessions[0].output = "";
  const errors = validateCurriculumDesign(design);
  assert.ok(errors.some((error) => error.includes("시간 합계")));
  assert.ok(errors.some((error) => error.includes("활동 내용 또는 시간")));
  assert.ok(errors.some((error) => error.includes("활동 결과")));
});

test("검토 기록과 미결 항목을 처리하기 전에는 운영 확정으로 표시할 수 없다", () => {
  const design = structuredClone(curriculumDesigns["magician-career-experience"]);
  design.plans[0].status = "confirmed";
  assert.ok(validateCurriculumDesign(design).length);
  design.plans[0].confirmation = "담당자 검토 기록";
  assert.ok(validateCurriculumDesign(design).length);
  design.plans[0].openQuestions = [];
  assert.deepEqual(validateCurriculumDesign(design), []);
});

test("다른 프로그램의 구성이나 임의 ID를 선택할 수 없다", () => {
  const design = curriculumDesigns["giants-shoulder-ai-literacy"];
  assert.equal(selectCurriculumPlan(design, "ai-2")?.id, "ai-2");
  for (const invalid of ["barista-2", "constructor", "__proto__", "missing"]) {
    assert.equal(selectCurriculumPlan(design, invalid)?.id, "ai-6");
  }
  assert.ok(validateCurriculumDesign({ ...design, defaultPlanId: "missing" }).length);
});

test("견적 링크와 요청사항에 선택한 차시·시간·결과물·제안 상태를 전달한다", () => {
  const design = curriculumDesigns["giants-shoulder-ai-literacy"];
  const plan = selectCurriculumPlan(design, "ai-4")!;
  const url = new URL(buildCurriculumQuoteHref("giants-shoulder-ai-literacy", plan.id), "https://example.test");
  assert.equal(url.searchParams.get("program"), "giants-shoulder-ai-literacy");
  assert.equal(url.searchParams.get("plan"), "ai-4");
  const message = describeCurriculumSelection("AI 리터러시", plan);
  assert.match(message, /4차시 · 200분/);
  assert.match(message, /수업 설계안/);
  assert.ok(message.includes(plan.finalOutput));
  assert.equal(new URL(buildCurriculumQuoteHref("a&plan=bad", "실험 2"), "https://example.test").searchParams.get("program"), "a&plan=bad");
});
