# 다음 작업 이어하기

## 먼저 읽을 것

1. [`PROJECT.md`](../PROJECT.md) — 목적과 이번 구현 범위
2. [재설계 계획](01-plan/features/dreamplex-curriculum-redesign.plan.md) — 디자인·화면·데이터·15개 과제의 관계
3. [상세 수업안](02-design/dreamplex-curriculum-blueprints.md) — 3개 프로그램, 5개 구성
4. [미결 내용](OPEN_WORRIES.md) — 실제 운영에 필요한 자료
5. [상세페이지 템플릿](02-design/detail-page-templates.md) — 다섯 구성, 23개 배정, 비교·변경 방법

## 구현된 흐름

`detailTemplates.ts`에서 프로그램의 템플릿을 정하고, 내용이 있는 섹션만 그 순서대로 조립한다. 목차도 같은 순서를 읽는다. `/detail-templates`에서 같은 프로그램을 다섯 구성과 1120px·390px 너비로 비교할 수 있다. 미리보기는 저장되지 않으며 기본 배정은 코드에서 변경한다.

`products/[slug]`에서 실제 제품을 찾고 `curriculumDesigns[slug]`를 연결한다. `CurriculumSelection`이 선택한 수업안을 관리하며 상세 활동과 하단 요약이 같은 선택을 읽는다. 견적 주소에는 program과 plan만 전달하고, 견적 페이지가 저장소 원본에서 제목·시간·결과물을 다시 만든다. 요청사항에 그 설명을 초기 입력한다. 잘못된 수업안 ID는 해당 프로그램의 기본 수업안으로 돌아가며, 알 수 없는 프로그램에 타 프로그램 내용을 대입하지 않는다.

현행 견적은 수업안별 확정 금액을 계산하지 않는다. 운영 저장·상담 접수 기능도 없다. 실제 접수처럼 보이는 안내를 되살리지 않는다.

## 전체 화면 점검 결과

[화면 점검 기록](04-report/detail-page-visual-audit.md)에 대표 5종의 데스크톱·모바일 캡처 범위, 수정한 문제, 남은 자료·메뉴 연결 문제를 기록했다. 비교 화면의 ‘전체 길이로 보기’로 페이지 전체 구성을 검토할 수 있다. 고정 목차와 버튼은 일반 높이의 프레임에서 확인한다.

## 다음에 만들 것

실제 자료를 확보한 대표 프로그램 하나를 끝까지 완성한다. 대표 사진·활동 사진·결과물 예시 → 강사/후기 확인 → 상세 수업안 검토 → 학교 시간표 적용 → 모바일/데스크톱 검증 순서로 진행한다. 그다음 같은 구조로 나머지 20개 프로그램을 이전한다.

새 프로그램은 등록된 slug와 실제 수업안만 연결한다. 원본이 없는 플로리스트·과학자 카드 2개는 노출에서 제외했다. 원본을 확보하면 해당 상세 데이터를 만들고 다시 노출할 수 있다. 예전 별칭 주소는 현 단계에서 자동 리다이렉트하지 않으며 404로 처리한다.

## 변경할 파일

- `src/lib/data/curriculumPlans.ts`: 실제 수업안 내용
- `src/lib/curriculum.ts`: 구조·합산·선택·검증 규칙
- `src/app/products/[slug]/_components/DetailedCurriculum.tsx`: 상세 수업 화면
- `src/lib/detailTemplates.ts`: 템플릿 정의와 23개 기본 배정
- `src/app/products/[slug]/_components/detail-templates.css`: 다섯 화면과 반응형 배치
- `src/app/detail-templates/`: 읽기 전용 비교 화면
- `scripts/export-curriculum-plans.mjs`: 같은 원본으로 검토 문서 생성
- `src/lib/data/products/*`: 기존 프로그램 소개·강사·준비물·후기

수업안을 수정한 뒤 `npm run test:curriculum`, `npm run docs:curriculum`을 실행한다. 구성 수, 시간, 결과물, 준비 조건을 따로 하드코딩하지 않는다. 기존 생성 스크립트는 이미 존재하는 프로그램을 건너뛰도록 바꿨으므로 개별 원본을 직접 수정한다.

템플릿·배정 수정은 `npm run test:templates`로 확인한다. 화면 수정은 `npm run lint`와 `npm run build`로 확인한다. 실제 사진과 현장 조건이 없는 상태에서 디자인·운영 준비가 모두 끝났다고 기록하지 않는다.
