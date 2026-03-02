import type {
  AdvancedTrackQuoteRequest,
  AiQuoteRequest,
  ElementaryQuoteRequest,
  MiddleCareerQuoteRequest,
} from "@/lib/types";
import {
  tabTypeValues,
  elementaryGradeBandValues,
  elementaryAreaValues,
  middleGradeLevelValues,
  middleCareerFieldValues,
  middleSessionPlanValues,
  advancedTargetGroupValues,
  advancedTrackValues,
  advancedOperationTypeValues,
} from "./constants";

/* ── 기본 유틸 ── */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isOneOf<T extends string>(value: unknown, options: readonly T[]): value is T {
  return typeof value === "string" && options.includes(value as T);
}

function isNonEmptyString(value: unknown, minLength = 1): value is string {
  return typeof value === "string" && value.trim().length >= minLength;
}

function normalizePhone(raw: unknown): string | null {
  if (!isNonEmptyString(raw, 9)) return null;
  const digits = raw.replace(/[^0-9]/g, "");
  return /^\d{9,11}$/.test(digits) ? digits : null;
}

function parseParticipantCount(raw: unknown): number | null {
  if (!Number.isFinite(raw)) return null;
  const count = Number(raw);
  if (count < 5 || count > 500) return null;
  return count;
}

function parseClassCount(raw: unknown): number | null {
  if (!Number.isFinite(raw)) return null;
  const count = Number(raw);
  if (count < 1 || count > 100) return null;
  return count;
}

function parseOptionalDate(raw: unknown): string | undefined | null {
  if (raw === undefined || raw === null || raw === "") return undefined;
  if (typeof raw !== "string") return null;
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return null;
  return raw.trim();
}

function parseOptionalEmail(raw: unknown): string | undefined | null {
  if (raw === undefined || raw === null || raw === "") return undefined;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return null;
  return trimmed;
}

/* ── 탭별 payload 밸리데이션 ── */

function validateElementaryPayload(payload: unknown):
  | { valid: true; data: ElementaryQuoteRequest }
  | { valid: false; message: string } {
  if (!isRecord(payload)) {
    return { valid: false, message: "초등학교 요청 데이터 형식이 올바르지 않습니다." };
  }

  const schoolName = isNonEmptyString(payload.schoolName, 2) ? payload.schoolName.trim() : "";
  if (!schoolName) return { valid: false, message: "학교명을 2자 이상 입력해주세요." };

  const contactName = isNonEmptyString(payload.contactName, 2) ? payload.contactName.trim() : "";
  if (!contactName) return { valid: false, message: "담당 교사명을 2자 이상 입력해주세요." };

  const phone = normalizePhone(payload.phone);
  if (!phone) return { valid: false, message: "연락처는 숫자 9~11자리로 입력해주세요." };

  const email = parseOptionalEmail(payload.email);
  if (email === null) return { valid: false, message: "이메일 형식이 올바르지 않습니다." };

  if (!isOneOf(payload.gradeBand, elementaryGradeBandValues)) {
    return { valid: false, message: "학년군을 선택해주세요." };
  }
  if (!isOneOf(payload.experienceArea, elementaryAreaValues)) {
    return { valid: false, message: "체험영역을 선택해주세요." };
  }

  const participantCount = parseParticipantCount(payload.participantCount);
  if (!participantCount) {
    return { valid: false, message: "반당 평균 인원은 5명 이상 500명 이하로 입력해주세요." };
  }
  const classCount = parseClassCount(payload.classCount);
  if (!classCount) {
    return { valid: false, message: "참여 반수(학급 수)는 1개 이상 100개 이하로 입력해주세요." };
  }

  const preferredDate = parseOptionalDate(payload.preferredDate);
  if (preferredDate === null) return { valid: false, message: "희망 일정 형식이 올바르지 않습니다." };

  const message = isNonEmptyString(payload.message) ? payload.message.trim() : undefined;

  return {
    valid: true,
    data: {
      schoolName,
      contactName,
      phone,
      email,
      gradeBand: payload.gradeBand,
      classCount,
      participantCount,
      preferredDate,
      experienceArea: payload.experienceArea,
      message,
    },
  };
}

function validateMiddleCareerPayload(payload: unknown):
  | { valid: true; data: MiddleCareerQuoteRequest }
  | { valid: false; message: string } {
  if (!isRecord(payload)) {
    return { valid: false, message: "중학교 진로체험 요청 데이터 형식이 올바르지 않습니다." };
  }

  const schoolName = isNonEmptyString(payload.schoolName, 2) ? payload.schoolName.trim() : "";
  if (!schoolName) return { valid: false, message: "학교명을 2자 이상 입력해주세요." };

  const contactName = isNonEmptyString(payload.contactName, 2) ? payload.contactName.trim() : "";
  if (!contactName) return { valid: false, message: "담당 교사명을 2자 이상 입력해주세요." };

  const phone = normalizePhone(payload.phone);
  if (!phone) return { valid: false, message: "연락처는 숫자 9~11자리로 입력해주세요." };

  const email = parseOptionalEmail(payload.email);
  if (email === null) return { valid: false, message: "이메일 형식이 올바르지 않습니다." };

  if (!isOneOf(payload.gradeLevel, middleGradeLevelValues)) {
    return { valid: false, message: "학년을 선택해주세요." };
  }

  const participantCount = parseParticipantCount(payload.participantCount);
  if (!participantCount) {
    return { valid: false, message: "반당 평균 인원은 5명 이상 500명 이하로 입력해주세요." };
  }
  const classCount = parseClassCount(payload.classCount);
  if (!classCount) {
    return { valid: false, message: "참여 반수(학급 수)는 1개 이상 100개 이하로 입력해주세요." };
  }

  const preferredDate = parseOptionalDate(payload.preferredDate);
  if (preferredDate === null) return { valid: false, message: "희망 일정 형식이 올바르지 않습니다." };

  if (!Array.isArray(payload.careerFields) || payload.careerFields.length === 0) {
    return { valid: false, message: "희망 진로분야를 최소 1개 선택해주세요." };
  }

  const careerFields = payload.careerFields.filter((field): field is MiddleCareerQuoteRequest["careerFields"][number] =>
    isOneOf(field, middleCareerFieldValues),
  );
  if (careerFields.length === 0) {
    return { valid: false, message: "희망 진로분야를 올바르게 선택해주세요." };
  }

  if (!isOneOf(payload.sessionPlan, middleSessionPlanValues)) {
    return { valid: false, message: "운영 차시를 선택해주세요." };
  }

  const message = isNonEmptyString(payload.message) ? payload.message.trim() : undefined;

  return {
    valid: true,
    data: {
      schoolName,
      contactName,
      phone,
      email,
      gradeLevel: payload.gradeLevel,
      classCount,
      participantCount,
      preferredDate,
      careerFields,
      sessionPlan: payload.sessionPlan,
      message,
    },
  };
}

function validateAdvancedTrackPayload(payload: unknown):
  | { valid: true; data: AdvancedTrackQuoteRequest }
  | { valid: false; message: string } {
  if (!isRecord(payload)) {
    return { valid: false, message: "AI/창업/적성/고교학점제 요청 데이터 형식이 올바르지 않습니다." };
  }

  const organizationName = isNonEmptyString(payload.organizationName, 2)
    ? payload.organizationName.trim()
    : "";
  if (!organizationName) return { valid: false, message: "학교/기관명을 2자 이상 입력해주세요." };

  const contactName = isNonEmptyString(payload.contactName, 2) ? payload.contactName.trim() : "";
  if (!contactName) return { valid: false, message: "담당자명을 2자 이상 입력해주세요." };

  const phone = normalizePhone(payload.phone);
  if (!phone) return { valid: false, message: "연락처는 숫자 9~11자리로 입력해주세요." };

  const email = parseOptionalEmail(payload.email);
  if (email === null) return { valid: false, message: "이메일 형식이 올바르지 않습니다." };

  if (!isOneOf(payload.targetGroup, advancedTargetGroupValues)) {
    return { valid: false, message: "대상을 선택해주세요." };
  }
  if (!isOneOf(payload.track, advancedTrackValues)) {
    return { valid: false, message: "트랙을 선택해주세요." };
  }
  if (!isOneOf(payload.operationType, advancedOperationTypeValues)) {
    return { valid: false, message: "운영형태를 선택해주세요." };
  }

  const participantCount = parseParticipantCount(payload.participantCount);
  if (!participantCount) {
    return { valid: false, message: "반당 평균 인원은 5명 이상 500명 이하로 입력해주세요." };
  }
  const classCount = parseClassCount(payload.classCount);
  if (!classCount) {
    return { valid: false, message: "참여 반수(학급 수)는 1개 이상 100개 이하로 입력해주세요." };
  }

  const preferredDate = parseOptionalDate(payload.preferredDate);
  if (preferredDate === null) return { valid: false, message: "희망 일정 형식이 올바르지 않습니다." };

  const message = isNonEmptyString(payload.message) ? payload.message.trim() : undefined;

  return {
    valid: true,
    data: {
      organizationName,
      contactName,
      phone,
      email,
      targetGroup: payload.targetGroup,
      track: payload.track,
      operationType: payload.operationType,
      classCount,
      participantCount,
      preferredDate,
      message,
    },
  };
}

/* ── 최상위 요청 밸리데이션 ── */

export function validateRequest(payload: unknown):
  | { valid: true; data: AiQuoteRequest }
  | { valid: false; message: string } {
  if (!isRecord(payload)) {
    return { valid: false, message: "요청 본문 형식이 올바르지 않습니다." };
  }

  if (!isOneOf(payload.tabType, tabTypeValues)) {
    return { valid: false, message: "분류 탭을 올바르게 선택해주세요." };
  }

  if (!("payload" in payload)) {
    return { valid: false, message: "요청 데이터가 누락되었습니다." };
  }

  if (payload.tabType === "elementary") {
    const validation = validateElementaryPayload(payload.payload);
    return validation.valid
      ? { valid: true, data: { tabType: "elementary", payload: validation.data } }
      : validation;
  }

  if (payload.tabType === "middle-career") {
    const validation = validateMiddleCareerPayload(payload.payload);
    return validation.valid
      ? { valid: true, data: { tabType: "middle-career", payload: validation.data } }
      : validation;
  }

  const validation = validateAdvancedTrackPayload(payload.payload);
  return validation.valid
    ? { valid: true, data: { tabType: "ai-startup-aptitude-credit", payload: validation.data } }
    : validation;
}
