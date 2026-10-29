"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs tracking-[0.18em] text-burgundy uppercase">{site.faq.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">
            {site.faq.title}
          </h2>
        </div>
        <Accordion.Root type="single" collapsible className="border-t border-forest/15">
          {site.faq.items.map((item, index) => (
            <Accordion.Item
              key={item.q}
              value={`faq-${index}`}
              className="border-b border-forest/15"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left font-serif text-xl leading-snug text-cocoa hover:text-burgundy md:text-2xl">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 inline-block origin-center text-lg leading-none text-burgundy transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-panel text-base leading-7 text-forest">
                <div className="pr-8 pb-6">{item.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
