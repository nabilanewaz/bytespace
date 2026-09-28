import { Aperture, Clover, Loader, Waves, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";

const partners = [
  { id: "waves", Icon: Waves },
  { id: "loader", Icon: Loader },
  { id: "zap", Icon: Zap },
  { id: "clover", Icon: Clover },
  { id: "aperture", Icon: Aperture },
];

export function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-surface py-14 lg:py-[78px]">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between lg:px-8">
          {partners.map(({ id, Icon }) => (
            <li key={id} className="flex items-center gap-2 text-subtle">
              <Icon className="size-10" strokeWidth={2.25} aria-hidden="true" />
              <span className="font-display text-2xl font-semibold tracking-tight">Logoipsum</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
