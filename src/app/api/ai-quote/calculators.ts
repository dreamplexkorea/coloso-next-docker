import type {
  AdvancedTrackQuoteRequest,
  AiQuoteRequest,
  AiQuoteResult,
  ElementaryQuoteRequest,
  MiddleCareerQuoteRequest,
} from "@/lib/types";
import {
  elementaryGradeBandPrice,
  elementaryAreaBonus,
  middleGradePrice,
  middleSessionMultiplier,
  middleCareerProgramMap,
  advancedTrackBasePrice,
  advancedOperationMultiplier,
  advancedTargetMultiplier,
  advancedTrackProgramMap,
} from "./constants";

function formatKrwRange(amount: number): string {
  const low = Math.round(amount * 0.88);
  const high = Math.round(amount * 1.15);
  const formatter = new Intl.NumberFormat("ko-KR");
  return `${formatter.format(low)}원 ~ ${formatter.format(high)}원`;
}

function buildElementaryQuote(data: ElementaryQuoteRequest): AiQuoteResult {
  const basePrice = elementaryGradeBandPrice[data.gradeBand];
  const areaBonus = elementaryAreaBonus[data.experienceArea];
  const total = data.classCount * data.participantCount * (basePrice + areaBonus);

  return {
    estimatedBudgetRange: formatKrwRange(total),
    recommendedPrograms: [`${data.experienceArea} 맞춤 진로체험`, `${data.gradeBand} 체험형 프로젝트`],
    notes: [
      `기준: 초등학교 / ${data.gradeBand} / 참여 반수 ${data.classCount}개 / 반당 평균 ${data.participantCount}명`,
      "학년군별 난이도와 안전 운영 기준을 반영한 예상 견적입니다.",
      "요청 접수 후 담당자가 1영업일 내 상세 커리큘럼을 안내합니다.",
    ],
  };
}

function buildMiddleCareerQuote(data: MiddleCareerQuoteRequest): AiQuoteResult {
  const base = middleGradePrice[data.gradeLevel];
  const fieldBonus = 1300 * data.careerFields.length;
  const total =
    data.classCount * data.participantCount * (base + fieldBonus) * middleSessionMultiplier[data.sessionPlan];
  const recommendedPrograms = data.careerFields.map((field) => middleCareerProgramMap[field]);

  return {
    estimatedBudgetRange: formatKrwRange(total),
    recommendedPrograms,
    notes: [
      `기준: 중학교 진로체험 / ${data.gradeLevel} / ${data.sessionPlan} / 참여 반수 ${data.classCount}개 / 반당 평균 ${data.participantCount}명`,
      "진로분야 수와 차시 구성에 따라 최종 금액이 조정될 수 있습니다.",
      "학급별 분반 운영이 필요한 경우 별도 제안을 제공합니다.",
    ],
  };
}

function buildAdvancedTrackQuote(data: AdvancedTrackQuoteRequest): AiQuoteResult {
  const base = advancedTrackBasePrice[data.track];
  const operationMultiplier = advancedOperationMultiplier[data.operationType];
  const targetMultiplier = advancedTargetMultiplier[data.targetGroup];
  const total = data.classCount * data.participantCount * base * operationMultiplier * targetMultiplier;

  return {
    estimatedBudgetRange: formatKrwRange(total),
    recommendedPrograms: [
      advancedTrackProgramMap[data.track],
      `${data.operationType} 운영안`,
    ],
    notes: [
      `기준: ${data.track} / ${data.targetGroup} / 참여 반수 ${data.classCount}개 / 반당 평균 ${data.participantCount}명`,
      "고교학점제 연계 시 과목군 매핑표와 운영안 샘플을 함께 제공합니다.",
      "학교 일정과 예산 기준에 맞춰 단계형 커리큘럼으로 조정 가능합니다.",
    ],
  };
}

export function buildQuote(request: AiQuoteRequest): AiQuoteResult {
  if (request.tabType === "elementary") {
    return buildElementaryQuote(request.payload);
  }
  if (request.tabType === "middle-career") {
    return buildMiddleCareerQuote(request.payload);
  }
  return buildAdvancedTrackQuote(request.payload);
}
