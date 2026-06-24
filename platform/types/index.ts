export type Platform = "lovable" | "bolt" | "replit" | "v0" | "cursor" | "windsurf";

export interface AppEntry {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  creator: string;
  creatorAvatar: string;
  tags: string[];
  previewUrl?: string;
  screenshotUrl: string;
  forkUrls: Partial<Record<Platform, string>>;
  likes: number;
  forks: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  isPro?: boolean; // requires pro to fork
}

export type SortOption = "trending" | "newest" | "most-forked" | "most-liked";

export interface FilterState {
  tags: string[];
  platforms: Platform[];
  sort: SortOption;
  query: string;
}
