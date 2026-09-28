import Image from "next/image";
import { ContentSection, Prose } from "@/components/course/ContentSection";
import { CheckList } from "@/components/ui/CheckList";
import { loadCourse } from "@/lib/course";

export default async function CourseAboutPage({ params }: PageProps<"/courses/[slug]">) {
  const detail = await loadCourse(params);

  return (
    <div className="flex flex-col gap-10">
      <ContentSection title="Description">
        <Prose>
          {detail.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Prose>
      </ContentSection>

      <ContentSection title="Sneak Peak">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[19px]">
          {detail.sneakPeek.map((src, i) => (
            <li key={src} className="relative aspect-[167/125] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Course preview ${i + 1}`}
                fill
                sizes="(min-width: 640px) 167px, 45vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Key Points">
        <CheckList items={detail.keyPoints} tone="muted" />
      </ContentSection>
    </div>
  );
}
