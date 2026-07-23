import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli | Your local café in the Gorbals",
  description:
    "Breakfast, lunch, proper coffee and homemade treats on Crown Street, Gorbals.",
};

const menuHighlights = [
  {
    number: "01",
    title: "Breakfast, done properly",
    copy: "From first-thing rolls to the full G5 Belly Buster, start the day with something warm and filling.",
    accent: "bg-[#f7cf54]",
  },
  {
    number: "02",
    title: "Fresh from the counter",
    copy: "Build-your-own sandwiches, paninis, wraps and baked potatoes with fillings made fresh every day.",
    accent: "bg-[#d9e982]",
  },
  {
    number: "03",
    title: "A wee something sweet",
    copy: "Pair a proper coffee with homemade cakes, scones and treats worth making time for.",
    accent: "bg-[#faa896]",
  },
];

const reasons = [
  ["Open early", "Serving weekday mornings from 6am, ready when Glasgow is."],
  ["Easy to grab", "Dine in, takeaway, or give us a call to ask about delivery."],
  ["Made with care", "Hearty, homemade favourites and friendly service at the counter."],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fbf9f1] text-[#183e32]">
      <section className="relative min-h-[710px] overflow-hidden bg-[#d7e881] px-5 pb-14 pt-5 sm:px-8 lg:min-h-[740px] lg:px-12">
        <div className="absolute -right-16 top-20 h-64 w-64 rounded-full border-[28px] border-[#f7cf54] opacity-95 sm:right-[11%] sm:top-28 sm:h-80 sm:w-80" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#faa896] sm:h-96 sm:w-96" />
        <div className="absolute bottom-24 right-[8%] hidden h-16 w-16 rotate-12 rounded-[21px] bg-[#183e32] lg:block" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-2" aria-label="G5 Deli home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#183e32] font-black tracking-tighter text-[#d7e881]">G5</span>
            <span className="text-lg font-black tracking-[-0.06em]">DELI</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
            <a className="transition hover:text-[#f05e4e]" href="#menu">What&apos;s good</a>
            <a className="transition hover:text-[#f05e4e]" href="#about">Our place</a>
            <a className="transition hover:text-[#f05e4e]" href="#visit">Find us</a>
          </div>
          <a href="tel:+441414182999" className="rounded-full bg-[#183e32] px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#f05e4e] sm:px-5">
            Call to order
          </a>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#183e32]/25 bg-[#fbf9f1]/70 px-4 py-2 text-xs font-black uppercase tracking-[0.13em]">
              <span className="h-2 w-2 rounded-full bg-[#f05e4e]" /> Crown Street, Gorbals
            </p>
            <h1 className="max-w-3xl text-[clamp(3.75rem,9vw,7.9rem)] font-black leading-[0.82] tracking-[-0.085em] text-[#183e32]">
              Good food.<br />
              <span className="text-[#f05e4e]">Good coffee.</span><br />
              Good morning.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#183e32]/80 sm:text-xl">
              The local deli for early starts, easy lunches and catch-ups over cake. Made fresh, served with a smile.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-[#f05e4e] px-6 py-4 text-sm font-black text-white shadow-[4px_4px_0_#183e32] transition hover:-translate-y-1 hover:shadow-[6px_7px_0_#183e32]">See what&apos;s on</a>
              <a href="#visit" className="rounded-full border-2 border-[#183e32] bg-transparent px-6 py-4 text-sm font-black transition hover:bg-[#183e32] hover:text-white">Plan your visit</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.4rem] border-[9px] border-[#183e32] bg-[#f7cf54] p-5 shadow-[12px_12px_0_#183e32] sm:p-8">
              <div className="absolute -right-14 -top-12 h-44 w-44 rounded-full bg-[#faa896]" />
              <div className="absolute bottom-0 left-0 h-2/5 w-full bg-[#f05e4e]" />
              <div className="relative flex h-full flex-col justify-between">
                <p className="w-fit rotate-[-2deg] rounded-sm bg-[#183e32] px-3 py-2 text-xs font-black uppercase tracking-[0.15em] text-white">The Gorbals&apos; wee gem</p>
                <div className="relative mx-auto flex h-52 w-52 items-end justify-center sm:h-60 sm:w-60">
                  <div className="absolute bottom-4 h-24 w-40 rounded-b-[3rem] rounded-t-[1.3rem] border-[8px] border-[#183e32] bg-[#fbf9f1]" />
                  <div className="absolute bottom-[6.8rem] h-16 w-32 rounded-t-full border-x-[8px] border-t-[8px] border-[#183e32] bg-[#fbf9f1]" />
                  <div className="absolute bottom-[9.1rem] h-16 w-[7.2rem] rounded-t-[45%] bg-[#183e32]" />
                  <span className="absolute bottom-10 z-10 text-4xl font-black tracking-[-0.12em] text-[#f05e4e]">G5</span>
                </div>
                <div className="flex items-end justify-between font-black text-[#183e32]">
                  <span className="max-w-[8rem] text-sm leading-tight">Breakfast. Lunch. Lovely stuff.</span>
                  <span className="text-5xl leading-none">✳</span>
                </div>
              </div>
            </div>
            <p className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-full bg-[#fbf9f1] px-4 py-3 text-sm font-black shadow-[3px_3px_0_#183e32] sm:-left-10">Fresh every day</p>
          </div>
        </div>
      </section>

      <section id="menu" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">The good stuff</p>
              <h2 className="display-heading mt-4">Your new favourite order.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-[#183e32]/75">Come hungry. From a bacon roll before work to soup, sandwiches and sweet things at lunchtime, our counter is all about the classics done well.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {menuHighlights.map((item) => (
              <article key={item.number} className="group relative overflow-hidden rounded-[1.8rem] border-2 border-[#183e32] bg-[#fbf9f1] p-6 transition hover:-translate-y-2 hover:shadow-[7px_8px_0_#183e32]">
                <div className={`absolute -right-6 -top-7 h-28 w-28 rounded-full ${item.accent}`} />
                <p className="relative text-sm font-black tracking-[0.12em] text-[#f05e4e]">{item.number}</p>
                <h3 className="relative mt-14 text-2xl font-black tracking-[-0.06em]">{item.title}</h3>
                <p className="relative mt-4 leading-relaxed text-[#183e32]/75">{item.copy}</p>
                <span className="relative mt-7 inline-block text-2xl transition group-hover:translate-x-1">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#183e32] px-5 py-20 text-[#fbf9f1] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#d7e881]">A proper local</p>
            <h2 className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.075em]">The kind of place you&apos;ll want to tell your pals about.</h2>
          </div>
          <div className="grid gap-3">
            {reasons.map(([title, copy], index) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d7e881] text-sm font-black text-[#183e32]">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
                  <p className="mt-1 leading-relaxed text-white/75">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#faa896] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow">Come by</p>
              <h2 className="display-heading mt-4 max-w-2xl">Pop in for a roll. Leave with a better day.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#183e32]/80">Find us on Crown Street, just a short walk from Bridge Street Subway. Sit in, take it away, or phone ahead for your order.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="rounded-full bg-[#183e32] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Get directions</a>
                <a className="rounded-full border-2 border-[#183e32] px-6 py-4 text-sm font-black transition hover:bg-[#f7cf54]" href="tel:+441414182999">0141 418 2999</a>
              </div>
            </div>
            <div className="rounded-3xl bg-[#fbf9f1] p-6 shadow-[7px_8px_0_#183e32]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f05e4e]">Opening times</p>
              <div className="mt-5 space-y-3 text-sm font-bold">
                <div className="flex justify-between border-b border-[#183e32]/15 pb-3"><span>Monday–Friday</span><span>6am–4pm</span></div>
                <div className="flex justify-between border-b border-[#183e32]/15 pb-3"><span>Saturday</span><span>6am–3pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>7am–3pm</span></div>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[#183e32]/65">Hours can change—give us a quick call before a special journey.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#183e32]/10 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center">
          <p className="font-black tracking-[-0.04em]">G5 DELI <span className="font-medium text-[#183e32]/60">· 158 Crown Street, Gorbals, Glasgow G5 9XD</span></p>
          <a className="font-bold underline decoration-[#f05e4e] decoration-2 underline-offset-4 hover:text-[#f05e4e]" href="tel:+441414182999">0141 418 2999</a>
        </div>
      </footer>
    </main>
  );
}
