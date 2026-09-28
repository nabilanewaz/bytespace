export type Course = {
  id: string;
  title: string;
  creator: string;
  image: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  enrolledAvatars: string[];
  enrolledExtra: number;
  categories: string[];
};

const enrolledAvatars = [
  "/images/avatars/student-2.webp",
  "/images/avatars/student-8.webp",
  "/images/avatars/sarah.webp",
  "/images/avatars/student-9.webp",
];

const base: Omit<Course, "id" | "title" | "image" | "categories"> = {
  creator: "purepearl studio",
  rating: 4.5,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  enrolledAvatars,
  enrolledExtra: 26,
};

export const courses: Course[] = [
  {
    ...base,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.webp",
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    ...base,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.webp",
    categories: ["Featured", "Digital Illustration", "Graphic Design"],
  },
  {
    ...base,
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.webp",
    categories: ["Featured", "Data Science", "Web Development"],
  },
  {
    ...base,
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    image: "/images/courses/productivity.webp",
    categories: ["Featured", "Productivity"],
  },
  {
    ...base,
    id: "money-management",
    title: "Mastering Money Management",
    image: "/images/courses/money-management.webp",
    categories: ["Featured", "Freelance & Entrepreneurship", "Marketing"],
  },
  {
    ...base,
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.webp",
    categories: [
      "Featured",
      "Freelance & Entrepreneurship",
      "Creative Marketing",
      "Social Media",
    ],
  },
];

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
