import type { CurriculumDesign, CurriculumPlan, LessonSession } from "@/lib/curriculum";

// 기존 프로그램의 주제와 레슨을 토대로 작성한 제안이다. 실제 운영 확정 기록이 아니다.
// 짧은 과정은 긴 과정의 앞부분을 자르지 않고, 결과물까지 완결되도록 별도로 설계한다.
const aiPreparation: CurriculumPlan["preparation"] = {
  school: ["학생이 사용할 기기와 인터넷 접속 확인", "수업용 계정·서비스의 이용 조건 및 학교 접속 정책 확인", "학년·학급 수·차시별 수업 시간과 발표 공간 공유"],
  dreamplex: ["비교용 AI 답변, 출처 자료, 설계 캔버스 준비", "개인정보를 포함하지 않는 테스트 질문과 평가표 준비", "선택한 도구의 실제 작동 및 결과물 보관 방식 사전 점검"],
  alternatives: ["개별 계정 사용이 어려우면 강사 시연과 모둠 설계 활동으로 조정", "인터넷 장애 시 인쇄한 답변과 설계 캔버스로 비교·검증 활동 진행"],
};
const aiAdaptations = [
  { audience: "중학교 1~3학년", approach: "제공된 관심사·진로 질문과 멘토 사례 중 선택하고, 설계 캔버스의 문장 틀을 활용합니다." },
  { audience: "고등학교 1~2학년", approach: "진로 문제를 직접 정의하고, 멘토의 관점과 검증할 출처를 선택한 이유까지 설명합니다." },
];
const aiQuestions = ["사용할 AI 도구와 학생 계정 이용 방식", "학교의 실제 차시 길이 및 쉬는 시간", "수업 후 AI 결과물 접근·보관 기간"];
const aiSource = "src/lib/data/products/giants-shoulder-ai-literacy.ts — 기존 6차시 주제·산출물 기반 재설계";

const aiSixSessions: LessonSession[] = [
  {
    id: "compare", title: "같은 질문, 다른 AI 답변", objective: "AI 답변 두 개를 비교하고 도움이 되는 답변의 조건을 설명합니다.",
    activities: [
      { title: "질문 정하기", minutes: 10, studentAction: "개인정보 없이 표현할 수 있는 진로 고민 한 가지를 적습니다." },
      { title: "답변 비교", minutes: 25, studentAction: "같은 질문에 대한 일반 챗봇과 멘토 역할 AI 답변에서 차이를 표시합니다." },
      { title: "판단 기준 만들기", minutes: 15, studentAction: "도움이 된 부분과 확인이 필요한 부분을 나누어 짝에게 설명합니다." },
    ],
    output: "AI 답변 비교표 1장", assessment: "답변의 차이를 두 가지 이상 말하고, 사실 확인이 필요한 문장을 하나 찾습니다.",
    instructorNotes: "유명인의 생각을 그대로 재현한다고 설명하지 않습니다. 역할을 부여한 AI 응답이라는 점을 안내합니다.",
  },
  {
    id: "prompt", title: "멘토가 지켜야 할 다섯 가지 약속", objective: "역할·목적·맥락·응답 방식·제약을 구분하여 지시문을 작성합니다.",
    activities: [
      { title: "구조 살펴보기", minutes: 10, studentAction: "예시 지시문에서 다섯 요소를 서로 다른 표시로 구분합니다." },
      { title: "한 요소 바꾸기", minutes: 25, studentAction: "응답 방식 또는 제약 하나를 바꿔 결과가 어떻게 달라지는지 기록합니다." },
      { title: "지시문 정리", minutes: 15, studentAction: "확인되지 않은 사실은 모른다고 답하도록 조건을 추가하고 공유합니다." },
    ],
    output: "다섯 요소가 포함된 지시문 초안", assessment: "바꾼 지시와 답변 변화의 관계를 설명합니다.",
    instructorNotes: "학생이 따라 입력하는 시간보다 변경 전후 차이를 설명하는 시간을 확보합니다.",
  },
  {
    id: "design", title: "나만의 멘토 설계 캔버스", objective: "해결하려는 문제와 AI가 도와줄 범위를 구체화합니다.",
    activities: [
      { title: "사용 상황 정하기", minutes: 10, studentAction: "누가 언제 어떤 도움을 받을지 한 문장으로 정합니다." },
      { title: "설계하기", minutes: 25, studentAction: "멘토의 관점, 참고 자료, 답변 형식, 하지 말아야 할 일을 캔버스에 채웁니다." },
      { title: "짝 검토", minutes: 15, studentAction: "친구가 작성한 설계에서 애매한 표현을 찾아 질문하고 고칩니다." },
    ],
    output: "멘토 설계 캔버스 1장", assessment: "사용자·문제·도움의 범위·제한을 구체적으로 적습니다.",
    instructorNotes: "성격 묘사만 있는 설계는 실제 사용 상황 질문으로 구체화합니다.",
  },
  {
    id: "build", title: "설계를 작동하는 AI로 만들기", objective: "설계 캔버스를 지시문으로 옮기고 사용 예시를 실행합니다.",
    activities: [
      { title: "구현 준비", minutes: 10, studentAction: "설계 캔버스와 사용할 도구의 입력 항목을 연결합니다." },
      { title: "제작 및 수정", minutes: 30, studentAction: "노코드 도구에 지시문을 넣고 질문 두 개를 실행해 맞지 않는 응답을 수정합니다." },
      { title: "결과 저장", minutes: 10, studentAction: "최종 지시문과 대표 응답을 저장하고 구현 중 바꾼 이유를 기록합니다." },
    ],
    output: "AI 멘토 지시문과 실행 기록", assessment: "설계한 목적에 맞는 응답 한 개와 수정 전후 사례 한 개를 제시합니다.",
    instructorNotes: "공유 링크 제공 여부는 도구·계정 조건에 따라 결정하고, 항상 지시문을 별도로 보관합니다.",
  },
  {
    id: "verify", title: "친구의 AI를 검증하는 테스트", objective: "AI의 사실 오류·편향·범위 이탈을 찾아 개선합니다.",
    activities: [
      { title: "테스트 준비", minutes: 10, studentAction: "사실 질문, 모르는 내용, 목적 밖 질문을 하나씩 준비합니다." },
      { title: "교차 검증", minutes: 25, studentAction: "다른 모둠의 AI에 질문하고 제공된 출처 자료와 응답을 대조합니다." },
      { title: "개선 및 재검사", minutes: 15, studentAction: "문제가 생긴 지시문을 수정하고 같은 질문으로 다시 검사합니다." },
    ],
    output: "질문·응답·근거·수정 결과가 담긴 테스트 기록", assessment: "AI 답변을 근거와 대조하고 수정 후 결과를 확인합니다.",
    instructorNotes: "틀린 답을 찾는 경쟁보다 확인 과정과 근거 제시를 평가합니다.",
  },
  {
    id: "showcase", title: "나의 AI 멘토 발표와 진로 연결", objective: "문제·설계·검증 결과·한계를 근거로 작품을 소개합니다.",
    activities: [
      { title: "발표 준비", minutes: 10, studentAction: "해결 문제, 시연 질문, 개선 사례, 남은 한계를 정리합니다." },
      { title: "모둠 쇼케이스", minutes: 25, studentAction: "소그룹을 순환하며 작품을 시연하고 질문을 주고받습니다." },
      { title: "진로 성찰", minutes: 15, studentAction: "기획·제작·검증 중 흥미로웠던 역할과 다음에 배우고 싶은 것을 기록합니다." },
    ],
    output: "설계 캔버스·AI 실행 기록·테스트 기록·진로 성찰지", assessment: "작품의 장점과 한계를 각각 하나 이상 근거와 함께 설명합니다.",
    instructorNotes: "모든 학생에게 발표 또는 기록 역할을 배정합니다. 학급 전체 발표만으로 시간을 채우지 않습니다.",
  },
];

const aiBase = {
  status: "proposal" as const, audience: "중학교 1~3학년 · 고등학교 1~2학년", sessionMinutes: 50,
  adaptations: aiAdaptations, preparation: aiPreparation, openQuestions: aiQuestions, source: aiSource,
};

const aiTwo: CurriculumPlan = {
  ...aiBase, id: "ai-2", label: "2차시 · 비교와 설계",
  summary: "AI의 답변을 비교하고, 내가 원하는 멘토의 지시문을 설계해봅니다. 완성형 에이전트 제작은 포함하지 않습니다.",
  finalOutput: "답변 비교표와 멘토 지시문 카드",
  sessions: [
    aiSixSessions[0],
    {
      id: "mini-design", title: "멘토 지시문 카드 완성", objective: "나의 목적에 맞는 지시문을 쓰고 예시 답변을 검토합니다.",
      activities: [
        { title: "지시문 틀 읽기", minutes: 10, studentAction: "역할·목적·맥락·응답 방식·제약의 예를 확인합니다." },
        { title: "멘토 카드 작성", minutes: 25, studentAction: "제공된 틀에 진로 질문을 넣어 지시문을 만들고, 짝과 답변 사례를 검토합니다." },
        { title: "수정과 공유", minutes: 15, studentAction: "확인할 사실과 금지할 응답을 추가한 뒤 지시문 카드를 완성합니다." },
      ],
      output: "멘토 지시문 카드와 확인할 질문 1개", assessment: "지시문에 원하는 도움과 AI의 제한을 모두 적습니다.",
      instructorNotes: "도구 사용이 어려우면 인쇄된 응답으로 검토합니다. 제작·배포 완료를 수업 성과로 약속하지 않습니다.",
    },
  ],
};

const aiFour: CurriculumPlan = {
  ...aiBase, id: "ai-4", label: "4차시 · 제작과 검증",
  summary: "예시 캔버스를 활용해 작은 AI 멘토를 만들고, 교차 테스트 결과를 공유합니다.",
  finalOutput: "멘토 설계 캔버스·실행 기록·간단한 테스트 기록",
  sessions: [
    aiSixSessions[0],
    {
      id: "guided-design", title: "예시 캔버스로 멘토 설계", objective: "제공된 틀을 내 문제에 맞게 바꿔 실행 가능한 지시문을 만듭니다.",
      activities: [
        { title: "다섯 요소 익히기", minutes: 10, studentAction: "지시문의 다섯 요소를 예시에서 찾습니다." },
        { title: "설계와 지시문 작성", minutes: 30, studentAction: "사용 상황·도움의 범위·응답 형식을 선택해 캔버스와 지시문을 작성합니다." },
        { title: "짝 검토", minutes: 10, studentAction: "애매한 요구와 빠진 제약을 서로 찾아 수정합니다." },
      ],
      output: "설계 캔버스와 지시문", assessment: "내가 바꾼 설계 요소와 그 이유를 말합니다.",
      instructorNotes: "자유 설계보다 선택형 예시를 사용해 제작 시간을 확보합니다.",
    },
    aiSixSessions[3],
    {
      id: "test-share", title: "테스트하고 개선 결과 공유", objective: "작품을 검증한 근거와 남은 한계를 설명합니다.",
      activities: [
        { title: "교차 테스트", minutes: 20, studentAction: "사실 질문과 목적 밖 질문을 시험하고 출처 자료에 비추어 판단합니다." },
        { title: "수정 및 재검사", minutes: 15, studentAction: "발견한 문제 한 가지를 고치고 같은 질문으로 확인합니다." },
        { title: "결과 공유", minutes: 15, studentAction: "작품의 목적, 개선 사례, 아직 어려운 점을 소그룹에서 발표합니다." },
      ],
      output: "테스트 기록과 개선 사례 발표", assessment: "수정 전후 응답과 근거를 함께 제시합니다.",
      instructorNotes: "6차시의 독립 쇼케이스와 심화 진로 성찰은 이 과정에 포함하지 않습니다.",
    },
  ],
};

const aiSix: CurriculumPlan = {
  ...aiBase, id: "ai-6", label: "6차시 · 설계부터 발표까지",
  summary: "멘토의 관점과 한계를 직접 설계하고, AI 제작·교차 검증·발표를 거쳐 진로 경험으로 정리합니다.",
  finalOutput: "멘토 설계 캔버스·AI 실행 기록·테스트 기록·진로 성찰지",
  sessions: aiSixSessions,
};

const magic: CurriculumPlan = {
  id: "magic-2", label: "2차시 · 원리 탐구와 공연", status: "proposal",
  audience: "초등학교 3~6학년 · 중·고등학생", sessionMinutes: 60,
  summary: "시선 유도와 도구의 원리를 탐구하고, 자신만의 짧은 마술 공연을 구성합니다.",
  finalOutput: "트릭 원리 기록과 짧은 공연 대본·시연",
  source: "src/lib/data/products/magician-career-experience.ts — 기존 120분 레슨 합계와 원리·연출 주제 기반 재설계",
  sessions: [
    {
      id: "observe", title: "관객은 무엇을 보고 있을까?", objective: "관찰과 추측을 구분하고 시선 유도 또는 도구의 원리를 설명합니다.",
      activities: [
        { title: "시연 관찰", minutes: 15, studentAction: "마술 시연에서 본 사실과 예상한 이유를 나누어 기록합니다." },
        { title: "원리 실험", minutes: 25, studentAction: "시선 유도·무게중심 등 선택된 교구에 해당하는 원리를 짝과 시험합니다." },
        { title: "설명과 연습", minutes: 20, studentAction: "잘되는 조건과 실패하는 조건을 비교하고 기초 동작을 반복합니다." },
      ],
      output: "관찰·원리·성공 조건 기록", assessment: "트릭의 성공 조건을 한 가지 설명하고 동작으로 보여줍니다.",
      instructorNotes: "실제 확보한 교구에 맞는 원리를 선택합니다. 학생의 실패를 공개적으로 놀리지 않도록 안내합니다.",
    },
    {
      id: "perform", title: "친구에게 전하는 나의 마술", objective: "관객을 고려한 대본과 동작을 구성하고 피드백으로 개선합니다.",
      activities: [
        { title: "대본 구성", minutes: 15, studentAction: "도입·시연·마무리로 짧은 공연 대본을 씁니다." },
        { title: "리허설", minutes: 25, studentAction: "짝과 공연을 연습하며 시선, 말의 속도, 도구 위치를 조정합니다." },
        { title: "시연과 성찰", minutes: 20, studentAction: "모둠에서 시연하고 연습 전후 달라진 점과 직업인의 역할을 적습니다." },
      ],
      output: "공연 대본과 모둠 시연", assessment: "피드백을 받아 고친 부분을 설명하고 관객에게 들리는 목소리로 진행합니다.",
      instructorNotes: "무대 발표가 어려운 학생은 짝 시연·대본·연출 역할로 참여할 수 있게 합니다.",
    },
  ],
  adaptations: [
    { audience: "초등학교 3~6학년", approach: "짧은 대본과 단순한 동작을 제공하고 짝 시연 중심으로 진행합니다." },
    { audience: "중·고등학생", approach: "관객의 예상을 설계한 이유를 설명하고 원리·연출을 수정합니다." },
  ],
  preparation: {
    school: ["책상이 있는 교실과 시연 공간 확보", "학년·참여 인원·발표 참여 방식 공유"],
    dreamplex: ["교구 구성·수량·사용 연령 확인", "원리 활동지와 대본 틀, 여분 교구 준비"],
    alternatives: ["발표 부담이 큰 학생은 짝 시연 또는 연출 역할 선택", "표준 교시가 40·45·50분이면 활동량을 다시 설계"],
  },
  openQuestions: ["실제 교구 구성과 제공·회수 방식", "120분 운영 여부 또는 학교 교시로 재편성", "초등 1~2학년을 위한 별도 난이도 검토"],
};

const barista: CurriculumPlan = {
  id: "barista-2", label: "2차시 · 관찰과 음료 설계", status: "proposal",
  audience: "초등학교 3~6학년", sessionMinutes: 45,
  summary: "재료의 특성을 관찰하고, 선택한 이유를 담아 나만의 음료 레시피를 만듭니다.",
  finalOutput: "재료 관찰지와 음료 레시피 카드",
  source: "src/lib/data/products/barista-experience.ts — 기존 90분 구성·관찰·레시피 산출물 기반 재설계",
  sessions: [
    {
      id: "ingredients", title: "한 잔의 음료를 이루는 재료", objective: "재료의 차이를 관찰하고 바리스타가 재료를 선택하는 이유를 설명합니다.",
      activities: [
        { title: "직업과 도구", minutes: 10, studentAction: "음료를 기획하고 만드는 직업의 업무와 도구를 살펴봅니다." },
        { title: "재료 관찰", minutes: 20, studentAction: "학교와 협의한 재료의 색·질감·향을 관찰하고 차이를 기록합니다." },
        { title: "선택 이유 나누기", minutes: 15, studentAction: "누구를 위한 음료인지 정하고 어울리는 재료와 선택 이유를 적습니다." },
      ],
      output: "재료 관찰지와 음료 기획 한 문장", assessment: "재료 차이 두 가지와 선택 이유를 관찰에 근거해 설명합니다.",
      instructorNotes: "뜨거운 장비는 강사가 다룹니다. 시음 여부와 사용할 재료는 학교와 사전 확인합니다.",
    },
    {
      id: "recipe", title: "나만의 시그니처 음료 설계", objective: "정해진 재료로 레시피를 구성하고 다른 사람이 따라 만들 수 있도록 기록합니다.",
      activities: [
        { title: "제작 계획", minutes: 10, studentAction: "재료, 양, 순서를 정하고 모둠의 역할을 나눕니다." },
        { title: "제작과 기록", minutes: 20, studentAction: "협의된 차가운 재료로 음료를 구성하며 사용한 양과 순서를 기록합니다." },
        { title: "소개와 정리", minutes: 15, studentAction: "음료의 이름과 기획 의도를 소개하고 도구·책상을 정리합니다." },
      ],
      output: "재료·양·순서·기획 의도가 적힌 레시피 카드", assessment: "다른 학생이 이해할 수 있는 순서로 레시피를 작성합니다.",
      instructorNotes: "시음이 어려운 학생도 관찰·계량 기록·디자인 역할로 참여하게 합니다. 증기 장비 실습을 기본값으로 두지 않습니다.",
    },
  ],
  adaptations: [
    { audience: "초등학교 3~4학년", approach: "그림과 선택형 기록지로 재료를 비교하고 계량을 도움받습니다." },
    { audience: "초등학교 5~6학년", approach: "음료의 대상과 재료 비율을 직접 정하고 수정한 이유를 기록합니다." },
  ],
  preparation: {
    school: ["세척·정리 공간과 책상 배치 확인", "재료 이용·시음 관련 학교 지침과 참여 조건 공유"],
    dreamplex: ["카페인 없는 실습 재료와 대체 활동 협의", "계량 도구·컵·레시피 카드·정리 용품 준비"],
    alternatives: ["시음 없이 관찰·레시피 설계 중심으로 진행 가능", "초등 40분 교시 운영 시 총 80분 안으로 재설계 필요"],
  },
  openQuestions: ["실제 실습 재료·포함 물품·시음 여부", "45분 2회 운영 또는 40분 교시 재설계", "학교 공간과 모둠별 장비 수량"],
};

export const curriculumDesigns: Record<string, CurriculumDesign> = {
  "giants-shoulder-ai-literacy": { defaultPlanId: "ai-6", plans: [aiTwo, aiFour, aiSix] },
  "magician-career-experience": { defaultPlanId: "magic-2", plans: [magic] },
  "barista-experience": { defaultPlanId: "barista-2", plans: [barista] },
};
