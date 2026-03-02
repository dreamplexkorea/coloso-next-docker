/**
 * 상품 데이터 자동 로더
 * products/ 디렉토리의 개별 TS 파일들을 slug 기반으로 관리합니다.
 */
import type { CourseDetail } from "@/lib/types";

// 개별 상품 데이터 import
import giantsShoulderAiLiteracy from "./giants-shoulder-ai-literacy";
import magicianCareerExperience from "./magician-career-experience";
import baristaExperience from "./barista-experience";
import dronePilot from "./drone-pilot";
import youtubeCreator from "./youtube-creator";
import printing3d from "./3d-printing";
import forensicScience from "./forensic-science";
import patissier from "./patissier";
import aiProgramming from "./ai-programming";
import webtoonArtist from "./webtoon-artist";
import vetExperience from "./vet-experience";
import spaceScientist from "./space-scientist";
import fashionDesigner from "./fashion-designer";
import musicProducer from "./music-producer";
import startupCeo from "./startup-ceo";
import beautyArtist from "./beauty-artist";
import architect from "./architect";
import robotEngineer from "./robot-engineer";
import emergencyMedic from "./emergency-medic";
import vrDeveloper from "./vr-developer";
import forensicPsychologist from "./forensic-psychologist";
import biotechScientist from "./biotech-scientist";
import newsAnchor from "./news-anchor";

/** slug → CourseDetail 매핑 */
const productMap: Record<string, CourseDetail> = {};

// 모든 상품 데이터를 slug 기반으로 등록
const allProducts: CourseDetail[] = [
    giantsShoulderAiLiteracy,
    magicianCareerExperience,
    baristaExperience,
    dronePilot,
    youtubeCreator,
    printing3d,
    forensicScience,
    patissier,
    aiProgramming,
    webtoonArtist,
    vetExperience,
    spaceScientist,
    fashionDesigner,
    musicProducer,
    startupCeo,
    beautyArtist,
    architect,
    robotEngineer,
    emergencyMedic,
    vrDeveloper,
    forensicPsychologist,
    biotechScientist,
    newsAnchor,
];

for (const product of allProducts) {
    productMap[product.slug] = product;
}

/** slug로 상품 상세 데이터 조회 */
export function getProductBySlug(slug: string): CourseDetail | null {
    return productMap[slug] ?? null;
}

/** 전체 상품 slug 목록 */
export function getAllProductSlugs(): string[] {
    return Object.keys(productMap);
}

/** 전체 상품 데이터 */
export function getAllProducts(): CourseDetail[] {
    return allProducts;
}

export default productMap;
