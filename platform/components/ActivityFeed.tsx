"use client";

import Image from "next/image";
import Link from "next/link";
import { GitFork, Heart, Plus, Star } from "lucide-react";
import { ACTIVITY_FEED, PLATFORM_META } from "@/lib/data";
import type { ActivityEvent } from "@/types";

function EventIcon({ type }: { type: ActivityEvent["type"] }) {
  if (type === "fork") return <GitFork size={12} className="text-violet-500" />;
  if (type === "like") return <Heart size={12} className="text-rose-400" />;
  if (type === "submit") return <Plus size={12} className="text-green-500" />;
  return <Star size={12} className="text-amber-400" />;
}

function eventText(event: ActivityEvent) {
  if (event.type === "fork") {
    const platform = event.platform ? PLATFORM_META[event.platform] : null;
    return (
      <>
        forked{" "}
        <Link href={`/apps/${event.appId}`} className="font-medium text-gray-800 hover:text-violet-600">
          {event.appTitle}
        </Link>
        {platform && <> into <span className="font-medium">{platform.icon} {platform.label}</span></>}
      </>
    );
  }
  if (event.type === "like") {
    return (
      <>
        liked{" "}
        <Link href={`/apps/${event.appId}`} className="font-medium text-gray-800 hover:text-violet-600">
          {event.appTitle}
        </Link>
      </>
    );
  }
  if (event.type === "submit") {
    return (
      <>
        submitted{" "}
        <Link href={`/apps/${event.appId}`} className="font-medium text-gray-800 hover:text-violet-600">
          {event.appTitle}
        </Link>
      </>
    );
  }
  return <>featured <span className="font-medium">{event.appTitle}</span></>;
}

export function ActivityFeed() {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      {ACTIVITY_FEED.map((event) => (
        <div key={event.id} className="flex items-center gap-3 py-2.5">
          <Image
            src={event.userAvatar}
            alt={event.user}
            width={28}
            height={28}
            className="rounded-full bg-gray-100 shrink-0"
            unoptimized
          />
          <div className="flex-1 text-xs text-gray-500 min-w-0">
            <span className="font-medium text-gray-700">@{event.user}</span>{" "}
            {eventText(event)}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <EventIcon type={event.type} />
            <span className="text-xs text-gray-300 whitespace-nowrap">{event.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
