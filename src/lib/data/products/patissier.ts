import type { CourseDetail } from "@/lib/types";
const courseDetail: CourseDetail = {
    slug: "patissier", title: "파티시에 체험: 프랑스 디저트의 과학과 예술", subtitle: "버터·설탕·밀가루의 화학 반응을 이해하고, 프로 파티시에의 기술로 디저트를 완성하는 프로그램",
    heroImageSrc: "/images/products/patissier/hero.png", heroEyebrow: "DREAMPLEX · 요리/식품 진로직업체험", heroHeadline: "달콤한 한 입 속에 숨겨진 정밀 과학", heroSubcopy: "현직 호텔 파티시에 출신 강사가 학교로 찾아가, 과학 원리 기반의 디저트 제작 수업을 운영합니다.",
    heroChips: ["초등 대상", "식품과학 융합", "실습 중심"], heroProofStats: [{ label: "운영 학교", value: "60+" }, { label: "참여 학생", value: "4,200+" }, { label: "평균 만족도", value: "4.8 / 5.0" }], heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "파티시에", "요리식품", "초등"], status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX PATISSIER", role: "호텔 파티시에 & 식품과학 교육 설계팀", avatarSrc: "", bio: "5성급 호텔 페이스트리 셰프 출신이 학생 눈높이에 맞춘 디저트 과학 교육을 설계합니다.", career: ["5성급 호텔 페이스트리 부서 근무 경력", "프랑스 르 코르동 블루 디플로마", "초등학생 식품과학 교육 100회+", "식품화학 기반 레시피 개발 전문"], quote: "오븐 속 반죽이 부풀어 오르는 이유를 아는 파티시에와 모르는 파티시에는 완전히 다른 디저트를 만듭니다.", interview: [
            { question: "단순한 쿠키 만들기 체험과 뭐가 다른가요?", answer: "일반 체험은 레시피를 따라하게 합니다. 저희는 '왜 베이킹파우더를 넣으면 부풀까(화학반응)', '왜 초콜릿을 데우면 녹을까(결정구조)'를 먼저 가르칩니다. 원리를 아는 학생은 실패해도 원인을 찾을 수 있습니다." },
            { question: "알레르기나 위생이 걱정됩니다.", answer: "수업 전 알레르기 사전 조사를 반드시 실시합니다. 개인별 위생장갑, 앞치마, 헤어캡을 제공하며, 모든 식재료는 유통기한과 산지 정보를 공개합니다." },
            { question: "어떤 디저트를 만들게 되나요?", answer: "마들렌, 쿠키, 초콜릿 트러플 등 학교 현장에서 안전하게 만들 수 있는 프로급 디저트를 선별했습니다. 완성품은 포장하여 가정에 선물로 가져갑니다." },
        ]
    },
    meta: { level: "초등학생 (체험형)", totalLessons: 2, totalDuration: "80분", language: "한국어", hasResources: true },
    price: { original: 35000, discounted: 28000, currency: "원" },
    programHighlights: [{ label: "대상 학년", value: "초등학생", icon: "users" }, { label: "운영 차시", value: "2차시", icon: "book" }, { label: "제공 물품", value: "완성 디저트", icon: "gift" }, { label: "소요 시간", value: "80분", icon: "clock" }],
    targetAudience: [{ grade: "초등학교 3~6학년", description: "베이킹 속 과학 원리를 체험하며 식품 분야 진로를 탐색합니다", tags: ["식품과학", "베이킹", "화학반응"] }],
    expectedOutcomes: [
        { title: "식품화학 기초 이해", description: "베이킹파우더의 이산화탄소 발생, 캐러멜리제이션 등 화학 원리 체험", iconType: "scale" },
        { title: "프로 베이킹 기술 습득", description: "계량, 반죽, 성형, 데코레이션 등 파티시에 기본 기술 실습", iconType: "sparkle" },
        { title: "창작 디저트 설계", description: "기본 레시피를 응용하여 나만의 시그니처 디저트를 기획", iconType: "users" },
        { title: "식품 분야 진로 탐색", description: "파티시에, 식품공학자, 푸드스타일리스트 등 진로 발견", iconType: "briefcase" },
    ],
    curriculum: [
        { id: "ch-1", title: "Chapter 01. 디저트의 과학: 왜 케이크는 부풀까?", learningPoint: "베이킹의 핵심 화학 반응과 재료의 역할을 이해합니다", lessons: [{ id: "l-1-1", title: "재료의 비밀: 버터·설탕·밀가루의 과학적 역할", duration: "20분" }, { id: "l-1-2", title: "화학반응 실험: 베이킹파우더 vs 베이킹소다", duration: "20분" }] },
        { id: "ch-2", title: "Chapter 02. 파티시에 데뷔: 나만의 디저트 완성", learningPoint: "프로의 기술로 실제 디저트를 만들어 완성합니다", lessons: [{ id: "l-2-1", title: "정밀 계량과 반죽: 파티시에의 기본기 실습", duration: "20분" }, { id: "l-2-2", title: "데코레이션 & 플레이팅: 맛과 비주얼을 동시에", duration: "20분" }] },
    ],
    introSections: [
        { subtitle: "CLASS INTRO", title: "주방은 실험실이고, 레시피는 실험 공식입니다", description: "버터가 녹는 온도, 밀가루의 글루텐 형성, 설탕의 캐러멜리제이션 — 디저트 하나에 화학·물리의 핵심이 담겨있습니다.", imageSrc: "" },
        { subtitle: "EXPERIENCE", title: "프로 파티시에의 도구와 재료로, 프로처럼", description: "실제 호텔 주방에서 사용하는 계량 도구와 최고급 식재료로 수업합니다. 아이들의 완성품은 백화점 디저트 못지않습니다.", imageSrc: "" },
        { subtitle: "TRANSFORMATION", title: "먹는 사람에서 만드는 사람으로", description: "체험 전: '디저트는 사먹는 것' → 체험 후: '재료의 원리를 알면 내가 만들 수 있다'. 소비자에서 창작자로 시야이 전환됩니다.", imageSrc: "" },
    ],
    requiredTools: [{ name: "베이킹 재료 키트", description: "최고급 버터, 밀가루, 초콜릿 등 (드림플렉스 제공)", iconSrc: "" }, { name: "개인 위생 용품", description: "장갑, 앞치마, 헤어캡 (전원 지급)", iconSrc: "" }],
    notice: {
        operationGuide: ["전국 초등학교 가사실 또는 일반 교실에서 운영합니다.", "오븐 사용이 불가한 경우 노오븐 레시피로 대체합니다.", "알레르기 사전 조사를 반드시 실시합니다."],
        learningPolicy: ["개인별 위생 용품을 착용합니다.", "완성 디저트는 개별 포장하여 가져갑니다.", "모든 식재료의 원산지와 유통기한을 공개합니다."],
        deviceLimit: ["별도의 디지털 기기는 필요하지 않습니다.", "가사실 또는 테이블이 있는 교실이면 충분합니다."],
        intellectualProperty: ["레시피 카드는 학생에게 제공됩니다."],
        coachingInfo: ["가정에서 따라할 수 있는 영상 레시피 링크를 제공합니다."],
    },
    reviews: [
        { id: "rev-1", rating: 5, title: "제가 만든 마들렌이 카페보다 맛있어요!", content: "처음에 어떻게 만들지 걱정했는데, 선생님이 원리부터 차근차근 알려주셔서 완벽하게 만들었어요!", authorName: "박*서 학생", authorGrade: "초등학교 4학년", characterId: 1 },
        { id: "rev-2", rating: 5, title: "과학실험처럼 재미있는 요리 수업", content: "베이킹파우더 넣으면 왜 부풀어 오르는지 실험으로 확인하니까 너무 신기했어요. 과학이 맛있어요!", authorName: "최*온 학생", authorGrade: "초등학교 5학년", characterId: 2 },
    ],
    relatedCourses: [],
};
export default courseDetail;
