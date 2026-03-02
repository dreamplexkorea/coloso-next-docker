import type {
  AiQuoteTabType,
  AdvancedTrackQuoteRequest,
  ElementaryQuoteRequest,
  MiddleCareerQuoteRequest,
} from "@/lib/types";

export type FieldErrors = Partial<Record<string, string>>;
export type TouchedFields = Partial<Record<string, boolean>>;
export type SectionKey = "basic" | "operation" | "schedule" | "additional";

export const requiredBySection: Record<AiQuoteTabType, Record<SectionKey, number>> = {
  elementary: { basic: 3, operation: 4, schedule: 0, additional: 0 },
  "middle-career": { basic: 3, operation: 5, schedule: 0, additional: 0 },
  "ai-startup-aptitude-credit": { basic: 3, operation: 5, schedule: 0, additional: 0 },
};

export const requiredKeysByTab: Record<AiQuoteTabType, string[]> = {
  elementary: ["schoolName", "contactName", "phone", "gradeBand", "classCount", "participantCount", "experienceArea"],
  "middle-career": [
    "schoolName",
    "contactName",
    "phone",
    "gradeLevel",
    "classCount",
    "participantCount",
    "sessionPlan",
    "careerFields",
  ],
  "ai-startup-aptitude-credit": [
    "organizationName",
    "contactName",
    "phone",
    "targetGroup",
    "track",
    "operationType",
    "classCount",
    "participantCount",
  ],
};

export interface ElementaryFormState {
  schoolName: string;
  contactName: string;
  phone: string;
  email: string;
  gradeBand: ElementaryQuoteRequest["gradeBand"];
  classCount: string;
  participantCount: string;
  preferredDate: string;
  experienceArea: ElementaryQuoteRequest["experienceArea"];
  message: string;
}

export interface MiddleCareerFormState {
  schoolName: string;
  contactName: string;
  phone: string;
  email: string;
  gradeLevel: MiddleCareerQuoteRequest["gradeLevel"];
  classCount: string;
  participantCount: string;
  preferredDate: string;
  careerFields: MiddleCareerQuoteRequest["careerFields"];
  sessionPlan: MiddleCareerQuoteRequest["sessionPlan"];
  message: string;
}

export interface AdvancedTrackFormState {
  organizationName: string;
  contactName: string;
  phone: string;
  email: string;
  targetGroup: AdvancedTrackQuoteRequest["targetGroup"];
  track: AdvancedTrackQuoteRequest["track"];
  operationType: AdvancedTrackQuoteRequest["operationType"];
  classCount: string;
  participantCount: string;
  preferredDate: string;
  message: string;
}

export const initialElementary: ElementaryFormState = {
  schoolName: "",
  contactName: "",
  phone: "010",
  email: "",
  gradeBand: "저학년(1-2)",
  classCount: "",
  participantCount: "",
  preferredDate: "",
  experienceArea: "진로기초",
  message: "",
};

export const initialMiddleCareer: MiddleCareerFormState = {
  schoolName: "",
  contactName: "",
  phone: "010",
  email: "",
  gradeLevel: "중1",
  classCount: "",
  participantCount: "",
  preferredDate: "",
  careerFields: [],
  sessionPlan: "1차시(90분)",
  message: "",
};

export const initialAdvanced: AdvancedTrackFormState = {
  organizationName: "",
  contactName: "",
  phone: "010",
  email: "",
  targetGroup: "고등학생",
  track: "AI",
  operationType: "특강형",
  classCount: "",
  participantCount: "",
  preferredDate: "",
  message: "",
};

export interface FormSectionProps<T> {
  form: T;
  setForm: React.Dispatch<React.SetStateAction<T>>;
  fieldError: (key: string) => string | undefined;
  markTouched: (key: string) => void;
  registerFieldRef: (key: string) => (node: HTMLElement | null) => void;
  sectionCount: Record<SectionKey, number>;
}
