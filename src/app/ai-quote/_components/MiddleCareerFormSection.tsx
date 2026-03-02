"use client";

import type { MiddleCareerQuoteRequest } from "@/lib/types";
import {
  controlClass,
  errorClass,
  hintClass,
  middleCareerFieldOptions,
  middleGradeLevelOptions,
  middleSessionPlanOptions,
  textareaClass,
} from "./quote-constants";
import type { FormSectionProps, MiddleCareerFormState } from "./quote-types";
import { FieldShell, PhoneInput, SchedulePicker, SectionHeader } from "./QuoteFormFields";

interface MiddleCareerFormSectionProps extends FormSectionProps<MiddleCareerFormState> {
  toggleMiddleField: (field: MiddleCareerQuoteRequest["careerFields"][number]) => void;
}

export function MiddleCareerFormSection({
  form,
  setForm,
  fieldError,
  markTouched,
  registerFieldRef,
  sectionCount,
  toggleMiddleField,
}: MiddleCareerFormSectionProps) {
  return (
    <>
      <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
        <SectionHeader title="1. 기본 정보" requiredCount={sectionCount.basic} />
        <div className="mt-[14px] grid gap-[12px] md:grid-cols-2">
          <FieldShell label="학교명" required error={fieldError("schoolName")} hint="학교 공식 명칭을 입력해주세요.">
            <input
              value={form.schoolName}
              onChange={(event) => setForm((prev) => ({ ...prev, schoolName: event.target.value }))}
              onBlur={() => markTouched("schoolName")}
              ref={registerFieldRef("schoolName")}
              className={controlClass}
            />
          </FieldShell>

          <FieldShell label="담당 교사명(직책 포함)" required error={fieldError("contactName")}>
            <input
              value={form.contactName}
              onChange={(event) => setForm((prev) => ({ ...prev, contactName: event.target.value }))}
              onBlur={() => markTouched("contactName")}
              ref={registerFieldRef("contactName")}
              className={controlClass}
            />
          </FieldShell>

          <FieldShell label="연락처" required error={fieldError("phone")}>
            <PhoneInput
              value={form.phone}
              onChange={(phone) => setForm((prev) => ({ ...prev, phone }))}
              onBlur={() => markTouched("phone")}
              inputRef={(node) => registerFieldRef("phone")(node)}
            />
          </FieldShell>

          <FieldShell label="이메일" error={fieldError("email")} hint="견적서 회신 메일이 필요하면 입력해주세요.">
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              onBlur={() => markTouched("email")}
              ref={registerFieldRef("email")}
              className={controlClass}
              aria-invalid={Boolean(fieldError("email"))}
            />
          </FieldShell>
        </div>
      </section>

      <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
        <SectionHeader title="2. 운영 정보" requiredCount={sectionCount.operation} />
        <div className="mt-[14px] grid gap-[12px] md:grid-cols-2">
          <FieldShell label="학년" required error={fieldError("gradeLevel")}>
            <select
              value={form.gradeLevel}
              onChange={(event) => setForm((prev) => ({ ...prev, gradeLevel: event.target.value as MiddleCareerQuoteRequest["gradeLevel"] }))}
              onBlur={() => markTouched("gradeLevel")}
              ref={registerFieldRef("gradeLevel")}
              className={controlClass}
            >
              {middleGradeLevelOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="운영 차시" required error={fieldError("sessionPlan")}>
            <select
              value={form.sessionPlan}
              onChange={(event) => setForm((prev) => ({ ...prev, sessionPlan: event.target.value as MiddleCareerQuoteRequest["sessionPlan"] }))}
              onBlur={() => markTouched("sessionPlan")}
              ref={registerFieldRef("sessionPlan")}
              className={controlClass}
            >
              {middleSessionPlanOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="참여 반수(학급 수)" required error={fieldError("classCount")} hint="입력 범위: 1~100">
            <input
              type="number"
              min={1}
              max={100}
              value={form.classCount}
              onChange={(event) => setForm((prev) => ({ ...prev, classCount: event.target.value }))}
              onBlur={() => markTouched("classCount")}
              ref={registerFieldRef("classCount")}
              className={controlClass}
            />
          </FieldShell>

          <FieldShell label="반당 평균 인원(명)" required error={fieldError("participantCount")} hint="입력 범위: 5~500">
            <input
              type="number"
              min={5}
              max={500}
              value={form.participantCount}
              onChange={(event) => setForm((prev) => ({ ...prev, participantCount: event.target.value }))}
              onBlur={() => markTouched("participantCount")}
              ref={registerFieldRef("participantCount")}
              className={controlClass}
            />
          </FieldShell>
        </div>

        <fieldset className="mt-[12px]">
          <legend className="text-[1.4rem] font-medium text-grey-200">희망 진로분야 * (복수 선택)</legend>
          <div className="mt-[8px] flex flex-wrap gap-[8px]">
            {middleCareerFieldOptions.map((field, index) => {
              const selected = form.careerFields.includes(field);
              return (
                <button
                  key={field}
                  type="button"
                  onClick={() => toggleMiddleField(field)}
                  onBlur={() => markTouched("careerFields")}
                  ref={index === 0 ? registerFieldRef("careerFields") : undefined}
                  className={`rounded-[999px] border px-[12px] py-[7px] text-[1.3rem] font-medium ${selected ? "border-primary bg-primary text-white" : "border-grey-700 text-grey-200 hover:border-grey-500"}`}
                  aria-pressed={selected}
                >
                  {field}
                </button>
              );
            })}
          </div>
          {fieldError("careerFields") ? <p className={`mt-[6px] ${errorClass}`}>{fieldError("careerFields")}</p> : <p className={`mt-[6px] ${hintClass}`}>최소 1개 이상 선택해주세요.</p>}
        </fieldset>
      </section>

      <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
        <SectionHeader title="3. 희망 일정" requiredCount={sectionCount.schedule} />
        <SchedulePicker
          selectedDate={form.preferredDate}
          onSelect={(date) => setForm((prev) => ({ ...prev, preferredDate: date }))}
        />
      </section>

      <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
        <SectionHeader title="4. 추가 요청" requiredCount={sectionCount.additional} />
        <FieldShell label="요청 내용" hint="희망 진로영역별 세부 요청사항이 있으면 적어주세요.">
          <textarea rows={4} value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className={textareaClass} />
        </FieldShell>
      </section>
    </>
  );
}
