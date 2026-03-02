"use client";

import { useRef, useState, type ReactNode } from "react";
import { controlClass, errorClass, hintClass, labelClass, weekdays } from "./quote-constants";
import { type PhoneParts, createMonthCells, formatPhoneParts, parseIsoDate, splitPhoneParts, toIsoDate } from "./quote-validation";

export function SectionHeader({ title, requiredCount }: { title: string; requiredCount: number }) {
  return (
    <div className="flex items-center justify-between gap-[10px] border-b border-grey-800 pb-[10px]">
      <h3 className="text-[1.6rem] font-semibold text-text-primary">{title}</h3>
      <span className="rounded-[999px] bg-grey-900 px-[10px] py-[3px] text-[1.2rem] font-semibold text-grey-300">
        {requiredCount > 0 ? `필수 ${requiredCount}개` : "선택 입력"}
      </span>
    </div>
  );
}

export function FieldShell({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className={labelClass}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
      {error ? <span className={errorClass}>{error}</span> : hint ? <span className={hintClass}>{hint}</span> : null}
    </label>
  );
}

export function InlineCalendar({ selectedDate, onSelect }: { selectedDate: string; onSelect: (date: string) => void }) {
  const [viewMonth, setViewMonth] = useState(() => {
    const parsed = parseIsoDate(selectedDate);
    const base = parsed ?? new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const cells = createMonthCells(viewMonth);
  const todayIso = toIsoDate(new Date());

  return (
    <div className="mt-[8px] rounded-[10px] border border-grey-800 bg-surface-light p-[10px]">
      <div className="mb-[8px] flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month - 1, 1))}
          className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-grey-700 text-[1.3rem] text-grey-200 hover:bg-surface-light"
          aria-label="이전 달"
        >
          ‹
        </button>
        <p className="text-[1.3rem] font-semibold text-text-primary">{`${year}년 ${month + 1}월`}</p>
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month + 1, 1))}
          className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-grey-700 text-[1.3rem] text-grey-200 hover:bg-surface-light"
          aria-label="다음 달"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-[4px]">
        {weekdays.map((weekday) => (
          <span key={weekday} className="text-center text-[1.1rem] font-semibold text-grey-400">
            {weekday}
          </span>
        ))}

        {cells.map((day, index) => {
          if (day === null) return <span key={`empty-${index}`} className="h-[32px]" />;
          const date = new Date(year, month, day);
          const isoDate = toIsoDate(date);
          const selected = isoDate === selectedDate;
          const isToday = isoDate === todayIso;
          return (
            <button
              key={isoDate}
              type="button"
              onClick={() => onSelect(isoDate)}
              className={`h-[32px] rounded-[8px] text-[1.2rem] font-medium ${
                selected
                  ? "bg-primary text-white"
                  : isToday
                    ? "border border-primary text-primary hover:bg-surface-light"
                    : "text-grey-200 hover:bg-surface-light"
              }`}
              aria-pressed={selected}
              aria-label={`${year}년 ${month + 1}월 ${day}일`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PhoneInput({
  value,
  onChange,
  onBlur,
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef?: (node: HTMLInputElement | null) => void;
}) {
  const parts = splitPhoneParts(value);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const updatePart = (index: 0 | 1 | 2, nextValue: string) => {
    const next = [...parts] as PhoneParts;
    next[index] = nextValue.replace(/\D/g, "").slice(0, 4);
    onChange(formatPhoneParts(next));

    const length = next[index].length;
    if (index === 0 && length >= 3) refs.current[1]?.focus();
    if (index === 1 && length >= 4) refs.current[2]?.focus();
  };

  const onBack = (index: 0 | 1 | 2, key: string) => {
    if (key === "Backspace" && parts[index].length === 0 && index > 0) refs.current[index - 1]?.focus();
  };

  return (
    <div className="space-y-[6px]">
      <div className="flex items-center gap-[6px]">
        {[0, 1, 2].map((index) => (
          <div key={index} className="contents">
            <input
              value={parts[index as 0 | 1 | 2]}
              onChange={(event) => updatePart(index as 0 | 1 | 2, event.target.value)}
              onKeyDown={(event) => onBack(index as 0 | 1 | 2, event.key)}
              onBlur={onBlur}
              inputMode="numeric"
              maxLength={4}
              className={`w-full ${controlClass}`}
              aria-label={`연락처 ${index + 1}칸`}
              ref={(node) => {
                refs.current[index] = node;
                if (index === 0 && inputRef) inputRef(node);
              }}
            />
            {index < 2 ? <span className="text-[1.4rem] text-grey-300">-</span> : null}
          </div>
        ))}
      </div>
      <p className={hintClass}>숫자 9~11자리 기준입니다.</p>
    </div>
  );
}

export function SchedulePicker({ selectedDate, onSelect }: { selectedDate: string; onSelect: (date: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectDate = (date: string) => {
    onSelect(date);
    setIsOpen(false);
  };

  return (
    <div className="mt-[12px] space-y-[7px]">
      <div className="flex flex-wrap items-center justify-between gap-[8px]">
        <p className="text-[1.4rem] font-medium text-grey-200">희망 일정 (선택)</p>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-[8px] border border-grey-700 px-[10px] py-[6px] text-[1.2rem] font-semibold text-grey-200 hover:bg-surface-light"
        >
          {isOpen ? "달력 닫기" : "날짜 선택"}
        </button>
      </div>
      <p className={hintClass}>{selectedDate ? `선택한 일정: ${selectedDate}` : "달력에서 우선순위 날짜를 선택해 주세요."}</p>
      {selectedDate ? (
        <button type="button" onClick={() => onSelect("")} className="text-[1.2rem] font-semibold text-grey-300 underline">
          날짜 지우기
        </button>
      ) : null}
      {isOpen ? <InlineCalendar selectedDate={selectedDate} onSelect={handleSelectDate} /> : null}
    </div>
  );
}
