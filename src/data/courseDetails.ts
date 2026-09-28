import { courses, type Course } from "@/data/courses";

export type Module = { title: string; summary: string };

export type Review = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  postedAgo: string;
  body: string;
};

export type CourseDetail = {
  course: Course;
  headline: string;
  subtitle: string;
  level: string;
  /** Average rating and total review count, derived from `ratingBreakdown`. */
  rating: number;
  reviewCount: number;
  students: number;
  totalLessons: number;
  totalHours: number;
  previewLessons: { title: string; minutes: number }[];
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modulesIntro: string;
  modules: Module[];
  lessonContent: string;
  progressText: string;
  progress: number;
  reviewsIntro: string;
  /** Review counts for 5, 4, 3, 2 and 1 stars, in that order. */
  ratingBreakdown: [number, number, number, number, number];
  reviews: Review[];
  creator: { name: string; role: string; avatar: string };
};

export const courseIncludes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
] as const;

const creator = {
  name: "PurePearl Studio",
  role: "Professional Creator",
  avatar: "/images/avatars/purepearl.webp",
};

const sneakPeek = [1, 2, 3, 4].map((n) => `/images/course/sneak-peek-${n}.webp`);

const reviews: Review[] = [
  {
    id: "r1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/avatars/reviewer-1.webp",
    rating: 5,
    postedAgo: "a year ago",
    body: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "r2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/images/avatars/reviewer-2.webp",
    rating: 5,
    postedAgo: "a year ago",
    body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "r3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/avatars/reviewer-3.webp",
    rating: 4,
    postedAgo: "a year ago",
    body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "r4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/avatars/reviewer-4.webp",
    rating: 5,
    postedAgo: "a year ago",
    body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

/** Sections shared by every course page. */
const shared = {
  level: "Intermediate",
  students: 199,
  totalLessons: 112,
  totalHours: 24,
  sneakPeek,
  progress: 55,
  ratingBreakdown: [720, 120, 21, 12, 16] as CourseDetail["ratingBreakdown"],
  reviews,
  creator,
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressText:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
};

/** Full copy from the Figma "Course Details" screens. */
type DetailContent = Omit<CourseDetail, "course" | "rating" | "reviewCount">;

const digitalAsset: DetailContent = {
  ...shared,
  headline: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  previewLessons: [
    { title: "Introduction to Digital Assets", minutes: 12 },
    { title: "Design Principles for Impacts", minutes: 21 },
    { title: "Advanced Techniques in Digital Creation", minutes: 16 },
  ],
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      summary:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      summary:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 3: User-Centric Design Strategies",
      summary:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 4: Interactive Media and Engagement",
      summary:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 5: Project Showcase and Critique",
      summary:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 6: Optimizing Digital Assets for Various Platforms",
      summary:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  reviewsIntro:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
};

/** The design only covers one course, so the others get generic copy built from their title. */
function genericDetail(course: Course): DetailContent {
  const t = course.title;
  return {
    ...shared,
    headline: t,
    subtitle: `Everything you need to go from beginner to confident with ${t.toLowerCase()}`,
    previewLessons: [
      { title: "Welcome and Course Overview", minutes: 12 },
      { title: "Core Concepts and Foundations", minutes: 21 },
      { title: "Putting It Into Practice", minutes: 16 },
    ],
    description: [
      `"${t}" is a hands-on course that takes you from the fundamentals to confident, real-world practice. Each module builds on the last, combining short video lessons with exercises so you learn by doing.`,
      "You'll start with the core ideas and vocabulary, then work through practical projects that mirror the challenges professionals face every day. By the end, you'll have a portfolio-ready project and a clear plan for what to learn next.",
    ],
    keyPoints: [
      "Foundational Concepts",
      "Practical, Project-Based Lessons",
      "Real-World Case Studies",
      "Peer Feedback and Critique",
      "Capstone Project",
    ],
    modules: [
      { title: "Module 1: Foundations", summary: `Get oriented with the key ideas behind ${t.toLowerCase()} and set up everything you need.` },
      { title: "Module 2: Core Techniques", summary: "Learn the essential techniques through guided, step-by-step lessons and exercises." },
      { title: "Module 3: Applied Projects", summary: "Apply what you've learned to realistic projects with downloadable resources." },
      { title: "Module 4: Capstone and Next Steps", summary: "Complete a capstone project, get feedback, and plan your continued growth." },
    ],
    reviewsIntro: `Discover what our learners have to say about their experience with '${t}.' Read reviews and ratings from individuals who have completed the course.`,
  };
}

export function getCourseDetail(slug: string): CourseDetail | undefined {
  const course = courses.find((c) => c.id === slug);
  if (!course) return undefined;
  const detail = course.id === "digital-asset" ? digitalAsset : genericDetail(course);
  const counts = detail.ratingBreakdown;
  const reviewCount = counts.reduce((sum, n) => sum + n, 0);
  const weighted = counts.reduce((sum, n, i) => sum + n * (5 - i), 0);
  const rating = Math.round((weighted / reviewCount) * 10) / 10;
  return { course, ...detail, rating, reviewCount };
}
