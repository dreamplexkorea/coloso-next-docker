import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { faqPageData } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "드림플렉스 프로그램 대상, 신청 방법, 강사 검증, 학교 준비 사항, 일정 변경/취소 기준 등 자주 묻는 질문을 확인하세요.",
};

/** FAQ 페이지 (Server Component) */
export default function FaqPage() {
  const phoneHref = `tel:${faqPageData.contact.phoneNumber.replace(/[^0-9+]/g, "")}`;
  const emailHref = `mailto:${faqPageData.contact.email}`;

  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[24px] sm:space-y-[32px] md:space-y-[40px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(140deg,#f8fbff_0%,#edf4fb_52%,#e7f1fb_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[48px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            {faqPageData.eyebrow}
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.6rem] font-bold leading-[1.28] text-text-primary sm:text-[3.2rem] md:text-[3.8rem]">
            {faqPageData.title}
          </h1>
          <p className="mt-[14px] max-w-[860px] text-[1.5rem] leading-[1.7] text-grey-200 sm:text-[1.6rem]">
            {faqPageData.subtitle}
          </p>
          <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[rgba(43,107,154,0.16)] blur-[58px]" />
        </section>

        {faqPageData.categories.map((category) => (
          <section key={category.id} aria-labelledby={category.id} className="space-y-[14px]">
            <h2 id={category.id} className="text-[2.05rem] font-bold text-text-primary">
              {category.title}
            </h2>
            <div className="space-y-[10px]">
              {category.items.map((item, index) => (
                <details
                  key={item.id}
                  open={index === 0}
                  className="group rounded-[14px] border border-grey-800 bg-white p-[16px] open:border-[rgba(43,107,154,0.28)] open:bg-[#f8fbff]"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-[10px]">
                    <h3 className="text-[1.5rem] font-semibold leading-[1.6] text-text-primary">
                      Q. {item.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-[2px] shrink-0 text-[1.9rem] font-light leading-none text-primary transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="mt-[10px] border-t border-grey-800 pt-[10px]">
                    <p className="text-[1.32rem] leading-[1.75] text-grey-300">{item.answer}</p>
                    {item.points?.length ? (
                      <ul className="mt-[8px] space-y-[6px]">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-[8px] text-[1.28rem] text-grey-300">
                            <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-[20px] border border-grey-700 bg-[linear-gradient(150deg,#1f4f72_0%,#2b6b9a_44%,#4aade6_100%)] px-[20px] py-[24px] text-white sm:px-[30px] sm:py-[30px] md:px-[36px]">
          <div className="max-w-[760px]">
            <h2 className="text-[2.1rem] font-bold leading-[1.35] sm:text-[2.4rem]">
              {faqPageData.contact.title}
            </h2>
            <p className="mt-[10px] text-[1.4rem] leading-[1.7] text-[rgba(255,255,255,0.9)] sm:text-[1.5rem]">
              {faqPageData.contact.description}
            </p>
          </div>

          <div className="mt-[16px] flex flex-wrap gap-[10px]">
            <a
              href={phoneHref}
              aria-label={faqPageData.contact.phoneLabel}
              className="inline-flex h-[44px] items-center justify-center rounded-[10px] bg-white px-[16px] text-[1.35rem] font-semibold text-[#1f4f72] transition-opacity hover:opacity-90"
            >
              {faqPageData.contact.phoneLabel} ({faqPageData.contact.phoneNumber})
            </a>
            <a
              href={emailHref}
              aria-label={faqPageData.contact.emailLabel}
              className="inline-flex h-[44px] items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.14)] px-[16px] text-[1.35rem] font-semibold text-white transition-colors hover:bg-[rgba(255,255,255,0.22)]"
            >
              {faqPageData.contact.emailLabel}
            </a>
          </div>

          <p className="mt-[12px] text-[1.25rem] text-[rgba(255,255,255,0.84)]">
            {faqPageData.contact.hoursNote}
          </p>
        </section>
      </Container>
    </main>
  );
}
