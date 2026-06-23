import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ElevateEdge Digital Agency – Strategic Growth & Premium Web Solutions",
  description:
    "Amplify your business with elite digital strategies. Custom high-conversion websites, targeted marketing, and social media management designed to scale your ROI.",
  keywords: [
    "ElevateEdge",
    "Digital Agency",
    "Web Design",
    "Digital Marketing",
    "Social Media",
    "Web Development",
  ],
  authors: [{ name: "ElevateEdge Digital" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ElevateEdge Digital Agency – Strategic Growth & Premium Web Solutions",
    description:
      "Get 2× the growth for your business with our budget-friendly digital solutions. Custom websites and premium marketing.",
    siteName: "ElevateEdge Digital Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevateEdge Digital Agency",
    description:
      "Amplify your business with elite digital strategies. Get 2× growth with our premium web solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
