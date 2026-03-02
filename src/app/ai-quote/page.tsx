import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AiQuoteForm } from "./_components/AiQuoteForm";

/** AI 견적요청 진입 페이지 (Server Component) */
export default function AiQuotePage() {
  return (
    <main className="bg-background py-[40px] md:py-[56px]">
      <Container>
        <section className="rounded-[20px] border border-grey-800 bg-surface p-[20px] md:p-[28px]">
          <p className="text-[1.2rem] font-semibold tracking-[0.02em] text-primary">
            AI 견적 도우미
          </p>
          <h1 className="mt-[8px] text-[2.3rem] font-bold leading-[1.35] text-text-primary md:text-[2.8rem]">
            AI에게 체험 견적을 요청해보세요
          </h1>
          <p className="mt-[12px] max-w-[760px] text-[1.4rem] leading-[1.75] text-text-secondary">
            탭에서 대상 유형을 먼저 선택한 뒤, 필수 정보만 입력하면 예상 견적을 바로 확인할 수
            있습니다. 접수 후 담당자가 상세 상담을 진행합니다.
          </p>
          <ol className="mt-[14px] grid gap-[8px] rounded-[12px] border border-grey-800 bg-surface-light p-[12px] text-[1.3rem] leading-[1.65] text-grey-200 md:grid-cols-3">
            <li>1. 분류 탭 선택</li>
            <li>2. 필수 정보 입력</li>
            <li>3. 예상 견적 확인</li>
          </ol>

          <AiQuoteForm />

          <div className="mt-[24px] flex flex-wrap items-center gap-[10px]">
            <Link
              href="/"
              className="rounded-[10px] bg-primary px-[16px] py-[10px] text-[1.3rem] font-semibold text-white transition-opacity hover:opacity-90"
            >
              홈으로 돌아가기
            </Link>
            <a
              href="mailto:support@coloso.co.kr"
              className="rounded-[10px] border border-grey-700 bg-surface px-[16px] py-[10px] text-[1.3rem] font-semibold text-text-primary transition-colors hover:bg-surface-light"
            >
              이메일로 문의하기
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
