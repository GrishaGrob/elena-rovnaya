import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Как обращаемся с данными",
  description:
    "Какие сведения можно оставить на сайте Елены Ровной, зачем они нужны и как их удалить.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="bg-ivory">
      <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs tracking-[0.18em] text-burgundy uppercase">Данные</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">
          Как обращаемся с данными
        </h1>
        <div className="mt-10 space-y-8">
          {site.legal.privacy.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl text-forest">{section.title}</h2>
              <p className="mt-3 text-base leading-7">{section.text}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-base leading-7">{site.legal.notice}</p>
        <Link href="/#booking" className="btn-primary mt-10">
          К записи
        </Link>
      </article>
    </main>
  );
}
