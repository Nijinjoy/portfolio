import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Providers } from "@/components/common/providers";
import { siteConfig, seoKeywords } from "@/constants/site";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Senior Mobile Application Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium portfolio for a Senior Mobile Application Developer specializing in React Native, Flutter, React.js, TypeScript, Firebase, ERP, HRMS, and cross-platform mobile applications.",
  keywords: seoKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Senior Mobile Application Developer`,
    description: siteConfig.summary,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Senior Mobile Application Developer`,
    description: siteConfig.summary,
    images: [absoluteUrl("/og-image.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: seoKeywords,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
