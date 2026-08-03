import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  const handleScroll = (id) => {
    setIsMenuOpen(false); // Linke tıklanınca mobil menüyü kapat
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 96, behavior: "smooth" });
        }
      }, 120);
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 96, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-12 py-4 md:py-6">
        <div className="absolute inset-0 bg-[#040f09]/80 backdrop-blur-xl border-b border-white/10 z-0"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between">
          
          {/* LOGO */}
          <a href="/" className="flex items-center z-50">
            <img src={logo} alt="Acrez" className="h-8 w-auto sm:h-10" />
          </a>

          {/* MASAÜSTÜ LİNKLERİ (Mobilde gizli) */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-sm">
            {[
              { name: t("nav.services"), id: "#services" },
              { name: t("nav.projects"), id: "#portfolio" },
              { name: t("nav.references"), id: "#testimonials" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="relative rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/about"
              className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {t("nav.about")}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* MASAÜSTÜ DİL SEÇİCİ */}
            <div className="hidden md:flex rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-sm gap-2">
              {['nl', 'en', 'de'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-3 py-2 text-sm font-semibold uppercase transition-colors duration-200 ${lang === code ? 'bg-acrez-accent text-black' : 'text-gray-300 hover:text-white'}`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* MASAÜSTÜ CONTACT BUTONU */}
            <a
              href="/contact"
              className="hidden md:inline-block rounded-full border border-acrez-accent/50 bg-transparent px-6 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-acrez-accent transition-all duration-300 hover:bg-acrez-accent hover:text-[#040f09] hover:shadow-[0_0_20px_rgba(67,196,110,0.4)]"
            >
              {t("nav.contact")}
            </a>

            {/* MOBİL HAMBURGER BUTONU */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 text-white hover:text-acrez-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBİL MENÜ OVERLAY (Tam Ekran) */}
      <div 
        className={`fixed inset-0 bg-[#040f09] z-[90] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center mt-10">
          {[
            { name: t("nav.services"), id: "#services" },
            { name: t("nav.projects"), id: "#portfolio" },
            { name: t("nav.references"), id: "#testimonials" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="text-2xl font-black uppercase tracking-[0.15em] text-gray-300 hover:text-acrez-accent transition-colors"
            >
              {item.name}
            </button>
          ))}
          
          <a
            href="/about"
            className="text-2xl font-black uppercase tracking-[0.15em] text-gray-300 hover:text-acrez-accent transition-colors"
          >
            {t("nav.about")}
          </a>

          <a
            href="/contact"
            className="text-2xl font-black uppercase tracking-[0.15em] text-acrez-accent hover:text-white transition-colors mt-4"
          >
            {t("nav.contact")}
          </a>

          {/* MOBİL DİL SEÇİCİ */}
          <div className="flex gap-4 mt-8 border-t border-white/10 pt-8 w-48 justify-center">
            {['nl', 'en', 'de'].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-lg font-bold uppercase transition-colors ${lang === code ? 'text-acrez-accent' : 'text-gray-500 hover:text-white'}`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}