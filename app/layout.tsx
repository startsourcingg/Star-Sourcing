import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Start Sourcing — Premium Printing Services",
  description:
    "Start Sourcing delivers world-class commercial printing: business cards, brochures, banners, packaging, and large-format printing. Quality you can feel, precision you can trust.",
  keywords: "printing services, business cards, brochures, banners, packaging, commercial printing, Start Sourcing",
  openGraph: {
    title: "Start Sourcing — Premium Printing Services",
    description: "World-class commercial printing services. Quality you can feel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
