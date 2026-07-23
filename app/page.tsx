import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description: "Fresh breakfast, deli favourites, coffee, catering and platters on Crown Street.",
};

const menuHighlights = [
  ["01", "Breakfast, done properly", "From first-thing rolls to the full G5 Belly Buster, start the day with something warm and filling."],
  ["02", "Fresh from the counter", "Build-your-own sandwiches, paninis, wraps and baked potatoes with fillings made fresh every day."],
  ["03", "A wee something sweet", "Pair a proper coffee with homemade cakes, scones and treats worth making time for."],
];

const cateringOptions = [
  ["Sandwich platters", "Freshly made sandwiches and rolls for the table."],
  ["Sweet treats", "Cakes, scones and little bites for a proper spread."],
  ["Afternoon tea", "A lovely mix of savoury favourites and something sweet."],
];

const reasons = [
  ["Open early", "Serving weekday mornings from 6am, ready when Glasgow is."],
  ["Easy to grab", "Dine in, takeaway, or give us a call to ask about delivery."],
  ["Made with care", "Hearty, homemade favourites and friendly service at the counter."],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fffdf5] text-[#245b3b]">
      <section id="top" className="relative min-h-[710px] overflow-hidden bg-[#fffdf5] px-5 pb-14 pt-5 sm:px-8 lg:min-h-[740px] lg:px-12">
        <span aria-hidden className="line-mark line-mark--sun absolute -left-12 top-24 opacity-65" />
        <span aria-hidden className="line-mark line-mark--circle absolute -right-12 top-20 opacity-70" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-3" aria-label="G5 Deli home">
            <span className="line-mark line-mark--cup shrink-0" aria-hidden />
            <span className="leading-none"><span className="brand-script block text-3xl text-[#8dc63f]">G5 deli</span><span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#245b3b]/60">coffee shop</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
            <a className="transition hover:text-[#8dc63f]" href="#menu">What&apos;s good</a>
            <a className="transition hover:text-[#8dc63f]" href="#catering">Catering &amp; platters</a>
            <a className="transition hover:text-[#8dc63f]" href="#visit">Find us</a>
          </div>
          <a href="tel:+441414182999" className="rounded-full bg-[#245b3b] px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#8dc63f] sm:px-5">Call to order</a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#245b3b]/20 bg-[#f6c945]/20 px-4 py-2 text-xs font-black uppercase tracking-[0.13em]"><span className="h-2 w-2 rounded-full bg-[#8dc63f]" /> Crown Street, Gorbals</p>
            <h1 className="max-w-3xl text-[clamp(3.65rem,8vw,7.3rem)] font-black leading-[0.84] tracking-[-0.085em] text-[#245b3b]">Your local<br /><span className="text-[#8dc63f]">deli &amp; coffee</span><br />shop.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#245b3b]/75 sm:text-xl">The local deli for early starts, easy lunches and catch-ups over cake. Made fresh, served with a smile.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-[#8dc63f] px-6 py-4 text-sm font-black text-[#245b3b] shadow-[4px_4px_0_#245b3b] transition hover:-translate-y-1 hover:shadow-[6px_7px_0_#245b3b]">See what&apos;s on</a>
              <a href="#catering" className="rounded-full border-2 border-[#245b3b] px-6 py-4 text-sm font-black transition hover:bg-[#245b3b] hover:text-white">Catering &amp; platters</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:ml-auto">
            <div className="relative aspect-[1.16] overflow-hidden rounded-[2.4rem] border-[7px] border-[#245b3b] bg-[#fffdf5] shadow-[12px_12px_0_#245b3b]">
              <img src="/hero-line-v3.png" alt="Line drawing of a steaming coffee cup" className="h-full w-full object-cover" />
            </div>
            <p className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-full bg-[#f6c945] px-4 py-3 text-sm font-black text-[#245b3b] shadow-[3px_3px_0_#245b3b] sm:-left-8">Coffee, made properly</p>
          </div>
        </div>
      </section>

      <section id="menu" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <span aria-hidden className="line-mark line-mark--plate absolute right-[8%] top-12 hidden lg:block" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">The good stuff</p><h2 className="display-heading mt-4">Your new favourite order.</h2></div>
            <p className="max-w-xl text-lg leading-relaxed text-[#245b3b]/75">Come hungry. From a bacon roll before work to soup, sandwiches and sweet things at lunchtime, our counter is all about the classics done well.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {menuHighlights.map(([number, title, copy], index) => (
              <article key={number} className="group relative overflow-hidden rounded-[1.8rem] border-2 border-[#245b3b] bg-[#fffdf5] p-6 transition hover:-translate-y-2 hover:shadow-[7px_8px_0_#245b3b]">
                <span aria-hidden className={`line-mark ${index === 1 ? "line-mark--cup" : "line-mark--spark"} absolute right-6 top-6 opacity-80`} />
                <p className="relative text-sm font-black tracking-[0.12em] text-[#8dc63f]">{number}</p>
                <h3 className="relative mt-14 text-2xl font-black tracking-[-0.06em]">{title}</h3>
                <p className="relative mt-4 leading-relaxed text-[#245b3b]/70">{copy}</p>
                <span className="relative mt-7 inline-block text-2xl transition group-hover:translate-x-1">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catering" className="relative overflow-hidden bg-[#8dc63f] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <span aria-hidden className="line-mark line-mark--leaf absolute -right-8 top-6 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="text-[#245b3b]">
            <p className="eyebrow">Made for sharing</p>
            <h2 className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-black leading-[0.88] tracking-[-0.075em]">Catering &amp; platters, sorted.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#245b3b]/85">Feeding the office, organising a family get-together, or planning a special afternoon? Let us put together a generous spread that feels like G5.</p>
            <a href="tel:+441414182999" className="mt-8 inline-block rounded-full bg-[#245b3b] px-6 py-4 text-sm font-black text-white shadow-[4px_4px_0_#f6c945] transition hover:-translate-y-1">Call to plan your platter</a>
          </div>
          <div className="relative rounded-[2rem] bg-[#fffdf5] p-5 shadow-[10px_10px_0_#245b3b] sm:p-7">
            <span aria-hidden className="line-mark line-mark--plate absolute right-6 top-6 opacity-75" />
            <div className="mb-5 flex items-center justify-between border-b-2 border-[#245b3b] pb-5"><span className="brand-script text-4xl text-[#8dc63f]">G5 deli</span><span className="rounded-full bg-[#f6c945] px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">Order ahead</span></div>
            <div className="space-y-5">
              {cateringOptions.map(([title, copy], index) => <div key={title} className="flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#245b3b] text-sm font-black text-[#fffdf5]">0{index + 1}</span><div><h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-1 leading-relaxed text-[#245b3b]/70">{copy}</p></div></div>)}
            </div>
            <p className="mt-7 border-t border-[#245b3b]/20 pt-5 text-sm font-bold text-[#245b3b]/70">Tell us your numbers, occasion and dietary needs—we&apos;ll take care of the delicious bit.</p>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#245b3b] px-5 py-20 text-[#fffdf5] sm:px-8 lg:px-12 lg:py-28">
        <span aria-hidden className="line-mark line-mark--sun absolute right-10 top-10 hidden opacity-45 lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><p className="eyebrow text-[#f6c945]">A proper local</p><h2 className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.075em]">The kind of place you&apos;ll want to tell your pals about.</h2></div>
          <div className="grid gap-3">
            {reasons.map(([title, copy], index) => <div key={title} className="flex gap-5 rounded-2xl border border-white/20 bg-white/5 p-5 sm:p-6"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f6c945] text-sm font-black text-[#245b3b]">0{index + 1}</span><div><h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3><p className="mt-1 leading-relaxed text-white/75">{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="visit" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-[#f6c945] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div><p className="eyebrow">Come by</p><h2 className="display-heading mt-4 max-w-2xl">Pop in for a roll. Leave with a better day.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#245b3b]/80">Find us on Crown Street, just a short walk from Bridge Street Subway. Sit in, take it away, or phone ahead for your order.</p><div className="mt-8 flex flex-wrap gap-3"><a className="rounded-full bg-[#245b3b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Get directions</a><a className="rounded-full border-2 border-[#245b3b] px-6 py-4 text-sm font-black transition hover:bg-[#fffdf5]" href="tel:+441414182999">0141 418 2999</a></div></div>
            <div className="relative rounded-3xl bg-[#fffdf5] p-6 shadow-[7px_8px_0_#245b3b]"><span aria-hidden className="line-mark line-mark--pin absolute right-6 top-6" /><p className="text-xs font-black uppercase tracking-[0.16em] text-[#8dc63f]">Opening times</p><div className="mt-5 space-y-3 text-sm font-bold"><div className="flex justify-between border-b border-[#245b3b]/15 pb-3"><span>Monday–Friday</span><span>6am–4pm</span></div><div className="flex justify-between border-b border-[#245b3b]/15 pb-3"><span>Saturday</span><span>7am–3pm</span></div><div className="flex justify-between"><span>Sunday</span><span>7am–3pm</span></div></div><p className="mt-5 text-xs leading-relaxed text-[#245b3b]/65">Hours can change—give us a quick call before a special journey.</p></div>
          </div>
        </div>
      </section>

      <section className="relative h-[440px] w-full overflow-hidden border-y-4 border-[#245b3b] bg-[#fffdf5] sm:h-[520px]" aria-label="Map showing G5 Deli location">
        <div className="absolute left-5 top-5 z-10 rounded-2xl bg-[#fffdf5] px-5 py-4 shadow-[4px_4px_0_#245b3b] sm:left-8 sm:top-8"><p className="eyebrow text-[#8dc63f]">Find G5 Deli</p><p className="mt-1 font-black">158 Crown Street, Gorbals</p></div>
        <iframe title="Map showing G5 Deli on Crown Street" src="https://www.google.com/maps?q=G5+Deli,+158+Crown+Street,+Glasgow&output=embed" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <footer className="px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center"><p className="font-black tracking-[-0.04em]">G5 DELI <span className="font-medium text-[#245b3b]/60">· 158 Crown Street, Gorbals, Glasgow G5 9XD</span></p><a className="font-bold underline decoration-[#8dc63f] decoration-2 underline-offset-4 hover:text-[#8dc63f]" href="tel:+441414182999">0141 418 2999</a></div></footer>
    </main>
  );
}
