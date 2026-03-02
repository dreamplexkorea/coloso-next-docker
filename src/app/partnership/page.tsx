import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { companyInfo } from "@/lib/data/footer";
import { partnershipPageData } from "@/lib/data/partnership";

export const metadata: Metadata = {
  title: "제휴/협력",
  description:
    "드림플렉스 제휴/협력 안내 페이지입니다. 학교·교육기관·기업·공공기관 대상 협력 방식과 문의 절차를 확인할 수 있습니다.",
};

/** 제휴/협력 페이지 (Server Component) */
export default function PartnershipPage() {
  const phoneHref = `tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`;
  const emailHref = `mailto:${companyInfo.email}`;

  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[24px] sm:space-y-[32px] md:space-y-[40px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(140deg,#f8fbff_0%,#edf4fb_52%,#e7f1fb_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[48px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            {partnershipPageData.eyebrow}
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.6rem] font-bold leading-[1.28] text-text-primary sm:text-[3.2rem] md:text-[3.8rem]">
            {partnershipPageData.title}
          </h1>
          <p className="mt-[14px] max-w-[840px] text-[1.5rem] leading-[1.7] text-grey-200 sm:text-[1.6rem]">
            {partnershipPageData.subtitle}
          </p>
          <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[rgba(43,107,154,0.16)] blur-[58px]" />
        </section>

        <section aria-labelledby="partnership-targets" className="space-y-[14px]">
          <h2 id="partnership-targets" className="text-[2.05rem] font-bold text-text-primary">
            이런 파트너와 협력합니다
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-3">
            {partnershipPageData.partnerTypes.map((item) => (
              <article
                key={item.id}
                className="rounded-[16px] border border-grey-800 bg-white p-[18px] sm:p-[20px]"
              >
                <h3 className="text-[1.65rem] font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="partnership-models" className="space-y-[14px]">
          <h2 id="partnership-models" className="text-[2.05rem] font-bold text-text-primary">
            협력 방식
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-3">
            {partnershipPageData.collaborationModels.map((item) => (
              <article
                key={item.id}
                className="rounded-[16px] border border-grey-800 bg-surface p-[18px] sm:p-[20px]"
              >
                <h3 className="text-[1.65rem] font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="partnership-process" className="space-y-[14px]">
          <h2 id="partnership-process" className="text-[2.05rem] font-bold text-text-primary">
            진행 절차
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-2">
            {partnershipPageData.processSteps.map((step, index) => (
              <article key={step.id} className="rounded-[16px] border border-grey-800 bg-white p-[18px]">
                <p className="text-[1.2rem] font-semibold text-primary">STEP {index + 1}</p>
                <h3 className="mt-[4px] text-[1.65rem] font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="partnership-trust" className="space-y-[14px]">
          <h2 id="partnership-trust" className="text-[2.05rem] font-bold text-text-primary">
            드림플렉스 협업 원칙
          </h2>
          <div className="grid gap-[12px] sm:gap-[14px] md:grid-cols-2">
            {partnershipPageData.trustPoints.map((point) => (
              <article
                key={point.id}
                className="rounded-[16px] border border-grey-800 bg-surface p-[18px] sm:p-[20px]"
              >
                <h3 className="text-[1.65rem] font-semibold text-text-primary">{point.title}</h3>
                <p className="mt-[8px] text-[1.35rem] leading-[1.7] text-grey-300">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="partnership-faq" className="space-y-[14px]">
          <h2 id="partnership-faq" className="text-[2.05rem] font-bold text-text-primary">
            자주 묻는 질문
          </h2>
          <div className="space-y-[10px]">
            {partnershipPageData.faqItems.map((faq) => (
              <article key={faq.question} className="rounded-[14px] border border-grey-800 bg-white p-[16px]">
                <h3 className="text-[1.5rem] font-semibold text-text-primary">{faq.question}</h3>
                <p className="mt-[8px] text-[1.32rem] leading-[1.7] text-grey-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[20px] border border-grey-700 bg-[linear-gradient(150deg,#1f4f72_0%,#2b6b9a_44%,#4aade6_100%)] px-[20px] py-[24px] text-white sm:px-[30px] sm:py-[30px] md:px-[36px]">
          <div className="max-w-[760px]">
            <h2 className="text-[2.1rem] font-bold leading-[1.35] sm:text-[2.4rem]">
              {partnershipPageData.cta.title}
            </h2>
            <p className="mt-[10px] text-[1.4rem] leading-[1.7] text-[rgba(255,255,255,0.9)] sm:text-[1.5rem]">
              {partnershipPageData.cta.description}
            </p>
          </div>

          <div className="mt-[16px] flex flex-wrap gap-[10px]">
            <a
              href={emailHref}
              aria-label={partnershipPageData.cta.emailButtonLabel}
              className="inline-flex h-[44px] items-center justify-center rounded-[10px] bg-white px-[16px] text-[1.35rem] font-semibold text-[#1f4f72] transition-opacity hover:opacity-90"
            >
              {partnershipPageData.cta.emailButtonLabel}
            </a>
            <a
              href={phoneHref}
              aria-label={partnershipPageData.cta.phoneButtonLabel}
              className="inline-flex h-[44px] items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.14)] px-[16px] text-[1.35rem] font-semibold text-white transition-colors hover:bg-[rgba(255,255,255,0.22)]"
            >
              {partnershipPageData.cta.phoneButtonLabel}
            </a>
          </div>

          <p className="mt-[12px] text-[1.25rem] text-[rgba(255,255,255,0.84)]">
            {partnershipPageData.cta.responseNote}
          </p>
          <p className="mt-[4px] text-[1.25rem] text-[rgba(255,255,255,0.84)]">
            {partnershipPageData.cta.hoursNote}
          </p>
        </section>
      </Container>
    </main>
  );
}
