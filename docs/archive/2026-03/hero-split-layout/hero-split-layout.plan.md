# 히어로 섹션 Split 레이아웃 추가

## Context

현재 히어로 섹션은 모든 슬라이드가 **전체 배경 이미지 + 중앙 글래스모피즘 카드** 방식(overlay)입니다.
특정 상품/홍보용 슬라이드에서 **사진 60% / 글 40% 비대칭 오버랩** 레이아웃이 필요합니다.
슬라이드 데이터에 `layout` 필드를 추가하여, 슬라이드마다 레이아웃을 선택적으로 적용합니다.

## 수정 파일

| 파일 | 변경 |
|------|------|
| `src/lib/types.ts` | `layout?: "overlay" \| "split"` 필드 추가 |
| `src/app/_components/HeroBannerClient.tsx` | 렌더링 분기 + `HeroSlideSplit` 컴포넌트 추가 |
| `src/app/globals.css` | Split 레이아웃 CSS 추가 (~70줄) |
| `src/lib/data/hero.ts` | Split 예시 슬라이드 1~2개 추가 |

## 구현 단계

### 1. 타입 확장 (`src/lib/types.ts`)

`HeroSlide` 인터페이스에 추가:
```ts
layout?: "overlay" | "split";  // 기본값: "overlay"
```
- optional이므로 기존 6개 슬라이드 데이터 수정 불필요

### 2. 컴포넌트 분리 (`src/app/_components/HeroBannerClient.tsx`)

현재 `slides.map()` 내부 렌더링(~90줄)을 두 내부 함수로 분리:

- **`HeroSlideOverlay`**: 기존 overlay 레이아웃 코드를 그대로 추출
- **`HeroSlideSplit`**: 새로운 비대칭 오버랩 레이아웃

분기 로직:
```tsx
<Link ... data-hero-layout={layout}>
  {layout === "split" ? (
    <HeroSlideSplit ... />
  ) : (
    <HeroSlideOverlay ... />
  )}
</Link>
```

**Split 레이아웃 구조 (데스크톱)**:
```
z-3: 텍스트 카드 (왼쪽, max-w-520px, 글래스모피즘)
z-2: 이미지 페이드 그라디언트 (왼쪽→투명)
z-1: 배경 그라디언트
z-0: 상품 이미지 (md:left-[35%], 오른쪽 65%)
```

텍스트 카드가 이미지 위에 5~10% 오버랩하여 비대칭 효과 연출.

**모바일**: 세로 스택 (이미지 상단 55% + 텍스트 하단)

### 3. CSS 추가 (`src/app/globals.css`)

기존 히어로 CSS 뒤에 추가:

- `.hero-split-bg` — 배경 그라디언트
- `.hero-split-image-wrap` — 이미지 영역 (오른쪽 65%)
- `.hero-split-image-fade` — 이미지 왼쪽 페이드 (오버랩 자연스럽게)
- `.hero-split-text-wrap` — 텍스트 영역
- `.hero-split-card` / `.hero-split-card-active` — 카드 + 입장 애니메이션
  - 데스크톱: `translateX(-30px)` → `translateX(0)` (왼쪽에서 등장)
  - 모바일: `translateY(20px)` → `translateY(0)` (아래에서 등장)
- `[data-hero-layout="split"]` 셀렉터로 텍스트 왼쪽 정렬
- 테마별 변형 (dark/mid/light)
- `@media (max-width: 719px)` 모바일 반응형
- `@media (prefers-reduced-motion: reduce)` 접근성

### 4. 데이터 추가 (`src/lib/data/hero.ts`)

기존 6개 슬라이드 유지, split 슬라이드 1~2개 추가 (3번째/5번째 위치 배치로 시각적 다양성 확보)

```ts
{
  id: "hero-split-1",
  layout: "split",
  eyebrow: "SPECIAL PROMOTION",
  title: "여름 특별 할인",
  subtitle: "인기 클래스 최대 50% 할인...",
  // ...
}
```

## 핵심 설계 결정

1. **Swiper fade 호환**: 각 SwiperSlide는 동일 크기의 absolute 컨테이너 유지 → 내부 배치만 변경하므로 fade 전환과 완전 호환
2. **기존 코드 보존**: overlay 레이아웃 로직은 추출만 할 뿐 변경 없음
3. **Ken Burns**: split 이미지에도 동일하게 적용 (`hero-kenburns-active`)
4. **하단 컨트롤**: 네비게이션/프로그레스 바는 Swiper 외부 absolute 요소이므로 영향 없음 (z-10)

## 검증 방법

1. `npm run dev`로 개발 서버 실행
2. 브라우저에서 확인:
   - overlay ↔ split 슬라이드 fade 전환이 자연스러운지
   - split 레이아웃의 오버랩 효과 (카드가 이미지 위에 걸쳐지는지)
   - Ken Burns 줌 효과 동작
   - 카드 입장 애니메이션 (왼쪽에서 슬라이드 인)
   - 네비게이션 버튼, 프로그레스 바, pagination 정상 동작
3. 모바일 뷰 (DevTools 반응형): 세로 스택 레이아웃 확인
4. `prefers-reduced-motion` 설정 시 애니메이션 비활성화 확인
5. `npm run build` 빌드 성공 확인
