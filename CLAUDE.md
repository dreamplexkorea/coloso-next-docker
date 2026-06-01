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

## 디자인 에이전트 팀 (계획)
3-에이전트 디자인팀(Design Director / Design System Engineer / UI Implementer) 청사진은 `docs/design/agent-team-blueprint.md`. **아직 미구현.**
- 참고: `.gitignore`가 `.claude/`를 통째로 제외 중(46행). 향후 `.claude/agents/`를 커밋하려면 ignore 예외(`!.claude/agents/`) 추가가 필요하다.

## 커밋
- 작업 브랜치에서 작업. 명확한 한국어/영문 커밋 메시지.
