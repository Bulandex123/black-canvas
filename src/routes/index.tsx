import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, CalendarDays, Clock3, Instagram, MapPin, Menu, Scissors, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Miami Drip Barbershop | More Than a Cut" },
      { name: "description", content: "Premium grooming, precision cuts and authentic Miami style in Little Havana." },
    ],
  }),
  component: Index,
});

const hero = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=85";
const barber = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85";
const gallery = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1622288432450-277d0fef5ed4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
];

const services = [
  ["01", "HAIRCUTS", "Clean silhouettes, sharp finishes and a cut built around your style."],
  ["02", "FADES & STYLING", "Precision fades, texture and styling with attention to every detail."],
  ["03", "BEARD GROOMING", "Crisp lines, balanced shape and a polished finish."],
  ["04", "HOT TOWEL", "A classic barbershop ritual for a deeper, smoother finish."],
  ["05", "KIDS", "Fresh, comfortable cuts for the next generation of Miami style."],
  ["06", "VIP EXPERIENCE", "A premium grooming experience designed around your time and look."],
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const nav = ["HOME", "SERVICES", "ABOUT", "GALLERY", "REVIEWS", "LOCATION"];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f1e8] selection:bg-[#c8a86b] selection:text-black">
      <header className={"fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 md:px-12 transition-all " + (scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent")}>
        <a href="#home" className="flex flex-col leading-[.8] tracking-[.18em]">
          <span className="text-[8px] font-bold">THE MIAMI</span>
          <b className="font-serif text-2xl tracking-normal">DRIP</b>
          <span className="text-[7px] font-bold">BARBERSHOP</span>
        </a>
        <nav className={"absolute right-0 top-20 w-full border-b border-white/10 bg-black/95 px-7 py-6 md:static md:flex md:w-auto md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 " + (open ? "block" : "hidden md:flex")}>
          {nav.map((item) => <a key={item} onClick={() => setOpen(false)} href={"#" + item.toLowerCase()} className="block py-2 text-[10px] font-bold tracking-[.2em] text-white/70 hover:text-white">{item}</a>)}
          <a href="#book" className="mt-3 inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-[10px] font-bold tracking-[.18em] md:mt-0">BOOK NOW <ArrowRight size={14}/></a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url(" + hero + ")"}} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/60" />
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",backgroundSize:"80px 80px"}} />
        <div className="relative z-10 ml-[7vw] max-w-4xl pt-14 md:ml-[10vw]">
          <p className="mb-6 flex items-center gap-3 text-[9px] font-bold tracking-[.3em] text-[#c8a86b]"><span className="h-px w-8 bg-[#c8a86b]"/> LITTLE HAVANA • MIAMI, FL</p>
          <h1 className="font-serif text-[17vw] leading-[.78] tracking-[-.06em] md:text-[8.5vw]">MORE THAN<br/><i className="text-[#c8a86b]">A CUT.</i><br/>IT'S A CULTURE.</h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/65">Premium grooming, precision cuts and authentic Miami style in the heart of Little Havana.</p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a href="#book" className="inline-flex items-center justify-center gap-3 bg-[#f5f1e8] px-6 py-4 text-[10px] font-black tracking-[.16em] text-black">BOOK YOUR APPOINTMENT <ArrowRight size={16}/></a>
            <a href="#services" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[.2em]">VIEW SERVICES <ArrowDown size={14}/></a>
          </div>
        </div>
        <div className="absolute bottom-10 right-8 z-10 hidden text-right text-[8px] tracking-[.25em] text-white/50 md:block">EST. 2024<br/><strong className="font-serif text-2xl text-white">MIAMI<br/>DRIP</strong></div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-[#090909] py-4 whitespace-nowrap">
        <div className="animate-pulse text-center font-serif text-sm tracking-[.18em] text-white/70">PRECISION <b className="mx-4 text-[#c8a86b]">•</b> STYLE <b className="mx-4 text-[#c8a86b]">•</b> CULTURE <b className="mx-4 text-[#c8a86b]">•</b> CONFIDENCE <b className="mx-4 text-[#c8a86b]">•</b> MIAMI <b className="mx-4 text-[#c8a86b]">•</b> PRECISION</div>
      </div>

      <section className="bg-[#090909] px-[7vw] py-28">
        <div className="mb-14 max-w-3xl"><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">THE EXPERIENCE</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">THE DRIP<br/><span className="text-white/35">EXPERIENCE.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-white/45">Where precision barbering meets Miami culture, confidence and style.</p></div>
        <div className="grid border-t border-white/10 md:grid-cols-4">
          {[
            ["01","PRECISION","Clean fades. Sharp lines. Attention to every detail."],
            ["02","EXPERIENCE","Professional barbering built around your style."],
            ["03","CULTURE","Authentic Little Havana energy with modern Miami style."],
            ["04","CONFIDENCE","Leave the chair looking sharper and feeling better."]
          ].map(([n,t,d]) => <article key={n} className="group relative min-h-64 border-b border-white/10 p-7 transition hover:bg-white/[.03] md:border-r">
            <span className="absolute right-6 top-6 font-serif text-sm text-white/25">{n}</span><Scissors className="mt-10 text-[#c8a86b]" size={24} strokeWidth={1.2}/><h3 className="mt-7 text-sm font-bold tracking-[.15em]">{t}</h3><p className="mt-3 max-w-xs text-xs leading-6 text-white/40">{d}</p><ArrowRight className="absolute bottom-7 right-6 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#c8a86b]" size={17}/>
          </article>)}
        </div>
      </section>

      <section id="about" className="grid items-center gap-16 px-[7vw] py-28 md:grid-cols-2">
        <div className="relative"><img src={barber} alt="Barber at work" className="aspect-[4/5] w-full object-cover grayscale-[.15]"/><span className="absolute -bottom-5 left-4 bg-[#c8a86b] px-4 py-3 text-[8px] font-black tracking-[.18em] text-black">CRAFTED<br/>WITH PRECISION</span><span className="absolute right-5 top-5 grid h-24 w-24 place-items-center rounded-full border border-[#c8a86b] bg-black font-serif text-2xl">MD</span></div>
        <div><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">01 — THE STORY</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">MORE THAN<br/><span className="text-white/35">A HAIRCUT.</span></h2><p className="mt-8 max-w-xl text-sm leading-8 text-white/50">Located in the heart of Little Havana, The Miami Drip Barbershop is a destination for modern gentlemen who value style, precision and authenticity.</p><p className="mt-5 max-w-xl text-sm leading-8 text-white/50">Every visit is built around the details: the cut, the atmosphere, the conversation and the confidence you carry out the door.</p><div className="mt-10 flex justify-between border-t border-white/10 pt-5 text-[8px] tracking-[.18em] text-[#c8a86b]"><b>THE DRIP</b><span>MASTER BARBER EXPERIENCE</span></div></div>
      </section>

      <section id="services" className="bg-[#e9e5dd] px-[7vw] py-28 text-black">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-[9px] font-bold tracking-[.3em] text-[#82662f]">02 — THE MENU</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">THE DRIP<br/><span className="text-black/35">MENU.</span></h2></div><p className="max-w-sm text-sm leading-7 text-black/50">Precision grooming. Premium results. Choose the service that fits your style.</p></div>
        <div className="grid border-t border-black/20 md:grid-cols-2">
          {services.map(([n,t,d]) => <a href="#book" key={n} className="group grid grid-cols-[45px_1fr_20px] items-center gap-4 border-b border-black/20 py-7 md:odd:border-r md:odd:pr-10 md:even:pl-10"><span className="font-serif text-sm text-black/40">{n}</span><div><h3 className="font-serif text-2xl">{t}</h3><p className="mt-2 max-w-md text-xs leading-6 text-black/50">{d}</p></div><ArrowRight size={18} className="text-[#82662f] transition group-hover:translate-x-1"/></a>)}
        </div>
      </section>

      <section className="relative flex min-h-[620px] items-center overflow-hidden px-[7vw]"><div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url(" + gallery[2] + ")"}}/><div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/60"/><div className="relative max-w-4xl"><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">THE MIAMI LOOK</p><h2 className="mt-5 font-serif text-6xl leading-[.82] md:text-8xl">LOOK SHARP.<br/><i className="text-[#c8a86b]">FEEL CONFIDENT.</i></h2><p className="my-7 text-sm text-white/55">Your haircut is part of your presence.</p><a href="#book" className="inline-flex items-center gap-3 bg-white px-6 py-4 text-[10px] font-black tracking-[.16em] text-black">BOOK YOUR DRIP <ArrowRight size={16}/></a></div><span className="absolute bottom-8 right-8 text-[8px] tracking-[.2em] text-white/40">25°45' N<br/>80°11' W</span></section>

      <section id="gallery" className="px-[7vw] py-28">
        <div className="mb-14"><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">03 — THE WORK</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">THE DRIP<br/><span className="text-white/30">GALLERY.</span></h2></div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{gallery.map((src,i) => <figure key={src} className={"group relative overflow-hidden bg-white/5 " + (i===0 ? "md:col-span-2 md:row-span-2" : i===3 ? "md:col-span-2" : "")}><img src={src} alt={"Barbershop style " + (i+1)} className="h-full min-h-64 w-full object-cover transition duration-700 group-hover:scale-105"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12 text-[8px] font-bold tracking-[.18em]"><span className="mr-3 text-[#c8a86b]">0{i+1}</span> PRECISION CUT</figcaption></figure>)}</div>
      </section>

      <section id="reviews" className="bg-[#0c0c0c] px-[7vw] py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">04 — THE WORD</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">REAL CLIENTS.<br/><span className="text-white/30">REAL DRIP.</span></h2></div><div><strong className="font-serif text-6xl text-[#c8a86b]">5.0</strong><div className="mt-2 flex gap-1 text-[#c8a86b]">{[1,2,3,4,5].map(i=><Star key={i} size={15} fill="currentColor"/>)}</div><small className="text-[8px] tracking-[.2em] text-white/30">CLIENT EXPERIENCE</small></div></div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">{[
          "The attention to detail is exactly what you want from a barber. I left feeling brand new.",
          "Great atmosphere, clean work and a team that understands Miami style.",
          "Sharp cut, friendly service and an experience that feels different from a regular shop."
        ].map((q,i)=><article key={i} className="min-h-64 border border-white/10 p-7"><div className="flex gap-1 text-[#c8a86b]">{[1,2,3,4,5].map(x=><Star key={x} size={13} fill="currentColor"/>)}</div><p className="mt-12 font-serif text-lg leading-8 text-white/75">“{q}”</p><small className="text-[9px] tracking-[.15em] text-white/30">— CLIENT REVIEW</small></article>)}</div>
      </section>

      <section id="location" className="grid gap-12 bg-[#e9e5dd] px-[7vw] py-28 text-black md:grid-cols-2 md:items-center">
        <div><p className="text-[9px] font-bold tracking-[.3em] text-[#82662f]">05 — FIND THE SHOP</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">ROOTED IN<br/><span className="text-black/35">LITTLE HAVANA.</span></h2><p className="mt-8 max-w-lg text-sm leading-7 text-black/50">Where tradition meets modern style. Come through, sit down and experience the culture.</p><div className="my-8 border-y border-black/15"><div className="flex gap-4 border-b border-black/10 py-5 text-xs"><MapPin className="text-[#82662f]" size={18}/><span>1110 W Flagler St<br/>Miami, FL 33130</span></div><div className="flex gap-4 py-5 text-xs"><Clock3 className="text-[#82662f]" size={18}/><span>MON — SAT<br/>9AM — 10PM</span></div></div><a href="https://www.google.com/maps/search/?api=1&query=1110+W+Flagler+St+Miami+FL+33130" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-black/40 px-6 py-4 text-[10px] font-black tracking-[.16em]">GET DIRECTIONS <ArrowRight size={16}/></a></div>
        <div className="relative h-[440px] overflow-hidden bg-[#151515]"><div className="absolute inset-[-20%] rotate-[-7deg] opacity-60" style={{backgroundImage:"linear-gradient(#303030 1px,transparent 1px),linear-gradient(90deg,#303030 1px,transparent 1px)",backgroundSize:"55px 55px"}}/><div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#c8a86b] bg-black text-[#c8a86b]"><MapPin size={28}/></div><div className="absolute left-8 top-8 font-serif text-lg text-white">THE MIAMI DRIP<small className="block font-sans text-[8px] tracking-[.18em] text-[#c8a86b]">1110 W FLAGLER ST</small></div><div className="absolute bottom-8 right-8 text-[8px] tracking-[.25em] text-white/30">LITTLE HAVANA</div></div>
      </section>

      <section className="relative overflow-hidden bg-[#c8a86b] px-[7vw] py-28 text-black"><div className="absolute -bottom-20 right-0 font-serif text-[35vw] leading-none text-black/10">DRIP</div><div className="relative max-w-4xl"><p className="text-[9px] font-bold tracking-[.3em] text-black/55">WHY MIAMI DRIP?</p><h2 className="mt-5 font-serif text-6xl leading-[.85] md:text-8xl">THE DETAILS<br/><span className="text-black/45">MAKE THE LOOK.</span></h2><div className="mt-16 border-t border-black/20">{[["01","PRECISION","Every detail matters."],["02","STYLE","Your look. Your identity."],["03","CULTURE","Authentic Miami energy."],["04","EXPERIENCE","More than a haircut."]].map(([n,t,d])=><div key={n} className="grid grid-cols-[45px_1fr_1fr] border-b border-black/20 py-5 text-xs"><b>{n}</b><strong className="tracking-[.15em]">{t}</strong><span className="text-black/50">{d}</span></div>)}</div></div></section>

      <section id="book" className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#080808] px-6 text-center"><div className="absolute inset-0 opacity-15" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",backgroundSize:"70px 70px"}}/><div className="relative max-w-4xl"><p className="text-[9px] font-bold tracking-[.3em] text-[#c8a86b]">READY WHEN YOU ARE</p><h2 className="mt-5 font-serif text-6xl leading-[.82] md:text-8xl">READY FOR YOUR<br/><i className="text-[#c8a86b]">NEXT DRIP?</i></h2><p className="mx-auto my-7 max-w-lg text-sm leading-7 text-white/40">Step into The Miami Drip Barbershop and leave with a look that speaks for itself.</p><a href="tel:+19544409318" className="inline-flex items-center gap-3 bg-[#f5f1e8] px-6 py-4 text-[10px] font-black tracking-[.16em] text-black"><CalendarDays size={16}/> BOOK YOUR APPOINTMENT</a></div></section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-[6vw] pb-7 pt-24">
      <div className="relative mb-14 grid gap-4 border-y border-white/10 py-7 md:grid-cols-3">
        <div className="flex items-center gap-4"><Scissors className="text-[#c8a86b]" size={20}/><div><b className="text-[9px] tracking-[.2em]">PRECISION CUTS</b><p className="mt-1 text-[9px] text-white/30">Built around your style.</p></div></div>
        <div className="flex items-center gap-4"><MapPin className="text-[#c8a86b]" size={20}/><div><b className="text-[9px] tracking-[.2em]">LITTLE HAVANA</b><p className="mt-1 text-[9px] text-white/30">1110 W Flagler St, Miami.</p></div></div>
        <div className="flex items-center gap-4"><CalendarDays className="text-[#c8a86b]" size={20}/><div><b className="text-[9px] tracking-[.2em]">BOOK YOUR DRIP</b><p className="mt-1 text-[9px] text-white/30">Call +1 (954) 440-9318.</p></div></div>
      </div>
<div className="pointer-events-none absolute -bottom-16 right-0 font-serif text-[30vw] leading-none text-white/[.025]">DRIP</div><div className="relative grid gap-12 pb-20 md:grid-cols-[2fr_1fr_1fr_1.3fr]">
        <div><a href="#home" className="flex flex-col leading-[.8] tracking-[.18em]"><span className="text-[8px] font-bold">THE MIAMI</span><b className="font-serif text-4xl tracking-normal">DRIP</b><span className="text-[7px] font-bold">BARBERSHOP</span></a><p className="mt-7 font-serif text-xl text-white/40">More Than a Cut.<br/>It's a Culture.</p><a href="https://www.instagram.com/Rigo_barber89/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[10px] tracking-[.12em] text-white/50"><Instagram size={17}/> @Rigo_barber89</a></div>
        <div><h4 className="mb-5 text-[9px] font-bold tracking-[.25em] text-[#c8a86b]">EXPLORE</h4>{nav.map(x=><a key={x} href={"#" + x.toLowerCase()} className="block py-1.5 text-[10px] text-white/40 hover:text-white">{x}</a>)}</div>
        <div><h4 className="mb-5 text-[9px] font-bold tracking-[.25em] text-[#c8a86b]">SERVICES</h4>{services.map(x=><a key={x[0]} href="#services" className="block py-1.5 text-[10px] text-white/40">{x[1]}</a>)}</div>
        <div><h4 className="mb-5 text-[9px] font-bold tracking-[.25em] text-[#c8a86b]">VISIT US</h4><p className="text-[11px] leading-6 text-white/40">1110 W Flagler St<br/>Miami, FL 33130<br/>Little Havana</p><a href="tel:+19544409318" className="mt-5 block text-[11px] text-[#c8a86b]">+1 (954) 440-9318</a><p className="mt-5 text-[9px] leading-6 tracking-[.12em] text-white/30">MON — SAT<br/>9AM — 10PM<br/><br/>SUNDAY<br/>9AM — 8PM</p></div>
      </div><div className="relative flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[7px] tracking-[.18em] text-white/25 md:flex-row"><span>© 2024–2026 THE MIAMI DRIP BARBERSHOP</span><span>PRIVACY • TERMS • ACCESSIBILITY</span><span>MADE FOR THE CULTURE OF MIAMI.</span></div></footer>
    </div>
  );
}
