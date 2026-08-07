import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ContactDialogProvider } from "./ContactDialog";
import { RouteBackdrop } from "./RouteBackdrop";
import { SiteHeader } from "./SiteHeader";
import "./globals.css";
import "./footer.css";
import "./contact-dialog.css";

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
  themeColor: "#ded9ce",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://genii.foundation"),
  applicationName: "GENII Foundation",
  title: "GENII Foundation | Research, Culture, Infrastructure",
  description:
    "GENII Foundation is an independent home for long-horizon research, consequential media, and public-interest technology.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GENII Foundation",
    description: "Research, culture, and infrastructure for a more coherent world.",
    url: "https://genii.foundation",
    siteName: "GENII Foundation",
    type: "website",
    locale: "en_US",
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
    description: "Research, culture, and infrastructure for a more coherent world.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${display.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body>
        <RouteBackdrop />
        <ContactDialogProvider>
          <SiteHeader />
          {children}
        </ContactDialogProvider>
      </body>
    </html>
  );
}
