import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#132a25",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://genii.foundation"),
  applicationName: "GENII Foundation",
  title: "GENII Foundation | For Futures Worth Inhabiting",
  description:
    "GENII Foundation is an independent home for research, practical tools, and institutions that help life flourish.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GENII Foundation",
    description: "Research, practice, and stewardship for coherent futures.",
    url: "https://genii.foundation",
    siteName: "GENII Foundation",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GENII Foundation. For futures worth inhabiting.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GENII Foundation",
    description: "Research, practice, and stewardship for coherent futures.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
