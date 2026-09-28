import { Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { happyStudentAvatars } from "@/data/site";
import { cn } from "@/lib/cn";

/** Small white stat cards that float over the hero and feature imagery. */

type FloatingCardProps = { className?: string };

export function HappyStudentsCard({
  className,
  tone = "white",
}: FloatingCardProps & { tone?: "white" | "lime" }) {
  return (
    <div
      className={cn(
        "rounded-2xl px-4 py-3.5 shadow-card",
        tone === "white" ? "bg-white" : "bg-lime",
        className,
      )}
    >
      <p className="text-base text-ink">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-xs text-ink">
        4.5 <span className="text-muted">(240)</span>
        <Star
          className={cn("size-3.5 fill-current", tone === "white" ? "text-lime" : "text-brand")}
          aria-hidden="true"
        />
      </p>
      <AvatarStack
        className="mt-2"
        size="md"
        avatars={happyStudentAvatars}
        extra="2K+"
        extraTone={tone === "white" ? "lime" : "dark"}
      />
    </div>
  );
}

export function LearningProgressCard({
  className,
  percent = 55,
}: FloatingCardProps & { percent?: number }) {
  return (
    <div className={cn("rounded-2xl bg-white px-4 pt-4 pb-4 shadow-card", className)}>
      <p className="text-sm text-ink">Learning Progress</p>
      <p className="mt-1 font-display text-4xl font-semibold text-ink lg:text-5xl">{percent}%</p>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
        className="mt-3 h-2 overflow-hidden rounded-full bg-surface"
      >
        <div className="h-full rounded-full bg-lime" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function CategoryStatCard({ className }: FloatingCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white px-4 py-3 shadow-card", className)}>
      <p className="text-base text-ink">UI/UX Design</p>
      <p className="mt-0.5 flex items-center gap-2 text-xs text-subtle">
        200 Courses <span aria-hidden="true">•</span> 1000+ Students
      </p>
    </div>
  );
}

type RevenueCardProps = FloatingCardProps & {
  label: string;
  period: string;
  amount: string;
  badge?: string;
  progress?: number;
};

export function RevenueCard({ label, period, amount, badge, progress, className }: RevenueCardProps) {
  return (
    <div className={cn("rounded-2xl bg-brand px-4 py-3.5 text-white shadow-card", className)}>
      <p className="text-base">{label}</p>
      <p className="text-[10px] text-white/80">{period}</p>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="font-display text-2xl font-semibold">{amount}</p>
        {badge && (
          <span className="rounded-full bg-lime-bright px-2 py-1 text-[10px] text-ink">{badge}</span>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
