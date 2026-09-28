import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Privacy Policy — ByteSpace" };

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy Policy" lastUpdated="September 28, 2026">
      <p>
        This demo site does not collect, store or send any personal data. Forms (sign in, register,
        newsletter, contact) only show a confirmation in your browser. The policy below describes
        how the full ByteSpace product would handle your information.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Account details you provide, such as your name and email address.</li>
        <li>Course activity, such as enrollments and lesson progress.</li>
        <li>Basic technical data, such as browser type, used to keep the service secure.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        To provide and improve your courses, process enrollments, send updates you opt into, and
        keep ByteSpace safe. We never sell your personal information.
      </p>

      <h2>Your choices</h2>
      <p>
        You can update or delete your account at any time, unsubscribe from emails with one click,
        and control optional cookies in <Link href="/cookies">Cookie Settings</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? <Link href="/contact">Contact us</Link>.
      </p>
    </InfoPage>
  );
}
