/**
 * 패션 디자이너 프로그램 이미지 관리 파일
 *
 * ✅ 이미지를 바꾸려면 이 파일만 수정하세요!
 *
 * 📁 이미지 파일 위치:
 *    public/images/products/fashion-designer/
 *
 * 📌 이미지 교체 방법:
 *    1. 위 폴더에 새 이미지 파일을 넣습니다
 *    2. 아래 경로 문자열을 새 파일명으로 바꿉니다
 *    3. 저장하면 자동으로 반영됩니다
 *
 * 📐 권장 이미지 규격:
 *    - hero (히어로 메인): 1200 x 800px (3:2 비율)
 *    - class (수업 현장): 800 x 600px (4:3 비율)
 *    - 파일 형식: .webp 권장 (용량 작고 화질 좋음), .jpg / .png 도 가능
 */

const BASE = "/images/products/fashion-designer";

export const fashionDesignerImages = {
    /** 히어로 섹션 메인 이미지 */
    hero: `${BASE}/hero.webp`,

    /** 수업 소개 섹션 이미지 (CLASS INTRO) */
    intro: `${BASE}/class-1.webp`,

    /** 체험 섹션 이미지 (EXPERIENCE) */
    experience: `${BASE}/class-3.webp`,

    /** 변화 섹션 이미지 (TRANSFORMATION) */
    transformation: `${BASE}/class-5.webp`,

    /** 커리큘럼 1차시 이미지들 (순서대로 캐러셀에 표시) */
    chapter1: [
        `${BASE}/class-1.webp`,
        `${BASE}/class-2.webp`,
    ],

    /** 커리큘럼 2차시 이미지들 (순서대로 캐러셀에 표시) */
    chapter2: [
        `${BASE}/class-3.webp`,
        `${BASE}/class-4.webp`,
        `${BASE}/class-5.webp`,
    ],
};
