# ByteSpace — Landing Page

A responsive implementation of the **ByteSpace** online-course landing page, built from the Figma design, plus the bonus **Login**, **Register**, and **404** pages.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react icons

## Pages

| Route       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `/`         | Landing page (hero, courses, learning paths, creators, testimonials, footer) |
| `/courses/[slug]` | Course details — About tab (bonus)                     |
| `/courses/[slug]/lessons` | Course details — Lessons tab (bonus)           |
| `/courses/[slug]/reviews` | Course details — Reviews tab with rating filter (bonus) |
| `/login`    | Sign-in page (bonus)                                         |
| `/register` | Create-account page (bonus)                                  |
| any other   | Custom 404 page (bonus)                                      |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
src/
├── app/                    # Routes: page.tsx, login/, register/, not-found.tsx, layout.tsx
├── components/
│   ├── ui/                 # Primitives: Button, Container, Logo, Shape, DecorFrame, AvatarStack, SectionHeading
│   ├── cards/              # CourseCard, TestimonialCard, floating stat cards
│   ├── layout/             # Navbar (with mobile menu), Footer, NewsletterForm
│   ├── sections/           # One component per landing-page section
│   ├── course/             # Course hero, sidebar, tabs, modules, ratings, reviews
│   └── auth/               # AuthLayout, AuthForm, TextField, SocialLogin
├── data/                   # Page content (courses, categories, nav links, testimonials)
└── lib/                    # Small helpers
```

## Notes for reviewers

- **Reusable components.** The same `CourseCard`, `HappyStudentsCard`, and `Shape` components are used on both the landing page and the auth pages. Content lives in `src/data/`, so sections contain layout only.
- **Design tokens.** Brand colors, fonts, and shadows are defined once in `globals.css` (`@theme`) and used as Tailwind utilities (`bg-brand`, `bg-lime`, `text-muted`, …).
- **Faithful assets.** Images were extracted from the Figma export and converted to optimized WebP (~370 KB total). The 3D doodles are rendered as a CSS mask plus a flat brand color, matching how Figma tints them, so a single asset serves both the lime and white variants.
- **Pixel positioning.** Decorative shapes use `DecorFrame`, which places them at their exact Figma coordinates on a centered 1440px layer. The overlapping hero and feature collages keep the Figma proportions and scale down as one unit on smaller screens.
- **Responsive.** Mobile-first layouts from 360px up to desktop, with a collapsible mobile nav.
- **Interactivity.** The category chips filter the course grid, "More" reveals extra categories, and the search, newsletter, and auth forms validate input. There is no backend, so the forms only show a confirmation.
- **Accessibility.** Semantic landmarks, labelled inputs, ARIA for tabs, menu, and progress bar, and visible focus styles.
- **Fonts.** Headings use Poppins, as in the design. The design's body font isn't on Google Fonts, so **Outfit** stands in as the closest match.
- **Course pages.** Each tab is its own URL (`/courses/[slug]/lessons`, …) sharing one layout, and every course is prerendered with `generateStaticParams`. Course cards on the landing page link to them. The design only has copy for "Build Digital Asset", so the other courses use generic copy built from their title.
- **Consistent data.** The design shows "4.8 (172 reviews)" in the hero but a breakdown adding up to 889 reviews averaging 4.7. Both numbers are now derived from the breakdown. Modules are numbered 1–6 (the design skips 3).
- **Design quirk.** The footer newsletter button reads "Search" in the Figma file. It is labelled "Subscribe" here to match its purpose.
