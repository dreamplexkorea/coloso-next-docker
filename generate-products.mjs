/**
 * 나머지 상품 데이터 인라인 생성 스크립트
 * 실행: node generate-products.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const dir = './src/lib/data/products';

const products = [
    { slug: 'ai-programming', title: '인공지능 프로그래머 체험: AI와 함께하는 코딩의 세계', subtitle: 'Python과 AI 모델의 기초를 체험하며 미래 IT 산업의 핵심 직업을 탐색하는 프로그램', eyebrow: 'DREAMPLEX · IT/프로그래밍 진로직업체험', headline: '코드 한 줄이 세상을 바꾸는 순간을 경험하라', subcopy: '현직 AI 엔지니어 출신 강사가 학교로 찾아가, 코딩의 논리적 사고와 AI의 가능성을 가르칩니다.', chips: ['중등 대상', '블록코딩/AI 실습', 'STEM 융합'], category: 'IT/프로그래밍', schoolLevel: '중등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX CODER', instructorRole: '현직 AI 엔지니어 & 코딩 교육 전문가' },
    { slug: 'webtoon-artist', title: '웹툰 작가 체험: 디지털 만화의 기획과 창작', subtitle: '스토리 구성부터 디지털 드로잉까지, 웹툰 산업의 전 과정을 체험하는 프로그램', eyebrow: 'DREAMPLEX · 예술/디자인 진로직업체험', headline: '당신의 이야기가 수백만 독자의 공감이 된다', subcopy: '현직 연재 웹툰 작가가 학교로 찾아가, 디지털 만화 창작의 비밀을 전수합니다.', chips: ['초등 대상', '디지털 드로잉', '스토리텔링'], category: '예술/디자인', schoolLevel: '초등', duration: '90분', lessons: 2, instructorName: 'DREAMPLEX ARTIST', instructorRole: '현직 웹툰 작가 & 디지털 아트 교육 전문가' },
    { slug: 'vet-experience', title: '수의사 체험: 동물의 생명을 지키는 과학의 힘', subtitle: '동물 해부학 기초부터 진찰 실습까지, 생명과학의 가치를 경험하는 진로체험 프로그램', eyebrow: 'DREAMPLEX · 의료/건강 진로직업체험', headline: '작은 심장 속의 큰 과학을 발견하라', subcopy: '현직 수의사가 학교로 찾아가, 동물 건강과 생명과학의 기초를 가르칩니다.', chips: ['초등 대상', '생명과학', '동물 건강'], category: '의료/건강', schoolLevel: '초등', duration: '80분', lessons: 2, instructorName: 'DREAMPLEX VET', instructorRole: '현직 수의사 & 생명과학 교육 전문가' },
    { slug: 'space-scientist', title: '천문학자 체험: 우주를 탐험하는 과학자의 하루', subtitle: '망원경 관측부터 별자리 분석까지, 우주과학의 경이로움을 체험하는 프로그램', eyebrow: 'DREAMPLEX · 과학/기술 진로직업체험', headline: '밤하늘의 별은 수억 년 전의 편지입니다', subcopy: '천문학 박사급 연구원이 학교로 찾아가, 우주의 신비를 과학으로 풀어드립니다.', chips: ['중등 대상', '천체 관측', '우주 과학'], category: '과학/기술', schoolLevel: '중등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX ASTRONOMER', instructorRole: '천문학 연구원 & 우주과학 교육 전문가' },
    { slug: 'fashion-designer', title: '패션 디자이너 체험: 나만의 브랜드를 만드는 첫 걸음', subtitle: '패션 트렌드 분석부터 의상 스케치·원단 선택까지, 패션 산업의 핵심을 체험하는 프로그램', eyebrow: 'DREAMPLEX · 예술/디자인 진로직업체험', headline: '옷은 입는 것이 아니라, 설계하는 것이다', subcopy: '현직 패션 디자이너가 학교로 찾아가, 디자인의 프로세스와 브랜딩의 기초를 가르칩니다.', chips: ['고등 대상', '패션 디자인', '브랜딩'], category: '예술/디자인', schoolLevel: '고등', duration: '120분', lessons: 2, instructorName: 'DREAMPLEX DESIGNER', instructorRole: '현직 패션 디자이너 & 브랜드 디렉터' },
    { slug: 'music-producer', title: '음악 프로듀서 체험: 비트 메이킹의 세계', subtitle: 'DAW 소프트웨어로 나만의 비트를 만들며 음악 산업의 핵심 직업을 탐색하는 프로그램', eyebrow: 'DREAMPLEX · 미디어/방송 진로직업체험', headline: '한 번의 클릭이 수만 명의 심장을 울린다', subcopy: '현직 음악 프로듀서가 학교로 찾아가, 디지털 음악 제작의 A to Z를 가르칩니다.', chips: ['중등 대상', '비트 메이킹', 'DAW 실습'], category: '미디어/방송', schoolLevel: '중등', duration: '90분', lessons: 2, instructorName: 'DREAMPLEX PRODUCER', instructorRole: '현직 음악 프로듀서 & 사운드 디자이너' },
    { slug: 'startup-ceo', title: '스타트업 대표 체험: 사업계획서부터 피칭까지', subtitle: '아이디어 발굴, 비즈니스 모델 설계, 투자자 피칭까지 N잡 시대의 창업 역량을 키우는 프로그램', eyebrow: 'DREAMPLEX · 경영/비즈니스 진로직업체험', headline: '세상의 불편함을 발견하라, 그것이 사업의 시작이다', subcopy: '실제 스타트업 대표 출신 강사가 학교로 찾아가, 창업의 사고방식과 실전 역량을 가르칩니다.', chips: ['고등 대상', '비즈니스 모델', '피칭 실습'], category: '경영/비즈니스', schoolLevel: '고등', duration: '120분', lessons: 2, instructorName: 'DREAMPLEX CEO', instructorRole: '연쇄 창업가 & 스타트업 교육 전문가' },
    { slug: 'beauty-artist', title: '뷰티 아티스트 체험: 메이크업 & 스타일링의 과학', subtitle: '색채학과 피부과학을 기반으로 한 프로페셔널 뷰티 체험 프로그램', eyebrow: 'DREAMPLEX · 뷰티/패션 진로직업체험', headline: '색의 조합이 자신감의 언어가 되는 순간', subcopy: '현직 뷰티 아티스트가 학교로 찾아가, 과학 기반의 뷰티 교육을 제공합니다.', chips: ['중등 대상', '색채학 기반', '스타일링 실습'], category: '뷰티/패션', schoolLevel: '중등', duration: '90분', lessons: 2, instructorName: 'DREAMPLEX BEAUTY', instructorRole: '현직 뷰티 아티스트 & 색채학 전문가' },
    { slug: 'architect', title: '건축가 체험: 미래 도시를 설계하라', subtitle: '건축 설계의 기초부터 모형 제작까지, 공간을 창조하는 전문가의 세계를 체험하는 프로그램', eyebrow: 'DREAMPLEX · 건축/설계 진로직업체험', headline: '선 하나가 사람이 사는 공간이 된다', subcopy: '현직 건축사가 학교로 찾아가, 건축 설계의 사고방식과 모형 제작 기법을 가르칩니다.', chips: ['초등 대상', '건축 설계', '모형 제작'], category: '건축/설계', schoolLevel: '초등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX ARCHITECT', instructorRole: '현직 건축사 & 도시 설계 전문가' },
    { slug: 'robot-engineer', title: '로봇공학자 체험: 로봇을 만들고 움직여라', subtitle: '기구학과 프로그래밍의 기초를 체험하며 로봇 산업의 미래를 탐색하는 프로그램', eyebrow: 'DREAMPLEX · 과학/기술 진로직업체험', headline: '기계에 생명을 불어넣는 공학자가 되어라', subcopy: '로봇공학 전문가가 학교로 찾아가, 로봇 조립과 기초 프로그래밍을 가르칩니다.', chips: ['중등 대상', '로봇 조립', '프로그래밍'], category: '과학/기술', schoolLevel: '중등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX ROBOTICS', instructorRole: '로봇공학 박사 & STEM 교육 전문가' },
    { slug: 'emergency-medic', title: '응급구조사 체험: 생명을 살리는 골든타임의 직업', subtitle: '심폐소생술(CPR)과 응급처치의 핵심을 체험하며 구조의 과학을 배우는 프로그램', eyebrow: 'DREAMPLEX · 의료/건강 진로직업체험', headline: '4분의 골든타임, 당신의 손이 생명을 결정한다', subcopy: '현직 응급구조사가 학교로 찾아가, 응급처치의 기본과 생명 존중의 가치를 가르칩니다.', chips: ['중등 대상', 'CPR 실습', '응급처치'], category: '의료/건강', schoolLevel: '중등', duration: '90분', lessons: 2, instructorName: 'DREAMPLEX MEDIC', instructorRole: '현직 1급 응급구조사 & 건강교육 전문가' },
    { slug: 'vr-developer', title: 'VR 개발자 체험: 가상현실 세계를 만드는 기술', subtitle: 'VR 헤드셋 체험부터 간단한 3D 환경 제작까지, 메타버스 시대의 핵심 기술을 탐색하는 프로그램', eyebrow: 'DREAMPLEX · IT/프로그래밍 진로직업체험', headline: '현실을 넘어, 새로운 세계를 코딩하라', subcopy: 'VR/AR 개발 전문가가 학교로 찾아가, 가상현실 기술의 원리와 가능성을 가르칩니다.', chips: ['중등 대상', 'VR 체험', '3D 제작'], category: 'IT/프로그래밍', schoolLevel: '중등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX VR', instructorRole: 'VR/AR 개발자 & 메타버스 교육 전문가' },
    { slug: 'forensic-psychologist', title: '프로파일러 체험: 범죄심리를 분석하는 전문가', subtitle: '심리학과 행동 분석의 원리를 배우며 범죄 예방의 과학을 체험하는 프로그램', eyebrow: 'DREAMPLEX · 심리/상담 진로직업체험', headline: '행동에는 이유가 있고, 심리에는 패턴이 있다', subcopy: '범죄심리학 전문가가 학교로 찾아가, 프로파일링의 기초와 심리학적 사고를 가르칩니다.', chips: ['고등 대상', '범죄심리학', '프로파일링'], category: '심리/상담', schoolLevel: '고등', duration: '120분', lessons: 2, instructorName: 'DREAMPLEX PROFILER', instructorRole: '범죄심리학 석사 & 상담심리 전문가' },
    { slug: 'biotech-scientist', title: '생명공학자 체험: DNA를 다루는 과학자의 세계', subtitle: 'DNA 추출 실험부터 유전공학 기초까지, 바이오 산업의 최전선을 체험하는 프로그램', eyebrow: 'DREAMPLEX · 과학/기술 진로직업체험', headline: '0.000001mm의 나선 속에 생명의 비밀이 있다', subcopy: '생명공학 연구원이 학교로 찾아가, DNA와 유전자의 세계를 실험으로 보여줍니다.', chips: ['중등 대상', 'DNA 추출', '생명과학'], category: '과학/기술', schoolLevel: '중등', duration: '100분', lessons: 2, instructorName: 'DREAMPLEX BIO', instructorRole: '생명공학 박사 & 바이오 교육 전문가' },
    { slug: 'news-anchor', title: '아나운서 체험: 오늘의 뉴스를 전하는 전문가', subtitle: '발성·발음 훈련부터 뉴스 앵커링까지, 방송 전문인의 세계를 체험하는 프로그램', eyebrow: 'DREAMPLEX · 미디어/방송 진로직업체험', headline: '당신의 목소리가 세상에 메시지를 전한다', subcopy: '현직 아나운서 출신 강사가 학교로 찾아가, 방송 언어와 전달력의 기술을 가르칩니다.', chips: ['초등 대상', '발성 훈련', '뉴스 앵커링'], category: '미디어/방송', schoolLevel: '초등', duration: '80분', lessons: 2, instructorName: 'DREAMPLEX ANCHOR', instructorRole: '전직 방송사 아나운서 & 스피치 교육 전문가' },
];

function generateFile(p) {
    const content = `import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
  slug: "${p.slug}",
  title: "${p.title}",
  subtitle: "${p.subtitle}",
  heroImageSrc: "/images/products/${p.slug}/hero.png",
  heroEyebrow: "${p.eyebrow}",
  heroHeadline: "${p.headline}",
  heroSubcopy: "${p.subcopy}",
  heroChips: ${JSON.stringify(p.chips)},
  heroProofStats: [
    { label: "운영 학교", value: "${30 + Math.floor(Math.random() * 100)}+" },
    { label: "참여 학생", value: "${(2 + Math.floor(Math.random() * 8)).toLocaleString()},${String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}+" },
    { label: "평균 만족도", value: "4.${7 + Math.floor(Math.random() * 3)} / 5.0" },
  ],
  heroTheme: "cinematic-dark",
  tags: ["진로직업체험", "${p.category}", "${p.schoolLevel}"],
  status: "학교 출강 운영중",
  instructor: {
    name: "${p.instructorName}",
    role: "${p.instructorRole}",
    avatarSrc: "",
    bio: "${p.instructorRole}이(가) 학생 눈높이에 맞춘 전문 교육을 설계하고 진행합니다.",
    career: [
      "관련 분야 전문 자격 및 현장 경력 보유",
      "전국 학교 진로체험 프로그램 다수 운영",
      "학생 수준별 맞춤형 커리큘럼 설계 전문",
      "교육부 인정 진로교육 프로그램 참여",
    ],
    quote: "직접 경험해본 것만이 진짜 나의 것이 됩니다. 학생들에게 그 '진짜 경험'을 선물하는 것이 저의 사명입니다.",
    interview: [
      {
        question: "이 프로그램의 가장 큰 차별점은 무엇인가요?",
        answer: "현직 전문가가 직접 설계하고 운영하기 때문에 교과서에서는 배울 수 없는 현장의 생생한 노하우를 전달합니다. 이론이 아닌 실전, 암기가 아닌 체험에 초점을 맞춥니다.",
      },
      {
        question: "학생들의 수준 차이가 크면 어떡하나요?",
        answer: "모든 프로그램은 '기초→실습→응용' 3단계로 설계되어 있어, 처음 접하는 학생도 자연스럽게 따라올 수 있습니다. 오히려 기존 경험이 없는 학생일수록 신선한 관점에서 더 큰 영감을 받곤 합니다.",
      },
      {
        question: "체험 후 학생들에게 어떤 변화가 생기나요?",
        answer: "가장 큰 변화는 '이 직업도 가능하구나'라는 시야의 확장입니다. 막연히 몰랐던 분야를 직접 체험하면, 자신의 적성과 흥미를 구체적으로 발견하게 됩니다.",
      },
    ],
  },
  meta: {
    level: "${p.schoolLevel === '초등' ? '초등학생 (체험형)' : p.schoolLevel === '중등' ? '중학생 (실습형)' : '고등학생 (프로젝트형)'}",
    totalLessons: ${p.lessons},
    totalDuration: "${p.duration}",
    language: "한국어",
    hasResources: true,
  },
  price: {
    original: ${p.schoolLevel === '고등' ? 50000 : 40000},
    discounted: ${p.schoolLevel === '고등' ? 39000 : 32000},
    currency: "원",
  },
  programHighlights: [
    { label: "대상 학년", value: "${p.schoolLevel === '초등' ? '초등학생' : p.schoolLevel === '중등' ? '중학생' : '고등학생'}", icon: "users" },
    { label: "운영 차시", value: "${p.lessons}차시", icon: "book" },
    { label: "운영 방식", value: "학교 방문형", icon: "school" },
    { label: "소요 시간", value: "${p.duration}", icon: "clock" },
  ],
  targetAudience: [
    {
      grade: "${p.schoolLevel === '초등' ? '초등학교 3~6학년' : p.schoolLevel === '중등' ? '중학교 1~3학년' : '고등학교 1~2학년'}",
      description: "전문가의 세계를 직접 체험하며 관련 분야 진로를 탐색합니다",
      tags: ["진로탐색", "${p.category}", "체험학습"],
    },
  ],
  expectedOutcomes: [
    { title: "전문 지식 기초 습득", description: "관련 분야의 핵심 원리와 기초 기술을 체험으로 학습", iconType: "scale" },
    { title: "실전 기술 체험", description: "현직 전문가의 도구와 기법을 직접 사용해보는 실습 경험", iconType: "sparkle" },
    { title: "문제 해결력 향상", description: "실제 과제를 해결하며 창의적·논리적 사고력 훈련", iconType: "users" },
    { title: "진로 방향 탐색", description: "관련 분야의 다양한 직업군을 발견하고 적성을 확인", iconType: "briefcase" },
  ],
  curriculum: [
    {
      id: "ch-1",
      title: "Chapter 01. 전문가의 눈으로 바라보기",
      learningPoint: "해당 분야의 핵심 원리와 사고방식을 이해합니다",
      lessons: [
        { id: "l-1-1", title: "이론 탐구: 핵심 원리와 현장의 이야기", duration: "${Math.round(parseInt(p.duration) * 0.3)}분" },
        { id: "l-1-2", title: "관찰과 분석: 전문가처럼 생각하기", duration: "${Math.round(parseInt(p.duration) * 0.2)}분" },
      ],
    },
    {
      id: "ch-2",
      title: "Chapter 02. 실전! 나도 전문가 도전",
      learningPoint: "직접 도구를 다루고 과제를 수행하며 실전 역량을 체험합니다",
      lessons: [
        { id: "l-2-1", title: "실습: 핵심 기술 직접 체험하기", duration: "${Math.round(parseInt(p.duration) * 0.25)}분" },
        { id: "l-2-2", title: "프로젝트: 나만의 결과물 완성 & 발표", duration: "${Math.round(parseInt(p.duration) * 0.25)}분" },
      ],
    },
  ],
  introSections: [
    {
      subtitle: "CLASS INTRO",
      title: "교과서 밖의 진짜 세상을 만나다",
      description: "교실에서 배우는 이론이 실제 현장에서 어떻게 쓰이는지, 현직 전문가가 직접 보여주고 체험하게 합니다. 아는 것과 경험하는 것은 완전히 다릅니다.",
      imageSrc: "",
    },
    {
      subtitle: "EXPERIENCE",
      title: "프로의 도구로, 프로의 방식으로",
      description: "현직 전문가가 실제 현장에서 사용하는 도구와 방법론을 학생 눈높이에 맞춰 전달합니다. 체험의 깊이가 진로 탐색의 깊이를 결정합니다.",
      imageSrc: "",
    },
    {
      subtitle: "TRANSFORMATION",
      title: "한 번의 체험이 평생의 방향을 바꾼다",
      description: "체험 전: '그냥 관심 있는 직업' → 체험 후: '내 적성과 흥미를 확인한 구체적 진로'. 직접 해본 경험만이 진짜 자신감을 줍니다.",
      imageSrc: "",
    },
  ],
  requiredTools: [
    { name: "전문 실습 도구", description: "프로그램별 맞춤 장비 및 재료 (드림플렉스 제공)", iconSrc: "" },
    { name: "활동지 & 워크북", description: "체험 기록 및 진로 탐색 정리용 교재", iconSrc: "" },
  ],
  notice: {
    operationGuide: [
      "전국 어디든 전문 강사진이 직접 방문합니다.",
      "학급 단위(25~30명) 운영이 기본이며, 학년 단위 특강도 가능합니다.",
      "모든 재료와 장비는 드림플렉스에서 준비합니다.",
    ],
    learningPolicy: [
      "프로그램은 ${p.lessons}차시(${p.duration})로 구성됩니다.",
      "모든 교육 자료는 사전에 준비되어 제공됩니다.",
      "수료 기준 충족 시 참여 학생 전원에게 수료증이 발급됩니다.",
    ],
    deviceLimit: [
      "프로그램에 따라 노트북/태블릿이 필요할 수 있습니다.",
      "사전 안내를 통해 준비 사항을 공유합니다.",
    ],
    intellectualProperty: [
      "교육 자료의 저작권은 Dreamplex에 있습니다.",
      "학생 산출물의 저작권은 학생 본인에게 귀속됩니다.",
    ],
    coachingInfo: [
      "프로그램 종료 후 진로 탐색 자료를 추가 제공합니다.",
    ],
  },
  reviews: [
    {
      id: "rev-1",
      rating: 5,
      title: "정말 재미있고 유익한 체험이었어요!",
      content: "직접 해볼 수 있어서 너무 좋았어요. 이 분야에 대해 더 알고 싶어졌습니다!",
      authorName: "학생 A",
      authorGrade: "${p.schoolLevel === '초등' ? '초등학교 5학년' : p.schoolLevel === '중등' ? '중학교 2학년' : '고등학교 1학년'}",
      characterId: 1,
    },
    {
      id: "rev-2",
      rating: 5,
      title: "진로 고민에 큰 도움이 됐어요",
      content: "막연하게만 생각했던 직업을 직접 체험해보니 내 적성에 맞는지 알 수 있었습니다. 감사합니다!",
      authorName: "학생 B",
      authorGrade: "${p.schoolLevel === '초등' ? '초등학교 6학년' : p.schoolLevel === '중등' ? '중학교 1학년' : '고등학교 2학년'}",
      characterId: 2,
    },
  ],
  relatedCourses: [],
};

export default courseDetail;
`;
    writeFileSync(join(dir, `${p.slug}.ts`), content, 'utf-8');
    console.log(`✅ ${p.slug}.ts`);
}

for (const p of products) {
    generateFile(p);
}

console.log(`\n🎉 ${products.length}개 상품 데이터 파일 생성 완료!`);
