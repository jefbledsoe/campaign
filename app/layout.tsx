import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "./globals.css";

// next/font downloads these at build time and self-hosts them under /_next/,
// so the deployed page makes no requests to Google. `variable` exposes each
// font as a CSS custom property that globals.css uses.
const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Thank You, Westfield-Washington | Jeff Bledsoe";
const description =
  "The results weren't what we hoped for. But together we pushed our township and our city to the left, and that change doesn't go away on election night.";

// The App Router turns this export into <title> and <meta> tags in <head>.
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${prata.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
