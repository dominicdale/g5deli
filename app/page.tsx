import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description: "Breakfast, deli lunches, coffee, catering and platters from Crown Street, Gorbals.",
};

const menuItems = [
  { icon: "☕", label: "Early starts", title: "Breakfast & coffee", copy: "Filled rolls, proper coffee and the G5 Belly Buster for hungry Glasgow mornings.", color: "bg-[#f4bf36]" },
  { icon: "🥪", label: "Made your way", title: "Fresh deli lunches", copy: "Sandwiches, paninis, wraps and baked potatoes packed with fresh fillings.", color: "bg-[#d9e8d3]" },
  { icon: "🍰", label: "Save room", title: "Homemade treats", copy: "Cakes, scones and sweet things to enjoy with a cuppa or carry home.", color: "bg-[#f5d7c6]" },
];

const cateringItems = [
  { icon: "🥪", title: "Sandwich platters", copy: "Freshly made sandwiches and rolls, ready for the table." },
  { icon: "🫖", title: "Afternoon tea", copy: "Savoury bites, scones and sweet treats for a lovely spread." },
  { icon: "🎉", title: "Office & family orders", copy: "Tell us your numbers and dietary needs—we'll do the delicious bit." },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f8f2e8] font-sans text-[#173f2d]">
      <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 border-[#173f2d] bg-[#fffaf2] px-4 py-3 shadow-[4px_4px_0_#173f2d] sm:px-6" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2" aria-label="G5 Deli home">
            <span className="font-display text-2xl font-bold tracking-[-0.08em] sm:text-3xl">G5</span>
            <span className="border-l-2 border-[#173f2d] pl-2 text-[10px] font-black uppercase leading-tight tracking-[0.14em]">deli &amp;<br />coffee shop</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-black md:flex"><a className="hover:text-[#bd523e]" href="#menu">Eat</a><a className="hover:text-[#bd523e]" href="#catering">Catering</a><a className="hover:text-[#bd523e]" href="#visit">Visit</a></div>
          <a href="tel:+441414182999" className="rounded-full bg-[#f4bf36] px-4 py-3 text-xs font-black transition hover:-translate-y-0.5 hover:bg-[#173f2d] hover:text-white sm:px-5">Call to order</a>
        </nav>
      </header>

      <section id="top" className="px-4 pb-5 pt-5 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl overflow-hidden rounded-[2rem] bg-[#173f2d] text-[#fffaf2] lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="mb-7 flex flex-wrap gap-2"><span className="rotate-[-2deg] rounded-full bg-[#f4bf36] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#173f2d]">Gorbals, Glasgow</span><span className="rotate-2 rounded-full border-2 border-[#fffaf2]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Open from 6am</span></div>
            <h1 className="max-w-3xl font-display text-[clamp(3.5rem,7.5vw,7rem)] font-bold leading-[0.84] tracking-[-0.055em]">Good food.<br /><span className="text-[#f4bf36]">Good coffee.</span><br />Good people.</h1>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed text-[#fffaf2]/75 sm:text-xl">The friendly neighbourhood deli for early starts, easy lunches and catch-ups over cake.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#menu" className="rounded-full bg-[#fffaf2] px-6 py-4 text-sm font-black text-[#173f2d] transition hover:-translate-y-1 hover:bg-[#f4bf36]">See what&apos;s good</a><a href="#catering" className="rounded-full border-2 border-[#fffaf2]/50 px-6 py-4 text-sm font-black transition hover:border-[#f4bf36] hover:text-[#f4bf36]">Plan a platter</a></div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden lg:min-h-full">
            <div className="absolute -right-20 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#f4bf36] sm:h-[600px] sm:w-[600px] lg:-right-48 lg:h-[700px] lg:w-[700px]" />
            <img src="/hero-illustration-v7.png" alt="Hand-drawn coffee cup with biscuit and spoon" className="absolute inset-0 h-full w-full object-cover object-[65%_center] mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 rotate-[-4deg] rounded-2xl border-2 border-[#173f2d] bg-[#f5d7c6] px-5 py-4 text-[#173f2d] shadow-[5px_5px_0_#173f2d] sm:left-10"><p className="text-xs font-black uppercase tracking-[0.15em]">Made fresh</p><p className="font-display text-2xl font-bold leading-none">Every day.</p></div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-7xl flex-wrap justify-center gap-2 sm:justify-between"><span className="rounded-full bg-[#f4bf36] px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Breakfast</span><span className="rounded-full bg-[#d9e8d3] px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Lunch</span><span className="rounded-full bg-[#f5d7c6] px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">Sweet treats</span><span className="rounded-full bg-[#173f2d] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">Good chat</span></div>
      </section>

      <section id="menu" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#bd523e]">What&apos;s good</p><h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em]">Come hungry.<br /><span className="text-[#bd523e]">Leave smiling.</span></h2></div><p className="max-w-lg text-lg font-semibold leading-relaxed text-[#173f2d]/70">Simple food, generous portions and the kind of welcome that makes you want to come back tomorrow.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {menuItems.map((item, index) => <article key={item.title} className={`group relative min-h-[370px] overflow-hidden rounded-[2rem] border-2 border-[#173f2d] p-7 shadow-[6px_6px_0_#173f2d] transition hover:-translate-y-2 ${item.color}`}><span aria-hidden className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-[#173f2d] bg-[#fffaf2] text-3xl shadow-[3px_3px_0_#173f2d]">{item.icon}</span><p className="mt-8 text-xs font-black uppercase tracking-[0.15em] text-[#bd523e]">0{index + 1} / {item.label}</p><h3 className="mt-3 font-display text-3xl font-bold leading-[0.95] tracking-[-0.035em]">{item.title}</h3><p className="mt-4 font-semibold leading-relaxed text-[#173f2d]/75">{item.copy}</p><a href="#visit" className="absolute bottom-7 left-7 inline-flex items-center gap-3 rounded-full border-2 border-[#173f2d] bg-[#fffaf2] py-2 pl-4 pr-2 text-xs font-black transition group-hover:bg-[#173f2d] group-hover:text-white">Find your order <span className="grid h-7 w-7 place-items-center rounded-full bg-[#173f2d] text-base text-white group-hover:bg-[#f4bf36] group-hover:text-[#173f2d]">→</span></a></article>)}
          </div>
        </div>
      </section>

      <section id="catering" className="bg-[#f4bf36] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div><span className="inline-block rotate-[-2deg] rounded-full bg-[#bd523e] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">Made for sharing</span><h2 className="mt-6 font-display text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.88] tracking-[-0.05em]">Big spread?<br />Easy.</h2><p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-[#173f2d]/75">Office lunches, birthdays, family get-togethers and afternoon teas—tell us what you need and we&apos;ll make it delicious.</p><a href="tel:+441414182999" className="mt-8 inline-block rounded-full bg-[#173f2d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#bd523e]">Call about catering</a></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cateringItems.map((item, index) => <article key={item.title} className={`rounded-[2rem] border-2 border-[#173f2d] bg-[#fffaf2] p-6 shadow-[6px_6px_0_#173f2d] ${index === 2 ? "sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6" : ""}`}><span aria-hidden className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d9e8d3] text-3xl">{item.icon}</span><div><p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-[#bd523e] sm:mt-0">0{index + 1}</p><h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]">{item.title}</h3><p className="mt-3 font-semibold leading-relaxed text-[#173f2d]/70">{item.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#173f2d] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4bf36]">A proper local</p><h2 className="mt-4 font-display text-[clamp(3rem,5.5vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.05em]">Small place.<br /><span className="text-[#f5d7c6]">Big welcome.</span></h2></div><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#f4bf36]">6am</strong><p className="mt-2 text-sm font-bold text-white/70">Weekday starts</p></div><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#f4bf36]">3 ways</strong><p className="mt-2 text-sm font-bold text-white/70">Sit in, takeaway or delivery</p></div><div className="rounded-3xl border border-white/20 bg-white/5 p-5"><strong className="font-display text-3xl text-[#f4bf36]">1 local</strong><p className="mt-2 text-sm font-bold text-white/70">Friendly Crown Street spot</p></div></div></div>
      </section>

      <section id="visit" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#bd523e]">Come by</p><h2 className="mt-4 font-display text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em]">Pop in for a roll.<br /><span className="text-[#bd523e]">Stay for the chat.</span></h2><p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#173f2d]/70">Find us on Crown Street, just a short walk from Bridge Street Subway.</p><div className="mt-8 flex flex-wrap gap-3"><a className="rounded-full bg-[#173f2d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#bd523e]" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Get directions</a><a className="rounded-full border-2 border-[#173f2d] px-6 py-4 text-sm font-black transition hover:bg-[#f4bf36]" href="tel:+441414182999">0141 418 2999</a></div></div><div className="rounded-[2rem] border-2 border-[#173f2d] bg-[#d9e8d3] p-7 shadow-[7px_7px_0_#173f2d]"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#bd523e]">Opening times</p><div className="mt-5 space-y-1"><div className="flex justify-between border-b border-[#173f2d]/20 py-4 font-bold"><span>Monday–Friday</span><strong>6am–4pm</strong></div><div className="flex justify-between border-b border-[#173f2d]/20 py-4 font-bold"><span>Saturday</span><strong>7am–3pm</strong></div><div className="flex justify-between py-4 font-bold"><span>Sunday</span><strong>7am–3pm</strong></div></div><p className="mt-4 text-sm font-semibold text-[#173f2d]/60">Hours can change—give us a quick call before a special journey.</p></div></div>
      </section>

      <section className="border-y-4 border-[#173f2d] bg-[#173f2d]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-white sm:flex-row sm:items-center sm:px-6 lg:px-8"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4bf36]">Find G5 Deli</p><p className="mt-1 font-display text-xl font-bold">158 Crown Street, Gorbals</p></div><a className="w-fit rounded-full border-2 border-white/40 px-4 py-2 text-xs font-black hover:border-[#f4bf36] hover:text-[#f4bf36]" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Open in Maps →</a></div>
        <iframe title="Map showing G5 Deli on Crown Street" src="https://www.google.com/maps?q=G5+Deli,+158+Crown+Street,+Glasgow&output=embed" className="h-[440px] w-full border-0 sm:h-[520px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <footer className="bg-[#fffaf2] px-4 py-9 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm font-bold sm:flex-row sm:items-center"><div className="font-display text-2xl font-bold">G5 deli <span className="font-sans text-[10px] font-black uppercase tracking-[0.15em]">&amp; coffee shop</span></div><p className="text-[#173f2d]/60">158 Crown Street, Gorbals, Glasgow G5 9XD</p><a className="underline decoration-[#bd523e] decoration-2 underline-offset-4" href="tel:+441414182999">0141 418 2999</a></div></footer>
    </main>
  );
}
