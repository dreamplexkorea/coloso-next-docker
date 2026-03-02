import type { PrivacyPolicyPageData } from "@/lib/types";

// 개인정보처리방침 — 개인정보보호법 제30조 공개 항목 기준 + 현재 서비스 기능 기준
export const privacyPolicyPageData: PrivacyPolicyPageData = {
  eyebrow: "PRIVACY POLICY",
  title: "개인정보처리방침",
  subtitle:
    "드림플렉스는 이용자의 개인정보를 관련 법령에 따라 안전하게 처리합니다. 본 방침은 웹사이트 이용, 문의 접수, AI 견적요청 과정에서의 개인정보 처리 기준을 안내합니다.",
  notice: {
    effectiveDate: "2026-03-01",
    amendedDate: "2026-03-01",
  },
  processingItems: [
    {
      id: "processing-1",
      purpose: "AI 견적요청 처리 및 결과 안내",
      items: [
        "학교명/기관명",
        "담당자명",
        "연락처",
        "이메일(선택)",
        "학년/대상/트랙/운영형태/참여 인원/희망 일정/요청내용",
      ],
      retention: "서버 DB에 별도 저장하지 않으며, 요청 처리 후 즉시 폐기",
    },
    {
      id: "processing-2",
      purpose: "문의 응대 및 운영 안내",
      items: ["이름(또는 소속 담당자명)", "연락처", "이메일", "문의내용"],
      retention: "문의 처리 완료 후 최대 1년 이내 파기(법령상 별도 보관 의무가 없는 경우)",
    },
    {
      id: "processing-3",
      purpose: "서비스 보안 및 장애 대응",
      items: ["접속 IP", "접속 일시", "브라우저/기기 정보", "요청 로그"],
      retention: "보안·장애 대응 목적 범위 내에서 최대 3개월",
    },
  ],
  sections: [
    {
      id: "privacy-1",
      title: "1. 개인정보의 처리 목적",
      paragraphs: [
        "회사는 프로그램 문의, AI 견적요청, 서비스 운영 및 보안 관리 목적 범위에서만 개인정보를 처리합니다.",
      ],
    },
    {
      id: "privacy-2",
      title: "2. 개인정보의 처리 및 보유기간",
      paragraphs: [
        "회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 수집 시 동의받은 보유·이용기간 내에서 개인정보를 처리·보유합니다.",
      ],
    },
    {
      id: "privacy-3",
      title: "3. 개인정보의 제3자 제공",
      paragraphs: ["회사는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다."],
      bullets: [
        "다만, 정보주체의 동의가 있거나 법령에 특별한 규정이 있는 경우에는 예외로 합니다.",
      ],
    },
    {
      id: "privacy-4",
      title: "4. 개인정보처리의 위탁",
      paragraphs: ["회사는 원활한 서비스 제공을 위해 필요한 범위에서 개인정보 처리업무를 위탁할 수 있습니다."],
      bullets: [
        "위탁이 발생하는 경우 수탁자, 위탁업무 내용, 관리·감독 사항을 본 방침 또는 별도 고지로 공개합니다.",
      ],
    },
    {
      id: "privacy-5",
      title: "5. 정보주체와 법정대리인의 권리·의무 및 행사방법",
      paragraphs: [
        "정보주체는 회사에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.",
        "권리 행사는 이메일 또는 서면 등을 통해 요청할 수 있으며, 회사는 지체 없이 조치합니다.",
      ],
    },
    {
      id: "privacy-6",
      title: "6. 개인정보의 파기 절차 및 방법",
      paragraphs: [
        "개인정보는 처리 목적 달성 또는 보유기간 경과 시 지체 없이 파기합니다.",
      ],
      bullets: [
        "전자적 파일: 복구 불가능한 기술적 방법으로 영구 삭제",
        "종이 문서: 분쇄 또는 소각",
      ],
    },
    {
      id: "privacy-7",
      title: "7. 개인정보의 안전성 확보조치",
      paragraphs: ["회사는 개인정보의 안전성 확보를 위해 다음 조치를 시행합니다."],
      bullets: [
        "개인정보 접근 권한의 최소화 및 접근 통제",
        "전송구간 보호(HTTPS) 및 기술적 보안 조치",
        "로그 관리, 보안 점검 등 운영적 보호 조치",
      ],
    },
    {
      id: "privacy-8",
      title: "8. 자동으로 수집하는 장치의 설치·운영 및 거부",
      paragraphs: [
        "회사는 서비스 운영 과정에서 쿠키를 사용할 수 있으며, 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.",
        "단, 쿠키 저장을 거부하는 경우 일부 서비스 이용에 제한이 있을 수 있습니다.",
      ],
    },
    {
      id: "privacy-9",
      title: "9. 개인정보 보호책임자 및 담당부서",
      paragraphs: [
        "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리 관련 불만처리 및 피해구제를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
      ],
    },
    {
      id: "privacy-10",
      title: "10. 권익침해 구제방법",
      paragraphs: [
        "정보주체는 개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의할 수 있습니다.",
      ],
    },
    {
      id: "privacy-11",
      title: "11. 개인정보처리방침의 변경",
      paragraphs: [
        "본 방침은 시행일로부터 적용되며, 내용 추가·삭제·수정이 있는 경우 변경사항을 웹사이트를 통해 공지합니다.",
      ],
    },
  ],
  contact: {
    department: "개인정보보호 담당부서",
    manager: "개인정보 보호책임자 강욱곤",
    email: "kang_couch@dreamplex.co.kr",
    phone: "1588-3803",
  },
  reliefChannels: [
    {
      name: "개인정보침해신고센터",
      website: "https://privacy.kisa.or.kr",
      phone: "국번없이 118",
    },
    {
      name: "개인정보분쟁조정위원회",
      website: "https://www.kopico.go.kr",
      phone: "1833-6972",
    },
    {
      name: "대검찰청 사이버수사과",
      website: "https://www.spo.go.kr",
      phone: "국번없이 1301",
    },
    {
      name: "경찰청 사이버범죄 신고시스템",
      website: "https://ecrm.police.go.kr",
      phone: "국번없이 182",
    },
  ],
};
