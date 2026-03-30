import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Julius Matheka Charles | Software Engineer · Data Engineer · AI & ML Developer",
  description:
    "Results-driven Software & Data Engineer with hands-on experience across the full data lifecycle — from pipeline design and SQL analytics to Python backend development, BI reporting, and AI/ML integration.",
  keywords: [
    "Software Engineer",
    "Data Engineer",
    "AI Developer",
    "Machine Learning",
    "Python",
    "Django",
    "PostgreSQL",
    "ETL Pipelines",
    "Power BI",
    "LangChain",
    "React",
    "Next.js",
    "SQL",
  ],
  authors: [{ name: "Julius Matheka Charles" }],
  metadataBase: new URL("https://www.juliusmatheka.space/"),
  robots: "index, follow",
  openGraph: {
    title: "Julius Matheka Charles | Software Engineer · Data Engineer · AI & ML Developer",
    description:
      "Results-driven Software & Data Engineer — pipeline design, SQL analytics, Python backend, BI reporting, and AI/ML integration",
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
    title: "Julius Matheka Charles | Software Engineer · Data Engineer · AI & ML Developer",
    description:
      "Results-driven Software & Data Engineer — pipeline design, SQL analytics, Python backend, BI reporting, and AI/ML integration",
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
