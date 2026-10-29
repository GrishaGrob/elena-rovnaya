import Link from "next/link";
import { site } from "@/content/site";

const contactLinks = [site.contacts.phone, site.contacts.email];

export function SiteFooter() {
  return (
    <footer className="bg-cocoa text-ivory">
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <p className="font-serif text-4xl tracking-tight">{site.name}</p>
          <p className="mt-3 text-xs tracking-[0.16em] text-gold uppercase">
            {site.role}
          </p>
          <p className="mt-6 max-w-sm font-serif text-2xl leading-snug">
            {site.brandLine}
          </p>
        </div>
        <div className="md:justify-self-end md:text-right">
          <ul className="space-y-3 text-sm">
            {contactLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline decoration-gold underline-offset-4 hover:text-ivory"
                >
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/privacy" className="mt-6 inline-block text-sm text-ivory/80 underline decoration-gold underline-offset-4 hover:text-ivory">
            Как обращаемся с данными
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ivory/75 md:ml-auto">{site.legal.notice}</p>
          <p className="mt-8 max-w-xs text-sm leading-6 text-ivory/75 md:ml-auto">
            {site.credit.label} ·{" "}
            <a
              href={site.credit.href}
              className="text-ivory underline decoration-gold underline-offset-4"
            >
              {site.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
