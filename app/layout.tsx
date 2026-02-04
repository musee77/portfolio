import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Julius Matheka Charles | Software Engineer",
  description:
    "Software Engineer specializing in building scalable web applications with machine learning capabilities. Expert in Python, Java, React, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "Machine Learning",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Django",
    "Web Development",
  ],
  authors: [{ name: "Julius Matheka Charles" }],
  metadataBase: new URL("https://www.juliusmatheka.space/"),
  robots: "index, follow",
  openGraph: {
    title: "Julius Matheka Charles | Software Engineer",
    description:
      "Building intelligent solutions through scalable web applications and machine learning integration",
    url: "https://www.juliusmatheka.space/",
    siteName: "Julius Matheka Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Julius Matheka Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Matheka Charles | Software Engineer",
    description:
      "Building intelligent solutions through scalable web applications and machine learning integration",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
