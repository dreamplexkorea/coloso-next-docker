import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
    slug: "giants-shoulder-ai-literacy",
    title: "거인의 어깨를 타라 — AI 리터러시 프로그램",
    subtitle:
        "중·고등학생 대상 AI 리터러시 프로그램. 학교 시간표에 맞춰 2·4·6차시 중 비교·설계, 제작·검증, 발표까지의 수업 구성을 선택합니다.",
    heroImageSrc: "/images/products/giants-shoulder-ai-literacy/hero.png",
    heroEyebrow: "중·고등학교 방문형 진로직업체험 · DREAMPLEX",
    heroHeadline: "교실을, 미래 진로의 실험실로",
    heroSubcopy:
        "Dreamplex가 학교 현장으로 직접 찾아가 학생 참여형 AI·진로 프로젝트 수업을 운영합니다.",
    heroChips: ["중·고 대상", "학교 방문 운영", "프로젝트형 수업"],
    heroProofStats: [
        { label: "운영 학교", value: "35+" },
        { label: "참여 학생", value: "4,200+" },
        { label: "평균 만족도", value: "4.9 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "학교 방문형", "AI 리터러시", "프로젝트형"],
    status: "학교 출강 운영중",
    instructor: {
        name: "거인의어깨",
        role: "AI 교육 전문가",
        avatarSrc: "",
        bio: "단순한 프롬프트 입력을 넘어, 학생들이 직접 위인들의 사고방식을 가진 AI 멘토를 설계하고 제작하는 프로젝트형 AI 리터러시 교육을 진행합니다.",
        career: [
            "중·고등학생 대상 AI 리터러시 프로그램 기획 및 운영",
            "프로젝트형 AI 교육 커리큘럼 설계 전문",
            "노코드 AI 에이전트 빌더 교육 다수 진행",
            "프롬프트 엔지니어링 워크숍 강사",
            "AI 윤리 및 비판적 사고 교육 연구",
        ],
        quote:
            "학생들이 AI를 단순한 도구가 아닌, 자신만의 사고 파트너로 설계하는 경험 — 그것이 진짜 AI 리터러시의 시작입니다.",
        interview: [
            {
                question: "이 프로그램의 핵심 차별점은 무엇인가요?",
                answer:
                    "AI가 내놓은 답변을 비교하고, 내가 원하는 멘토의 관점을 지시문으로 설계합니다. 4·6차시 구성에서는 이를 에이전트로 구현하고 응답을 테스트하는 활동으로 확장합니다.",
            },
            {
                question: "코딩을 전혀 모르는 학생도 참여할 수 있나요?",
                answer:
                    "코딩 경험 없이 참여할 수 있도록 설계했습니다. 2차시는 비교와 지시문 설계에 집중하고, 4·6차시는 노코드 도구를 활용합니다. 계정 사용이 어려우면 강사 시연과 오프라인 활동으로 조정합니다.",
            },
            {
                question: "선택하는 차시에 따라 무엇이 달라지나요?",
                answer:
                    "2차시는 AI 답변 비교와 멘토 지시문 설계에 집중합니다. 4차시는 에이전트 제작과 테스트를, 6차시는 교차 검증과 최종 발표를 포함합니다. 구체적인 활동과 결과물은 선택한 상세 수업안에서 확인할 수 있습니다.",
            },
            {
                question: "프로그램 후 학생들에게 남는 산출물은 무엇인가요?",
                answer:
                    "2차시는 답변 비교표와 멘토 지시문 카드, 4차시는 멘토 설계 캔버스·실행 기록·테스트 기록, 6차시는 설계·실행·테스트 기록과 진로 성찰지를 남기는 수업안입니다. 결과물의 저장·공유 방식과 이용 기간은 사용할 도구를 확정한 후 안내합니다.",
            },
        ],
    },
    meta: {
        level: "입문 (노코드)",
        totalLessons: 6,
        totalDuration: "5시간 (300분)",
        language: "한국어",
        hasResources: true,
    },
    price: {
        original: 220000,
        discounted: 169000,
        currency: "원",
    },
    programHighlights: [
        { label: "대상 학년", value: "중·고등학생", icon: "users" },
        { label: "총 차시", value: "6차시", icon: "book" },
        { label: "운영 방식", value: "학교 방문형", icon: "school" },
        { label: "소요 시간", value: "5시간", icon: "clock" },
    ],
    targetAudience: [
        {
            grade: "중학교 1~3학년",
            description: "진로 탐색이 필요한 학생들에게 AI 시대의 새로운 직업을 경험하게 합니다",
            tags: ["진로탐색", "AI 리터러시", "미래직업"],
        },
        {
            grade: "고등학교 1~2학년",
            description: "진로 선택 전 다양한 AI 관련 직업을 체험하고 포트폴리오를 구성합니다",
            tags: ["진로체험", "포트폴리오", "AI 활용"],
        },
    ],
    expectedOutcomes: [
        {
            title: "AI 도구 활용 능력",
            description: "AI 답변을 비교하고, 제작이 포함된 4·6차시에서는 노코드 에이전트 빌더를 활용",
            iconType: "scale",
        },
        {
            title: "프로젝트 기반 산출물",
            description: "2차시의 지시문 카드에서 4·6차시의 에이전트 시제품까지, 구성에 맞는 결과물을 제작",
            iconType: "users",
        },
        {
            title: "미래 진로 탐색",
            description: "AI 시대 유망 직업군을 체험하며 진로 방향 설정",
            iconType: "sparkle",
        },
        {
            title: "비판적 사고력 강화",
            description: "AI의 한계를 직접 발견하고 검증하는 비판적 사고 마인드셋 장착",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 거인을 만나고 해부하기",
            learningPoint: "AI 도구의 종류와 활용법을 이해하고, 일반 챗봇과 맞춤형 AI의 차이를 분석합니다",
            carouselImages: [
                "https://cdn.imweb.me/thumbnail/20240220/fe21cd5f74686.png",
                "https://cdn.imweb.me/thumbnail/20240220/76fcbc3b0f2b5.png",
            ],
            lessons: [
                {
                    id: "l-1-1",
                    title: "앵무새 vs 스승 — 일반 챗봇과 위인 AI 답변 교차 비교",
                    duration: "50분",
                },
                {
                    id: "l-1-2",
                    title: "시스템 프롬프트의 5가지 핵심 요소 해부",
                    duration: "50분",
                },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 나만의 거인 설계 및 제작",
            learningPoint: "기획 캔버스를 활용한 AI 에이전트 설계와 노코드 프롬프트 엔지니어링을 실습합니다",
            carouselImages: [
                "https://cdn.imweb.me/thumbnail/20240220/d7c8e5a3b1f42.png",
            ],
            lessons: [
                {
                    id: "l-2-1",
                    title: "기획 캔버스 작성 — 어떤 AI 단짝을 만들까?",
                    duration: "50분",
                },
                {
                    id: "l-2-2",
                    title: "노코드 에이전트 조립과 프롬프트 엔지니어링",
                    duration: "50분",
                },
            ],
        },
        {
            id: "ch-3",
            title: "Chapter 03. 검증 테스트 및 라이브 쇼케이스",
            learningPoint: "AI 윤리와 편향성을 검증하고, 최종 산출물을 발표하며 진로 탐색 역량을 확인합니다",
            carouselImages: [
                "https://cdn.imweb.me/thumbnail/20240220/a2e9f8c1d5b73.png",
            ],
            lessons: [
                {
                    id: "l-3-1",
                    title: "팀 교차 테스트 — AI 윤리와 편향성 검증",
                    duration: "50분",
                },
                {
                    id: "l-3-2",
                    title: "최종 데모 시연과 AI 진로 탐색 발표",
                    duration: "50분",
                },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "나의 상황 × 거인의 사고방식 = 맞춤형 통찰",
            description:
                "단순히 질문하고 답변받는 앵무새가 아닙니다. 나만의 AI 에이전트를 만들면 그 위인을 내 옆에 멘토로 임명하는 것과 같습니다.",
            imageSrc: "",
        },
        {
            subtitle: "EXPERIENCE 01",
            title: '"잡스 선배, 제 진로 고민은요"',
            description:
                "4·6차시 제작 수업에서 학생은 멘토가 되묻도록 지시문을 설계합니다. 위인의 관점을 참고한 가상 멘토와 대화하고, 응답이 설계 의도에 맞는지 테스트합니다.",
            imageSrc: "",
        },
        {
            subtitle: "EXPERIENCE 02",
            title: "위인들의 AI 토론 배틀",
            description:
                '서로 다른 관점의 AI 답변을 비교하는 활동 예시입니다. 같은 질문에 어떤 근거와 관점이 담겼는지 살펴보고, 실제 위인의 생각과 AI가 만든 답변을 구분합니다.',
            imageSrc: "",
        },
        {
            subtitle: "EXPERIENCE 03",
            title: "할루시네이션 직접 발견",
            description:
                "AI 답변의 근거를 확인하고 잘못된 응답을 찾아봅니다. 6차시 구성에서는 다른 팀의 에이전트를 교차 테스트하며 편향과 오류를 검증하는 활동으로 확장합니다.",
            imageSrc: "",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "학교 시간표에 맞춘 2·4·6차시 구성",
            description:
                "2차시는 비교와 지시문 설계, 4차시는 제작과 테스트, 6차시는 교차 검증과 발표를 중심으로 설계했습니다. 학생의 경험과 학교 운영 여건을 확인한 뒤 활동 범위와 도구를 확정합니다.",
            imageSrc: "",
        },
        {
            subtitle: "PORTFOLIO",
            title: "학생들에게 남는 진짜 산출물",
            description:
                "비교표·지시문 카드, 설계 캔버스·실행·테스트 기록, 진로 성찰지 중 선택한 수업 구성에 맞는 결과물을 남깁니다. 학생 활동을 기록하고 되돌아보는 자료로 활용하며, 저장·공유 방식은 운영 협의에서 확인합니다.",
            imageSrc: "",
        },
    ],
    requiredTools: [
        {
            name: "ChatGPT",
            description: "OpenAI 생성형 AI 챗봇 (무료 계정 가능)",
            iconSrc: "",
        },
        {
            name: "노코드 에이전트 빌더",
            description: "코딩 없이 블록으로 AI 에이전트를 조립하는 플랫폼",
            iconSrc: "",
        },
        {
            name: "웹 브라우저",
            description: "Chrome / Edge 등 최신 웹 브라우저",
            iconSrc: "",
        },
    ],
    notice: {
        operationGuide: [
            "프로그램은 학교 방문형으로 운영되며, 강사가 직접 학교로 방문합니다.",
            "최소 1개 학급(약 25명) 이상부터 신청 가능합니다.",
            "프로그램 일정은 학교 일정에 맞춰 협의 후 확정됩니다.",
            "교육 장소(교실, 컴퓨터실 등)는 학교에서 제공해 주셔야 합니다.",
            "견적 요청 후 담당자가 2영업일 이내에 연락드립니다.",
        ],
        learningPolicy: [
            "선택한 2·4·6차시 구성을 기준으로 학교 시간표와 쉬는 시간을 협의합니다.",
            "모든 교육 자료는 사전에 준비되어 제공됩니다.",
            "수료 기준 충족 시 참여 학생 전원에게 수료증이 발급됩니다.",
            "프로그램 종료 후 교육 결과 보고서가 제공됩니다.",
        ],
        deviceLimit: [
            "실습을 위해 학생 1인당 노트북 또는 태블릿 1대가 필요합니다.",
            "인터넷 접속이 가능한 Wi-Fi 환경이 필요합니다.",
            "기기 준비가 어려운 경우 사전 협의를 통해 대안을 마련할 수 있습니다.",
        ],
        intellectualProperty: [
            "교육 자료의 저작권은 Dreamplex에 있으며, 무단 복제 및 배포를 금합니다.",
            "학생 산출물(AI 에이전트 등)의 저작권은 학생 본인에게 귀속됩니다.",
            "교육 장면 촬영은 학교 동의 하에 홍보 목적으로 사용될 수 있습니다.",
        ],
        coachingInfo: [
            "프로그램 종료 후 30일간 온라인 Q&A 지원이 제공됩니다.",
            "추가 심화 프로그램이 필요한 경우 별도 문의해 주세요.",
        ],
    },
    reviews: [
        {
            id: "review-1",
            rating: 5,
            title: "진짜 수사관이 된 것 같았어요!",
            content:
                "평소에 CSI 같은 드라마를 좋아했는데 직접 수사관이 되어 지문을 채취해보고 범인을 찾으니까 정말 신기하고 재미있었어요!",
            authorName: "김*민 학생",
            authorGrade: "초등학교 6학년",
            characterId: 1,
        },
        {
            id: "review-2",
            rating: 5,
            title: "과학 원리가 쏙쏙! 진로 고민에 큰 도움",
            content:
                "과학이 어렵게만 느껴졌는데 수사 과정에 적용되는 원리를 배우니 이해가 쏙쏙 됐어요. 진로에 대해 진지하게 고민해본 유익한 시간이었습니다.",
            authorName: "이*윤 학생",
            authorGrade: "중학교 2학년",
            characterId: 2,
            photoSrc: "https://cdn.imweb.me/thumbnail/20231206/887fc6ca70a1e.jpg",
        },
        {
            id: "review-3",
            rating: 4,
            title: "협동해서 단서 찾기 꿀잼!",
            content:
                "친구들과 협동해서 단서를 찾고 사건을 해결하는 과정이 긴장감 넘쳤어요. 실제 수사 도구들을 써볼 수 있어서 정말 좋았습니다.",
            authorName: "박*준 학생",
            authorGrade: "초등학교 5학년",
            characterId: 3,
        },
        {
            id: "review-4",
            rating: 5,
            title: "AI로 나만의 멘토를 만들다니!",
            content:
                "코딩을 전혀 몰랐는데 블록 조립하듯 AI 에이전트를 만들 수 있어서 놀라웠어요. 제가 만든 AI가 진짜 대화하는 걸 보고 뿌듯했습니다.",
            authorName: "최*서 학생",
            authorGrade: "중학교 1학년",
            characterId: 4,
        },
    ],
    relatedCourses: [],
};

export default courseDetail;
