import { courses } from "@/data/courses";

export type Creator = {
  id: string;
  name: string;
  /** Short line under the name on the course sidebar. */
  role: string;
  tagline: string;
  avatar: string;
  bio: string[];
  followers: number;
};

export const creators: Creator[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Professional Creator",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/images/avatars/purepearl-studio.webp",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    followers: 12,
  },
];

export function getCreator(id: string) {
  return creators.find((c) => c.id === id);
}

export function getCreatorCourses(id: string) {
  return courses.filter((c) => c.creatorId === id);
}
