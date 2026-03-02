"use client";

import type { AdvancedTrackQuoteRequest } from "@/lib/types";
import {
  advancedOperationTypeOptions,
  advancedTargetGroupOptions,
  advancedTrackOptions,
  controlClass,
  textareaClass,
} from "./quote-constants";
import type { AdvancedTrackFormState, FormSectionProps } from "./quote-types";
import { FieldShell, PhoneInput, SchedulePicker, SectionHeader } from "./QuoteFormFields";

export function AdvancedTrackFormSection({
  form,
  setForm,
  fieldError,
  markTouched,
  registerFieldRef,
  sectionCount,
}: FormSectionProps<AdvancedTrackFormState>) {
  return (
    <>
      <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
        <SectionHeader title="1. 기본 정보" requiredCount={sectionCount.basic} />
        <div className="mt-[14px] grid gap-[12px] md:grid-cols-2">
          <FieldShell label="학교/기관명" required error={fieldError("organizationName")} hint="학교, 기관, 센터 등 공식 명칭을 입력해주세요.">
            <input
              value={form.organizationName}
              onChange={(event) => setForm((prev) => ({ ...prev, organizationName: event.target.value }))}
              onBlur={() => markTouched("organizationName")}
              ref={registerFieldRef("organizationName")}
              className={controlClass}
            />
          </FieldShell>

          <FieldShell label="담당자명(직책 포함)" required error={fieldError("contactName")}>
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
          <FieldShell label="대상" required error={fieldError("targetGroup")}>
            <select
              value={form.targetGroup}
              onChange={(event) => setForm((prev) => ({ ...prev, targetGroup: event.target.value as AdvancedTrackQuoteRequest["targetGroup"] }))}
              onBlur={() => markTouched("targetGroup")}
              ref={registerFieldRef("targetGroup")}
              className={controlClass}
            >
              {advancedTargetGroupOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="트랙" required error={fieldError("track")}>
            <select
              value={form.track}
              onChange={(event) => setForm((prev) => ({ ...prev, track: event.target.value as AdvancedTrackQuoteRequest["track"] }))}
              onBlur={() => markTouched("track")}
              ref={registerFieldRef("track")}
              className={controlClass}
            >
              {advancedTrackOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </FieldShell>

          <FieldShell label="운영형태" required error={fieldError("operationType")}>
            <select
              value={form.operationType}
              onChange={(event) => setForm((prev) => ({ ...prev, operationType: event.target.value as AdvancedTrackQuoteRequest["operationType"] }))}
              onBlur={() => markTouched("operationType")}
              ref={registerFieldRef("operationType")}
              className={controlClass}
            >
              {advancedOperationTypeOptions.map((option) => (
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
        <FieldShell label="요청 내용" hint="트랙 목표, 운영 제약사항을 남겨주시면 상담 정확도가 높아집니다.">
          <textarea rows={4} value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className={textareaClass} />
        </FieldShell>
      </section>
    </>
  );
}
