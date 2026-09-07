"use client";

import type { AiQuoteResult } from "@/lib/types";

interface QuoteResultProps {
  quoteResult: AiQuoteResult | null;
  isResultPanelOpen: boolean;
  setIsResultPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function QuoteResult({ quoteResult, isResultPanelOpen, setIsResultPanelOpen }: QuoteResultProps) {
  return (
    <section className="rounded-[16px] border border-grey-800 bg-surface p-[16px] md:p-[20px]">
      <div className="flex items-center justify-between gap-[8px]">
        <h3 className="text-[1.7rem] font-bold text-text-primary">실시간 예상 견적</h3>
        <button
          type="button"
          onClick={() => setIsResultPanelOpen((prev) => !prev)}
          className="rounded-[8px] border border-grey-700 px-[10px] py-[6px] text-[1.2rem] font-semibold text-grey-200 hover:bg-surface-light"
        >
          {isResultPanelOpen ? "패널 닫기" : "패널 열기"}
        </button>
      </div>

      {isResultPanelOpen ? (
        quoteResult ? (
          <div className="mt-[14px] space-y-[12px]">
            <div className="grid gap-[10px] md:grid-cols-3">
              <div className="rounded-[12px] border border-grey-800 bg-surface-light p-[12px]">
                <p className="text-[1.2rem] font-semibold text-grey-400">예상 견적 범위</p>
                <p className="mt-[4px] text-[1.85rem] font-bold text-text-primary">{quoteResult.estimatedBudgetRange}</p>
              </div>
              <div className="rounded-[12px] border border-grey-800 bg-surface-light p-[12px]">
                <p className="text-[1.2rem] font-semibold text-grey-400">추천 프로그램</p>
                <ul className="mt-[6px] list-disc space-y-[2px] pl-[18px] text-[1.35rem] text-grey-200">
                  {quoteResult.recommendedPrograms.map((program) => (
                    <li key={program}>{program}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[12px] border border-grey-800 bg-surface-light p-[12px]">
                <p className="text-[1.2rem] font-semibold text-grey-400">다음 단계</p>
                <ol className="mt-[6px] list-decimal space-y-[2px] pl-[18px] text-[1.35rem] text-grey-200">
                  <li>이메일로 상담 문의</li>
                  <li>담당자 상세 상담</li>
                  <li>최종 운영안 안내</li>
                </ol>
              </div>
            </div>

            <div className="rounded-[12px] border border-grey-800 bg-surface p-[12px]">
              <p className="text-[1.2rem] font-semibold text-grey-400">안내 메모</p>
              <ul className="mt-[6px] list-disc space-y-[2px] pl-[18px] text-[1.3rem] text-grey-300">
                {quoteResult.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="mt-[10px] text-[1.35rem] leading-[1.7] text-grey-300">학교 정보를 입력하고 예상 견적을 계산하면 결과가 표시됩니다.</p>
        )
      ) : (
        <p className="mt-[10px] text-[1.3rem] leading-[1.7] text-grey-300">계산한 예상 금액과 안내를 확인하려면 패널을 열어주세요.</p>
      )}
    </section>
  );
}
