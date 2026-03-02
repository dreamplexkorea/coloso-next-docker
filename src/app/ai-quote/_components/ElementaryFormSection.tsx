"use client";

import type { ElementaryQuoteRequest } from "@/lib/types";
import { controlClass, elementaryExperienceAreaOptions, elementaryGradeBandOptions, textareaClass } from "./quote-constants";
import type { ElementaryFormState, FormSectionProps } from "./quote-types";
import { FieldShell, PhoneInput, SchedulePicker, SectionHeader } from "./QuoteFormFields";

export function ElementaryFormSection({
  form,
  setForm,
  fieldError,
  markTouched,
  registerFieldRef,
  sectionCount,
}: FormSectionProps<ElementaryFormState>) {
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
              aria-invalid={Boolean(fieldError("schoolName"))}
            />
          </FieldShell>

          <FieldShell label="담당 교사명(직책 포함)" required error={fieldError("contactName")}>
            <input
              value={form.contactName}
              onChange={(event) => setForm((prev) => ({ ...prev, contactName: event.target.value }))}
              onBlur={() => markTouched("contactName")}
              ref={registerFieldRef("contactName")}
              className={controlClass}
              aria-invalid={Boolean(fieldError("contactName"))}
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
          <FieldShell label="학년군" required error={fieldError("gradeBand")}>
            <select
              value={form.gradeBand}
              onChange={(event) => setForm((prev) => ({ ...prev, gradeBand: event.target.value as ElementaryQuoteRequest["gradeBand"] }))}
              onBlur={() => markTouched("gradeBand")}
              ref={registerFieldRef("gradeBand")}
              className={controlClass}
            >
              {elementaryGradeBandOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="체험영역" required error={fieldError("experienceArea")}>
            <select
              value={form.experienceArea}
              onChange={(event) => setForm((prev) => ({ ...prev, experienceArea: event.target.value as ElementaryQuoteRequest["experienceArea"] }))}
              onBlur={() => markTouched("experienceArea")}
              ref={registerFieldRef("experienceArea")}
              className={controlClass}
            >
              {elementaryExperienceAreaOptions.map((option) => (
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
        <FieldShell label="요청 내용" hint="희망 프로그램, 예산 범위, 기타 요청사항을 남겨주세요.">
          <textarea rows={4} value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className={textareaClass} />
        </FieldShell>
      </section>
    </>
  );
}
