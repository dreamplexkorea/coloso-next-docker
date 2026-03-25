# 상세페이지 에셋 관리 어드민 구현 계획

## 목표
코드를 모르는 직원이 상세페이지의 이미지 + 주요 텍스트를 쉽게 교체하고, 저장 후 실제 페이지에서 확인할 수 있는 내부 어드민 페이지

## 핵심 결정사항

### 데이터 저장: TS → JSON 마이그레이션
- 현재 65개 상품이 TypeScript 파일로 하드코딩 → JSON 파일로 전환
- `/src/lib/data/products-json/{slug}.json` 에 저장
- 프론트엔드는 JSON을 읽어서 동일하게 렌더링 (서버 컴포넌트에서 `fs.readFileSync`)
- 어드민에서 수정 시 JSON 파일을 직접 덮어씀

### 보안: ID/PW 로그인
- 환경변수 `ADMIN_USERNAME`, `ADMIN_PASSWORD` 로 계정 설정
- JWT 토큰 기반 세션 (쿠키 저장)
- Next.js middleware로 `/admin/*`, `/api/admin/*` 보호

### 프리뷰: 저장 후 확인
- 저장 버튼 클릭 → JSON 파일 덮어쓰기 → 실제 상세페이지 새 탭으로 열기
- 별도 프리뷰 시스템 없이 실제 페이지에서 바로 확인

---

## 구현 단계

### Phase 1: JSON 마이그레이션 (기반)

1. **마이그레이션 스크립트** (`scripts/migrate-products-to-json.mjs`)
   - 기존 TS 파일에서 데이터를 읽어 JSON으로 변환
   - `/src/lib/data/products-json/` 디렉토리에 `{slug}.json` 파일 생성

2. **데이터 레이어 수정** (`src/lib/data/products/index.ts`)
   - 65개 TS import 대신 JSON 파일을 `fs.readFileSync`로 읽기
   - `getProductBySlug()`, `getAllProducts()` 등 기존 API 유지
   - JSON 쓰기 함수 추가: `saveProduct(slug, data)`

3. **검증**: 기존 상세페이지가 동일하게 렌더링되는지 확인

### Phase 2: 인증 시스템

4. **환경변수 설정** (`.env.local`)
   - `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_JWT_SECRET`

5. **로그인 API** (`src/app/api/admin/auth/route.ts`)
   - POST: ID/PW 검증 → JWT 토큰 발급 → httpOnly 쿠키 설정

6. **미들웨어** (`src/middleware.ts`)
   - `/admin/*` 경로 접근 시 JWT 쿠키 검증
   - 미인증 시 `/admin/login`으로 리다이렉트

7. **로그인 페이지** (`src/app/admin/login/page.tsx`)
   - 간단한 ID/PW 입력 폼

### Phase 3: 어드민 API

8. **상품 목록 API** (`src/app/api/admin/products/route.ts`)
   - GET: 전체 상품 slug + title 목록 반환

9. **상품 조회/수정 API** (`src/app/api/admin/products/[slug]/route.ts`)
   - GET: JSON 파일 읽어서 반환
   - PUT: 데이터 검증 후 JSON 파일 저장

10. **이미지 업로드 API** (`src/app/api/admin/upload/route.ts`)
    - POST: multipart/form-data → `/public/images/products/{slug}/` 에 저장
    - 저장된 경로 문자열 반환

### Phase 4: 어드민 UI

11. **어드민 레이아웃** (`src/app/admin/layout.tsx`)
    - 퍼블릭 Header/Footer 없는 별도 레이아웃
    - 간단한 상단 바 (로고 + 로그아웃)

12. **상품 목록 페이지** (`src/app/admin/products/page.tsx`)
    - 65개 상품 카드 그리드
    - 검색/필터
    - 각 상품 클릭 → 편집 페이지로 이동

13. **상품 편집 페이지** (`src/app/admin/products/[slug]/page.tsx`)
    - 편집 가능한 필드 (이미지 + 주요 텍스트만):

    | 섹션 | 편집 항목 |
    |------|----------|
    | 히어로 | heroImageSrc (이미지 업로드), heroHeadline, heroSubcopy, heroChips |
    | 기본정보 | title, subtitle, tags |
    | 강사 | name, role, bio, avatarSrc (이미지 업로드), career[], quote |
    | 프로그램 소개 | introSections[].title, description, imageSrc (이미지 업로드) |
    | 커리큘럼 | chapters[].title, lessons[].title, carouselImages (이미지 업로드) |

    - 이미지 필드: 드래그앤드롭 업로드 + 현재 이미지 미리보기
    - 텍스트 필드: 일반 input/textarea
    - 배열 필드: 추가/삭제 버튼
    - **저장** 버튼 → PUT API 호출 → 성공 시 실제 상세페이지 새 탭 오픈

14. **이미지 업로더 컴포넌트** (`_components/ImageUploader.tsx`)
    - 드래그앤드롭 영역
    - 현재 이미지 프리뷰 표시
    - 업로드 진행 표시

---

## 파일 구조

```
src/
  app/
    admin/
      layout.tsx              # 어드민 전용 레이아웃
      login/page.tsx          # 로그인 페이지
      products/
        page.tsx              # 상품 목록
        [slug]/
          page.tsx             # 상품 편집 페이지
          _components/
            ProductEditor.tsx   # 편집 폼 (client component)
            ImageUploader.tsx   # 이미지 업로드 컴포넌트
            SectionEditor.tsx   # 접을 수 있는 섹션 래퍼
    api/admin/
      auth/route.ts           # 로그인 API
      products/
        route.ts              # 상품 목록 API
        [slug]/route.ts       # 상품 CRUD API
      upload/route.ts         # 이미지 업로드 API
  middleware.ts               # 인증 미들웨어
  lib/data/
    products-json/            # JSON 데이터 (65개 파일)
    products/index.ts         # 수정: JSON에서 읽기 + 쓰기 함수
scripts/
  migrate-products-to-json.mjs  # 일회성 마이그레이션 스크립트
.env.local                    # 어드민 계정 정보
```

## 외부 의존성
- 없음 (모든 기능을 Next.js 내장 기능 + 브라우저 API로 구현)
- JWT는 Web Crypto API의 HMAC으로 직접 구현 (경량)
