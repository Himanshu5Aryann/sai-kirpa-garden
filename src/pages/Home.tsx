import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";
import HeroVideo from "../components/HeroVideo";
import Reveal, { RevealItem, RevealStagger } from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PetalField from "../components/PetalField";
import ReviewsSection from "../components/ReviewsSection";
import MapSection from "../components/MapSection";
import FinalCTA from "../components/FinalCTA";
import Lightbox from "../components/Lightbox";
import {
  HERO_VIDEO,
  WEDDINGS,
  BANQUETS,
  CELEBRATIONS,
} from "../data/media";
import { SITE } from "../data/site";

const EXPERIENCE_CARDS = [
  { title: "Wedding Ceremonies", image: WEDDINGS.ritual, to: "/weddings" },
  { title: "Receptions", image: "/pexels-priyanka-jagga-3783084-16583021.jpg", to: "/weddings" },
  { title: "Engagements", image: CELEBRATIONS.engagement2, to: "/events" },
  { title: "Anniversaries", image: WEDDINGS.embrace, to: "/events" },
  { title: "Family Celebrations", image: "/pexels-monu-prajapati-343619962-19346381.jpg", to: "/events" },
];

const EVENT_TYPES = [
  { title: "Weddings", image: WEDDINGS.couple2 },
  { title: "Receptions", image: BANQUETS.reception },
  { title: "Engagements", image: CELEBRATIONS.engagement1 },
  { title: "Corporate Events", image: "/pexels-am83-14636319.jpg" },
];



export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = [
    WEDDINGS.couplePortrait,
    BANQUETS.stage,
    WEDDINGS.ringExchange,
    BANQUETS.floralArch,
    WEDDINGS.smiling,
    BANQUETS.hallFlowers,
  ];

  return (
    <div>
      <SEO
        title="Sai Kirpa & Garden | Weddings, Banquets & Stays in Najafgarh"
        description="Sai Kirpa & Garden in Najafgarh, New Delhi — a destination for weddings, grand celebrations, banquet events, comfortable stays and fine dining."
      />
      {/* 1. CINEMATIC HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <HeroVideo src={HERO_VIDEO.src} poster={HERO_VIDEO.poster} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 lg:px-10">
          <Reveal>
            <Eyebrow tone="light">Sai Kirpa & Garden</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl italic leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">
              Creating Moments and Crafting Memories.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
              Luxury weddings, grand banquets, celebrations and stays in the
              heart of Najafgarh, New Delhi.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/weddings"
                className="rounded-full bg-rose-dark px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
              >
                Plan Your Wedding
              </Link>
              <Link
                to="/banquets"
                className="rounded-full border border-ivory/50 px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
              >
                Explore the Banquet
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SAI GARDEN / SAI KIRPA */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>Our Venues</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Two Spaces. One Celebration Destination.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link to="/weddings" className="group relative h-80 overflow-hidden rounded-sm">
              <img src={BANQUETS.hero} alt="Sai Garden wedding venue" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">Venue 01</p><h3 className="mt-2 font-display text-4xl italic text-ivory">Sai Garden</h3></div>
            </Link>
            <Link to="/banquets" className="group relative h-80 overflow-hidden rounded-sm">
              <img src={WEDDINGS.hero} alt="Sai Kirpa banquet venue" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">Venue 02</p><h3 className="mt-2 font-display text-4xl italic text-ivory">Sai Kirpa</h3></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HA1 HOSPITALITY EDITORIAL */}
      <section className="relative overflow-hidden bg-ivory-dark py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>A Glimpse of Sai Kirpa & Garden</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              More Than a Venue.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              Thoughtfully designed spaces, welcoming interiors and a celebration-ready atmosphere make every event memorable.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
            >
              Plan Your Event →
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-sm">
              <img
                src="/HA1.jpg"
                alt="Welcoming interior at Sai Kirpa & Garden"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. WEDDING / CELEBRATION INTRODUCTION */}
      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
        <PetalField className="opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/vps01.jpg"
                alt="Sai Kirpa & Garden celebration portrait"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow>Celebrations, Beautifully Set</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Celebrations, Beautifully Set.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              From intimate ceremonies to grand receptions, Sai Kirpa & Garden
              provides a beautiful setting for celebrations
              that deserve to be remembered — framed by the quiet grandeur of
              the New Delhi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/weddings"
                className="rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
              >
                Plan Your Wedding
              </Link>
              <Link
                to="/weddings"
                className="rounded-full border border-charcoal/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark"
              >
                Explore Weddings
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SIGNATURE BANQUET SHOWCASE */}
      <section className="relative bg-burgundy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Signature Banquet</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              Spaces Made for Grand Moments.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/75">
              A 10,000 sq.ft grand banquet space designed to transform for
              every celebration — from a traditional mandap and reception
              stage to a beautifully dressed dinner for hundreds of guests.
            </p>
          </div>

          <RevealStagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "/HA1.jpg",
              "/kumars_palace_07.jpg",
              "/kumars_palace_05.jpg",
              "/kumars_palace_10.jpg",
            ].map((src, i) => (
              <RevealItem key={i} className={i === 0 || i === 3 ? "sm:col-span-2 sm:row-span-2" : ""}>
                <div className="group relative h-full min-h-[180px] overflow-hidden rounded-sm sm:min-h-[260px]">
                  <img
                    src={src}
                    alt="Grand banquet hall decorated for a wedding celebration"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-start gap-6 border-t border-ivory/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-2xl italic text-champagne">
                10,000 sq.ft Grand Banquet Space
              </p>
              <Link
                to="/banquets"
                className="rounded-full bg-ivory px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-burgundy-deep transition-colors hover:bg-champagne"
              >
                Explore Banquets
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. WEDDING EXPERIENCES */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Wedding Experiences</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
                Your Day. Your People. Your Story.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/60">
              Every celebration at Sai Kirpa & Garden is shaped around the people it
              is for — explore the moments we love to create.
            </p>
          </div>

          <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {EXPERIENCE_CARDS.map((c) => (
              <RevealItem key={c.title}>
                <Link to={c.to} className="group relative block h-80 overflow-hidden rounded-sm">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xl italic text-ivory">{c.title}</p>
                    <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-widest text-champagne opacity-0 transition-opacity group-hover:opacity-100">
                      Explore →
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 5. GRAND EVENTS */}
      <section className="bg-ivory-dark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>Grand Events</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Every Celebration, Beautifully Hosted.
          </h2>
          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EVENT_TYPES.map((e) => (
              <RevealItem key={e.title}>
                <Link to="/events" className="group block">
                  <div className="h-64 overflow-hidden rounded-sm">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 font-display text-xl italic text-charcoal">{e.title}</p>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-dark">
                    Explore Events →
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. VENUE GALLERY */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Venue Gallery</Eyebrow>
              <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
                A Glimpse of Sai Kirpa & Garden.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-xs font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4"
            >
              View Full Gallery →
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {galleryImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-sm ${
                  i === 0 ? "col-span-2 row-span-2 h-[20.5rem] sm:h-[28.5rem]" : "h-40 sm:h-56"
                }`}
              >
                <img
                  src={src}
                  alt="Wedding and banquet moments at Sai Kirpa & Garden"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
              </button>
            ))}
          </div>
        </div>
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </section>

      {/* 7. WEDDING STORY / EMOTIONAL SECTION */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <img
          src={WEDDINGS.embrace}
          alt="Newlywed couple embracing at their wedding"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <PetalField />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <Eyebrow tone="light">A Love Story</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              Every Celebration Tells a Story Worth Keeping.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/80">
              Somewhere between the mandap and the first dance, between
              family blessings and quiet glances — a wedding at Sai Kirpa & Garden
              becomes a memory that lasts long after the lights come down.
            </p>
          </div>
        </div>
      </section>

      {/* 8. BANQUET SPACE (secondary detail) */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>The Banquet Space</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Elegance in Every Detail.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              From floral mandaps to candlelit reception dinners, our banquet
              team curates each celebration with careful attention — lighting,
              seating, décor and flow, all considered.
            </p>
            <Link
              to="/banquets"
              className="mt-8 inline-block rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
            >
              Check Event Availability
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <img src={BANQUETS.hallFlowers} alt="Banquet floral decor" className="h-56 w-full rounded-sm object-cover" loading="lazy" />
              <img src={BANQUETS.floralArch} alt="Wedding floral arch" className="mt-8 h-56 w-full rounded-sm object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CELEBRATION TYPES */}
      <section className="bg-blush/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>Celebration Types</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Whatever You're Celebrating, We're Ready.
          </h2>
          <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Birthdays", image: "/qwert1.webp" },
              { title: "Anniversaries", image: WEDDINGS.smiling },
              { title: "Family Gatherings", image: "/pexels-rohit-piple-3291022-34479822.jpg" },
            ].map((c) => (
              <RevealItem key={c.title}>
                <div className="group relative h-72 overflow-hidden rounded-sm">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <p className="absolute bottom-5 left-5 font-display text-xl italic text-ivory">{c.title}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 10. SAI GARDEN / SAI KIRPA */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/weddings" className="group relative h-80 overflow-hidden rounded-sm">
              <img src={BANQUETS.hero} alt="Sai Garden wedding venue" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">Venue 01</p><h2 className="mt-2 font-display text-4xl italic text-ivory">Sai Garden</h2></div>
            </Link>
            <Link to="/banquets" className="group relative h-80 overflow-hidden rounded-sm">
              <img src={WEDDINGS.hero} alt="Sai Kirpa banquet venue" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">Venue 02</p><h2 className="mt-2 font-display text-4xl italic text-ivory">Sai Kirpa</h2></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 13. AMENITIES */}
      <section className="bg-ivory-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Supporting Every Stay.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {SITE.amenities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-charcoal/15 bg-ivory px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-charcoal/70"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* 14. ROOFTOP, BAR & PARKING */}
      <section className="bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-sm border border-ivory/10 bg-ink">
              <div className="h-72 overflow-hidden"><img src="/WhatsApp%20Image%202026-09-11%20at%202.42.46%20PM.jpeg" alt="Bar atmosphere at Sai Kirpa & Garden" className="h-full w-full object-cover" loading="lazy" /></div>
              <div className="p-7 sm:p-9"><Eyebrow tone="light">Bar</Eyebrow><h2 className="mt-4 font-display text-4xl italic text-ivory">A Relaxed Bar for Evening Gatherings.</h2><p className="mt-4 text-sm leading-relaxed text-ivory/70">Our on-site bar adds a relaxed evening option for guests and celebration groups, complementing the hotel's dining and rooftop experience.</p></div>
            </article>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center rounded-sm border border-ivory/10 bg-burgundy-deep p-7 sm:p-9">
            <div><Eyebrow tone="light">Parking</Eyebrow><h2 className="mt-4 font-display text-4xl italic text-ivory sm:text-5xl">100+ Cars, On-Site.</h2><p className="mt-4 text-sm leading-relaxed text-ivory/70">Sai Kirpa & Garden provides dedicated on-site parking with capacity for 100+ cars, built to make weddings, banquets and large family gatherings easier for every guest.</p></div>
            <img src="/michael-fousert-a7WIJiOZDO0-unsplash.jpg" alt="On-site parking area at Sai Kirpa & Garden" className="h-72 w-full rounded-sm object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 15. GOOGLE REVIEWS */}
      <ReviewsSection />

      {/* 16. MAP / LOCATION */}
      <MapSection />

      {/* 17. FINAL CTA */}
      <FinalCTA image={BANQUETS.prepared} />
    </div>
  );
}
