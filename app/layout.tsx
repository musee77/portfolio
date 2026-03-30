import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";

const SITE_URL = "https://www.juliusmatheka.space";
const FULL_NAME = "Julius Matheka Charles";
const TITLE = `${FULL_NAME} | Software Engineer · Data Engineer · AI & ML Developer`;
const DESCRIPTION =
  "Results-driven Software & Data Engineer with hands-on experience across the full data lifecycle — from pipeline design and SQL analytics to Python backend development, BI reporting, and AI/ML integration.";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Julius Matheka Charles",
    "Julius Matheka",
    "Software Engineer",
    "Data Engineer",
    "AI Developer",
    "Machine Learning",
    "Python Developer",
    "Django Developer",
    "PostgreSQL",
    "ETL Pipelines",
    "Power BI Developer",
    "LangChain",
    "React Developer",
    "Next.js",
    "SQL Analytics",
    "Full Stack Developer",
    "Kenya Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  category: "Technology",
  metadataBase: new URL(SITE_URL),

  // ── Indexing ──────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ────────────────────────────────────────
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: `${FULL_NAME} — Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo/logo.png`,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Software & Data Engineer Portfolio`,
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@__musee77",
    images: [`${SITE_URL}/logo/logo.png`],
  },

  // ── Icons & Manifest ─────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",

  // ── Verification (fill in when you register) ─────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  //   yandex: "YOUR_YANDEX_CODE",
  // },
};

// ── JSON-LD Structured Data ──────────────────────────────
function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/logo/logo.png`,
    jobTitle: "Software Engineer & Data Engineer",
    description: DESCRIPTION,
    email: "mailto:talktome@juliusmatheka.space",
    sameAs: [
      "https://github.com/musee77",
      "https://www.linkedin.com/in/julius-charles-24b91b89/",
      "https://x.com/__musee77",
    ],
    knowsAbout: [
      "Software Engineering",
      "Data Engineering",
      "Python",
      "Django",
      "PostgreSQL",
      "ETL Pipelines",
      "Machine Learning",
      "AI Integration",
      "Power BI",
      "React",
      "Next.js",
      "LangChain",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Kenyatta University",
      },
      {
        "@type": "EducationalOrganization",
        name: "ALX Africa",
      },
      {
        "@type": "EducationalOrganization",
        name: "Moringa School",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Axmed",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${FULL_NAME} — Portfolio`,
    url: SITE_URL,
    description: DESCRIPTION,
    author: {
      "@type": "Person",
      name: FULL_NAME,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Skip-to-content link for accessibility / SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

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
