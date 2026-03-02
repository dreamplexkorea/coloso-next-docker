"use client";

import { useEffect } from "react";
import { trackCourseView } from "@/lib/personalization/recentlyViewed";

interface TrackCourseViewProps {
  slug: string;
}

/** 강의 상세 진입 시 최근 본 강의 기록 */
export function TrackCourseView({ slug }: TrackCourseViewProps) {
  useEffect(() => {
    trackCourseView(slug);
  }, [slug]);

  return null;
}
