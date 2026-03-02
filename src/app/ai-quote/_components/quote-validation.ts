import type { AiQuoteRequest, AiQuoteTabType } from "@/lib/types";
import type { AdvancedTrackFormState, ElementaryFormState, FieldErrors, MiddleCareerFormState } from "./quote-types";

export type PhoneParts = [string, string, string];

export function sanitizePhone(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

export function isPhoneValid(value: string): boolean {
  return /^\d{9,11}$/.test(sanitizePhone(value));
}

export function splitPhoneParts(value: string): PhoneParts {
  const [p1 = "", p2 = "", p3 = ""] = value.split("-");
  return [p1.replace(/\D/g, "").slice(0, 4), p2.replace(/\D/g, "").slice(0, 4), p3.replace(/\D/g, "").slice(0, 4)];
}

export function formatPhoneParts([p1, p2, p3]: PhoneParts): string {
  if (!p2 && !p3) return p1;
  if (!p3) return `${p1}-${p2}`;
  return `${p1}-${p2}-${p3}`;
}

export function toIsoDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function parseIsoDate(value: string): Date | null {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? null : date;
}

export function createMonthCells(viewMonth: Date): Array<number | null> {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [...Array.from({ length: firstWeekday }, () => null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length < 42) cells.push(null);
  return cells;
}

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return undefined;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? undefined : "이메일 형식이 올바르지 않습니다.";
}

export function validateClassCount(value: string): string | undefined {
  const count = Number(value);
  if (!Number.isFinite(count) || count < 1 || count > 100) return "참여 반수는 1~100 사이 숫자로 입력해주세요.";
  return undefined;
}

export function validateParticipantCount(value: string): string | undefined {
  const count = Number(value);
  if (!Number.isFinite(count) || count < 5 || count > 500) return "반당 평균 인원은 5~500 사이 숫자로 입력해주세요.";
  return undefined;
}

export function validateElementary(form: ElementaryFormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.schoolName.trim().length < 2) errors.schoolName = "학교명을 2자 이상 입력해주세요.";
  if (form.contactName.trim().length < 2) errors.contactName = "담당 교사명을 2자 이상 입력해주세요.";
  if (!isPhoneValid(form.phone)) errors.phone = "연락처는 숫자 9~11자리로 입력해주세요.";
  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;
  if (!form.gradeBand) errors.gradeBand = "학년군을 선택해주세요.";
  if (!form.experienceArea) errors.experienceArea = "체험영역을 선택해주세요.";
  const classError = validateClassCount(form.classCount);
  if (classError) errors.classCount = classError;
  const participantError = validateParticipantCount(form.participantCount);
  if (participantError) errors.participantCount = participantError;
  return errors;
}

export function validateMiddle(form: MiddleCareerFormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.schoolName.trim().length < 2) errors.schoolName = "학교명을 2자 이상 입력해주세요.";
  if (form.contactName.trim().length < 2) errors.contactName = "담당 교사명을 2자 이상 입력해주세요.";
  if (!isPhoneValid(form.phone)) errors.phone = "연락처는 숫자 9~11자리로 입력해주세요.";
  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;
  if (!form.gradeLevel) errors.gradeLevel = "학년을 선택해주세요.";
  if (!form.sessionPlan) errors.sessionPlan = "운영 차시를 선택해주세요.";
  if (form.careerFields.length === 0) errors.careerFields = "희망 진로분야를 최소 1개 선택해주세요.";
  const classError = validateClassCount(form.classCount);
  if (classError) errors.classCount = classError;
  const participantError = validateParticipantCount(form.participantCount);
  if (participantError) errors.participantCount = participantError;
  return errors;
}

export function validateAdvanced(form: AdvancedTrackFormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.organizationName.trim().length < 2) errors.organizationName = "학교/기관명을 2자 이상 입력해주세요.";
  if (form.contactName.trim().length < 2) errors.contactName = "담당자명을 2자 이상 입력해주세요.";
  if (!isPhoneValid(form.phone)) errors.phone = "연락처는 숫자 9~11자리로 입력해주세요.";
  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;
  if (!form.targetGroup) errors.targetGroup = "대상을 선택해주세요.";
  if (!form.track) errors.track = "트랙을 선택해주세요.";
  if (!form.operationType) errors.operationType = "운영형태를 선택해주세요.";
  const classError = validateClassCount(form.classCount);
  if (classError) errors.classCount = classError;
  const participantError = validateParticipantCount(form.participantCount);
  if (participantError) errors.participantCount = participantError;
  return errors;
}

export function buildPayload(
  activeTab: AiQuoteTabType,
  elementaryForm: ElementaryFormState,
  middleCareerForm: MiddleCareerFormState,
  advancedTrackForm: AdvancedTrackFormState,
): AiQuoteRequest {
  if (activeTab === "elementary") {
    return {
      tabType: "elementary",
      payload: {
        schoolName: elementaryForm.schoolName.trim(),
        contactName: elementaryForm.contactName.trim(),
        phone: sanitizePhone(elementaryForm.phone),
        email: elementaryForm.email.trim() || undefined,
        gradeBand: elementaryForm.gradeBand,
        classCount: Number(elementaryForm.classCount),
        participantCount: Number(elementaryForm.participantCount),
        preferredDate: elementaryForm.preferredDate || undefined,
        experienceArea: elementaryForm.experienceArea,
        message: elementaryForm.message.trim() || undefined,
      },
    };
  }

  if (activeTab === "middle-career") {
    return {
      tabType: "middle-career",
      payload: {
        schoolName: middleCareerForm.schoolName.trim(),
        contactName: middleCareerForm.contactName.trim(),
        phone: sanitizePhone(middleCareerForm.phone),
        email: middleCareerForm.email.trim() || undefined,
        gradeLevel: middleCareerForm.gradeLevel,
        classCount: Number(middleCareerForm.classCount),
        participantCount: Number(middleCareerForm.participantCount),
        preferredDate: middleCareerForm.preferredDate || undefined,
        careerFields: middleCareerForm.careerFields,
        sessionPlan: middleCareerForm.sessionPlan,
        message: middleCareerForm.message.trim() || undefined,
      },
    };
  }

  return {
    tabType: "ai-startup-aptitude-credit",
    payload: {
      organizationName: advancedTrackForm.organizationName.trim(),
      contactName: advancedTrackForm.contactName.trim(),
      phone: sanitizePhone(advancedTrackForm.phone),
      email: advancedTrackForm.email.trim() || undefined,
      targetGroup: advancedTrackForm.targetGroup,
      track: advancedTrackForm.track,
      operationType: advancedTrackForm.operationType,
      classCount: Number(advancedTrackForm.classCount),
      participantCount: Number(advancedTrackForm.participantCount),
      preferredDate: advancedTrackForm.preferredDate || undefined,
      message: advancedTrackForm.message.trim() || undefined,
    },
  };
}
