import type { CourseDetail } from "@/lib/types";

/* ── 교육과정 연계 배지 아이콘 매핑 ── */
const BADGE_ICONS: Record<string, string> = {
  "창체 진로탐색 활동": "🧭",
  "창체 진로탐색": "🧭",
  "자유학기제": "🎓",
  "자유학년제": "🎓",
  "고교학점제": "📚",
  "2022 개정 교육과정": "📋",
  "2015 개정 교육과정": "📋",
  "STEAM 교육": "🔬",
  "진로체험 의무화": "✅",
  "창의적 체험활동": "🌟",
  "교과 연계": "🔗",
};

function getBadgeIcon(label: string): string {
  // 정확히 일치하는 키 먼저
  if (BADGE_ICONS[label]) return BADGE_ICONS[label];
  // 부분 일치
  for (const [key, icon] of Object.entries(BADGE_ICONS)) {
    if (label.includes(key) || key.includes(label)) return icon;
  }
  return "📌";
}

/* ── 배지 색상 (순환) ── */
const BADGE_COLORS = [
  {
    bg: "bg-[#EBF5FF]",
    border: "border-[#4AADE6]/30",
    text: "text-[#1A6FA8]",
    dot: "bg-[#4AADE6]",
  },
  {
    bg: "bg-[#F0FDF4]",
    border: "border-emerald-200",
    text: "text-emerald-700",
    dot: "bg-emerald-400",
  },
  {
    bg: "bg-[#FFF7ED]",
    border: "border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-400",
  },
  {
    bg: "bg-[#F5F3FF]",
    border: "border-violet-200",
    text: "text-violet-700",
    dot: "bg-violet-400",
  },
  {
    bg: "bg-[#FFF1F2]",
    border: "border-rose-200",
    text: "text-rose-700",
    dot: "bg-rose-400",
  },
];

interface CurriculumBadgesProps {
  curriculumLinks: NonNullable<CourseDetail["curriculumLinks"]>;
}

export function CurriculumBadges({ curriculumLinks }: CurriculumBadgesProps) {
  if (!curriculumLinks || curriculumLinks.length === 0) return null;

  return (
    <section className="w-full bg-white border-t border-[#E2EBF4] py-[32px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">
    <div className="rounded-[20px] border border-[#E2EBF4] bg-[#F8FAFC] px-[28px] py-[24px] shadow-sm">
      {/* 헤더 */}
      <div className="mb-[18px] flex items-center gap-[10px]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#EBF5FF]">
          <svg
            className="h-[16px] w-[16px] text-[#2B6B9A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <div>
          <p className="text-[1.4rem] font-black text-[#0F1E2E]">교육과정 연계</p>
          <p className="text-[1.2rem] text-slate-400">이 프로그램이 해당하는 교육과정 항목입니다</p>
        </div>
      </div>

      {/* 배지 목록 */}
      <div className="flex flex-wrap gap-[10px]">
        {curriculumLinks.map((label, idx) => {
          const color = BADGE_COLORS[idx % BADGE_COLORS.length];
          const icon = getBadgeIcon(label);
          return (
            <span
              key={label}
              className={`inline-flex items-center gap-[7px] rounded-full border px-[14px] py-[7px] text-[1.3rem] font-semibold transition-transform duration-200 hover:-translate-y-[1px] ${color.bg} ${color.border} ${color.text}`}
            >
              <span className="text-[1.4rem] leading-none">{icon}</span>
              {label}
            </span>
          );
        })}
      </div>

      {/* 안내 문구 */}
      <p className="mt-[16px] text-[1.2rem] text-slate-400">
        선생님께서 교무 결재 시 참고하실 수 있습니다.
      </p>
    </div>
      </div>
    </section>
  );
}
