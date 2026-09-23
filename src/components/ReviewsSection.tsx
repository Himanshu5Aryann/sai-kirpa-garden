import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { SITE } from "../data/site";

const REVIEWS = [
  {
    name: "anil gahlot",
    meta: "Local Guide · 424 reviews · 4,617 photos",
    age: "a year ago",
    text: "It can carter upto 1,000/- people easily. Although management had improved a lot since my last visit However they have to take care of lighting, toilets and entrance. It’s situated at main Najafgarh- Moti Nagar road.",
  },
  {
    name: "Virag Kumar",
    meta: "Local Guide · 59 reviews · 459 photos",
    age: "4 years ago",
    text: "The Garden is quite Good and Decoration was awesome. I went their for Wedding of my Cousin and I had great experience 😊 Seperate Stall Area and Seperate Food Area and Stage is good and big(spacious) Garden is Well Maintained. …",
  },
  {
    name: "JKD85 Classroom",
    meta: "Local Guide · 143 reviews · 309 photos",
    age: "6 years ago",
    text: "It is Situated an main road from Urttam Nagar to Najafgarh. Near drain. Pillar no. 77 of grey line. Easy to locate. Good location, good facilities, open space. Good arrangement. Easy to reach with DTC BUS, Metro train gray line, or auto.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 star review">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-ivory-dark py-24 sm:py-32" id="reviews">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-gold/20 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Google Reviews</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
                Loved by Guests. Chosen for Celebrations.
              </h2>
            </div>
            <div className="flex shrink-0 flex-col items-start sm:items-end">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl italic leading-none text-charcoal">4.1</span>
                <div>
                  <Stars />
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                    1,220 Google Reviews
                  </p>
                </div>
              </div>
              <span className="mt-3 inline-flex rounded-full border border-gold/30 bg-ivory px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/70">
                Open 24 Hours
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-gold/20 bg-ivory p-7 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl italic text-charcoal">{review.name}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-charcoal/55">{review.meta}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    Google
                  </span>
                </div>
                <Stars />
                <p className="mt-5 flex-1 text-sm leading-7 text-charcoal/75">
                  “{review.text}”
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-charcoal/10 pt-5">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/45">{review.age}</span>
                  <a
                    href={SITE.mapsLinks.primary}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4 transition-colors hover:text-burgundy"
                  >
                    Read on Google →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold/20 bg-ivory px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">
            <div>
              <p className="font-display text-2xl italic text-charcoal">See all 1,220 reviews on Google</p>
              <p className="mt-1 text-sm text-charcoal/55">Read the latest guest experiences and venue feedback.</p>
            </div>
            <a
              href={SITE.mapsLinks.primary}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
            >
              Open Google Reviews →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
