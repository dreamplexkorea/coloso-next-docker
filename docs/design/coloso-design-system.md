# Coloso 디자인 시스템 스펙 (브랜드북)

> **이 문서는 디자인 정답지다.** 모든 UI 작업(에이전트 포함)은 코드를 만지기 전에 이 문서를 먼저 읽는다.
> 단일 소스 of truth = `src/app/globals.css`의 `@theme inline` 블록. 본 문서는 그 값을 **규칙**으로 옮긴 것이다. 값이 충돌하면 globals.css가 이긴다.

---

## 0. 황금 규칙 (요약)

1. **토큰만 쓴다.** 임의의 hex/px 색을 새로 만들지 말고 `@theme` 토큰(`bg-primary`, `text-grey-400` …)을 쓴다.
2. **라이트가 캐논.** 글로벌 화면은 화이트/라이트 톤. 다크 톤은 히어로/몰입 섹션 전용.
3. **픽셀 임의값 관례를 따른다.** 여백·라운드는 `px-[12px]`, `rounded-[10px]` 식 픽셀 임의값. (이 레포의 확립된 관례)
4. **모션은 정해진 안무만.** 표준 이징/스프링 값 외 새 값 도입 금지. `useReducedMotion` 항상 존중.
5. **커스텀 컴포넌트 유지.** shadcn/Radix/MUI 도입 금지 — 전부 자체 구현.

---

## 1. 컬러

### 1-A. 글로벌 캐논 (라이트) — Dreamplex 화이트+블루 포인트
| 토큰 | 값 | 용도 | 금지 |
|------|----|------|------|
| `--color-primary` | `#2B6B9A` | 주요 액션·강조 보더·primary 배지 | 배경 대면적 채움 금지 |
| `--color-accent` | `#4AADE6` | 보조 강조·accent 배지 | 본문 텍스트 색 금지 |
| `--color-background` | `#F6F8FB` | 페이지 배경 | — |
| `--color-surface` | `#FFFFFF` | 카드/패널 표면 | — |
| `--color-surface-light` | `#F1F4F8` | 옅은 표면 | — |

**그레이 스케일** (`--color-grey-50`~`900`): `50 #1A2A3A`(가장 어두움) → `900 #F1F4F8`(가장 밝음). 카드 배경 `grey-700 #CDD6E1`, 보더 `grey-600/800`, 보조 텍스트 `grey-400 #7A8A9A`.

**텍스트 시맨틱**: `text-primary #0F1E2E`(본문) · `text-secondary #334A62` · `text-tertiary #64748b` · `text-hint #94a3b8`(플레이스홀더).

### 1-B. 다크 서브시스템 (히어로/몰입 섹션 전용)
`--coloso-*`, `--hero-*` 토큰은 **글로벌에 쓰지 않는다.** 오직 히어로 캐러셀·풀블리드 몰입 섹션의 어두운 배경 위에서만 사용:
- `--coloso-bg-black #0c0c0c`, `--coloso-bg-surface #141416`
- 액센트: `--coloso-accent-main #00f0ff`(시안 글로우), `--coloso-accent-violet #a855f7`
- 텍스트 100~400(`#ffffff`→`#64748b`)
- 히어로 오버레이: `--hero-overlay-start/mid/end`, `--hero-glow rgba(0,240,255,.32)`, `--hero-progress #00f0ff`

> ⚠️ 라이브 클로소 히어로는 현재 밝은 톤이다(`coloso-live-reference.md` 참조). 다크 히어로를 쓸 때는 의도적 "시네마틱 섹션"임을 명확히 하고, 일반 콘텐츠 영역으로 번지지 않게 한다.

---

## 2. 타이포그래피

- **폰트**: `Pretendard Variable` (CDN @import). 스택: `var(--font-sans)`.
- **베이스**: `html { font-size: 62.5% }` → **1rem = 10px**. 모든 사이즈를 rem으로, 10배 암산.
- **스케일**: `--text-xs 1.2rem` · `sm 1.3` · `base 1.4`(본문 기본) · `md 1.6` · `lg 1.8` · `xl 2.0` · `2xl 2.4` · `3xl 3.2` · `4xl 4.0`.

### 위계 규칙
| 역할 | 사이즈 | 두께 | leading |
|------|--------|------|---------|
| 카드 제목 | `1.4rem` → md `1.6rem` | `font-medium` | `leading-[1.4]` |
| 카드 부제 | `1.2rem` | regular, `text-grey-400`, `truncate` | — |
| 메타 태그 | `1.1rem` | `font-semibold` | tight |
| 히어로 타이틀 | `2.9rem` → sm `4.1` → lg `5.7rem` | `font-bold` | `leading-[1.08]` |
| 히어로 부제 | `1.36` → sm `1.58` → lg `1.86rem` | `font-medium` | `leading-[1.62]` |

- 반응형은 **clamp 또는 브레이크포인트 직접 지정** 둘 다 허용(히어로 높이는 `clamp(520px,72vh,760px)` 패턴).

---

## 3. 여백 리듬 (Spacing)

- **단위는 픽셀 임의값.** 허용 스텝: `4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 28 · 32 · 48`(px).
- 카드 내부 패딩 `p-[12px]`, 요소 간 `space-y-[6px]`, 인라인 갭 `gap-[4px]`.
- 섹션 상하 패딩 기본 `py-[48px]`.
- 컨테이너 좌우 패딩: `px-[20px] sm:px-[24px] lg:px-[32px]` (= `Container` 컴포넌트가 캡슐화).

---

## 4. 레이아웃

- **콘텐츠 max-width**: `--width-content: 1120px`. 항상 `Container`(`src/components/ui/Container.tsx`)로 감싼다: `mx-auto w-full max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]`.
- **내비 높이**: `--nav-h: 70px`.
- **브레이크포인트**(커스텀): `sm 560 · md 720 · lg 960 · xl 1240`(px). Tailwind 기본 sm/md/lg도 일부 혼용됨 — 신규 코드는 커스텀 토큰 우선.

---

## 5. 라운드 & 엘리베이션

### Radius
| 값 | 용도 |
|----|------|
| `4px` | 배지, 메타 태그 |
| `10px` | 카드/썸네일 (`rounded-[10px]`, 상단만 `rounded-t-[10px]`) |
| `12–24px` | 큰 패널, 글래스 카드 |
| `50%` | 원형 컨트롤 버튼 |

### Shadow (엘리베이션 단계, globals.css 실제 값 기반)
1. 미세: `0 2px 8px -2px rgba(7,28,53,.12)` / `0 2px 12px -4px rgba(0,0,0,.08)`
2. 카드 호버: `0 4px 16px -4px rgba(0,0,0,.18)`
3. 떠있는 패널: `0 12px 32px -22px rgba(0,18,42,.5)` / `0 16px 36px -28px rgba(15,23,42,.42)`
4. 시네마틱(히어로): `0 28px 60px -46px rgba(0,0,0,.88)` … `0 60px 120px -20px rgba(0,0,0,.8)` (다단 합성)

> 새 그림자를 즉흥적으로 만들지 말고 위 단계에서 고른다.

---

## 6. 모션 안무

- **표준 이징**: `cubic-bezier(0.22, 1, 0.36, 1)`.
- **표준 스프링**(Framer Motion): `{ type: "spring", stiffness: 400, damping: 15 }`.
- **카드 호버**: `whileHover={{ y: -6, scale: 1.02 }}` + 위 스프링.
- **표준 트랜지션**: `transition-all duration-300 ease-in-out`(단순 상태), 드롭다운 `0.15s`, 모바일 메뉴 `0.4s` 스태거.
- **Ken Burns**: 히어로 이미지 `4.6s ease-out`, scale `1.03`.
- **접근성**: 모든 모션은 `useReducedMotion()` 분기로 끌 수 있어야 한다. `prefers-reduced-motion` 미디어쿼리 존중(globals.css에 이미 존재).

---

## 7. 컴포넌트 해부 레시피

> "이렇게 만들면 클로소풍이 된다"는 검증된 패턴. 새 컴포넌트는 기존을 먼저 재사용/확장한다.

### Badge — `src/components/ui/Badge.tsx`
```
inline-flex items-center rounded-[4px] px-[6px] py-[2px] text-[1.1rem] font-semibold leading-tight
variant: primary(bg-primary text-white) · accent(bg-accent text-white) · default(bg-grey-700 text-grey-300)
```
`clsx`로 variant 분기. 새 색 만들지 말고 variant 추가로 확장.

### CourseCard — `src/app/_components/CourseCard.tsx`
- 래퍼: `motion.div.course-card-cinematic rounded-[10px] bg-grey-700`, 호버 `{y:-6, scale:1.02}` + 표준 스프링.
- 썸네일: `aspect-video`(16:9) 또는 `aspect-[3/4]`, `overflow-hidden rounded-t-[10px]`, `next/image fill object-cover`.
- 배지: 좌상단 `absolute left-[8px] top-[8px] flex gap-[4px]`.
- 정보: `space-y-[6px] p-[12px]` → 메타태그 행(`gap-[4px]`, 보더 태그 `rounded-[4px] px-[6px] py-[1px] text-[1.1rem]`) → `hr.border-grey-600` → 제목(`text-[1.4rem] md:text-[1.6rem] font-medium leading-[1.4]`) → 부제(`text-[1.2rem] text-grey-400 truncate`).

### HeroSlide — `src/app/_components/HeroBannerClient.tsx`
- Swiper `EffectFade + Autoplay + Pagination(fraction)`, 높이 `clamp(520px,72vh,760px)`.
- 레이아웃 분기: `overlay`(중앙 텍스트 카드) / `split`(이미지+텍스트 비대칭).
- 다크 서브시스템 토큰 사용 구역(§1-B). Ken Burns + 글래스 컨트롤(`backdrop-blur-[10px] bg-black/38`).

### Container — `src/components/ui/Container.tsx`
모든 섹션 폭 래핑. §4 참조.

### 상품 상세페이지 13단 아키타입 — `src/app/products/[slug]/page.tsx`
클로소 전 장르가 공유하는 상세페이지 골격(레퍼런스 라이브러리 §2.3). 새 상세페이지는 이 순서를 기본 틀로 삼는다:
1. **히어로**(`ProductHero.tsx`): 풀폭 비주얼 + eyebrow + 성과형 headline + 강사 + **증빙지표 3칸**(label 작게/대문자 + value 크게/볼드) + **하이라이트 4칸**(대상·차시·방식·시간) + 듀얼 CTA. 다크는 `heroTheme` cinematic-dark/mid 한정.
2. 문제/페인 → 3. 가치제안(3카드) → 4. 사회적 증거(지표+후기+비포애프터) → 5. 정보 박스 → 6. 커리큘럼(아코디언, 점층) → 7. 강사 프로필 → 8. Q&A 인터뷰 → 9. 예시 갤러리 → 10. (선택)시리즈 → 11. 유의/환불 → 12. 가격/결제 → 13. **듀얼 CTA 바**(`StickyBottomSummary`: 솔리드 "상담 신청" + 보조 "프로그램 자세히").
- **증빙지표 블록**: `flex` 3칸, 각 칸 `text-[1.1rem]`(label) + `text-2xl font-bold`(value). 데이터 `heroProofStats`.
- **듀얼 CTA**: 1차 `bg-primary text-white` 솔리드, 2차 텍스트/보더 링크. 고·저 관여 동시.
- 데이터 매핑: `CourseDetail`(`heroHeadline`·`heroProofStats`·`programHighlights`·`curriculum`·`expectedOutcomes`·`reviews`·`notice`) — 대부분 이미 존재.
- 마케팅 카피 채움은 `coloso-copywriter`, 전환 점검은 플레이북 §6 13단 체크리스트.

---

## 8. Do / Don't 체크리스트

**Do**
- ✅ `@theme` 토큰·시맨틱 클래스 사용 (`bg-primary`, `text-grey-400`)
- ✅ 픽셀 임의값 스텝(§3)에서 여백 선택
- ✅ 기존 컴포넌트 재사용/variant 확장
- ✅ `clsx`로 조건부 클래스
- ✅ 서버/클라이언트 컴포넌트 분리 관례(`*Client.tsx`) 유지
- ✅ 한국어 주석 (`/** 강의 카드 … */`)
- ✅ `useReducedMotion` 분기

**Don't**
- ❌ 새 hex 색·임의 그림자·임의 이징 즉흥 생성
- ❌ 다크 `--coloso-*`/`--hero-*` 토큰을 일반 콘텐츠 영역에 사용
- ❌ shadcn/Radix/MUI 등 외부 UI 라이브러리 도입
- ❌ rem 직접 매직값으로 스케일 깨기 (스케일 §2 사용)
- ❌ `Container` 없이 풀폭 콘텐츠 배치
- ❌ inline `style`로 색 하드코딩 (동적 배경 등 불가피한 경우만)

---

## 9. 참조 파일
- 토큰 소스: `src/app/globals.css` (1–69행 `@theme`, 이후 커스텀 클래스)
- 프리미티브: `src/components/ui/` (Badge, Container, Skeleton)
- 페이지 컴포넌트: `src/app/_components/` (CourseCard, HeroBanner, CourseCarousel …)
- 레이아웃: `src/components/layout/` (Header, Footer, Navigation)
- 데이터: `src/lib/data/` (hero, courses, navigation, footer …)
- 라이브 정답지: `docs/design/coloso-live-reference.md`
- 종합 레퍼런스(아키타입·DNA): `docs/design/coloso-reference-library.md`
- 마케팅 플레이북: `docs/marketing/coloso-marketing-playbook.md`
- 에이전트 팀: `.claude/agents/` (디자이너·마케터·카피·분석가·컨설턴트), 블루프린트 `docs/design/agent-team-blueprint.md`
