"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hideBar, setHideBar] = useState(true);

  useEffect(() => {
    const targets = [
      document.querySelector("#top .btn-primary"),
      document.getElementById("booking"),
    ].filter((node): node is Element => Boolean(node));
    if (targets.length === 0) return;
    const seen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) seen.add(entry.target);
          else seen.delete(entry.target);
        }
        setHideBar(seen.size > 0);
      },
      { threshold: 0.35 },
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gold/50 bg-ivory">
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[76rem] items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="min-w-0 leading-none">
            <span className="block font-serif text-[1.35rem] tracking-tight text-forest">
              {site.name}
            </span>
            <span className="mt-1 hidden text-[0.68rem] tracking-[0.14em] text-burgundy uppercase sm:block">
              {site.role}
            </span>
          </a>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Разделы">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.82rem] text-cocoa/80 transition-colors hover:text-burgundy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#booking" className="btn-primary hidden lg:inline-flex">
              Записаться
            </a>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className="min-h-11 px-1 text-xs tracking-[0.16em] text-forest uppercase lg:hidden">
                Меню
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-cocoa/35" />
                <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 py-6 sm:left-auto sm:w-[min(100%,26rem)] sm:border-l sm:border-forest/10">
                  <div className="flex items-start justify-between gap-4">
                    <Dialog.Title className="font-serif text-4xl text-forest">
                      Разделы
                    </Dialog.Title>
                    <Dialog.Close className="min-h-11 px-2 text-sm tracking-[0.12em] text-burgundy uppercase">
                      Закрыть
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="mt-3 max-w-xs text-sm leading-6 text-forest">
                    {site.brandLine}
                  </Dialog.Description>
                  <nav className="mt-10 flex flex-col" aria-label="Разделы">
                    {site.nav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="border-t border-forest/10 py-4 font-serif text-3xl text-cocoa hover:text-burgundy"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <a
                    href="#booking"
                    onClick={() => setOpen(false)}
                    className="btn-primary mt-auto w-full"
                  >
                    Записаться
                  </a>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-forest/10 bg-ivory px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden ${
          open || hideBar ? "hidden" : ""
        }`}
      >
        <a href="#booking" className="btn-primary w-full">
          Записаться
        </a>
      </div>
    </>
  );
}
