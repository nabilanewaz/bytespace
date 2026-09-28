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
| `/creators/[slug]` | Creator profile with filterable, sortable courses (bonus) |
| `/search`   | Course and creator search with filters, sorting and pagination (bonus) |
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
│   ├── creator/            # Creator hero, follow stats, filterable course grid
│   ├── courses/            # Shared course toolbar (filters + sort) and results grid
│   ├── search/             # Search page and creator results
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
- **Consistent data.** Each course has one rating breakdown in `src/data/courses.ts`. The card, the course header ("4.7 (889 reviews)") and the Reviews tab all derive from it, and lesson counts come from the same record. In the design these disagreed: 4.5 vs 4.8, 172 vs 889 reviews, 17 vs 112 lessons. Sample reviews cover every star rating, so each filter shows results. Modules are numbered 1–6 (the design skips 3).
- **Home-page filtering.** The learning-path cards filter the home course grid through a shared client-side context (`CourseFilterContext`), so the page stays statically prerendered. The hero search opens `/search?q=…`.
- **Search page.** The page filters as you type and keeps the query, category and scope in the URL, so results can be shared and survive a reload (e.g. `/search?q=data&category=Data%20Science`). It shares its filter logic (`src/lib/courseFilters.ts`) and toolbar with the creator profile. The design shows five pages of repeated cards, so six catalog-only courses were added (reusing the design's photos, as the mock-up does) to make search and pagination meaningful. The home page's Featured tab is unchanged. The category chips default to **All**, since the design's default of "Featured" would hide most of the catalog.
- **Creator profile.** Courses reference their creator by id, so the product count, course grid, course sidebar, and "by …" links all come from one source. The filters are native `<select>` elements styled as pills, which keeps them keyboard- and screen-reader-friendly. The design's placeholder text ("[Creator's Name]", "ive into …") and its "3 Products" count, which contradicts the 6 courses shown, are replaced with real values.
- **Design quirk.** The footer newsletter button reads "Search" in the Figma file. It is labelled "Subscribe" here to match its purpose.
