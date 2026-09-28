import type { Metadata } from "next";
import { MyCourses } from "@/components/enrollments/MyCourses";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "My Courses — ByteSpace" };

export default function MyCoursesPage() {
  return (
    <>
      <main>
        <PageHeader title="My Courses" description="Everything you've enrolled in, in one place." />
        <Container className="py-14 lg:py-[72px]">
          <MyCourses />
        </Container>
      </main>
      <Footer />
    </>
  );
}
