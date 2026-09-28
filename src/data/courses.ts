import { getCreator } from "@/data/creators";

/** Review counts for 5, 4, 3, 2 and 1 stars, in that order. */
export type RatingBreakdown = [number, number, number, number, number];

export type Course = {
  id: string;
  title: string;
  /** Slug of the creator's profile page. */
  creatorId: string;
  /** Display name, looked up from the creator record. */
  creator: string;
  image: string;
  ratingBreakdown: RatingBreakdown;
  /** Average of `ratingBreakdown`, rounded to one decimal. */
  rating: number;
  /** Total of `ratingBreakdown`. */
  reviewCount: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  enrolledAvatars: string[];
  enrolledExtra: number;
  categories: string[];
};

type CourseInput = Omit<Course, "creator" | "rating" | "reviewCount">;

const enrolledAvatars = [
  "/images/avatars/student-2.webp",
  "/images/avatars/student-8.webp",
  "/images/avatars/sarah.webp",
  "/images/avatars/student-9.webp",
];

const base = {
  creatorId: "purepearl-studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  price: 25,
  enrolledAvatars,
  enrolledExtra: 26,
} satisfies Partial<CourseInput>;

/** Fills in the fields derived from other data: creator name and rating totals. */
function resolve(course: CourseInput): Course {
  const creator = getCreator(course.creatorId);
  if (!creator) throw new Error(`Course "${course.id}" has unknown creator "${course.creatorId}"`);
  const counts = course.ratingBreakdown;
  const reviewCount = counts.reduce((sum, n) => sum + n, 0);
  const weighted = counts.reduce((sum, n, i) => sum + n * (5 - i), 0);
  const rating = reviewCount ? Math.round((weighted / reviewCount) * 10) / 10 : 0;
  return { ...course, creator: creator.name, rating, reviewCount };
}

export function getCreatorCourses(creatorId: string) {
  return courses.filter((c) => c.creatorId === creatorId);
}

export const courses: Course[] = (
  [
    {
      ...base,
      id: "learn-figma",
      level: "Beginner",
      title: "Learn Figma from Basic",
      image: "/images/courses/learn-figma.webp",
      ratingBreakdown: [310, 60, 12, 4, 3],
      categories: ["Featured", "UI/UX Design", "Graphic Design"],
    },
    {
      ...base,
      id: "digital-asset",
      level: "Intermediate",
      title: "Build Digital Asset",
      image: "/images/courses/digital-asset.webp",
      ratingBreakdown: [720, 120, 21, 12, 16],
      categories: ["Featured", "Digital Illustration", "Graphic Design"],
    },
    {
      ...base,
      id: "big-data",
      level: "Advanced",
      title: "the Power of Big Data",
      image: "/images/courses/big-data.webp",
      ratingBreakdown: [150, 70, 25, 8, 4],
      categories: ["Featured", "Data Science", "Web Development"],
    },
    {
      ...base,
      id: "productivity",
      level: "Beginner",
      title: "Balancing Productivity and Wellbeing",
      image: "/images/courses/productivity.webp",
      ratingBreakdown: [95, 40, 10, 3, 2],
      categories: ["Featured", "Productivity"],
    },
    {
      ...base,
      id: "money-management",
      level: "Beginner",
      title: "Mastering Money Management",
      image: "/images/courses/money-management.webp",
      ratingBreakdown: [200, 90, 30, 10, 6],
      categories: ["Featured", "Freelance & Entrepreneurship", "Marketing"],
    },
    {
      ...base,
      id: "startup",
      level: "Intermediate",
      title: "From Idea to Startup Success",
      image: "/images/courses/startup.webp",
      ratingBreakdown: [60, 20, 8, 2, 1],
      categories: [
        "Featured",
        "Freelance & Entrepreneurship",
        "Creative Marketing",
        "Social Media",
      ],
    },
  ] satisfies CourseInput[]
).map(resolve);

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  // Revealed by "More".
  "Writing",
  "Languages",
  "Finance",
  "Health & Fitness",
  "Business",
];
