"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { CourseCard as CourseCardType } from "@/lib/types";

interface CourseCardProps {
  course: CourseCardType;
  thumbnailRatio?: "16:9" | "3:4";
  priority?: boolean;
}

/** 강의 카드 (Client Component) — 개별 강의 표시 */
export function CourseCard({ course, thumbnailRatio = "16:9", priority = false }: CourseCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={`/products/${course.slug}`}
      className="group course-card-link block flex-shrink-0 carousel-card-width"
    >
      {/* 카드 래퍼 — framer-motion 호버 애니메이션 */}
      <motion.div
        className="course-card-cinematic rounded-[10px] bg-grey-700"
        whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {/* 썸네일 */}
        <div className={`course-card-thumb relative w-full overflow-hidden rounded-t-[10px] ${thumbnailRatio === "3:4" ? "aspect-[3/4]" : "aspect-video"}`}>
          {course.thumbnailSrc ? (
            <Image
              src={course.thumbnailSrc}
              alt={course.title}
              fill
              priority={priority}
              className="object-cover"
              sizes="(max-width: 560px) 240px, (max-width: 720px) 260px, 280px"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: course.bgColor || "#2A2A2A" }}
            >
              <span className="text-[1.6rem] font-bold text-white/60">
                {course.keywords[1] || "DREAMPLEX"}
              </span>
            </div>
          )}
          {/* 배지 */}
          {course.badges.length > 0 && (
            <div className="absolute left-[8px] top-[8px] flex gap-[4px]">
              {course.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant={badge === "드림플렉스에서만" ? "primary" : "accent"}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* 정보 */}
        <div className="space-y-[6px] p-[12px]">
          <div className="flex flex-wrap items-center gap-[4px]">
            {course.schoolLevel && (
              <span className="inline-flex items-center rounded-[4px] border border-primary px-[6px] py-[1px] text-[1.1rem] font-semibold text-primary">
                {course.schoolLevel}
              </span>
            )}
            {course.duration && (
              <span className="inline-flex items-center rounded-[4px] border border-grey-500 px-[6px] py-[1px] text-[1.1rem] text-grey-400">
                {course.duration}
              </span>
            )}
            {course.category && (
              <span className="inline-flex items-center rounded-[4px] border border-grey-500 px-[6px] py-[1px] text-[1.1rem] text-grey-400">
                {course.category}
              </span>
            )}
          </div>
          <hr className="border-grey-600" />
          <h3 className="text-[1.4rem] font-medium leading-[1.4] text-text-primary md:text-[1.6rem]">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="truncate text-[1.2rem] text-grey-400">{course.subtitle}</p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
