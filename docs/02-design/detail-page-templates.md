# 드림플렉스 상세페이지 템플릿

2026-09-07 · 사용자 요청: 상세페이지를 다양한 템플릿으로 만든다.

## 구현 원칙

학교 선생님이 프로그램을 검토할 때 먼저 묻는 질문에 맞춰 첫 화면, 섹션 순서, 소개와 커리큘럼의 배치를 바꾼다. 프로그램 내용과 상세 수업안을 복사하지 않으므로 어떤 템플릿에서도 같은 차시·시간·준비물·견적 연결을 사용한다.

| 템플릿 | 첫 화면 | 먼저 읽는 내용 | 커리큘럼 배치 |
|---|---|---|---|
| 체험 몰입형 `experience` | 큰 체험 이미지와 헤드라인 | 프로그램 소개 → 커리큘럼 → 운영 강사진 | 차시별 긴 목록 |
| 결과물 전시형 `showcase` | 소개와 결과물 이미지를 나란히 배치 | 기대 결과 → 만드는 과정 → 준비 | 차시별 카드, 모바일 한 열 |
| 프로젝트 로드맵형 `roadmap` | 학습 도착점과 이동 가능한 단계 | 커리큘럼 → 프로그램 소개 → 준비 | 세로 타임라인 |
| 학교 운영 안내형 `school` | 대상·시간·구성 요약을 별도 영역으로 표시 | 준비·운영 → 프로그램 소개 → 커리큘럼 | 목표를 먼저 읽고 활동을 펼치는 목록 |
| 전문가 스토리형 `expert` | 운영팀 인물 또는 이름과 관점 | 운영 강사진 → 프로그램 소개 → 커리큘럼 | 차시별 긴 목록 |

다섯 템플릿 모두 준비·운영, 강사진, 유의사항, 관련 프로그램을 지원한다. 내용이 없는 섹션은 목차와 본문에서 함께 빠진다. 후기는 해당 프로그램의 원문 근거가 있는 경우만 노출한다.

## 23개 프로그램의 기본 배정

| 프로그램 slug | 기본 템플릿 |
|---|---|
| `giants-shoulder-ai-literacy` | 프로젝트 로드맵형 |
| `magician-career-experience` | 체험 몰입형 |
| `barista-experience` | 결과물 전시형 |
| `drone-pilot` | 체험 몰입형 |
| `youtube-creator` | 결과물 전시형 |
| `3d-printing` | 학교 운영 안내형 |
| `forensic-science` | 체험 몰입형 |
| `patissier` | 결과물 전시형 |
| `ai-programming` | 프로젝트 로드맵형 |
| `webtoon-artist` | 결과물 전시형 |
| `vet-experience` | 학교 운영 안내형 |
| `space-scientist` | 체험 몰입형 |
| `fashion-designer` | 결과물 전시형 |
| `music-producer` | 결과물 전시형 |
| `startup-ceo` | 프로젝트 로드맵형 |
| `beauty-artist` | 결과물 전시형 |
| `architect` | 전문가 스토리형 |
| `robot-engineer` | 프로젝트 로드맵형 |
| `emergency-medic` | 학교 운영 안내형 |
| `vr-developer` | 프로젝트 로드맵형 |
| `forensic-psychologist` | 체험 몰입형 |
| `biotech-scientist` | 프로젝트 로드맵형 |
| `news-anchor` | 전문가 스토리형 |

프로그램의 현재 소개와 활동 성격으로 배정했다. 실제 운영 자료가 확보되면 개별 프로그램의 템플릿을 바꿀 수 있다.

## 미리보기와 기본 설정 변경

앱 실행 환경에서 `/detail-templates`로 이동한다. 프로그램을 선택하고 다섯 템플릿 중 하나를 고르면 실제 상세페이지가 iframe으로 표시된다. 데스크톱 1120px / 모바일 390px 너비를 고르거나 새 창으로 열 수 있다. 좁은 화면에서는 미리보기 영역만 가로로 스크롤한다.

직접 주소 예시:

```text
/products/barista-experience?previewTemplate=showcase
/products/giants-shoulder-ai-literacy?previewTemplate=roadmap
/products/giants-shoulder-ai-literacy?previewTemplate=school
```

비교 화면은 읽기 전용이다. 선택은 저장되지 않으며, 관리자 인증·저장·게시 기능을 새로 구현한 것은 아니다. 비교 화면과 유효한 미리보기 주소는 검색 색인에서 제외하도록 설정했다. 미리보기 방문은 최근 본 프로그램 기록에 추가하지 않는다.

기본 배정은 `src/lib/detailTemplates.ts`의 `programTemplateAssignments`에서 관리한다. 특정 프로그램만 바꾸려면 `src/lib/data/products/<slug>.ts`의 기존 객체에 아래 필드를 추가한다.

```ts
detailTemplate: "showcase",
```

적용 우선순위는 **유효한 미리보기 값 → 개별 프로그램의 detailTemplate → 기본 배정 → 신규 프로그램의 학교 운영 안내형**이다. 잘못된 값, 배열 쿼리, 프로토타입 이름은 미리보기 값으로 인정하지 않는다. 존재하지 않는 프로그램은 계속 404다.

## 코드와 데이터의 책임

| 파일·컴포넌트 | 책임 |
|---|---|
| `src/lib/detailTemplates.ts` | 템플릿 정의, 기본 배정, 섹션 표시 조건, 안전한 선택 |
| `src/app/products/[slug]/page.tsx` | 실제 프로그램 조회와 템플릿 순서에 따른 섹션 조립 |
| `TemplateHero.tsx` | 다섯 첫 화면과 선택한 수업의 요약·견적 링크 |
| `TemplateIntro.tsx`, `ClassIntro.tsx` | 이야기·결과물 전시·간결한 설명 배치 |
| `DetailedCurriculum.tsx`, `Curriculum.tsx` | 구조화된 상세안과 기존 수업 데이터에 공통 배치 적용 |
| `CurriculumSelection.tsx`, `CurriculumPreparation.tsx` | 수업 선택과 준비 조건의 일치 |
| `TabNavigation.tsx` | 실제 표시된 섹션과 같은 순서의 목차 |
| `detail-templates.css` | 템플릿별 스타일과 반응형 규칙 |
| `src/app/detail-templates/` | 같은 상세페이지를 사용한 비교 화면 |

수업 내용 원본은 `curriculumPlans.ts`와 개별 제품 데이터다. 템플릿을 추가할 때 해당 파일의 복사본을 만들지 않는다. 템플릿을 바꿔도 학년별 조정, 학생 활동, 결과물, 평가 기준, 준비 역할, 운영 미결 항목을 숨기거나 삭제하지 않는다. 학교 안내형의 접힌 활동은 사용자가 펼쳐 읽을 수 있다.

## 완료 범위와 남은 입력

- 다섯 화면 구성과 모든 23개 프로그램의 배정을 구현했다. 상세 수업안 3개 프로그램·5개 구성과 나머지 기존 수업 데이터 모두 템플릿을 사용한다.
- 대표 이미지 23개가 저장소에 없는 상태는 그대로다. 첫 화면은 사진이 없거나 로딩에 실패하면 결과물 설명 또는 운영팀 이름을 활용한다. 실제 체험·결과물·인물 사진은 원본 확보 후 연결해야 한다.
- 새 템플릿은 기존 강사 소개와 문구를 사용한다. 실제 강사·후기·실적 확인과 나머지 20개 상세 수업안 작성은 [미결 내용](../OPEN_WORRIES.md)에 남아 있다.
- 빌드·타입 검사, 템플릿 규칙 7개 및 기존 회귀 테스트 10개를 통과했다. 브라우저에서 실제 화면과 상호작용을 검증한 기록은 없다. [검증 기록](../04-report/detail-page-templates-validation.md)을 참조한다.
- 운영 사이트 배포와 PR 병합은 수행하지 않았다.
