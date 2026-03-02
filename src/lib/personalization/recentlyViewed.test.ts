import assert from "node:assert/strict";
import test from "node:test";
import {
  clearExpiredRecentlyViewed,
  getRecentlyViewedSlugs,
  RECENTLY_VIEWED_CONFIG,
  trackCourseView,
} from "./recentlyViewed.ts";

class MemoryStorage {
  private store = new Map<string, string>();

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }
}

test("신규 강의 슬러그를 저장하고 조회한다", () => {
  const storage = new MemoryStorage();
  const now = 1_700_000_000_000;

  trackCourseView("ai-programming", now, storage);

  assert.deepEqual(getRecentlyViewedSlugs(now, storage), ["ai-programming"]);
});

test("동일 슬러그 재방문 시 중복 없이 최상단으로 이동한다", () => {
  const storage = new MemoryStorage();
  const now = 1_700_000_000_000;

  trackCourseView("drone-pilot", now, storage);
  trackCourseView("youtube-creator", now + 1_000, storage);
  trackCourseView("drone-pilot", now + 2_000, storage);

  assert.deepEqual(getRecentlyViewedSlugs(now + 2_000, storage), [
    "drone-pilot",
    "youtube-creator",
  ]);
});

test("최대 개수(12개)를 초과하면 오래된 항목을 제거한다", () => {
  const storage = new MemoryStorage();
  const now = 1_700_000_000_000;

  for (let index = 0; index < RECENTLY_VIEWED_CONFIG.maxItems + 4; index += 1) {
    trackCourseView(`slug-${index}`, now + index, storage);
  }

  const slugs = getRecentlyViewedSlugs(now + 100, storage);

  assert.equal(slugs.length, RECENTLY_VIEWED_CONFIG.maxItems);
  assert.equal(slugs[0], "slug-15");
  assert.equal(slugs.at(-1), "slug-4");
});

test("만료 기간(30일) 초과 데이터는 자동 정리된다", () => {
  const storage = new MemoryStorage();
  const now = 1_700_000_000_000;
  const retentionMs = RECENTLY_VIEWED_CONFIG.retentionDays * 24 * 60 * 60 * 1000;

  storage.setItem(
    RECENTLY_VIEWED_CONFIG.storageKey,
    JSON.stringify([
      { slug: "old-item", viewedAt: now - retentionMs - 1 },
      { slug: "fresh-item", viewedAt: now - retentionMs + 1 },
    ]),
  );

  clearExpiredRecentlyViewed(now, storage);

  assert.deepEqual(getRecentlyViewedSlugs(now, storage), ["fresh-item"]);
});

test("JSON 파손 시 빈 배열로 복구하고 저장소를 정리한다", () => {
  const storage = new MemoryStorage();
  const now = 1_700_000_000_000;

  storage.setItem(RECENTLY_VIEWED_CONFIG.storageKey, "{invalid-json");

  assert.deepEqual(getRecentlyViewedSlugs(now, storage), []);
  assert.equal(storage.getItem(RECENTLY_VIEWED_CONFIG.storageKey), null);
});
