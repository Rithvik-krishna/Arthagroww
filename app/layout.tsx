import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

// Configure premium fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Configure SEO and sharing metadata
export const metadata: Metadata = {
  title: "ArthaGroww | Learn. Grow. Earn. - Gamified EdTech for Young Adults",
  description: "Master the Stock Market, AI Automation, Web3, and Entrepreneurship through bite-sized, gamified daily lessons. Designed specifically for Gen Z students and young professionals.",
  keywords: [
    "financial literacy",
    "finance for students",
    "gamified edtech",
    "learn stock market",
    "AI automation",
    "entrepreneurship",
    "crypto learning app",
    "ArthaGroww",
    "wealth building for kids"
  ],
  authors: [{ name: "ArthaGroww Team", url: "https://arthagroww.com" }],
  openGraph: {
    title: "ArthaGroww | Learn. Grow. Earn. - Gamified EdTech for Young Adults",
    description: "Master the Stock Market, AI Automation, Web3, and Entrepreneurship through bite-sized, gamified daily lessons. Designed specifically for Gen Z students and young professionals.",
    url: "https://arthagroww.com",
    siteName: "ArthaGroww",
    images: [
      {
        url: "/assets/colors.png",
        width: 1200,
        height: 630,
        alt: "ArthaGroww App Preview"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArthaGroww | Learn. Grow. Earn. - Gamified EdTech for Young Adults",
    description: "Master the Stock Market, AI Automation, Web3, and Entrepreneurship through bite-sized, gamified daily lessons. Designed specifically for Gen Z students and young professionals.",
    images: ["/assets/colors.png"],
  },
  metadataBase: new URL("https://arthagroww.com"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1CB0F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-blue/20">
        {children}
        
        {/* Global Bottom Cookie Consent Overlay Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
