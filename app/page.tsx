import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G5 Deli & Coffee Shop | Gorbals, Glasgow",
  description: "Breakfast, deli lunches, coffee, catering and platters from Crown Street, Gorbals.",
};

const menuCards = [
  { icon: "coffee", label: "01 / Start here", title: "Breakfast with a bit of heart", copy: "Filled rolls, proper coffee and the famous G5 Belly Buster for early Glasgow mornings." },
  { icon: "sandwich", label: "02 / Make it yours", title: "Fresh from the counter", copy: "Build a sandwich, panini, wrap or baked potato with fillings made fresh every day." },
  { icon: "cake", label: "03 / Finish sweet", title: "A little treat for later", copy: "Homemade cakes, scones and sweet things to take away—or enjoy with a cuppa." },
];

const cateringCards = [
  ["Sandwich platters", "Freshly made sandwiches and rolls for the table."],
  ["Afternoon tea", "Savoury bites, scones and sweet treats for a lovely spread."],
  ["Office & family orders", "Tell us your numbers and dietary needs—we'll do the delicious bit."],
];

const values = [
  ["Open early", "Weekday mornings from 6am"],
  ["Take it easy", "Dine in, takeaway or delivery"],
  ["Keep it local", "Friendly service on Crown Street"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="wordmark" aria-label="G5 Deli home"><span className="wordmark-g5">G5</span><span className="wordmark-name">deli<span>&amp; coffee shop</span></span></a>
          <div className="nav-links"><a href="#menu">The menu</a><a href="#catering">Catering</a><a href="#visit">Visit us</a></div>
          <a className="button button--yellow button--small" href="tel:+441414182999">Call to order</a>
        </nav>

        <div className="hero-grid page-width">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--light"><span className="dot" /> 158 Crown Street, Gorbals</p>
            <h1>Good food.<br /><span>Good coffee.</span><br />Good company.</h1>
            <p className="hero-lede">Your friendly neighbourhood deli for early starts, easy lunches and catch-ups over cake.</p>
            <div className="hero-actions"><a className="button button--yellow" href="#menu">Explore the menu</a><a className="text-link text-link--light" href="#catering">Planning a get-together? <span>See catering →</span></a></div>
            <p className="hero-note">Open weekdays from 6am <span>·</span> Weekends from 7am</p>
          </div>
          <div className="hero-art-wrap">
            <div className="hero-art"><img src="/hero-illustration-v7.png" alt="Hand-drawn coffee cup with a biscuit and spoon" /></div>
            <div className="art-caption"><span className="art-caption-mark">✳</span><span>Made fresh<br />every day</span></div>
          </div>
        </div>
        <div className="hero-bottom page-width"><span>Breakfast</span><span>Lunch</span><span>Sweet treats</span><span>Good chat</span></div>
      </section>

      <section className="section section--cream" id="menu">
        <div className="page-width">
          <div className="section-intro"><div><p className="eyebrow">The good stuff</p><h2>Come hungry.<br /><em>Leave happy.</em></h2></div><p>Simple food, generous portions and the kind of welcome that makes you want to come back tomorrow.</p></div>
          <div className="menu-grid">
            {menuCards.map((card) => <article key={card.label} className="menu-card"><div className={`card-icon card-icon--${card.icon}`} aria-hidden="true"><span /></div><p className="card-kicker">{card.label}</p><h3>{card.title}</h3><p>{card.copy}</p><a className="arrow-link" href="#visit">Find your next order <span>↗</span></a></article>)}
          </div>
        </div>
      </section>

      <section className="section section--sage" id="catering">
        <div className="page-width catering-grid">
          <div className="catering-copy"><p className="eyebrow">For the whole table</p><h2>Big spread?<br /><em>We&apos;ve got you.</em></h2><p>From office lunches to birthdays and afternoon teas, we&apos;ll make the food bit feel easy. Call us with your date, numbers and what you&apos;re craving.</p><a className="button button--green" href="tel:+441414182999">Call about catering</a></div>
          <div className="catering-list"><div className="catering-list-head"><span>G5 catering</span><span>Made to order</span></div>{cateringCards.map(([title, copy], index) => <div className="catering-row" key={title}><span className="row-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="row-arrow">→</span></div>)}<div className="catering-foot">Need something specific? Give us a ring and we&apos;ll talk it through.</div></div>
        </div>
      </section>

      <section className="section section--green" id="about">
        <div className="page-width about-grid"><div><p className="eyebrow eyebrow--light">A proper local</p><h2>Small place.<br /><span>Big welcome.</span></h2><p className="about-copy">A cosy spot in the Gorbals for a quick bite, a proper catch-up or a coffee on the move. Come as you are.</p></div><div className="values-list">{values.map(([title, copy], index) => <div className="value-row" key={title}><span className="value-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div>
      </section>

      <section className="section section--yellow" id="visit">
        <div className="page-width visit-grid"><div><p className="eyebrow">Come by</p><h2>Pop in for a roll.<br /><em>Stay for the chat.</em></h2><p>Find us on Crown Street, just a short walk from Bridge Street Subway.</p><div className="visit-actions"><a className="button button--green" href="https://www.google.com/maps/search/?api=1&query=G5+Deli%2C+158+Crown+Street%2C+Glasgow" target="_blank" rel="noreferrer">Get directions</a><a className="button button--outline" href="tel:+441414182999">0141 418 2999</a></div></div><div className="hours-card"><p className="card-kicker">Opening times</p><div className="hours"><div><span>Monday–Friday</span><strong>6am–4pm</strong></div><div><span>Saturday</span><strong>7am–3pm</strong></div><div><span>Sunday</span><strong>7am–3pm</strong></div></div><p className="hours-note">Hours can change—give us a quick call before a special journey.</p></div></div>
      </section>

      <section className="map-section" aria-label="Map showing G5 Deli location"><div className="map-label"><p className="eyebrow">Find G5 Deli</p><strong>158 Crown Street, Gorbals</strong></div><iframe title="Map showing G5 Deli on Crown Street" src="https://www.google.com/maps?q=G5+Deli,+158+Crown+Street,+Glasgow&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>

      <footer className="footer"><div className="page-width footer-inner"><a href="#top" className="footer-mark">G5 deli <span>&amp; coffee shop</span></a><p>158 Crown Street, Gorbals, Glasgow G5 9XD</p><a href="tel:+441414182999">0141 418 2999</a></div></footer>
    </main>
  );
}
