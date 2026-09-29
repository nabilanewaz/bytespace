import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { isGoogleAuthEnabled } from "@/auth";
import { AuthProvider } from "@/components/auth/AuthProvider";
import "./globals.css";

/** Body font from the style guide. Self-hosted: Satoshi isn't on Google Fonts. */
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  // Absolute base for link-preview images; Vercel provides the production domain.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "ByteSpace — Learn, Create & Grow",
  description:
    "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace.",
  // Link previews (WhatsApp, LinkedIn, Slack…). The image is app/opengraph-image.jpg.
  openGraph: {
    type: "website",
    siteName: "ByteSpace",
    title: "ByteSpace — Learn, Create & Grow",
    description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#content"
          className="sr-only z-50 rounded-full bg-lime px-5 py-3 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <AuthProvider enabled={isGoogleAuthEnabled}>{children}</AuthProvider>
      </body>
    </html>
  );
}
