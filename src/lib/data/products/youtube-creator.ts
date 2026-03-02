import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
    slug: "youtube-creator",
    title: "유튜브 크리에이터 체험: 콘텐츠로 세상과 소통하는 법",
    subtitle: "영상 기획부터 촬영·편집·업로드까지, 1인 미디어 시대의 핵심 역량을 배우는 프로그램",
    heroImageSrc: "/images/products/youtube-creator/hero.png",
    heroEyebrow: "DREAMPLEX · 미디어/방송 진로직업체험",
    heroHeadline: "카메라 앞에 서는 순간, 세상이 교실이 된다",
    heroSubcopy: "현직 100만 구독자 크리에이터 출신 강사가 학교로 찾아가, 영상 기획의 A to Z를 가르칩니다.",
    heroChips: ["중등 대상", "실전 촬영 실습", "편집 기초"],
    heroProofStats: [
        { label: "운영 학교", value: "85+" },
        { label: "참여 학생", value: "5,800+" },
        { label: "평균 만족도", value: "4.9 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "유튜브", "크리에이터", "중등"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX CREATOR",
        role: "현직 콘텐츠 크리에이터 & 미디어 교육 전문가",
        avatarSrc: "",
        bio: "유튜브·틱톡에서 활동하는 현직 크리에이터가 영상 기획의 핵심 원리와 실전 노하우를 학생 눈높이에 맞춰 전달합니다.",
        career: ["유튜브 채널 누적 조회수 5,000만+", "콘텐츠 제작·편집 실무 경력 8년", "청소년 미디어 리터러시 교육 150회+", "방송 영상 제작 프로덕션 출신"],
        quote: "좋은 콘텐츠의 시작은 화려한 장비가 아니라, '누구에게 무엇을 전할 것인가'라는 기획력입니다.",
        interview: [
            { question: "요즘 아이들이 다 유튜버 되고 싶어하는데, 이 체험은 뭐가 다른가요?", answer: "막연한 '유튜버 꿈'을 체계적인 '콘텐츠 기획 역량'으로 전환합니다. 섬네일 디자인의 시각 심리학, 영상 구성의 3막 구조, 편집의 리듬감까지 — 프로가 사용하는 프레임워크를 가르칩니다." },
            { question: "스마트폰으로도 충분히 할 수 있나요?", answer: "네, 오히려 스마트폰 하나로 프로급 결과물을 만드는 것이 이 프로그램의 핵심입니다. 장비 의존이 아닌 기획력과 편집 감각에 집중합니다." },
            { question: "학생들이 만든 영상은 어떻게 되나요?", answer: "학생 개인 채널이 아닌 교육용 비공개 환경에서 공유합니다. 원하는 학생에게는 최종 편집본 파일을 제공하여 포트폴리오로 활용할 수 있습니다." },
        ],
    },
    meta: { level: "중학생 (실습형)", totalLessons: 2, totalDuration: "100분", language: "한국어", hasResources: true },
    price: { original: 40000, discounted: 32000, currency: "원" },
    programHighlights: [
        { label: "대상 학년", value: "중학생", icon: "users" },
        { label: "운영 차시", value: "2차시", icon: "book" },
        { label: "운영 방식", value: "학교 방문형", icon: "school" },
        { label: "소요 시간", value: "100분", icon: "clock" },
    ],
    targetAudience: [
        { grade: "중학교 1~3학년", description: "미디어 리터러시와 콘텐츠 기획 역량을 체험으로 키웁니다", tags: ["미디어리터러시", "영상기획", "디지털역량"] },
    ],
    expectedOutcomes: [
        { title: "콘텐츠 기획 능력", description: "타겟 분석, 주제 선정, 스토리보드 작성까지 기획 프로세스 체험", iconType: "scale" },
        { title: "영상 촬영 기초", description: "앵글, 구도, 조명의 기초를 스마트폰으로 실습", iconType: "sparkle" },
        { title: "편집 감각 훈련", description: "컷 편집, 자막, BGM 삽입 등 기본 편집 기술 습득", iconType: "users" },
        { title: "미디어 진로 탐색", description: "PD, 에디터, 마케터 등 미디어 산업의 다양한 직업 발견", iconType: "briefcase" },
    ],
    curriculum: [
        {
            id: "ch-1", title: "Chapter 01. 기획의 기술: 1분 안에 사로잡는 콘텐츠 설계", learningPoint: "성공하는 콘텐츠의 3요소와 스토리보드 작성법을 배웁니다", lessons: [
                { id: "l-1-1", title: "콘텐츠 분석: 인기 영상의 숨겨진 공식 해부", duration: "25분" },
                { id: "l-1-2", title: "나만의 콘텐츠 기획서 & 스토리보드 제작", duration: "25분" },
            ]
        },
        {
            id: "ch-2", title: "Chapter 02. 촬영과 편집: 스마트폰 하나로 프로처럼", learningPoint: "실전 촬영과 편집을 통해 완성된 콘텐츠를 제작합니다", lessons: [
                { id: "l-2-1", title: "촬영 실습: 앵글·구도·전환의 기술", duration: "25분" },
                { id: "l-2-2", title: "편집 워크숍: 리듬감 있는 영상 완성하기", duration: "25분" },
            ]
        },
    ],
    introSections: [
        { subtitle: "CLASS INTRO", title: "모든 학생은 이미 콘텐츠 크리에이터입니다", description: "SNS에 사진을 올리고, 릴스를 만들며, 스토리를 공유하는 학생들에게 부족한 건 '기획의 프레임워크'입니다. 이 수업은 그 프레임을 선물합니다.", imageSrc: "" },
        { subtitle: "EXPERIENCE", title: "스마트폰 하나로 프로급 영상을 만드는 비밀", description: "아이폰이든 갤럭시든, 학생들이 매일 쓰는 기기로 프로 수준의 콘텐츠를 만드는 비법을 전수합니다. 장비는 중요하지 않습니다, 시선이 중요합니다.", imageSrc: "" },
        { subtitle: "TRANSFORMATION", title: "소비자에서 창작자로, 시야의 대전환", description: "체험 전: '재미있는 영상 보기' → 체험 후: '왜 이 영상이 재미있는지 분석하고 직접 만들기'. 미디어를 비판적으로 읽고 창의적으로 만드는 능력을 갖춥니다.", imageSrc: "" },
    ],
    requiredTools: [
        { name: "스마트폰", description: "학생 개인 스마트폰 (촬영·편집용)", iconSrc: "" },
        { name: "편집 앱", description: "CapCut 등 무료 앱 (사전 설치 안내)", iconSrc: "" },
    ],
    notice: {
        operationGuide: ["전국 중학교 어디든 전문 강사진이 직접 방문합니다.", "학급 단위(25~30명) 운영 기본입니다.", "학생 스마트폰이 필요하며, 미보유 학생에게는 대여용 기기를 준비합니다."],
        learningPolicy: ["촬영 중 학생 초상권 보호를 위해 사전 동의서를 받습니다.", "제작된 영상은 교육 목적으로만 사용됩니다.", "편집 앱 사전 설치 가이드를 제공합니다."],
        deviceLimit: ["학생 1인당 스마트폰 1대가 필요합니다.", "Wi-Fi 환경이 권장됩니다."],
        intellectualProperty: ["학생 제작 콘텐츠의 저작권은 학생 본인에게 귀속됩니다."],
        coachingInfo: ["수업 후 편집 팁 영상 링크를 제공합니다."],
    },
    reviews: [
        { id: "rev-1", rating: 5, title: "내가 만든 영상이 진짜 유튜브 같아요!", content: "스토리보드부터 편집까지 직접 하니까 영상 만드는 게 이렇게 체계적인 작업이란 걸 알게 됐어요!", authorName: "송*아 학생", authorGrade: "중학교 2학년", characterId: 1 },
        { id: "rev-2", rating: 5, title: "장비 없이도 이렇게 멋진 영상을!", content: "카메라 없이 스마트폰으로만 촬영했는데 결과물이 정말 프로 수준이어서 깜짝 놀랐습니다.", authorName: "한*석 학생", authorGrade: "중학교 1학년", characterId: 2 },
    ],
    relatedCourses: [],
};

export default courseDetail;
