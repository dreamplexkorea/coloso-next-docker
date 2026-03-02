import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { termsPageData } from "@/lib/data/terms";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "드림플렉스 웹사이트 이용약관입니다. 정보 제공, 문의 접수, AI 견적요청 서비스의 이용조건과 책임 범위를 확인할 수 있습니다.",
};

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${year}.${month}.${day}`;
}

/** 이용약관 페이지 (Server Component) */
export default function TermsPage() {
  const phoneHref = `tel:${termsPageData.contact.phone.replace(/[^0-9+]/g, "")}`;
  const emailHref = `mailto:${termsPageData.contact.email}`;

  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[24px] sm:space-y-[32px] md:space-y-[40px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(140deg,#f8fbff_0%,#edf4fb_52%,#e7f1fb_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[48px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            {termsPageData.eyebrow}
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.6rem] font-bold leading-[1.28] text-text-primary sm:text-[3.2rem] md:text-[3.8rem]">
            {termsPageData.title}
          </h1>
          <p className="mt-[14px] max-w-[860px] text-[1.5rem] leading-[1.7] text-grey-200 sm:text-[1.6rem]">
            {termsPageData.subtitle}
          </p>
          <div className="mt-[14px] inline-flex flex-col gap-[4px] rounded-[10px] border border-grey-700 bg-white px-[12px] py-[10px] text-[1.2rem] leading-[1.6] text-grey-300">
            <p>
              시행일:{" "}
              <span className="font-semibold text-grey-200">
                {formatDate(termsPageData.notice.effectiveDate)}
              </span>
            </p>
            <p>
              최종 개정일:{" "}
              <span className="font-semibold text-grey-200">
                {formatDate(termsPageData.notice.amendedDate)}
              </span>
            </p>
          </div>
          <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[rgba(43,107,154,0.16)] blur-[58px]" />
        </section>

        <section className="rounded-[16px] border border-grey-800 bg-surface p-[16px] sm:p-[18px]">
          <p className="text-[1.3rem] leading-[1.72] text-grey-300">{termsPageData.notice.scopeNote}</p>
        </section>

        <section aria-labelledby="terms-contents" className="space-y-[10px]">
          <h2 id="terms-contents" className="a11y">
            이용약관 본문
          </h2>
          {termsPageData.sections.map((section) => (
            <article key={section.id} className="rounded-[14px] border border-grey-800 bg-white p-[16px] sm:p-[18px]">
              <h3 className="text-[1.56rem] font-semibold text-text-primary">{section.title}</h3>
              <div className="mt-[8px] space-y-[6px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[1.32rem] leading-[1.74] text-grey-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-[8px] space-y-[6px]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-[8px] text-[1.28rem] leading-[1.7] text-grey-300">
                      <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-primary" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="rounded-[16px] border border-grey-700 bg-[linear-gradient(150deg,#1f4f72_0%,#2b6b9a_44%,#4aade6_100%)] px-[16px] py-[18px] text-white sm:px-[20px] sm:py-[20px]">
          <h2 className="text-[1.8rem] font-bold leading-[1.4]">약관 관련 문의</h2>
          <p className="mt-[8px] text-[1.3rem] leading-[1.7] text-[rgba(255,255,255,0.9)]">
            아래 채널로 문의해 주시면 확인 후 안내드립니다.
          </p>
          <div className="mt-[12px] flex flex-wrap gap-[8px]">
            <a
              href={phoneHref}
              className="inline-flex rounded-[9px] bg-white px-[12px] py-[8px] text-[1.25rem] font-semibold text-[#1f4f72] transition-opacity hover:opacity-90"
            >
              전화: {termsPageData.contact.phone}
            </a>
            <a
              href={emailHref}
              className="inline-flex rounded-[9px] border border-[rgba(255,255,255,0.48)] bg-[rgba(255,255,255,0.14)] px-[12px] py-[8px] text-[1.25rem] font-semibold text-white transition-colors hover:bg-[rgba(255,255,255,0.22)]"
            >
              이메일: {termsPageData.contact.email}
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
