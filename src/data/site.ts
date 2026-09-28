export type NavLink = {
  label: string;
  href: string;
  /** URL sections this link represents, used to mark it as the current page. */
  sections?: string[];
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/", sections: ["/"] },
  { label: "Courses", href: "/search", sections: ["/search", "/courses"] },
  { label: "Creators", href: "/creators", sections: ["/creators"] },
];

/** Search page filtered to one course category. */
const categoryLink = (label: string, category: string): NavLink => ({
  label,
  href: `/search?category=${encodeURIComponent(category)}`,
});

export const footerColumns: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#learning-paths" },
    categoryLink("Business", "Business"),
    categoryLink("IT", "Data Science"),
    categoryLink("Design", "UI/UX Design"),
  ],
  [
    categoryLink("Development", "Web Development"),
    categoryLink("Marketing", "Marketing"),
    categoryLink("Photography", "Photography"),
    categoryLink("Finance", "Finance"),
    categoryLink("Sport", "Health & Fitness"),
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export const happyStudentAvatars = [1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/images/avatars/student-${n}.webp`,
);

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/sarah.webp",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/james.webp",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/alex.webp",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
