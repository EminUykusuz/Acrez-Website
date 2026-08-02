import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const heroRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen bg-[#040f09] text-white flex flex-col justify-between overflow-hidden font-sans"
    >
      {/* ARKA PLAN GÖRSELİ VE KARARTMA (OVERLAY) */}
      <div className="absolute inset-0 z-0">
        {/* Buradaki src kısmına kendi arka plan fotoğrafını veya videonu koyabilirsin. 
            Şimdilik kaliteli bir ofis/çalışma ortamı görseli ekledim. */}
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
          alt="Acrez Workspace" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Yazıların okunabilirliğini artırmak için soldan sağa kararan degrade */}
        <div className="absolute inset-0 bg-linear-to-r from-[#040f09] via-[#040f09]/80 to-transparent"></div>
      </div>

      {/* ÜST MENÜ (NAVBAR) - Görseldeki gibi sade ve şık */}
      <header className="hero-animate relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="text-2xl font-black tracking-widest text-white">
          ACREZ<span className="text-acrez-accent">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="transition-colors hover:text-white">{t("nav.services")}</a>
          <a href="#portfolio" className="transition-colors hover:text-white">{t("nav.projects")}</a>
          <a href="/about" className="transition-colors hover:text-white">{t("nav.about")}</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors duration-300 hover:bg-white hover:text-black md:block">
            {t("nav.contact")}
          </a>
          <a href="mailto:iletisim@acrez.com" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-black">
            {t("hero.email")}
          </a>
        </div>
      </header>

      {/* ANA İÇERİK KISMI */}
      <main className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pb-20">
        
        <h1 className="hero-animate text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight max-w-3xl">
          {t("hero.pre")} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
            {t("hero.highlight")}
          </span>
        </h1>
        
        <p className="hero-animate mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
          {t("hero.subtitle")}
        </p>

        {/* CAM EFEKTLİ (GLASSMORPHISM) ETİKETLER */}
        <div className="hero-animate mt-10 flex flex-wrap gap-3 max-w-2xl">
          {t("hero.tags").map((tag, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm md:text-base font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-default"
            >
              <svg className="w-4 h-4 text-acrez-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {tag}
            </div>
          ))}
        </div>

        {/* ANA AKSİYON BUTONU (CTA) */}
        <div className="hero-animate mt-12 flex items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-acrez-accent px-10 py-4 text-lg font-semibold text-black transition-colors duration-300 hover:bg-[#4b35e6] hover:text-white shadow-[0_10px_30px_rgba(67,196,110,0.25)]"
          >
            {t("hero.cta")}
          </a>
          <span className="text-xs text-gray-400 max-w-[150px] leading-5">
            {t("hero.note1")}<br /> {t("hero.note2")}<br /> {t("hero.note3")}
          </span>
        </div>
      </main>

      {/* ALT KISIM: GÜVENİLEN MARKALAR (LOGOLAR) */}
      <footer className="hero-animate relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-10">
        <p className="text-sm text-gray-400 mb-5 font-medium tracking-wide">
          Merken die we hebben ontwikkeld:
        </p>
        {/* Logoları temsil eden metinler (İleride kendi SVG logolarını ekleyebilirsin) */}
        <div className="flex flex-wrap items-center gap-8 md:gap-16 opacity-60 grayscale">
          <span className="font-black text-xl md:text-2xl tracking-tighter uppercase">Elite Travel</span>
          <span className="font-bold text-xl md:text-2xl tracking-wide uppercase">RSN Parts</span>
          <span className="font-serif text-xl md:text-2xl italic tracking-widest uppercase">Sehir</span>
          <span className="font-bold text-xl md:text-2xl tracking-tight uppercase">Liviton</span>
        </div>
      </footer>
    </section>
  );
}