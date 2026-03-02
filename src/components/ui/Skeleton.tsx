import { clsx } from "clsx";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

/** 스켈레톤 로딩 UI — easy to modify */
export function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <span
      className={clsx(
        "block animate-pulse rounded-[10px] bg-surface-light",
        className
      )}
      style={{ width, height }}
      aria-live="polite"
      aria-busy="true"
    />
  );
}
