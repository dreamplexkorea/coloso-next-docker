import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { privacyPolicyPageData } from "@/lib/data/privacy";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "드림플렉스 개인정보처리방침입니다. 수집 항목, 처리 목적, 보유기간, 권리행사 방법 및 보호조치를 확인할 수 있습니다.",
};

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${year}.${month}.${day}`;
}

/** 개인정보처리방침 페이지 (Server Component) */
export default function PrivacyPage() {
  const phoneHref = `tel:${privacyPolicyPageData.contact.phone.replace(/[^0-9+]/g, "")}`;
  const emailHref = `mailto:${privacyPolicyPageData.contact.email}`;

  return (
    <main className="bg-white py-[44px] sm:py-[56px] md:py-[68px]">
      <Container className="space-y-[24px] sm:space-y-[32px] md:space-y-[40px]">
        <section className="relative overflow-hidden rounded-[24px] border border-grey-800 bg-[linear-gradient(140deg,#f8fbff_0%,#edf4fb_52%,#e7f1fb_100%)] px-[20px] py-[28px] sm:px-[30px] sm:py-[36px] md:px-[44px] md:py-[48px]">
          <span className="text-[1.2rem] font-semibold tracking-[0.06em] text-primary">
            {privacyPolicyPageData.eyebrow}
          </span>
          <h1 className="mt-[8px] max-w-[760px] text-[2.6rem] font-bold leading-[1.28] text-text-primary sm:text-[3.2rem] md:text-[3.8rem]">
            {privacyPolicyPageData.title}
          </h1>
          <p className="mt-[14px] max-w-[860px] text-[1.5rem] leading-[1.7] text-grey-200 sm:text-[1.6rem]">
            {privacyPolicyPageData.subtitle}
          </p>
          <div className="mt-[14px] inline-flex flex-col gap-[4px] rounded-[10px] border border-grey-700 bg-white px-[12px] py-[10px] text-[1.2rem] leading-[1.6] text-grey-300">
            <p>
              시행일:{" "}
              <span className="font-semibold text-grey-200">
                {formatDate(privacyPolicyPageData.notice.effectiveDate)}
              </span>
            </p>
            <p>
              최종 개정일:{" "}
              <span className="font-semibold text-grey-200">
                {formatDate(privacyPolicyPageData.notice.amendedDate)}
              </span>
            </p>
          </div>
          <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full bg-[rgba(74,173,230,0.24)] blur-[48px]" />
          <div className="pointer-events-none absolute bottom-[-90px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[rgba(43,107,154,0.16)] blur-[58px]" />
        </section>

        <section aria-labelledby="privacy-processing-table" className="space-y-[12px]">
          <h2 id="privacy-processing-table" className="text-[2.05rem] font-bold text-text-primary">
            개인정보 처리 목적·항목·보유기간
          </h2>
          <div className="overflow-hidden rounded-[14px] border border-grey-800 bg-white">
            <div className="grid grid-cols-[1fr] border-b border-grey-800 bg-surface text-[1.25rem] font-semibold text-grey-200 md:grid-cols-[1.2fr_1.4fr_1fr]">
              <p className="px-[14px] py-[10px]">처리 목적</p>
              <p className="px-[14px] py-[10px] md:border-l md:border-grey-800">처리 항목</p>
              <p className="px-[14px] py-[10px] md:border-l md:border-grey-800">보유기간</p>
            </div>
            {privacyPolicyPageData.processingItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr] border-t border-grey-800 text-[1.28rem] text-grey-300 md:grid-cols-[1.2fr_1.4fr_1fr]"
              >
                <p className="px-[14px] py-[12px] leading-[1.7]">{item.purpose}</p>
                <div className="px-[14px] py-[12px] md:border-l md:border-grey-800">
                  <ul className="space-y-[4px]">
                    {item.items.map((value) => (
                      <li key={value} className="flex items-start gap-[8px]">
                        <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-primary" aria-hidden="true" />
                        <span className="leading-[1.7]">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="px-[14px] py-[12px] leading-[1.7] md:border-l md:border-grey-800">{item.retention}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="privacy-policy-contents" className="space-y-[10px]">
          <h2 id="privacy-policy-contents" className="a11y">
            개인정보처리방침 본문
          </h2>
          {privacyPolicyPageData.sections.map((section) => (
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

        <section className="rounded-[14px] border border-grey-800 bg-surface p-[16px] sm:p-[18px]">
          <h2 className="text-[1.7rem] font-semibold text-text-primary">개인정보 보호책임자</h2>
          <p className="mt-[8px] text-[1.32rem] leading-[1.72] text-grey-300">
            부서: {privacyPolicyPageData.contact.department}
            <br />
            성명: {privacyPolicyPageData.contact.manager}
          </p>
          <div className="mt-[10px] flex flex-wrap gap-[8px]">
            <a
              href={phoneHref}
              className="inline-flex rounded-[9px] bg-white px-[12px] py-[8px] text-[1.25rem] font-semibold text-primary transition-opacity hover:opacity-90"
            >
              전화: {privacyPolicyPageData.contact.phone}
            </a>
            <a
              href={emailHref}
              className="inline-flex rounded-[9px] border border-grey-700 bg-white px-[12px] py-[8px] text-[1.25rem] font-semibold text-grey-200 transition-colors hover:bg-grey-900"
            >
              이메일: {privacyPolicyPageData.contact.email}
            </a>
          </div>
        </section>

        <section className="rounded-[14px] border border-grey-800 bg-white p-[16px] sm:p-[18px]">
          <h2 className="text-[1.7rem] font-semibold text-text-primary">권익침해 구제기관</h2>
          <div className="mt-[10px] grid gap-[8px] sm:grid-cols-2">
            {privacyPolicyPageData.reliefChannels.map((channel) => (
              <article key={channel.name} className="rounded-[10px] border border-grey-800 bg-surface p-[12px]">
                <p className="text-[1.35rem] font-semibold text-text-primary">{channel.name}</p>
                <a
                  href={channel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[4px] inline-block text-[1.25rem] text-primary underline-offset-[3px] hover:underline"
                >
                  {channel.website}
                </a>
                <p className="mt-[4px] text-[1.22rem] text-grey-300">{channel.phone}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
