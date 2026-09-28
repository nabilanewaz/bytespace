import type { Metadata } from "next";
import { InfoPage } from "@/components/layout/InfoPage";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Affiliate Program — ByteSpace",
  description: "Earn a commission by recommending ByteSpace courses to your audience.",
};

const steps = [
  { title: "Apply", text: "Tell us about your audience through the contact form." },
  { title: "Share", text: "Get a personal link to any course or to the whole catalog." },
  { title: "Earn", text: "Receive a commission on every enrollment that comes through your link." },
];

export default function AffiliatePage() {
  return (
    <InfoPage
      title="Affiliate Program"
      description="Recommend courses you love and earn a commission on every enrollment."
    >
      <h2>How it works</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-3xl bg-surface p-6">
            <span className="grid size-10 place-items-center rounded-full bg-lime font-display font-semibold text-ink">
              {i + 1}
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-base leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>

      <h2>Who it&rsquo;s for</h2>
      <p>
        Bloggers, educators, community leaders and creators whose audience wants to learn new
        skills. There&rsquo;s no minimum audience size. We care most about a good fit.
      </p>

      <ButtonLink href="/contact?topic=affiliate" size="lg" className="mt-8">
        Apply now
      </ButtonLink>
    </InfoPage>
  );
}
