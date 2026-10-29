import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { site } from "@/content/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const serif = EB_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s · ${site.name}`,
  },
  description: site.seo.description,
  ...(site.seo.canonical
    ? { metadataBase: new URL(site.seo.canonical), alternates: { canonical: site.seo.canonical } }
    : {}),
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.canonical,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: site.hero.photo.src, alt: site.hero.photo.alt }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: site.seo.canonical,
      description: site.seo.description,
      inLanguage: "ru",
    },
    {
      "@type": "Person",
      name: site.name,
      url: site.seo.canonical,
      jobTitle: "Психолог",
      description: "Психолог. Основа работы — гештальт-подход.",
      knowsAbout: [
        "гештальт-подход",
        "психологическое консультирование",
        "деньги и самооценка",
        "отношения",
        "материнство",
      ],
      telephone: site.contacts.phone?.href.replace("tel:", "") ?? undefined,
      email: site.contacts.email?.display,
      image: `${site.seo.canonical}${site.hero.photo.src}`,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-ivory pb-28 font-sans text-base leading-7 text-cocoa antialiased lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
        >
          К содержанию
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
