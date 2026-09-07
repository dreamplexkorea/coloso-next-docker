/** 수업 설계의 원본. 차시 수와 총 시간은 sessions에서 계산한다. */
export interface SessionActivity {
  title: string;
  minutes: number;
  studentAction: string;
}

export interface LessonSession {
  id: string;
  title: string;
  objective: string;
  activities: SessionActivity[];
  output: string;
  assessment: string;
  instructorNotes: string;
}

export interface CurriculumPlan {
  id: string;
  label: string;
  status: "proposal" | "confirmed";
  /** confirmed는 담당자가 검토한 기록을 반드시 연결한다. */
  confirmation?: string;
  audience: string;
  sessionMinutes: number;
  summary: string;
  finalOutput: string;
  sessions: LessonSession[];
  adaptations: { audience: string; approach: string }[];
  preparation: {
    school: string[];
    dreamplex: string[];
    alternatives: string[];
  };
  openQuestions: string[];
  source: string;
}

export interface CurriculumDesign {
  defaultPlanId: string;
  plans: CurriculumPlan[];
}

export function getPlanMinutes(plan: CurriculumPlan): number {
  return plan.sessions.reduce(
    (total, session) => total + session.activities.reduce((sum, activity) => sum + activity.minutes, 0),
    0,
  );
}

export function validateCurriculumDesign(design: CurriculumDesign): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  if (!design.plans.some((plan) => plan.id === design.defaultPlanId)) errors.push("기본 수업안이 없습니다.");
  for (const plan of design.plans) {
    if (ids.has(plan.id)) errors.push(`${plan.id}: 수업안 ID가 중복됩니다.`);
    ids.add(plan.id);
    if (!plan.id || !plan.label || !plan.audience || !plan.summary || !plan.finalOutput || !plan.source) {
      errors.push(`${plan.id}: 수업 개요 또는 근거가 비어 있습니다.`);
    }
    if (!Number.isInteger(plan.sessionMinutes) || plan.sessionMinutes <= 0) errors.push(`${plan.id}: 차시 시간이 잘못되었습니다.`);
    if (!plan.sessions.length) errors.push(`${plan.id}: 차시가 없습니다.`);
    if (plan.status === "confirmed" && (!plan.confirmation?.trim() || plan.openQuestions.length)) {
      errors.push(`${plan.id}: 검토 기록 또는 미결 항목을 확인해주세요.`);
    }
    const sessionIds = new Set<string>();
    for (const session of plan.sessions) {
      if (sessionIds.has(session.id)) errors.push(`${plan.id}/${session.id}: 차시 ID가 중복됩니다.`);
      sessionIds.add(session.id);
      const minutes = session.activities.reduce((sum, activity) => sum + activity.minutes, 0);
      if (!session.activities.length || minutes !== plan.sessionMinutes) errors.push(`${plan.id}/${session.id}: 활동 시간 합계가 차시 시간과 다릅니다.`);
      if (session.activities.some((activity) => !Number.isInteger(activity.minutes) || activity.minutes <= 0 || !activity.title.trim() || !activity.studentAction.trim())) {
        errors.push(`${plan.id}/${session.id}: 활동 내용 또는 시간이 잘못되었습니다.`);
      }
      if (![session.id, session.title, session.objective, session.output, session.assessment, session.instructorNotes].every((value) => value.trim())) {
        errors.push(`${plan.id}/${session.id}: 학습 목표·활동 결과·확인 기준·진행 안내가 필요합니다.`);
      }
    }
  }
  return errors;
}

/** 외부에서 받은 plan ID는 해당 프로그램의 목록 안에서만 해석한다. */
export function selectCurriculumPlan(design: CurriculumDesign, planId?: string): CurriculumPlan | undefined {
  return design.plans.find((plan) => plan.id === planId)
    ?? design.plans.find((plan) => plan.id === design.defaultPlanId);
}

export function buildCurriculumQuoteHref(slug: string, planId?: string): string {
  const query = new URLSearchParams({ program: slug });
  if (planId) query.set("plan", planId);
  return `/ai-quote?${query.toString()}`;
}

export function describeCurriculumSelection(title: string, plan?: CurriculumPlan): string {
  if (!plan) return `관심 프로그램: ${title}`;
  return `관심 프로그램: ${title}\n수업안: ${plan.label} / ${plan.audience} / ${plan.sessions.length}차시 · ${getPlanMinutes(plan)}분 (쉬는 시간 별도)\n수업 후 결과물: ${plan.finalOutput}\n${plan.status === "proposal" ? "수업 설계안으로, 운영 가능 여부와 견적을 상담하고 싶습니다." : "위 수업 구성으로 상담하고 싶습니다."}`;
}
