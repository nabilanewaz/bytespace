import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Cart — ByteSpace" };

export default function CartPage() {
  return (
    <>
      <main>
        <PageHeader title="Your Cart" description="Review your courses and enroll in one step." />
        <Container className="py-14 lg:py-[72px]">
          <CartView />
        </Container>
      </main>
      <Footer />
    </>
  );
}
