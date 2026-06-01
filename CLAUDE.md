# CLAUDE.md — coloso-next 프로젝트 가이드

데이원컴퍼니/클로소 스타일 온라인 클래스 플랫폼 클론(Next.js). 이 파일은 AI 작업의 가드레일이다.

## ⛔ UI 작업 전 필수
**모든 디자인/UI/컴포넌트 작업은 코드를 만지기 전에 먼저 읽는다:**
1. `docs/design/coloso-design-system.md` — 디자인 정답지(토큰·타이포·여백·모션·컴포넌트 레시피·Do/Don't)
2. `docs/design/coloso-live-reference.md` — 실제 coloso.co.kr 레퍼런스 & 갭 표

스펙과 코드가 충돌하면 `src/app/globals.css`의 `@theme` 블록이 최종 진실이다.

## 스택
- Next.js **16.1.6** (App Router) · React **19.2.3** · TypeScript 5
- **Tailwind CSS v4** — 설정은 `tailwind.config.js`가 아니라 `src/app/globals.css`의 `@theme inline` 블록
- Framer Motion 12 (애니메이션) · Swiper 12 (캐러셀) · clsx (조건부 클래스)
- UI 라이브러리 **없음** — 전부 자체 구현 (shadcn/Radix/MUI 도입 금지)

## 스크립트
```bash
npm run dev     # next dev (로컬 개발)
npm run build   # next build
npm run start   # next start
npm run lint    # eslint
npm run test:recently-viewed   # 단일 테스트(node --test)
```

## 디렉토리
- `src/app/` — 라우트 + `_components/`(페이지 컴포넌트: CourseCard, HeroBanner, CourseCarousel …) + `globals.css`(디자인 토큰)
- `src/components/ui/` — 프리미티브(Badge, Container, Skeleton)
- `src/components/layout/` — Header, Footer, Navigation
- `src/components/carousel/` — Swiper 래퍼
- `src/lib/data/` — 하드코딩 데이터(hero, courses, navigation, footer …)
- `docs/design/` — 디자인 정답지 문서

## 코드 관례 (이 레포의 확립된 스타일을 따른다)
- **디자인 토큰만 사용**: `bg-primary`, `text-grey-400` 등. 새 hex/그림자/이징 즉흥 생성 금지.
- **픽셀 임의값 관례**: 여백·라운드는 `px-[12px]`, `rounded-[10px]` 식. rem은 타이포 스케일에.
- **베이스 10px**: `html { font-size: 62.5% }` → `1rem = 10px`.
- **서버/클라이언트 분리**: 클라이언트 전용은 `*Client.tsx`로 분리(`"use client"`).
- **타입**: `interface`로 props 정의.
- **주석**: 한국어 (`/** 강의 카드 … */`), 섹션 구분 주석 유지.
- **컴포넌트**: PascalCase 파일. 새로 만들기 전에 기존 재사용/variant 확장 우선.
- **모션**: 표준 이징 `cubic-bezier(0.22,1,0.36,1)`, 스프링 `{stiffness:400,damping:15}`, `useReducedMotion` 항상 분기.

## 크리에이티브 5-에이전트 팀 (`.claude/agents/`)
"클로소 디자이너+마케터를 고용한 것처럼" 프로그램별 홍보·디자인을 산출하는 팀. **메인 Claude가 오케스트레이션.**

| 에이전트 | 언제 호출 |
|----------|-----------|
| `coloso-consultant` | 프로그램 홍보/디자인 전략·상담·실행 브리프 (시작점) |
| `coloso-marketing-strategist` | 홍보 효과 분석·채널/증빙 전략·플레이북 갱신 |
| `coloso-copywriter` | 헤드라인·배지·CTA·증빙 카피, 데이터 필드 채움 |
| `coloso-ui-designer` | 클로소급 UI/페이지 구현(레포 토큰 준수) |
| `coloso-design-analyst` | 참고 사이트 종합 캡처·아키타입/DNA 추출 |

오케스트레이션·시나리오: `docs/design/agent-team-blueprint.md`.
- `.gitignore`는 `.claude/`를 제외하되 `!.claude/agents/`로 **에이전트 정의만 추적**(settings 등은 계속 무시).

## 문서 인덱스 (작업 전 참조)
- 디자인 토큰·규칙: `docs/design/coloso-design-system.md`
- 클로소 아키타입·DNA: `docs/design/coloso-reference-library.md`
- 라이브 레퍼런스/갭: `docs/design/coloso-live-reference.md`
- **마케팅 플레이북(포터블)**: `docs/marketing/coloso-marketing-playbook.md`
- **카피 템플릿 팩(복붙)**: `docs/marketing/coloso-copy-templates.md`
- 에이전트 팀 블루프린트: `docs/design/agent-team-blueprint.md`

## 커밋
- 작업 브랜치에서 작업. 명확한 한국어/영문 커밋 메시지.
