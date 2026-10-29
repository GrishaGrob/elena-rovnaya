import Image from "next/image";
import type { ReactNode } from "react";
import { BookingForm } from "@/components/booking-form";
import { Portrait } from "@/components/portrait";
import { site } from "@/content/site";

function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-ivory">
      <Wrap className="grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-20">
        <div className="hero-copy max-w-xl">
          <p className="text-[0.68rem] tracking-[0.14em] text-forest uppercase sm:text-xs sm:tracking-[0.18em]">
            {site.hero.descriptor}
          </p>
          <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.05] text-cocoa sm:text-5xl lg:text-6xl">
            {site.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-forest">{site.hero.lede}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href={site.hero.primary.href} className="btn-primary">
              {site.hero.primary.label}
            </a>
            <a href={site.hero.secondary.href} className="link-quiet text-base">
              {site.hero.secondary.label}
            </a>
          </div>
          <div className="mt-10">
            <p className="mb-4 font-serif text-xl text-forest">{site.brandLine}</p>
            <div className="rule" aria-hidden />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[26rem]">
          <div aria-hidden className="absolute -bottom-3 -left-3 h-full w-full bg-forest sm:-bottom-4 sm:-left-4" />
          <Portrait
            {...site.hero.photo}
            priority
            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 20rem"
            className="relative"
          />
        </div>
      </Wrap>
    </section>
  );
}

export function Requests() {
  return (
    <section id="requests" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <Wrap className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs tracking-[0.18em] text-burgundy uppercase">{site.requests.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-forest md:text-5xl">
            {site.requests.title}
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-cocoa">{site.requests.lede}</p>
        </div>
        <ul className="border-t border-forest/15">
          {site.requests.items.map((item, index) => (
            <li key={item.title} className="border-b border-forest/15">
              <a
                href={item.href}
                className="group grid grid-cols-[2.5rem_1fr] items-start gap-4 py-6 sm:grid-cols-[3rem_2.5rem_1fr] sm:gap-6"
              >
                <span className="pt-1 font-serif text-lg text-burgundy">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="mt-1 hidden h-8 w-8 sm:block"
                />
                <span>
                  <span className="relative inline font-serif text-3xl text-cocoa transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-burgundy">
                    {item.title}
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                  </span>
                  <span className="mt-2 block max-w-md text-base leading-7 text-forest">
                    {item.text}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}

export function Money() {
  return (
    <section id="money" className="scroll-mt-24 bg-burgundy text-ivory">
      <Wrap className="grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.2em] text-nude uppercase">{site.money.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] md:text-5xl">
            {site.money.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-ivory/90">{site.money.lede}</p>
          <p className="mt-6 max-w-md text-base leading-7 text-ivory/85">{site.money.topics}</p>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {site.money.questions.map((question, index) => (
            <li key={question} className="border-t border-ivory/20 py-6 first:border-t-0 first:pt-0">
              <span className="font-serif text-nude">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-serif text-3xl leading-snug md:text-4xl">{question}</p>
            </li>
          ))}
        </ol>
        <p className="border-t border-ivory/25 pt-6 text-sm leading-6 text-nude lg:col-span-12">
          {site.money.note}
        </p>
      </Wrap>
    </section>
  );
}

export function Choice() {
  return (
    <section className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Wrap>
        <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] text-cocoa md:text-6xl">
          {site.choice.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-forest">{site.choice.line}</p>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-0">
          <article id={site.choice.self.id} className="scroll-mt-28 md:pr-12">
            <h3 className="font-serif text-3xl text-burgundy">{site.choice.self.title}</h3>
            <p className="mt-4 max-w-md text-base leading-7">{site.choice.self.text}</p>
          </article>
          <article
            id={site.choice.relationships.id}
            className="scroll-mt-28 border-t border-gold pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12"
          >
            <h3 className="font-serif text-3xl text-burgundy">
              {site.choice.relationships.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-7">
              {site.choice.relationships.text}
            </p>
          </article>
        </div>
      </Wrap>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-forest text-ivory">
      <Wrap className="py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-nude uppercase">
            {site.approach.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] md:text-6xl">
            {site.approach.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-ivory/90">{site.approach.lede}</p>
        </div>
        <Image
          src="/icons/support-line.svg"
          alt=""
          width={640}
          height={104}
          className="mt-10 h-14 w-full max-w-xl object-contain object-left"
        />
        <ol className="relative mt-12 space-y-8 lg:grid lg:grid-cols-5 lg:gap-6 lg:space-y-0">
          <span
            aria-hidden
            className="absolute top-3 bottom-2 left-[0.72rem] w-px bg-gold/80 lg:top-[0.72rem] lg:right-3 lg:bottom-auto lg:left-3 lg:h-px lg:w-auto"
          />
          {site.approach.steps.map((step, index) => (
            <li key={step.title} className="relative pl-12 lg:pl-0">
              <span className="absolute top-0 left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-serif text-sm text-cocoa lg:static">
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-ivory/90">{step.text}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Wrap className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <Portrait
          {...site.about.photo}
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="mx-auto max-w-md lg:max-w-none"
        />
        <div>
          <p className="text-xs tracking-[0.18em] text-burgundy uppercase">{site.about.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-forest md:text-6xl">
            {site.about.title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-7">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3 border-t border-forest/15 pt-6">
            {site.about.points.map((point) => (
              <li key={point} className="text-base leading-7 text-forest">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </section>
  );
}

export function Life() {
  return (
    <section className="bg-paper">
      <Wrap className="py-20 md:py-24">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] text-forest md:text-5xl">
          {site.life.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7">{site.life.lede}</p>
      </Wrap>

      <div id={site.life.motherhood.id} className="scroll-mt-24 bg-nude/55">
        <Wrap className="grid gap-8 py-16 md:grid-cols-[0.7fr_1.3fr] md:items-end md:py-20">
          <h3 className="font-serif text-3xl text-burgundy">{site.life.motherhood.eyebrow}</h3>
          <div>
            <blockquote className="pb-1 font-serif text-3xl leading-[1.25] text-cocoa italic md:text-4xl">
              {site.life.motherhood.quote}
            </blockquote>
            <p className="mt-6 max-w-xl text-base leading-7">{site.life.motherhood.text}</p>
          </div>
        </Wrap>
      </div>

      <div id={site.life.path.id} className="scroll-mt-24">
        <Wrap className="max-w-3xl py-16 md:py-24">
          <h3 className="font-serif text-4xl leading-[1.15] text-forest">{site.life.path.title}</h3>
          <p className="mt-5 text-lg leading-8">{site.life.path.text}</p>
        </Wrap>
      </div>

      <div id={site.life.crisis.id} className="scroll-mt-24 border-t border-forest/10">
        <Wrap className="max-w-3xl py-16 md:py-20">
          <h3 className="font-serif text-3xl leading-snug text-forest">{site.life.crisis.eyebrow}</h3>
          <p className="mt-5 max-w-2xl text-lg leading-8">{site.life.crisis.text}</p>
        </Wrap>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-ivory py-16 md:py-28">
      <Wrap>
        <p className="text-xs tracking-[0.18em] text-burgundy uppercase">{site.process.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-forest md:text-5xl">
          {site.process.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7">{site.process.lede}</p>
        <ol className="mt-12 border-t border-forest/15">
          {site.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3.25rem_1fr] gap-x-4 gap-y-2 border-b border-forest/15 py-6 sm:grid-cols-[4.5rem_13rem_1fr] sm:items-baseline"
            >
              <span className="font-serif text-2xl text-burgundy">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl text-cocoa">{step.title}</h3>
              <p className="col-start-2 text-base leading-7 text-forest sm:col-start-3">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-serif text-xl text-forest">{site.process.format}</p>
      </Wrap>
    </section>
  );
}

export function Booking() {
  return (
    <section id="booking" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <Wrap className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs tracking-[0.18em] text-burgundy uppercase">{site.booking.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-forest md:text-5xl">
            {site.booking.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7">{site.booking.lede}</p>
          <ul className="mt-8 space-y-4">
            <li>
              <p className="text-xs tracking-[0.16em] text-burgundy uppercase">
                {site.contacts.phone.label}
              </p>
              <a href={site.contacts.phone.href} className="mt-1 inline-block font-serif text-3xl text-forest">
                {site.contacts.phone.display}
              </a>
            </li>
            <li>
              <p className="text-xs tracking-[0.16em] text-burgundy uppercase">
                {site.contacts.email.label}
              </p>
              <a
                href={site.contacts.email.href}
                className="mt-1 inline-block text-base break-all text-forest underline decoration-gold underline-offset-4"
              >
                {site.contacts.email.display}
              </a>
            </li>
          </ul>
          <p className="mt-8 max-w-md text-sm leading-6 text-forest">{site.legal.notice}</p>
        </div>
        <BookingForm />
      </Wrap>
    </section>
  );
}
