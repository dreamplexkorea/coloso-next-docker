# 클로소 디자인 에이전트 팀 블루프린트 (2단계 설계)

> **상태: 설계만(미구현).** 1단계(스펙 문서)가 승인되면 이 청사진대로 `.claude/agents/`에 3개 에이전트를 생성한다.
> 왜 "디자이너를 고용한 것 같은" 아웃풋이 안 나왔는가 → 정답지·가드레일·검증 루프가 없었기 때문(`coloso-live-reference.md`, `coloso-design-system.md`로 해결). 이 팀은 그 문서들을 강제로 참조해 일관성을 만든다.

## 왜 단일 에이전트가 아니라 3명인가
한 에이전트가 디렉팅+시스템+구현을 다 하면 평균치로 수렴한다. 역할을 분리해 **게이트(리뷰)** 를 두면 품질이 유지된다.

---

## 에이전트 1 — Design Director (룩&필 게이트키퍼)
- **책임**: 무엇이 "클로소답다"인지 판정. 요구사항을 디자인 의도로 번역, 결과물 리뷰/반려.
- **반드시 먼저 읽음**: `docs/design/coloso-design-system.md`, `docs/design/coloso-live-reference.md`.
- **권한(tools)**: Read, WebFetch(라이브 클로소 재확인), Grep/Glob. **쓰기 없음**(리뷰어).
- **산출**: 디자인 브리프 + 리뷰 코멘트(통과/반려 + 근거).

## 에이전트 2 — Design System Engineer (토큰·프리미티브)
- **책임**: `globals.css` `@theme` 토큰과 `src/components/ui/` 프리미티브의 일관성 유지·확장. 새 토큰/variant 필요 시 여기서만 추가.
- **반드시 따름**: 스펙 §1·§5(컬러/엘리베이션), Do/Don't.
- **권한**: Read, Edit/Write(`globals.css`, `components/ui/**` 한정), Bash(lint/build).
- **산출**: 토큰/프리미티브 변경 + 스펙 문서 동기화.

## 에이전트 3 — UI Implementer (페이지·섹션 구현)
- **책임**: 스펙·디렉터 브리프를 따라 페이지/섹션/카드 구현. 기존 컴포넌트 재사용 우선.
- **반드시 따름**: §7 컴포넌트 레시피, §3 여백, §6 모션.
- **권한**: Read, Edit/Write(`src/app/**`, `src/components/**`), Bash(dev/build/lint).
- **산출**: 구현 코드 + 스크린샷.

---

## 검증 루프 (핵심 — 이게 없어서 품질이 안 나왔다)
```
UI Implementer 구현
   ↓ next dev 렌더 → 스크린샷
   ↓ Director가 스크린샷을 라이브 클로소/스펙과 대조
   ↓ 불일치 → 반려 + 구체 피드백 → 재구현
   ↓ 통과 → 머지
```
- 스크린샷·렌더 검증은 기존 `verify` / `run` 스킬 활용.
- 토큰 일탈(임의 색/그림자/이징)은 자동 반려 사유.

## 협업 흐름 예시
1. 사용자: "강의 카드 새 변형 만들어줘"
2. **Director**: 브리프 작성(어떤 배지/메타/톤이 클로소다운가), 스펙 인용
3. **System Engineer**: 필요한 토큰/variant만 추가(없으면 skip)
4. **Implementer**: §7 레시피로 구현 → 스크린샷
5. **Director**: 대조 후 통과/반려

---

## 구현 시 체크리스트 (2단계 착수 때)
- [ ] `.gitignore` 46행 `.claude/` 제외 규칙 조정 — 에이전트 파일을 추적하려면 `.claude/agents/`만 예외 허용(`!.claude/agents/`) 또는 ignore 라인 정리
- [ ] `.claude/agents/design-director.md` (description+system prompt+tools)
- [ ] `.claude/agents/design-system-engineer.md`
- [ ] `.claude/agents/ui-implementer.md`
- [ ] 각 에이전트 system prompt 첫 줄에 "작업 전 `docs/design/coloso-design-system.md`를 읽어라" 강제
- [ ] (선택) 검증 루프용 슬래시 커맨드/훅
