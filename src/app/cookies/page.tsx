import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferences } from "@/components/cookies/CookiePreferences";
import { InfoPage } from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Cookie Settings — ByteSpace" };

export default function CookiesPage() {
  return (
    <InfoPage title="Cookie Settings" description="Choose which optional cookies ByteSpace may use.">
      <p className="mb-8">
        Your choices are saved in this browser. Read more in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <CookiePreferences />
    </InfoPage>
  );
}
