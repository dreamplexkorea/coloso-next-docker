import { Skeleton } from "@/components/ui/Skeleton";

interface CarouselSkeletonProps {
  thumbnailRatio?: "16:9" | "3:4";
  count?: number;
}

export function CarouselSkeleton({ thumbnailRatio = "16:9", count = 5 }: CarouselSkeletonProps) {
  const widths = [240, 260, 280, 260, 240];

  return (
    <div className="flex gap-[16px] overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex-shrink-0" style={{ width: widths[i % widths.length] }}>
          {/* 썸네일 스켈레톤 */}
          <Skeleton
            className={`w-full rounded-t-[10px] rounded-b-none ${thumbnailRatio === "3:4" ? "aspect-[3/4]" : "aspect-video"}`}
          />
          {/* 정보 영역 스켈레톤 */}
          <div className="space-y-[8px] rounded-b-[10px] bg-surface-light p-[12px]">
            {/* 태그 라인 */}
            <div className="flex gap-[4px]">
              <Skeleton className="h-[20px] w-[48px] rounded-[4px]" />
              <Skeleton className="h-[20px] w-[36px] rounded-[4px]" />
            </div>
            {/* 제목 */}
            <Skeleton className="h-[18px] w-[85%] rounded-[4px]" />
            {/* 부제목 */}
            <Skeleton className="h-[14px] w-[60%] rounded-[4px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
