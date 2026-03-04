# 📸 상품 이미지 관리 가이드

## 폴더 구조

```
public/images/products/
├── fashion-designer/          ← 패션 디자이너 프로그램
│   ├── hero.webp              ← 히어로(메인) 이미지
│   ├── class-1.webp           ← 수업 현장 사진 1
│   ├── class-2.webp           ← 수업 현장 사진 2
│   ├── class-3.webp           ← 수업 현장 사진 3
│   ├── class-4.webp           ← 수업 현장 사진 4
│   └── class-5.webp           ← 수업 현장 사진 5
│
├── barista-experience/        ← 바리스타 체험 프로그램
│   └── hero.png
│
└── (새 프로그램 slug)/         ← 새 프로그램 추가 시 폴더 생성
    ├── hero.webp
    ├── class-1.webp
    └── ...
```

---

## ✅ 이미지 교체 방법 (비개발자용)

### 1단계 — 이미지 파일 준비

새 이미지를 해당 프로그램 폴더에 넣습니다.

- 기존 파일명과 **똑같은 이름**으로 넣으면 자동 교체됩니다
- 다른 이름을 쓰고 싶다면 2단계를 진행합니다

### 2단계 — 경로 수정 (파일명을 바꿨을 때만)

`src/lib/data/products/[프로그램명].images.ts` 파일을 열고,
바꾼 파일명으로 경로를 수정합니다.

**예시 — `fashion-designer.images.ts`:**
```ts
hero: `${BASE}/hero.webp`,          // ← 여기를 새 파일명으로 수정
chapter1: [
    `${BASE}/class-1.webp`,         // ← 커리큘럼 1차시 이미지
    `${BASE}/class-2.webp`,
],
```

### 3단계 — 저장 후 확인

파일을 저장하면 개발 서버에서 즉시 반영됩니다.

---

## 📐 권장 이미지 규격

| 용도 | 권장 크기 | 비율 |
|------|-----------|------|
| hero (히어로 메인) | 1200 × 800px | 3:2 |
| class (수업 현장) | 800 × 600px | 4:3 |

- **파일 형식**: `.webp` 권장 (용량 작고 화질 좋음), `.jpg` / `.png`도 가능
- **파일 용량**: 500KB 이하 권장

---

## 🆕 새 프로그램 이미지 추가 방법

1. `public/images/products/[프로그램-slug]/` 폴더를 만듭니다
2. 이미지 파일을 넣습니다 (`hero.webp`, `class-1.webp` ... )
3. `src/lib/data/products/[프로그램-slug].images.ts` 파일을 만듭니다
   (기존 `fashion-designer.images.ts`를 복사해서 수정하면 됩니다)
4. 데이터 파일(`[프로그램-slug].ts`)에서 images.ts를 import합니다
