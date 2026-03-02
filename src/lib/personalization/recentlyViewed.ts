import type { PersonalizedSectionConfig, RecentlyViewedItem } from "../types";

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export const RECENTLY_VIEWED_CONFIG: PersonalizedSectionConfig = {
  storageKey: "dreamplex:recently-viewed",
  retentionDays: 30,
  maxItems: 12,
};
export const RECENTLY_VIEWED_EVENT = "dreamplex:recently-viewed-updated";

const RETENTION_MS = RECENTLY_VIEWED_CONFIG.retentionDays * 24 * 60 * 60 * 1000;

function getBrowserStorage(): StorageLike | null {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function isValidEntry(value: unknown): value is RecentlyViewedItem {
  if (!value || typeof value !== "object") return false;

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.slug === "string"
    && entry.slug.trim().length > 0
    && typeof entry.viewedAt === "number"
    && Number.isFinite(entry.viewedAt)
  );
}

function parseEntries(raw: string | null): RecentlyViewedItem[] {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isValidEntry) : [];
  } catch {
    return [];
  }
}

function sanitizeEntries(entries: RecentlyViewedItem[], now: number): RecentlyViewedItem[] {
  const dedupedBySlug = new Map<string, RecentlyViewedItem>();

  for (const entry of entries) {
    const slug = entry.slug.trim();
    if (!slug) continue;

    const isExpired = now - entry.viewedAt > RETENTION_MS;
    if (isExpired) continue;

    const current = dedupedBySlug.get(slug);
    if (!current || current.viewedAt < entry.viewedAt) {
      dedupedBySlug.set(slug, { slug, viewedAt: entry.viewedAt });
    }
  }

  return [...dedupedBySlug.values()]
    .sort((a, b) => b.viewedAt - a.viewedAt)
    .slice(0, RECENTLY_VIEWED_CONFIG.maxItems);
}

function persistEntries(storage: StorageLike, entries: RecentlyViewedItem[]): void {
  try {
    if (entries.length === 0) {
      storage.removeItem(RECENTLY_VIEWED_CONFIG.storageKey);
      return;
    }

    storage.setItem(RECENTLY_VIEWED_CONFIG.storageKey, JSON.stringify(entries));
  } catch {
    // ignore localStorage failures
  }
}

function emitRecentlyViewedUpdated(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(RECENTLY_VIEWED_EVENT));
}

function readEntries(storage: StorageLike, now: number): RecentlyViewedItem[] {
  try {
    const raw = storage.getItem(RECENTLY_VIEWED_CONFIG.storageKey);
    const sanitized = sanitizeEntries(parseEntries(raw), now);
    persistEntries(storage, sanitized);
    return sanitized;
  } catch {
    return [];
  }
}

export function trackCourseView(
  slug: string,
  now = Date.now(),
  storage: StorageLike | null = getBrowserStorage(),
): void {
  const normalizedSlug = slug.trim();
  if (!normalizedSlug || !storage) return;

  const entries = readEntries(storage, now);
  const nextEntries = sanitizeEntries(
    [{ slug: normalizedSlug, viewedAt: now }, ...entries],
    now,
  );

  persistEntries(storage, nextEntries);
  emitRecentlyViewedUpdated();
}

export function getRecentlyViewedSlugs(
  now = Date.now(),
  storage: StorageLike | null = getBrowserStorage(),
): string[] {
  if (!storage) return [];
  return readEntries(storage, now).map((entry) => entry.slug);
}

export function clearExpiredRecentlyViewed(
  now = Date.now(),
  storage: StorageLike | null = getBrowserStorage(),
): void {
  if (!storage) return;
  readEntries(storage, now);
}
