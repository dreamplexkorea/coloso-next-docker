import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
    slug: "forensic-science",
    title: "과학수사대 체험: CSI가 되어 사건을 해결하라",
    subtitle: "지문 채취, DNA 분석, 혈흔 감정 — 실제 과학수사 기법을 체험하는 STEM 융합 프로그램",
    heroImageSrc: "/images/products/forensic-science/hero.png",
    heroEyebrow: "DREAMPLEX · 과학/수사 진로직업체험",
    heroHeadline: "범인은 반드시 흔적을 남긴다",
    heroSubcopy: "현직 과학수사 전문가가 학교로 직접 찾아와, 과학적 사고로 사건을 해결하는 수사 체험을 운영합니다.",
    heroChips: ["중등 대상", "실험 실습", "STEM 융합"],
    heroProofStats: [{ label: "운영 학교", value: "95+" }, { label: "참여 학생", value: "7,100+" }, { label: "평균 만족도", value: "4.9 / 5.0" }],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "과학수사", "CSI", "중등"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX CSI", role: "과학수사 전문가 & STEM 교육 설계팀", avatarSrc: "", bio: "과학수사 및 법의학 전문가가 설계한 시나리오 기반 수사 체험으로 과학적 사고력을 키웁니다.", career: ["법과학 석사 과정 연구원 커리큘럼 감수", "과학수사 체험 프로그램 300회+ 운영", "STEM 융합교육 프로그램 설계 전문", "전국 청소년 과학 캠프 인기 강사"], quote: "범죄 현장의 먼지 한 톨도 과학의 눈으로 보면 이야기를 합니다. 학생들이 그 이야기를 읽는 법을 배웁니다.", interview: [
            { question: "중학생이 하기에 너무 어렵거나 무섭지 않나요?", answer: "모든 시나리오는 교육용으로 안전하게 설계되어 있습니다. '도둑맞은 보물찾기' 같은 흥미로운 설정으로, 무섭지 않으면서도 과학적 추론의 핵심을 체험할 수 있습니다." },
            { question: "실험 도구의 안전성은 어떤가요?", answer: "모든 시약은 교육용 안전 시약이며, 보호장갑과 고글을 반드시 착용합니다. 실제 현장 장비가 아닌 학생용 키트를 사용하므로 100% 안전합니다." },
            { question: "이 체험이 교과 과정과 어떻게 연결되나요?", answer: "지문 채취는 생물(피부 구조), 혈흔 감정은 화학(산화반응), 족적 분석은 물리(힘과 압력)와 직결됩니다. 교과서 속 이론이 수사 현장에서 어떻게 쓰이는지 직접 체험합니다." },
        ]
    },
    meta: { level: "중학생 (실험형)", totalLessons: 2, totalDuration: "100분", language: "한국어", hasResources: true },
    price: { original: 40000, discounted: 32000, currency: "원" },
    programHighlights: [{ label: "대상 학년", value: "중학생", icon: "users" }, { label: "운영 차시", value: "2차시", icon: "book" }, { label: "제공 물품", value: "수사 키트", icon: "gift" }, { label: "소요 시간", value: "100분", icon: "clock" }],
    targetAudience: [{ grade: "중학교 1~3학년", description: "과학적 사고력과 논리적 추론 능력을 수사 체험으로 키웁니다", tags: ["과학적사고", "논리추론", "STEM"] }],
    expectedOutcomes: [
        { title: "과학적 관찰력", description: "현장 증거를 체계적으로 수집하고 분류하는 관찰 훈련", iconType: "scale" },
        { title: "논리적 추론 능력", description: "증거를 기반으로 가설을 세우고 검증하는 과학적 사고 훈련", iconType: "sparkle" },
        { title: "실험 기술 습득", description: "지문 채취, 혈흔 감정 등 실제 과학수사 기법 체험", iconType: "users" },
        { title: "법과학 진로 탐색", description: "수사관, 법의학자, 법과학자 등 다양한 진로 발견", iconType: "briefcase" },
    ],
    curriculum: [
        {
            id: "ch-1", title: "Chapter 01. 사건 현장 분석: CSI의 눈으로 보기", learningPoint: "증거 수집의 원칙과 과학적 관찰법을 익힙니다", lessons: [
                { id: "l-1-1", title: "현장 보존과 증거 수집: 로카르의 교환 법칙", duration: "25분" },
                { id: "l-1-2", title: "지문 채취 실습: 분말법과 화학적 감정법", duration: "25분" },
            ]
        },
        {
            id: "ch-2", title: "Chapter 02. 증거 분석과 범인 추리", learningPoint: "수집한 증거를 분석하여 논리적으로 범인을 추론합니다", lessons: [
                { id: "l-2-1", title: "혈흔 감정과 족적 분석: 화학·물리의 만남", duration: "25분" },
                { id: "l-2-2", title: "최종 추리 발표: 증거 기반 프로파일링", duration: "25분" },
            ]
        },
    ],
    introSections: [
        { subtitle: "CLASS INTRO", title: "모든 범인은 흔적을 남기고, 과학은 그것을 읽는다", description: "드라마 속 CSI가 아닌, 실제 과학수사의 원리를 학교에서 체험합니다. 지문, 혈흔, 족적 — 모든 증거가 과학 교과서와 연결됩니다.", imageSrc: "" },
        { subtitle: "EXPERIENCE", title: "나도 수사관! 시나리오 기반 현장 추리", description: "가상의 사건 현장이 교실에 펼쳐집니다. 팀별로 증거를 수집하고, 분석하고, 범인을 추리하는 과정에서 과학적 사고가 자연스럽게 훈련됩니다.", imageSrc: "" },
        { subtitle: "TRANSFORMATION", title: "과학은 시험 과목이 아니라 세상을 읽는 도구", description: "체험 전: '과학은 외워야 하는 것' → 체험 후: '과학은 세상의 미스터리를 풀 수 있게 해주는 초능력'. 과학에 대한 인식 자체가 변합니다.", imageSrc: "" },
    ],
    requiredTools: [
        { name: "과학수사 키트", description: "지문분말, 감정시약, 보호장비 등 (드림플렉스 제공)", iconSrc: "" },
        { name: "활동지 & 수사 일지", description: "증거 기록 및 추리 과정 정리용 워크시트", iconSrc: "" },
    ],
    notice: {
        operationGuide: ["전국 중학교 과학실 또는 일반 교실에서 운영합니다.", "학급 단위(25~30명) 팀 활동 기반입니다.", "모든 실험 도구와 시약은 드림플렉스에서 준비합니다."],
        learningPolicy: ["교육용 안전 시약만 사용합니다.", "보호장갑과 고글 착용을 필수로 합니다.", "실험 후 철저한 정리 및 폐기물 처리를 진행합니다."],
        deviceLimit: ["별도의 디지털 기기는 필요하지 않습니다.", "과학실 또는 일반 교실 환경이면 충분합니다."],
        intellectualProperty: ["교육 자료의 저작권은 Dreamplex에 있습니다."],
        coachingInfo: ["과학수사 동아리 연계 프로그램(4~8차시)으로 확장 가능합니다."],
    },
    reviews: [
        { id: "rev-1", rating: 5, title: "진짜 수사관이 된 것 같았어요!", content: "지문을 채취하고 증거를 분석해서 범인을 찾는 과정이 너무 재미있었어요. CSI 드라마보다 더 신났습니다!", authorName: "김*준 학생", authorGrade: "중학교 1학년", characterId: 1 },
        { id: "rev-2", rating: 5, title: "과학이 이렇게 쓸모있을 줄이야", content: "화학 반응으로 혈흔을 찾고, 물리학으로 발자국을 분석할 수 있다는 게 충격이었어요!", authorName: "박*연 학생", authorGrade: "중학교 3학년", characterId: 2 },
    ],
    relatedCourses: [],
};

export default courseDetail;
