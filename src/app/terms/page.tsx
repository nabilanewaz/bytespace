import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Terms of Service — ByteSpace" };

export default function TermsPage() {
  return (
    <InfoPage title="Terms of Service" lastUpdated="September 28, 2026">
      <p>
        These terms describe the rules for using ByteSpace. This site is a demo: no accounts are
        created and no payments are processed.
      </p>

      <h2>Using ByteSpace</h2>
      <ul>
        <li>You must provide accurate information when creating an account.</li>
        <li>You&rsquo;re responsible for keeping your login details secure.</li>
        <li>Don&rsquo;t misuse the platform, share paid content publicly, or harass other members.</li>
      </ul>

      <h2>Courses and payments</h2>
      <p>
        Courses marked &ldquo;lifetime&rdquo; are a one-time purchase that includes future updates.
        Prices are shown before checkout, and you can request a refund within 30 days of purchase.
      </p>

      <h2>For creators</h2>
      <p>
        Creators keep ownership of their content and grant ByteSpace permission to host and
        distribute it. Creators are responsible for making sure their content is accurate and that
        they have the rights to publish it.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms and will notify members of significant changes. Questions?{" "}
        <Link href="/contact">Contact us</Link>.
      </p>
    </InfoPage>
  );
}
