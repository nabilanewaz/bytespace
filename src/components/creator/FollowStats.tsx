"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FollowStatsProps = {
  creatorName: string;
  courseCount: number;
  followers: number;
};

/** Product/follower counts with a Follow toggle that updates the count. */
export function FollowStats({ creatorName, courseCount, followers }: FollowStatsProps) {
  const [following, setFollowing] = useState(false);
  const stats = [
    { value: courseCount, label: courseCount === 1 ? "Product" : "Products" },
    { value: followers + (following ? 1 : 0), label: "Followers" },
  ];

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex h-[46px] items-center gap-2 rounded-full bg-white px-6 text-lg text-ink-soft"
          >
            <span className="text-brand">{stat.value}</span> {stat.label}
          </li>
        ))}
      </ul>
      <Button
        size="lg"
        aria-pressed={following}
        aria-label={following ? `Unfollow ${creatorName}` : `Follow ${creatorName}`}
        onClick={() => setFollowing((f) => !f)}
      >
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
