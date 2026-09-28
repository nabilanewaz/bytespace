"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnrollments } from "@/lib/enrollments";

type MyCoursesLinkProps = { className?: string; onClick?: () => void };

/** Navbar link to /my-courses, shown once the visitor has enrolled in something. */
export function MyCoursesLink({ className, onClick }: MyCoursesLinkProps) {
  const pathname = usePathname();
  if (useEnrollments().length === 0) return null;

  return (
    <Link
      href="/my-courses"
      onClick={onClick}
      aria-current={pathname === "/my-courses" ? "page" : undefined}
      className={className}
    >
      My Courses
    </Link>
  );
}
