import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description:
    "Breakfast, fresh deli lunches, homemade cakes and catering from Crown Street in the Gorbals.",
};

const menuCards = [
  {
    eyebrow: "Early starts",
    title: "Breakfast & coffee",
    copy: "Filled rolls, proper coffee and the famous G5 Belly Buster for hungry Glasgow mornings.",
    image: "/images/live/g5-photo-2.jpg",
    alt: "Cooked breakfast, toast and coffee served at G5 Deli",
    colour: "bg-[#f5cf61]",
    object: "object-center",
  },
  {
    eyebrow: "Made your way",
    title: "Fresh deli lunches",
    copy: "Sandwiches, paninis, wraps, soup and baked potatoes packed with fresh fillings.",
    image: "/images/live/g5-photo-4.jpg",
    alt: "Breakfast and the welcoming counter inside G5 Deli",
    colour: "bg-[#a9d8d1]",
    object: "object-top",
  },
  {
    eyebrow: "Save room",
    title: "Homemade treats",
    copy: "Cakes, scones and traybakes from the counter—ideal with a cuppa or to take home.",
    image: "/images/live/g5-photo-6.jpg",
    alt: "The cake counter and warm brick interior at G5 Deli",
    colour: "bg-[#f2c7b8]",
    object: "object-top",
  },
];

const cateringCards = [
  {
    icon: "sandwich",
    title: "Sandwich platters",
    copy: "Fresh sandwiches and rolls, made for sharing.",
  },
  {
    icon: "tea",
    title: "Afternoon tea",
    copy: "Savouries, scones and homemade sweet treats.",
  },
  {
    icon: "party",
    title: "Office & family orders",
    copy: "Tell us your numbers and dietary needs—we'll sort the spread.",
  },
];

function DeliIcon({
  name,
  className = "h-8 w-8",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {name === "coffee" && (
        <>
          <path {...common} d="M6 12h17v8a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7v-8Z" />
          <path {...common} d="M23 15h2a4 4 0 0 1 0 8h-3" />
          <path {...common} d="M10 8c0-2 2-2 2-4M16 8c0-2 2-2 2-4" />
        </>
      )}
      {name === "sandwich" && (
        <>
          <path {...common} d="M5 14 16 7l11 7-11 5L5 14Z" />
          <path {...common} d="m5 18 11 5 11-5" />
          <path {...common} d="m5 14v8l11 5 11-5v-8" />
          <path {...common} d="m9 19 3-2 4 2 4-2 3 2" />
        </>
      )}
      {name === "tea" && (
        <>
          <path {...common} d="M7 13h16v8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-8Z" />
          <path {...common} d="M23 15h2a4 4 0 0 1 0 8h-3M10 9h10M13 5h4" />
        </>
      )}
      {name === "party" && (
        <>
          <path {...common} d="m8 25 4-17 12 12-16 5Z" />
          <path {...common} d="m11 12 9 9M18 7l1-3M24 11l3-1M22 5l2-2" />
          <path {...common} d="M8 18c3 0 5 2 5 5" />
        </>
      )}
    </svg>
  );
}

function Arrow() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#173f3a] text-lg text-white transition group-hover:translate-x-1">
      →
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#fff8ec] font-sans text-[#173f3a]">
      <div
        className="pointer-events-none fixed inset-0 z-[45] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 flex w-[180vw] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] flex-col gap-16 opacity-[0.045] sm:gap-20">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-8 whitespace-nowrap border-y-4 border-[#173f3a] py-3 font-display text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-none tracking-normal text-[#173f3a]"
            >
              <span>Preview</span>
              <span>Preview</span>
              <span>Preview</span>
              <span>Preview</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 right-4 rounded-full border-2 border-[#173f3a]/20 bg-[#fff8ec]/65 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#173f3a]/55 shadow-[3px_3px_0_rgba(23,63,58,0.12)] backdrop-blur-sm sm:bottom-6 sm:right-6">
          Preview site
        </div>
      </div>

      <header className="contents">
        <nav
          className="sticky top-3 z-50 mx-auto mt-3 flex w-[calc(100%_-_2rem)] max-w-7xl items-center justify-between rounded-full border-2 border-[#173f3a] bg-[#fffaf3]/95 px-4 py-3 shadow-[4px_4px_0_#173f3a] backdrop-blur-md sm:w-[calc(100%_-_3rem)] sm:px-6 lg:w-[calc(100%_-_4rem)]"
          aria-label="Main navigation"
        >
          <a href="#top" className="flex items-center gap-2" aria-label="G5 Deli home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#54b8ad] text-white">
              <DeliIcon name="coffee" className="h-6 w-6" />
            </span>
            <span className="font-display text-2xl font-black tracking-[-0.08em] sm:text-3xl">
              G5
            </span>
            <span className="border-l-2 border-[#173f3a] pl-2 text-[9px] font-black uppercase leading-tight tracking-[0.14em] sm:text-[10px]">
              deli &amp;
              <br />
              coffee shop
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-black md:flex">
            <a className="hover:text-[#c84f3a]" href="#menu">Eat</a>
            <a className="hover:text-[#c84f3a]" href="#catering">Catering</a>
            <a className="hover:text-[#c84f3a]" href="#visit">Visit</a>
          </div>
          <a
            href="tel:+441414182999"
            className="rounded-full bg-[#f5c84c] px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#173f3a] hover:text-white sm:px-5"
          >
            Call to order
          </a>
        </nav>
      </header>

      <section id="top" className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-32 h-64 bg-[radial-gradient(circle,#e7a8a0_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-30"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative z-10 py-10 lg:py-20">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#54b8ad] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#102e2b]">
                Crown Street, Gorbals
              </span>
              <span className="text-xs font-black uppercase tracking-[0.14em] text-[#173f3a]/60">
                Open from 6am
              </span>
            </div>
            <h1 className="font-display text-[clamp(3rem,6.6vw,6.9rem)] font-black leading-[0.84] tracking-[-0.075em]">
              <span className="block whitespace-nowrap">Good food.</span>
              <span className="block whitespace-nowrap text-[#c84f3a]">Good coffee.</span>
              <span className="block whitespace-nowrap">Good people.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed text-[#173f3a]/70 sm:text-xl">
              A proper neighbourhood deli for early starts, easy lunches and
              catch-ups over something homemade.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[#173f3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#c84f3a]"
              >
                See what&apos;s good
              </a>
              <a
                href="#catering"
                className="rounded-full border-2 border-[#173f3a] bg-[#fffaf3] px-6 py-4 text-sm font-black transition hover:-translate-y-1 hover:bg-[#f5c84c]"
              >
                Plan a platter
              </a>
            </div>
            <div className="mt-9 flex w-fit items-center gap-3 rounded-2xl border border-[#173f3a]/20 bg-white/70 px-4 py-3">
              <strong className="font-display text-2xl font-black">4.6</strong>
              <span className="text-[#c84f3a]" aria-label="five stars">★★★★★</span>
              <span className="text-xs font-bold text-[#173f3a]/60">239 Google reviews</span>
            </div>
          </div>

          <div className="relative min-h-[560px] lg:min-h-[680px]">
            <div
              aria-hidden="true"
              className="absolute right-0 top-8 h-[82%] w-[84%] rounded-[48%_52%_42%_58%/50%_36%_64%_50%] bg-[#54b8ad]"
            />
            <figure className="scroll-photo absolute right-[2%] top-[6%] h-[72%] w-[76%] rotate-2 overflow-hidden rounded-[2.5rem] border-4 border-[#173f3a] bg-white shadow-[12px_12px_0_#173f3a]">
              <img
                src="/images/live/g5-photo-2.jpg"
                alt="A cooked breakfast with coffee and toast at G5 Deli"
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <figure className="scroll-drift absolute bottom-[4%] left-[1%] h-[38%] w-[43%] -rotate-3 overflow-hidden rounded-[2rem] border-4 border-[#173f3a] bg-white shadow-[9px_9px_0_#f5c84c]">
              <img
                src="/images/live/g5-photo-4.jpg"
                alt="Breakfast and the welcoming interior at G5 Deli"
                className="h-full w-full object-cover object-top"
              />
            </figure>
            <figure className="scroll-reveal scroll-reveal-late absolute bottom-[6%] right-[1%] w-[42%] rotate-3 overflow-hidden rounded-[1.5rem] border-4 border-[#173f3a] bg-white shadow-[8px_8px_0_#c84f3a]">
              <img
                src="/images/live/g5-storefront.png"
                alt="The G5 Deli and coffee shop storefront on Crown Street"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div className="absolute left-[4%] top-[3%] grid h-28 w-28 -rotate-6 place-items-center rounded-full border-4 border-[#173f3a] bg-[#f5c84c] text-center shadow-[6px_6px_0_#173f3a]">
              <span className="text-xs font-black uppercase leading-tight tracking-[0.12em]">
                Made fresh
                <br />
                every day
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-4 border-[#173f3a] bg-[#f5c84c] py-4">
        <div className="mx-auto flex min-w-max items-center justify-center gap-7 px-4 text-sm font-black uppercase tracking-[0.16em] sm:text-base">
          <span>Breakfast rolls</span><span aria-hidden>✦</span>
          <span>Fresh sandwiches</span><span aria-hidden>✦</span>
          <span>Proper coffee</span><span aria-hidden>✦</span>
          <span>Homemade cakes</span><span aria-hidden>✦</span>
          <span>Good Glasgow chat</span>
        </div>
      </div>

      <section id="menu" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="scroll-left">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c84f3a]">
                From the counter
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.88] tracking-[-0.07em]">
                Come hungry.
                <br />
                <span className="text-[#c84f3a]">Leave happy.</span>
              </h2>
            </div>
            <p className="scroll-right max-w-lg text-lg font-semibold leading-relaxed text-[#173f3a]/68">
              No fuss, no tiny portions—just fresh food, plenty of choice and a
              welcome that keeps regulars coming back.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {menuCards.map((item, index) => (
              <article
                key={item.title}
                className={`scroll-reveal group flex min-h-[560px] flex-col overflow-hidden rounded-[2.25rem] border-3 border-[#173f3a] shadow-[8px_8px_0_#173f3a] transition hover:-translate-y-2 ${item.colour} ${index === 1 ? "scroll-reveal-late" : ""}`}
              >
                <div className="m-3 h-56 overflow-hidden rounded-[1.65rem] border-2 border-[#173f3a] bg-white">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${item.object}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 pt-5">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#a64030]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.8rem,2.6vw,2.5rem)] font-black leading-[0.95] tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-semibold leading-relaxed text-[#173f3a]/72">
                    {item.copy}
                  </p>
                  <a
                    href="#visit"
                    className="mt-auto flex w-fit items-center gap-3 rounded-full border-2 border-[#173f3a] bg-[#fffaf3] py-2 pl-4 pr-2 text-xs font-black"
                  >
                    Find your order <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catering" className="relative overflow-hidden bg-[#173f3a] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[70px] border-[#54b8ad]/25"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="scroll-left">
            <span className="inline-block rounded-full bg-[#f5c84c] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#173f3a]">
              Made for sharing
            </span>
            <h2 className="mt-7 font-display text-[clamp(3rem,5.8vw,6rem)] font-black leading-[0.86] tracking-[-0.07em]">
              Your table.
              <br />
              <span className="text-[#f2c7b8]">Our good stuff.</span>
            </h2>
            <p className="mt-7 max-w-lg text-lg font-semibold leading-relaxed text-white/70">
              Office lunches, birthdays, family get-togethers and afternoon
              teas. Tell us the date, the numbers and what you fancy.
            </p>
            <a
              href="tel:+441414182999"
              className="mt-9 inline-block rounded-full bg-[#f5c84c] px-6 py-4 text-sm font-black text-[#173f3a] transition hover:-translate-y-1 hover:bg-[#f2c7b8]"
            >
              Call about catering
            </a>
          </div>

          <div className="scroll-right grid gap-4 sm:grid-cols-2">
            {cateringCards.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-[2rem] border-2 border-white/30 p-6 transition hover:-translate-y-1 ${
                  index === 0
                    ? "bg-[#54b8ad] text-[#173f3a]"
                    : index === 1
                      ? "bg-[#f5c84c] text-[#173f3a]"
                      : "bg-[#f2c7b8] text-[#173f3a] sm:col-span-2"
                }`}
              >
                <div className="flex flex-col items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-[#173f3a] bg-[#fffaf3] shadow-[3px_3px_0_#173f3a]">
                    <DeliIcon name={item.icon} />
                  </span>
                  <div className="w-full">
                    <h3 className="font-display text-[clamp(1.55rem,2.5vw,2.2rem)] font-black leading-none tracking-[-0.05em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-semibold leading-relaxed text-[#173f3a]/72">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ef6f55] px-4 py-20 text-[#173f3a] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="scroll-left">
              <p className="text-xs font-black uppercase tracking-[0.18em]">Word on Crown Street</p>
              <p className="mt-5 font-display text-[clamp(4rem,8vw,8rem)] font-black leading-none tracking-[-0.08em]">
                4.6
              </p>
              <p className="mt-2 font-black">★★★★★ · 239 Google reviews</p>
            </div>
            <div className="scroll-right grid gap-4 sm:grid-cols-2">
              <blockquote className="rounded-[2rem] border-3 border-[#173f3a] bg-[#fffaf3] p-7 shadow-[7px_7px_0_#173f3a]">
                <p className="font-display text-2xl font-black leading-tight tracking-[-0.04em]">
                  “Very tasty and homemade. The staff are kind and friendly too.”
                </p>
                <footer className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#173f3a]/55">
                  Google review
                </footer>
              </blockquote>
              <blockquote className="rounded-[2rem] border-3 border-[#173f3a] bg-[#f5c84c] p-7 shadow-[7px_7px_0_#173f3a]">
                <p className="font-display text-2xl font-black leading-tight tracking-[-0.04em]">
                  “A great Belly Buster breakfast and a lovely quality coffee.”
                </p>
                <footer className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#173f3a]/55">
                  Customer review
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <figure className="scroll-photo relative overflow-hidden rounded-[2.5rem] border-4 border-[#173f3a] bg-[#54b8ad] p-3 shadow-[11px_11px_0_#f5c84c]">
            <img
              src="/images/live/g5-storefront.png"
              alt="G5 Deli storefront at 158 Crown Street in the Gorbals"
              className="aspect-[5/4] w-full rounded-[1.75rem] object-cover"
            />
            <figcaption className="absolute bottom-7 left-7 rounded-full bg-[#173f3a] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
              158 Crown Street
            </figcaption>
          </figure>
          <div className="scroll-right">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c84f3a]">
              A proper local
            </p>
            <h2 className="mt-5 font-display text-[clamp(3rem,5.5vw,5.8rem)] font-black leading-[0.87] tracking-[-0.07em]">
              Small place.
              <br />
              <span className="text-[#c84f3a]">Big welcome.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-[#173f3a]/68">
              Quick enough for the morning rush, friendly enough to make you
              stay. Sit in, take away or call ahead.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-[#a9d8d1] p-4">
                <strong className="font-display text-[clamp(1.3rem,2.5vw,2rem)] font-black">6am</strong>
                <p className="mt-1 text-xs font-bold">Weekday starts</p>
              </div>
              <div className="rounded-2xl bg-[#f5cf61] p-4">
                <strong className="font-display text-[clamp(1.3rem,2.5vw,2rem)] font-black">3 ways</strong>
                <p className="mt-1 text-xs font-bold">Sit in, takeaway, delivery</p>
              </div>
              <div className="rounded-2xl bg-[#f2c7b8] p-4">
                <strong className="font-display text-[clamp(1.3rem,2.5vw,2rem)] font-black">1 local</strong>
                <p className="mt-1 text-xs font-bold">Friendly Gorbals spot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#dce9df] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="scroll-left">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c84f3a]">
              Come by
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,5.25rem)] font-black leading-[0.88] tracking-[-0.07em]">
              <span className="block whitespace-nowrap">Pop in for a roll.</span>
              <span className="block whitespace-nowrap text-[#c84f3a]">Stay for the chat.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#173f3a]/68">
              Find us on Crown Street, a short walk from Bridge Street Subway.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#173f3a] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#c84f3a]"
                href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow"
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <a
                className="rounded-full border-2 border-[#173f3a] bg-[#fffaf3] px-6 py-4 text-sm font-black transition hover:bg-[#f5c84c]"
                href="tel:+441414182999"
              >
                0141 418 2999
              </a>
            </div>
          </div>
          <div className="scroll-right rounded-[2rem] border-3 border-[#173f3a] bg-[#fffaf3] p-7 shadow-[8px_8px_0_#173f3a]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c84f3a]">
              Opening times
            </p>
            <div className="mt-5 space-y-1">
              <div className="flex justify-between border-b border-[#173f3a]/20 py-4 font-bold">
                <span>Monday–Friday</span><strong>6am–4pm</strong>
              </div>
              <div className="flex justify-between border-b border-[#173f3a]/20 py-4 font-bold">
                <span>Saturday</span><strong>6am–3pm</strong>
              </div>
              <div className="flex justify-between py-4 font-bold">
                <span>Sunday</span><strong>7am–3pm</strong>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-[#173f3a]/55">
              Hours can change—give us a quick call before a special journey.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-4 border-[#173f3a] bg-[#173f3a]">
        <div className="scroll-reveal mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-white sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f5c84c]">
              Find G5 Deli
            </p>
            <p className="mt-1 font-display text-xl font-black">158 Crown Street, Gorbals</p>
          </div>
          <a
            className="w-fit rounded-full border-2 border-white/40 px-4 py-2 text-xs font-black hover:border-[#f5c84c] hover:text-[#f5c84c]"
            href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps →
          </a>
        </div>
        <iframe
          title="Map showing G5 Deli on Crown Street"
          src="https://www.google.com/maps?q=G5+Deli,+158+Crown+Street,+Glasgow&output=embed"
          className="h-[440px] w-full border-0 sm:h-[520px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer className="bg-[#fffaf3] px-4 py-9 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm font-bold sm:flex-row sm:items-center">
          <div className="font-display text-2xl font-black">
            G5 deli{" "}
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.15em]">
              &amp; coffee shop
            </span>
          </div>
          <p className="text-[#173f3a]/60">158 Crown Street, Gorbals, Glasgow G5 9XD</p>
          <a
            className="underline decoration-[#c84f3a] decoration-2 underline-offset-4"
            href="tel:+441414182999"
          >
            0141 418 2999
          </a>
        </div>
      </footer>
    </main>
  );
}
