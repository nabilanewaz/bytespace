import { courses, type Course } from "@/data/courses";
import { getCreator, type Creator } from "@/data/creators";

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

/**
 * Everything shown on a course page. Stats that also appear on the course card
 * (level, lessons, duration, rating, review counts) are read from `course`, so
 * the card and the page never disagree.
 */
export type CourseDetail = {
  course: Course;
  creator: Creator;
  headline: string;
  subtitle: string;
  students: number;
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
  /** A sample of individual reviews, with at least one per star rating. */
  reviews: Review[];
};

type DetailContent = Omit<CourseDetail, "course" | "creator">;

export const courseIncludes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
] as const;

const sneakPeek = [1, 2, 3, 4].map((n) => `/images/course/sneak-peek-${n}.webp`);

/** Sections worded generally enough to fit every course. */
const shared = {
  students: 199,
  sneakPeek,
  progress: 55,
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressText:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
};

/** Full copy from the Figma "Course Details" screens. */
const digitalAsset: DetailContent = {
  ...shared,
  headline: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  previewLessons: [
    { title: "Introduction to Digital Assets", minutes: 12 },
    { title: "Design Principles for Impact", minutes: 21 },
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
  reviews: [
    {
      id: "r1",
      name: "Jenny Wilson",
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
    {
      id: "r5",
      name: "Kristin Watson",
      role: "Graphic Designer",
      avatar: "/images/avatars/student-5.webp",
      rating: 3,
      postedAgo: "10 months ago",
      body: "Solid fundamentals and nice examples. I already knew most of the first two modules, so the pace felt slow for me, but the later modules made up for it.",
    },
    {
      id: "r6",
      name: "Darrell Steward",
      role: "Marketing Specialist",
      avatar: "/images/avatars/student-6.webp",
      rating: 2,
      postedAgo: "8 months ago",
      body: "Good content, but it assumes you already use professional design tools. I would have liked a short setup lesson for complete beginners.",
    },
    {
      id: "r7",
      name: "Jacob Jones",
      role: "Student",
      avatar: "/images/avatars/student-7.webp",
      rating: 1,
      postedAgo: "6 months ago",
      body: "Not what I was looking for. I expected more on 3D assets, while the course focuses on 2D design and publishing.",
    },
  ],
};

/** Neutral sample reviews for courses without copy in the design. */
function genericReviews(title: string): Review[] {
  const reviewers = [
    { name: "Jenny Wilson", role: "Product Designer", avatar: "/images/avatars/reviewer-1.webp" },
    { name: "Albert Flores", role: "Team Lead", avatar: "/images/avatars/reviewer-2.webp" },
    { name: "Cody Fisher", role: "Freelancer", avatar: "/images/avatars/reviewer-3.webp" },
    { name: "Brooklyn Simmons", role: "Student", avatar: "/images/avatars/reviewer-4.webp" },
    { name: "Jacob Jones", role: "Analyst", avatar: "/images/avatars/student-7.webp" },
  ];
  const bodies = [
    `"${title}" was exactly what I needed. Clear explanations, practical exercises, and a great final project.`,
    "Well structured and easy to follow. A few lessons could go deeper, but overall I learned a lot.",
    "Useful content, though the pace was uneven. The practical sections were the most valuable part for me.",
    "Some good ideas, but I expected more advanced material for the price.",
    "The course didn't match my level. It would help to have clearer prerequisites on the course page.",
  ];
  return reviewers.map((r, i) => ({
    id: `g${i + 1}`,
    ...r,
    rating: 5 - i,
    postedAgo: `${i + 2} months ago`,
    body: bodies[i],
  }));
}

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
    reviews: genericReviews(t),
  };
}

export function getCourseDetail(slug: string): CourseDetail | undefined {
  const course = courses.find((c) => c.id === slug);
  const creator = course && getCreator(course.creatorId);
  if (!course || !creator) return undefined;
  const detail = course.id === "digital-asset" ? digitalAsset : genericDetail(course);
  return { course, creator, ...detail };
}
