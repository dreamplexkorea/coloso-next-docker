import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinks, footerBottomInfo } from "@/lib/data/footer";

/** 푸터 (Server Component) — 회사 정보, 링크 */
export function Footer() {
  return (
    <footer className="border-t border-grey-800 bg-white py-[48px]">
      <Container>
        {/* 상단: 링크 */}
        <div className="flex flex-col justify-between gap-[24px] md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-[16px]">
            {footerLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={`text-[1.4rem] ${
                  link.label === "개인정보처리방침"
                    ? "font-bold text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 하단: 회사 정보 */}
        <div className="mt-[32px] space-y-[4px] text-[1.4rem] leading-[1.8] text-text-secondary">
          <p>{footerBottomInfo.companyLine}</p>
          <p>{footerBottomInfo.contactLine}</p>
          <p className="mt-[16px] text-text-tertiary">{footerBottomInfo.copyrightLine}</p>
        </div>
      </Container>
    </footer>
  );
}
