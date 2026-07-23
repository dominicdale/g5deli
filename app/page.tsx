import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description: "Breakfast, deli lunches, coffee, catering and platters from Crown Street, Gorbals.",
};

const menuItems = [
  { icon: "coffee", label: "Early starts", title: "Breakfast & coffee", copy: "Filled rolls, proper coffee and the G5 Belly Buster for hungry Glasgow mornings.", color: "bg-[#ed9d45]" },
  { icon: "sandwich", label: "Made your way", title: "Fresh deli lunches", copy: "Sandwiches, paninis, wraps and baked potatoes packed with fresh fillings.", color: "bg-[#cfe4df]" },
  { icon: "cake", label: "Save room", title: "Homemade treats", copy: "Cakes, scones and sweet things to enjoy with a cuppa or carry home.", color: "bg-[#f7d5bf]" },
];

const cateringItems = [
  { icon: "sandwich", title: "Sandwich platters", copy: "Freshly made sandwiches and rolls, ready for the table." },
  { icon: "tea", title: "Afternoon tea", copy: "Savoury bites, scones and sweet treats for a lovely spread." },
  { icon: "party", title: "Office & family orders", copy: "Tell us your numbers and dietary needs—we'll do the delicious bit." },
];

function DeliIcon({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {name === "coffee" && <><path {...common} d="M6 12h17v8a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7v-8Z" /><path {...common} d="M23 15h2a4 4 0 0 1 0 8h-3" /><path {...common} d="M10 8c0-2 2-2 2-4M16 8c0-2 2-2 2-4" /></>}
      {name === "sandwich" && <><path {...common} d="M5 14 16 7l11 7-11 5L5 14Z" /><path {...common} d="m5 18 11 5 11-5" /><path {...common} d="m5 14v8l11 5 11-5v-8" /><path {...common} d="m9 19 3-2 4 2 4-2 3 2" /></>}
      {name === "cake" && <><path {...common} d="M7 15h18v11H7z" /><path {...common} d="M7 20h18" /><path {...common} d="M10 15c1-5 3-7 6-7s5 2 6 7" /><path {...common} d="M16 8V4" /></>}
      {name === "tea" && <><path {...common} d="M7 13h16v8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-8Z" /><path {...common} d="M23 15h2a4 4 0 0 1 0 8h-3M10 9h10M13 5h4" /></>}
      {name === "party" && <><path {...common} d="m8 25 4-17 12 12-16 5Z" /><path {...common} d="m11 12 9 9M18 7l1-3M24 11l3-1M22 5l2-2" /><path {...common} d="M8 18c3 0 5 2 5 5" /></>}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fbf4ea] font-sans text-[#164f4b]">
      <header className="sticky top-0 z-50 bg-[#fbf4ea]/90 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 border-[#164f4b] bg-[#fffaf3] px-4 py-3 shadow-[4px_4px_0_#164f4b] sm:px-6" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2" aria-label="G5 Deli home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#65b8ad] text-[#fffaf3]">
              <DeliIcon name="coffee" className="h-6 w-6" />
            </span>
            <span className="font-display text-2xl font-black tracking-[-0.08em] sm:text-3xl">G5</span>
            <span className="border-l-2 border-[#164f4b] pl-2 text-[10px] font-black uppercase leading-tight tracking-[0.14em]">deli &amp;<br />coffee shop</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-black md:flex"><a className="hover:text-[#c95f43]" href="#menu">Eat</a><a className="hover:text-[#c95f43]" href="#catering">Catering</a><a className="hover:text-[#c95f43]" href="#visit">Visit</a></div>
          <a href="tel:+441414182999" className="rounded-full bg-[#ed9d45] px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#164f4b] hover:text-white sm:px-5">Call to order</a>
        </nav>
      </header>

      <section id="top" className="pb-7 pt-3">
        <div className="relative grid min-h-[680px] w-full overflow-hidden bg-[#164f4b] text-[#fffaf3] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex w-full flex-col justify-center px-7 py-14 sm:px-12 lg:ml-auto lg:max-w-[720px] lg:px-16 lg:py-20">
            <div className="mb-7 flex flex-wrap gap-2"><span className="rounded-full bg-[#65b8ad] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#123e3b]">Gorbals, Glasgow</span><span className="rounded-full border-2 border-[#fffaf3]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Open from 6am</span></div>
            <h1 className="max-w-3xl font-display text-[clamp(2.7rem,6vw,5.8rem)] font-black leading-[0.9] tracking-[-0.065em]"><span className="block whitespace-nowrap">Good food.</span><span className="block whitespace-nowrap text-[#ed9d45]">Good coffee.</span><span className="block whitespace-nowrap">Good people.</span></h1>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed text-[#fffaf3]/80 sm:text-xl">The friendly neighbourhood deli for early starts, easy lunches and catch-ups over cake.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#menu" className="rounded-full bg-[#fffaf3] px-6 py-4 text-sm font-black text-[#164f4b] transition hover:-translate-y-1 hover:bg-[#ed9d45]">See what&apos;s good</a><a href="#catering" className="rounded-full border-2 border-[#fffaf3]/50 px-6 py-4 text-sm font-black transition hover:border-[#ed9d45] hover:text-[#ed9d45]">Plan a platter</a></div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden lg:min-h-full">
            <div className="absolute -right-20 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#ed9d45] sm:h-[600px] sm:w-[600px] lg:-right-48 lg:h-[700px] lg:w-[700px]" />
            <img src="/hero-illustration-v7.png" alt="Hand-drawn coffee cup with biscuit and spoon" className="absolute inset-0 h-full w-full object-cover object-[65%_center] mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 rounded-2xl border-2 border-[#164f4b] bg-[#f7d5bf] px-5 py-4 text-[#164f4b] shadow-[5px_5px_0_#164f4b] sm:left-10"><p className="text-xs font-black uppercase tracking-[0.15em]">Made fresh</p><p className="font-display text-2xl font-black leading-none">Every day.</p></div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex w-fit max-w-[calc(100%-2rem)] flex-wrap items-center justify-center gap-1 rounded-full border-2 border-[#164f4b] bg-[#fffaf3] p-1.5 shadow-[4px_4px_0_#164f4b]"><span className="rounded-full bg-[#ed9d45] px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Breakfast</span><span aria-hidden className="px-1 text-[#c95f43]">✦</span><span className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Lunch</span><span aria-hidden className="px-1 text-[#c95f43]">✦</span><span className="rounded-full bg-[#cfe4df] px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Sweet treats</span><span aria-hidden className="px-1 text-[#c95f43]">✦</span><span className="rounded-full bg-[#164f4b] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">Good chat</span></div>
      </section>

      <section id="menu" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#c95f43]">What&apos;s good</p><h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.065em]">Come hungry.<br /><span className="text-[#c95f43]">Leave smiling.</span></h2></div><p className="max-w-lg text-lg font-semibold leading-relaxed text-[#164f4b]/70">Simple food, generous portions and the kind of welcome that makes you want to come back tomorrow.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {menuItems.map((item) => <article key={item.title} className={`group relative min-h-[370px] overflow-hidden rounded-[2rem] border-2 border-[#164f4b] p-7 shadow-[6px_6px_0_#164f4b] transition hover:-translate-y-2 ${item.color}`}><span className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-[#164f4b] bg-[#fffaf3] text-[#164f4b] shadow-[3px_3px_0_#164f4b]"><DeliIcon name={item.icon} /></span><p className="mt-8 text-xs font-black uppercase tracking-[0.15em] text-[#c95f43]">{item.label}</p><h3 className="mt-3 font-display text-3xl font-black leading-[0.95] tracking-[-0.045em]">{item.title}</h3><p className="mt-4 font-semibold leading-relaxed text-[#164f4b]/75">{item.copy}</p><a href="#visit" className="absolute bottom-7 left-7 inline-flex items-center gap-3 rounded-full border-2 border-[#164f4b] bg-[#fffaf3] py-2 pl-4 pr-2 text-xs font-black transition group-hover:bg-[#164f4b] group-hover:text-white">Find your order <span className="grid h-7 w-7 place-items-center rounded-full bg-[#164f4b] text-base text-white group-hover:bg-[#ed9d45] group-hover:text-[#164f4b]">→</span></a></article>)}
          </div>
        </div>
      </section>

      <section id="catering" className="bg-[#ed9d45] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div><span className="inline-block rounded-full bg-[#c95f43] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Made for sharing</span><h2 className="mt-6 font-display text-[clamp(3.2rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.065em]">Big spread?<br />Easy.</h2><p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-[#164f4b]/75">Office lunches, birthdays, family get-togethers and afternoon teas—tell us what you need and we&apos;ll make it delicious.</p><a href="tel:+441414182999" className="mt-8 inline-block rounded-full bg-[#164f4b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#c95f43]">Call about catering</a></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cateringItems.map((item, index) => <article key={item.title} className={`rounded-[2rem] border-2 border-[#164f4b] bg-[#fffaf3] p-6 shadow-[6px_6px_0_#164f4b] ${index === 2 ? "sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6" : ""}`}><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#cfe4df] text-[#164f4b]"><DeliIcon name={item.icon} /></span><div><h3 className="mt-5 font-display text-2xl font-black tracking-[-0.04em] sm:mt-0">{item.title}</h3><p className="mt-3 font-semibold leading-relaxed text-[#164f4b]/70">{item.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#164f4b] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#ed9d45]">A proper local</p><h2 className="mt-4 font-display text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.065em]">Small place.<br /><span className="text-[#f7d5bf]">Big welcome.</span></h2></div><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#ed9d45]">6am</strong><p className="mt-2 text-sm font-bold text-white/70">Weekday starts</p></div><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#ed9d45]">3 ways</strong><p className="mt-2 text-sm font-bold text-white/70">Sit in, takeaway or delivery</p></div><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#ed9d45]">1 local</strong><p className="mt-2 text-sm font-bold text-white/70">Friendly Crown Street spot</p></div></div></div>
      </section>

      <section id="visit" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#c95f43]">Come by</p><h2 className="mt-4 font-display text-[clamp(3.2rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.065em]">Pop in for a roll.<br /><span className="text-[#c95f43]">Stay for the chat.</span></h2><p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#164f4b]/70">Find us on Crown Street, just a short walk from Bridge Street Subway.</p><div className="mt-8 flex flex-wrap gap-3"><a className="rounded-full bg-[#164f4b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#c95f43]" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Get directions</a><a className="rounded-full border-2 border-[#164f4b] px-6 py-4 text-sm font-black transition hover:bg-[#ed9d45]" href="tel:+441414182999">0141 418 2999</a></div></div><div className="rounded-[2rem] border-2 border-[#164f4b] bg-[#cfe4df] p-7 shadow-[7px_7px_0_#164f4b]"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#c95f43]">Opening times</p><div className="mt-5 space-y-1"><div className="flex justify-between border-b border-[#164f4b]/20 py-4 font-bold"><span>Monday–Friday</span><strong>6am–4pm</strong></div><div className="flex justify-between border-b border-[#164f4b]/20 py-4 font-bold"><span>Saturday</span><strong>7am–3pm</strong></div><div className="flex justify-between py-4 font-bold"><span>Sunday</span><strong>7am–3pm</strong></div></div><p className="mt-4 text-sm font-semibold text-[#164f4b]/60">Hours can change—give us a quick call before a special journey.</p></div></div>
      </section>

      <section className="border-y-4 border-[#164f4b] bg-[#164f4b]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-white sm:flex-row sm:items-center sm:px-6 lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#ed9d45]">Find G5 Deli</p><p className="mt-1 font-display text-xl font-black">158 Crown Street, Gorbals</p></div><a className="w-fit rounded-full border-2 border-white/40 px-4 py-2 text-xs font-black hover:border-[#ed9d45] hover:text-[#ed9d45]" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Open in Maps →</a></div>
        <iframe title="Map showing G5 Deli on Crown Street" src="https://www.google.com/maps?q=G5+Deli,+158+Crown+Street,+Glasgow&output=embed" className="h-[440px] w-full border-0 sm:h-[520px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <footer className="bg-[#fffaf3] px-4 py-9 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm font-bold sm:flex-row sm:items-center"><div className="font-display text-2xl font-black">G5 deli <span className="font-sans text-[10px] font-black uppercase tracking-[0.15em]">&amp; coffee shop</span></div><p className="text-[#164f4b]/60">158 Crown Street, Gorbals, Glasgow G5 9XD</p><a className="underline decoration-[#c95f43] decoration-2 underline-offset-4" href="tel:+441414182999">0141 418 2999</a></div></footer>
    </main>
  );
}
