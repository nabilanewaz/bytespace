import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircleQuestion } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { InfoPage } from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Contact — ByteSpace",
  description: "Questions, feedback or partnership ideas? Get in touch with the ByteSpace team.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;

  return (
    <InfoPage title="Contact Us" description="Questions, feedback or partnership ideas? We'd love to hear from you.">
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-4 rounded-3xl bg-surface p-6">
          <Mail className="size-6 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-base leading-relaxed">
            <strong>Email</strong>
            <br />
            hello@bytespace.example
          </p>
        </div>
        <div className="flex gap-4 rounded-3xl bg-surface p-6">
          <MessageCircleQuestion className="size-6 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-base leading-relaxed">
            <strong>Quick answers</strong>
            <br />
            Check the <Link href="/help">Help Center</Link> first.
          </p>
        </div>
      </div>
      <ContactForm initialTopic={typeof topic === "string" ? topic : undefined} />
    </InfoPage>
  );
}
