import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="pt-16 pb-12 lg:pt-[70px]">
        <div className="grid gap-12 lg:grid-cols-[500px_1fr] lg:gap-[120px]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 text-sm text-ink-soft">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-6 text-xs leading-relaxed text-ink-soft">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4 text-sm text-ink-soft">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-line pt-8 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between lg:mt-[130px]">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
