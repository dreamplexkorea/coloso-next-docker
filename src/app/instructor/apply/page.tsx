import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "강사 지원",
  description:
    "드림플렉스 강사 지원 안내 페이지입니다. 지원 자격, 운영 방식, 선발 절차를 확인하고 오픈 예정인 온라인 지원 접수를 준비하세요.",
};

const qualificationItems = [
  {
    title: "교육 현장 경험",
    description:
      "초/중/고 또는 교육 기관에서 수업 운영 경험이 있거나, 이에 준하는 교육 프로젝트 경험이 필요합니다.",
  },
  {
    title: "전문 분야 역량",
    description:
      "AI, 창업, 진로, 콘텐츠, 디자인 등 담당 가능한 주제에서 실무 기반 콘텐츠를 전달할 수 있어야 합니다.",
  },
  {
    title: "소통 중심 수업 설계",
    description:
      "학생 참여를 이끄는 활동형 수업을 설계하고, 학교별 요구에 맞춰 커리큘럼을 조정할 수 있어야 합니다.",
  },
  {
    title: "협업 및 일정 준수",
    description:
      "운영팀과의 커뮤니케이션, 사전 준비 자료 제출, 수업 후 피드백 공유를 성실하게 진행할 수 있어야 합니다.",
  },
];

const processSteps = [
  {
    title: "지원서 접수(오픈 예정)",
    description: "온라인 지원 폼 공개 후 기본 정보와 강의 가능 분야를 입력합니다.",
  },
  {
    title: "서류 검토",
    description: "경력, 전문성, 학교 프로그램 적합도를 기준으로 내부 검토를 진행합니다.",
  },
  {
    title: "인터뷰 및 시범 강의",
    description: "운영 철학 공유와 수업 진행 역량 확인을 위해 인터뷰 또는 짧은 시범 강의를 진행합니다.",
  },
  {
    title: "최종 등록",
    description: "운영 가이드 안내와 함께 강사 풀 등록 후 프로그램 매칭을 시작합니다.",
  },
];

const faqItems = [
  {
    question: "강의는 어떤 형태로 진행되나요?",
    answer:
      "학교 방문 대면 수업을 기본으로 하며, 프로그램 성격에 따라 프로젝트형/특강형으로 운영됩니다.",
  },
  {
    question: "강의 분야는 고정인가요?",
    answer:
      "주요 전문 분야를 중심으로 배정하지만, 보유 역량과 프로그램 수요에 따라 연계 주제를 함께 제안드릴 수 있습니다.",
  },
  {
    question: "지원 오픈 일정은 어디서 확인하나요?",
    answer:
      "오픈 시점에 본 페이지와 공지 채널에서 안내할 예정이며, 이후 온라인 지원 폼이 활성화됩니다.",
  },
];

/** 강사 지원 소개 페이지 (Server Component) */
export default function InstructorApplyPage() {
  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[24px] sm:space-y-[32px] md:space-y-[40px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(130deg,#f8fbff_0%,#eef6ff_56%,#e4f1ff_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[46px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            INSTRUCTOR RECRUITMENT
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.5rem] font-bold leading-[1.3] text-text-primary sm:text-[3.1rem] md:text-[3.6rem]">
            드림플렉스와 함께할 강사님을 찾고 있습니다
          </h1>
          <p className="mt-[14px] max-w-[820px] text-[1.45rem] leading-[1.75] text-grey-200 sm:text-[1.55rem]">
            학교 현장에서 바로 적용 가능한 수업을 함께 만들 강사 지원 페이지입니다.
            지원 자격과 운영 방식, 선발 절차를 먼저 확인해주세요.
          </p>
          <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-100px] h-[240px] w-[240px] rounded-full bg-[rgba(43,107,154,0.14)] blur-[56px]" />
        </section>

        <section aria-labelledby="instructor-qualification" className="space-y-[14px]">
          <h2 id="instructor-qualification" className="text-[2.05rem] font-bold text-text-primary">
            이런 강사님을 찾고 있어요
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-2">
            {qualificationItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-grey-800 bg-surface p-[18px] sm:p-[20px]"
              >
                <h3 className="text-[1.65rem] font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="instructor-process" className="space-y-[14px]">
          <h2 id="instructor-process" className="text-[2.05rem] font-bold text-text-primary">
            선발 절차
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[16px] border border-grey-800 bg-white p-[18px]">
                <p className="text-[1.2rem] font-semibold text-primary">STEP {index + 1}</p>
                <h3 className="mt-[4px] text-[1.65rem] font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="instructor-faq" className="space-y-[14px]">
          <h2 id="instructor-faq" className="text-[2.05rem] font-bold text-text-primary">
            자주 묻는 질문
          </h2>
          <div className="space-y-[10px]">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-[14px] border border-grey-800 bg-white p-[16px]">
                <h3 className="text-[1.5rem] font-semibold text-text-primary">{faq.question}</h3>
                <p className="mt-[8px] text-[1.32rem] leading-[1.7] text-grey-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[20px] border border-grey-700 bg-surface px-[18px] py-[20px] sm:px-[24px] sm:py-[24px]">
          <div className="flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
            <div className="max-w-[760px]">
              <span className="inline-flex rounded-[999px] bg-grey-700 px-[10px] py-[4px] text-[1.15rem] font-semibold text-grey-300">
                준비중
              </span>
              <h2 className="mt-[8px] text-[2rem] font-bold leading-[1.35] text-text-primary">
                온라인 강사 지원 접수를 준비하고 있습니다
              </h2>
              <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                지원 폼은 곧 공개될 예정이며, 공개 후 본 페이지에서 바로 제출할 수 있게
                제공됩니다.
              </p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex h-[44px] items-center justify-center rounded-[10px] bg-grey-700 px-[18px] text-[1.3rem] font-semibold text-grey-400 opacity-80"
            >
              강사 지원 오픈 예정
            </button>
          </div>
          <p className="mt-[12px] text-[1.25rem] leading-[1.65] text-grey-400">
            현재는 접수 기능이 비활성화되어 있습니다. 오픈 시점에 자동으로 활성화됩니다.
          </p>

          {/* TODO: Add client-side form component when Notion+n8n pipeline is ready. */}
          {/* TODO: Wire form submit to POST /api/instructor/apply (validation + n8n webhook relay). */}
        </section>
      </Container>
    </main>
  );
}
