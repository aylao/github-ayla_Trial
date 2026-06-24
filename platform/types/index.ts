export type Platform = "lovable" | "bolt" | "replit" | "v0" | "cursor" | "windsurf";

export interface CreatorProfile {
  handle: string;
  displayName: string;
  avatar: string;
  bio: string;
  location?: string;
  twitter?: string;
  appCount: number;
  totalForks: number;
  totalLikes: number;
  isFoundingCreator: boolean;
  joinedAt: string;
  tags: string[]; // what they build
}

export interface AppEntry {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  creator: string; // handle
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
  isPro?: boolean;
}

export interface ActivityEvent {
  id: string;
  type: "fork" | "submit" | "like" | "feature";
  user: string;
  userAvatar: string;
  appId: string;
  appTitle: string;
  platform?: Platform;
  timestamp: string; // relative label like "2m ago"
}

export type SortOption = "trending" | "newest" | "most-forked" | "most-liked";

export interface FilterState {
  tags: string[];
  platforms: Platform[];
  sort: SortOption;
  query: string;
}
