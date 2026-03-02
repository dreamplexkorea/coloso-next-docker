"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import type { AiQuoteResponse, AiQuoteResult, AiQuoteTabType, MiddleCareerQuoteRequest } from "@/lib/types";
import { tabDescriptions, tabExamples, tabLabels } from "./quote-constants";
import {
  initialAdvanced,
  initialElementary,
  initialMiddleCareer,
  requiredBySection,
  requiredKeysByTab,
  type AdvancedTrackFormState,
  type ElementaryFormState,
  type MiddleCareerFormState,
  type TouchedFields,
} from "./quote-types";
import { buildPayload, validateAdvanced, validateElementary, validateMiddle } from "./quote-validation";
import { ElementaryFormSection } from "./ElementaryFormSection";
import { MiddleCareerFormSection } from "./MiddleCareerFormSection";
import { AdvancedTrackFormSection } from "./AdvancedTrackFormSection";
import { QuoteResult } from "./QuoteResult";

export function AiQuoteForm() {
  const [activeTab, setActiveTab] = useState<AiQuoteTabType>("elementary");
  const [elementaryForm, setElementaryForm] = useState<ElementaryFormState>(initialElementary);
  const [middleCareerForm, setMiddleCareerForm] = useState<MiddleCareerFormState>(initialMiddleCareer);
  const [advancedTrackForm, setAdvancedTrackForm] = useState<AdvancedTrackFormState>(initialAdvanced);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [quoteResult, setQuoteResult] = useState<AiQuoteResult | null>(null);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isResultPanelOpen, setIsResultPanelOpen] = useState(false);

  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const currentErrors = useMemo(() => {
    if (activeTab === "elementary") return validateElementary(elementaryForm);
    if (activeTab === "middle-career") return validateMiddle(middleCareerForm);
    return validateAdvanced(advancedTrackForm);
  }, [activeTab, elementaryForm, middleCareerForm, advancedTrackForm]);

  const summaryErrors = useMemo(() => Object.entries(currentErrors), [currentErrors]);
  const sectionCount = requiredBySection[activeTab];
  const requiredKeys = requiredKeysByTab[activeTab];

  const registerFieldRef = (key: string) => (node: HTMLElement | null) => {
    fieldRefs.current[key] = node;
  };

  const focusField = (key: string) => {
    const node = fieldRefs.current[key];
    if (!node) return;
    node.focus();
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const markTouched = (key: string) => setTouchedFields((prev) => ({ ...prev, [key]: true }));
  const fieldError = (key: string) => (!submitAttempted && !touchedFields[key] ? undefined : currentErrors[key]);

  const resetActiveForm = () => {
    if (activeTab === "elementary") {
      setElementaryForm(initialElementary);
      return;
    }
    if (activeTab === "middle-career") {
      setMiddleCareerForm(initialMiddleCareer);
      return;
    }
    setAdvancedTrackForm(initialAdvanced);
  };

  const handleTabChange = (tab: AiQuoteTabType) => {
    setActiveTab(tab);
    setTouchedFields({});
    setSubmitAttempted(false);
    setErrorMessage("");
    setSuccessMessage("");
    setQuoteResult(null);
    setIsResultPanelOpen(false);
  };

  const toggleMiddleField = (field: MiddleCareerQuoteRequest["careerFields"][number]) => {
    setMiddleCareerForm((prev) => {
      const hasField = prev.careerFields.includes(field);
      return {
        ...prev,
        careerFields: hasField ? prev.careerFields.filter((item) => item !== field) : [...prev.careerFields, field],
      };
    });
    markTouched("careerFields");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    setErrorMessage("");
    setSuccessMessage("");
    setQuoteResult(null);

    setTouchedFields((prev) => {
      const next = { ...prev };
      for (const key of requiredKeys) next[key] = true;
      return next;
    });

    if (summaryErrors.length > 0) {
      setErrorMessage("필수 입력 항목을 확인해주세요.");
      const firstInvalid = requiredKeys.find((key) => currentErrors[key]) ?? summaryErrors[0]?.[0];
      if (firstInvalid) requestAnimationFrame(() => focusField(firstInvalid));
      return;
    }

    const payload = buildPayload(activeTab, elementaryForm, middleCareerForm, advancedTrackForm);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/ai-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as AiQuoteResponse;
      if (!response.ok || !data.ok) {
        setErrorMessage(data.message || "요청 처리 중 오류가 발생했습니다.");
        return;
      }

      setSuccessMessage(data.message);
      setQuoteResult(data.quote ?? null);
      setIsResultPanelOpen(true);
      setTouchedFields({});
      setSubmitAttempted(false);
      resetActiveForm();
    } catch {
      setErrorMessage("네트워크 오류로 요청을 전송하지 못했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[24px] space-y-[18px]">
      <div className="grid gap-[8px] sm:grid-cols-3">
        {(Object.keys(tabLabels) as AiQuoteTabType[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabChange(tab)}
            className={`rounded-[12px] border px-[14px] py-[11px] text-left text-[1.35rem] font-semibold transition-colors ${
              activeTab === tab
                ? "border-primary bg-primary text-white"
                : "border-grey-700 bg-surface text-grey-200 hover:border-grey-500 hover:bg-surface-light"
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      <div className="rounded-[12px] border border-grey-800 bg-surface-light px-[14px] py-[12px]">
        <p className="text-[1.45rem] leading-[1.7] text-grey-200">{tabDescriptions[activeTab]}</p>
        <p className="mt-[4px] text-[1.3rem] leading-[1.65] text-grey-300">{tabExamples[activeTab]}</p>
      </div>

      {submitAttempted && summaryErrors.length > 0 ? (
        <div className="rounded-[12px] border border-red-200 bg-red-50 px-[14px] py-[12px]" role="alert">
          <p className="text-[1.35rem] font-semibold text-red-700">입력 확인이 필요한 항목이 있습니다.</p>
          <ul className="mt-[8px] list-disc space-y-[3px] pl-[18px] text-[1.3rem] text-red-700">
            {summaryErrors.map(([key, message]) => (
              <li key={key}>
                <button type="button" className="underline underline-offset-2" onClick={() => focusField(key)}>
                  {message}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {errorMessage ? <p className="rounded-[10px] border border-red-200 bg-red-50 px-[12px] py-[10px] text-[1.3rem] text-red-700">{errorMessage}</p> : null}
      {successMessage ? <p className="rounded-[10px] border border-primary/30 bg-primary/5 px-[12px] py-[10px] text-[1.3rem] text-primary">{successMessage}</p> : null}

      <form onSubmit={handleSubmit} className="space-y-[14px] rounded-[16px] border border-grey-800 bg-surface-light p-[16px] md:p-[20px]">
        <h2 className="text-[1.85rem] font-bold text-text-primary">{tabLabels[activeTab]} 견적 정보 입력</h2>

        {activeTab === "elementary" ? (
          <ElementaryFormSection
            form={elementaryForm}
            setForm={setElementaryForm}
            fieldError={fieldError}
            markTouched={markTouched}
            registerFieldRef={registerFieldRef}
            sectionCount={sectionCount}
          />
        ) : null}

        {activeTab === "middle-career" ? (
          <MiddleCareerFormSection
            form={middleCareerForm}
            setForm={setMiddleCareerForm}
            fieldError={fieldError}
            markTouched={markTouched}
            registerFieldRef={registerFieldRef}
            sectionCount={sectionCount}
            toggleMiddleField={toggleMiddleField}
          />
        ) : null}

        {activeTab === "ai-startup-aptitude-credit" ? (
          <AdvancedTrackFormSection
            form={advancedTrackForm}
            setForm={setAdvancedTrackForm}
            fieldError={fieldError}
            markTouched={markTouched}
            registerFieldRef={registerFieldRef}
            sectionCount={sectionCount}
          />
        ) : null}

        <div className="flex items-center justify-end">
          <button type="submit" disabled={isSubmitting} className="h-[46px] rounded-[10px] bg-primary px-[18px] text-[1.45rem] font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "견적 계산 중..." : "AI에게 견적 요청하기"}
          </button>
        </div>
      </form>

      <QuoteResult quoteResult={quoteResult} isResultPanelOpen={isResultPanelOpen} setIsResultPanelOpen={setIsResultPanelOpen} />
    </div>
  );
}
