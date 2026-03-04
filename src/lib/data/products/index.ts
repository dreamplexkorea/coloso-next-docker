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
import vocalist from "./vocalist";
import choreographer from "./choreographer";
import magician from "./magician";
import stageActor from "./stage-actor";
import musicalActor from "./musical-actor";
import hairDesigner from "./hair-designer";
import specialMakeupArtist from "./special-makeup-artist";
import imageConsultant from "./image-consultant";
import perfumer from "./perfumer";
import makeupArtist from "./makeup-artist";
import aromatherapist from "./aromatherapist";
import nailArtist from "./nail-artist";
import crimeSceneInvestigation from "./crime-scene-investigation";
import interiorDesigner from "./interior-designer";
import cosmeticEngineer from "./cosmetic-engineer";
import bioengineering from "./bioengineering";
import architectureEngineer from "./architecture-engineer";
import robotEngineer2 from "./robot-engineer-2";
import metaverseSpaceCreator from "./metaverse-space-creator";
import droneExpert from "./drone-expert";
import smartFarmExpert from "./smart-farm-expert";
import smartFarmExpert2 from "./smart-farm-expert-2";
import autonomousDriving from "./autonomous-driving";
import smartFarmExpert3 from "./smart-farm-expert-3";
import smartFarmExpert4 from "./smart-farm-expert-4";
import advertisementProducer from "./advertisement-producer";
import webDramaProducer from "./web-drama-producer";
import movieDirector from "./movie-director";
import photographer from "./photographer";
import pastryChef from "./pastry-chef";
import woodcraftDesigner from "./woodcraft-designer";
import wagashiDesigner from "./wagashi-designer";
import horticulturalTherapist from "./horticultural-therapist";
import florist from "./florist";
import flightAttendant from "./flight-attendant";
import hotelier from "./hotelier";
import physiotherapist from "./physiotherapist";
import medicalNurse from "./medical-nurse";
import dentalHygienist from "./dental-hygienist";
import healthcare from "./healthcare";
import chocolatier from "./chocolatier";
import barista from "./barista";
import webtoonCreator from "./webtoon-creator";

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
    vocalist,
    choreographer,
    magician,
    stageActor,
    musicalActor,
    hairDesigner,
    specialMakeupArtist,
    imageConsultant,
    perfumer,
    makeupArtist,
    aromatherapist,
    nailArtist,
    crimeSceneInvestigation,
    interiorDesigner,
    cosmeticEngineer,
    bioengineering,
    architectureEngineer,
    robotEngineer2,
    metaverseSpaceCreator,
    droneExpert,
    smartFarmExpert,
    smartFarmExpert2,
    autonomousDriving,
    smartFarmExpert3,
    smartFarmExpert4,
    advertisementProducer,
    webDramaProducer,
    movieDirector,
    photographer,
    pastryChef,
    woodcraftDesigner,
    wagashiDesigner,
    horticulturalTherapist,
    florist,
    flightAttendant,
    hotelier,
    physiotherapist,
    medicalNurse,
    dentalHygienist,
    healthcare,
    chocolatier,
    barista,
    webtoonCreator,
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
