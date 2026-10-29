"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type Errors = {
  name?: string;
  contact?: string;
  format?: string;
  consent?: string;
};

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [unsent, setUnsent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const format = String(data.get("format") ?? "").trim();
    const agreed = data.get("consent") === "yes";
    const nextErrors: Errors = {};

    if (name.length < 2) nextErrors.name = site.booking.errors.name;
    if (contact.length < 5) nextErrors.contact = site.booking.errors.contact;
    if (!format) nextErrors.format = site.booking.errors.format;
    if (!agreed) nextErrors.consent = site.booking.errors.consent;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setUnsent(false);
      return;
    }

    const formatLabel =
      site.booking.formats.find((item) => item.value === format)?.label ?? format;
    const body = [
      "Здравствуйте.",
      "",
      `Меня зовут ${name}.`,
      `Как связаться: ${contact}.`,
      `Формат встречи: ${formatLabel}.`,
      "Согласие использовать имя и способ связи для записи: да.",
    ].join("\n");
    window.location.href = `${site.booking.endpoint}?subject=${encodeURIComponent("Запись на консультацию")}&body=${encodeURIComponent(body)}`;
    setUnsent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="text-sm text-forest">
          {site.booking.fields.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full border-b border-forest/25 bg-transparent py-3 text-base text-cocoa outline-none focus-visible:border-burgundy"
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-burgundy">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm text-forest">
          {site.booking.fields.contact}
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="tel"
          required
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          className="mt-2 w-full border-b border-forest/25 bg-transparent py-3 text-base text-cocoa outline-none focus-visible:border-burgundy"
        />
        {errors.contact ? (
          <p id="contact-error" className="mt-2 text-sm text-burgundy">
            {errors.contact}
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className="text-sm text-forest">{site.booking.fields.format}</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {site.booking.formats.map((format) => (
            <label
              key={format.value}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 ring-1 ring-forest/20 has-[:checked]:bg-forest has-[:checked]:text-ivory"
            >
              <input
                type="radio"
                name="format"
                value={format.value}
                className="accent-burgundy"
              />
              {format.label}
            </label>
          ))}
        </div>
        {errors.format ? (
          <p id="format-error" className="mt-2 text-sm text-burgundy">
            {errors.format}
          </p>
        ) : null}
      </fieldset>

      <p className="text-sm leading-6 text-forest">{site.booking.note}</p>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-burgundy"
          />
          <label htmlFor="consent" className="text-sm leading-6 text-forest">
            {site.booking.consent}
          </label>
        </div>
        <Link href="/privacy" className="link-quiet mt-2 inline-block text-sm">
          Как обращаемся с данными
        </Link>
        {errors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-burgundy">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-fit">
        {site.booking.submit}
      </button>

      {unsent ? (
        <p role="status" className="bg-nude/50 px-4 py-3 text-sm leading-6 text-cocoa">
          {site.booking.unsent}
        </p>
      ) : null}
    </form>
  );
}
