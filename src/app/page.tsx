import { Faq } from "@/components/faq";
import {
  About,
  Approach,
  Booking,
  Choice,
  Hero,
  Life,
  Money,
  Process,
  Requests,
} from "@/components/sections";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Requests />
      <Money />
      <Choice />
      <Approach />
      <About />
      <Life />
      <Process />
      {site.reviews.visible && site.reviews.items.length > 0 ? (
        <section id="reviews" className="bg-ivory px-5 py-20">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl">Отзывы</h2>
          <ul className="mx-auto mt-8 max-w-3xl space-y-6">
            {site.reviews.items.map((review) => (
              <li key={review.name}>
                <blockquote>{review.text}</blockquote>
                <p>
                  {review.name} · {review.context}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <Faq />
      <Booking />
    </main>
  );
}
