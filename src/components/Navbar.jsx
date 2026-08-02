import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  const handleScroll = (id) => {
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
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-12 py-4 md:py-6">
      <div className="absolute inset-0 bg-[#040f09]/80 backdrop-blur-xl border-b border-white/10 z-0"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between">
        
        {/* LOGO: <Link> yerine <a> kullanıldı */}
        <a href="/" className="flex items-center ">
          <img src={logo} alt="Acrez" className="h-8 w-auto sm:h-10" />
        </a>

        {/* LİNKLER */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-sm md:flex">
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
          
          {/* ABOUT: <Link> yerine <a> kullanıldı */}
          <a
            href="/about"
            className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
          >
            {t("nav.about")}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-sm md:flex gap-2">
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

          <a
            href="/contact"
            className="rounded-full border border-acrez-accent/50 bg-transparent px-6 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-acrez-accent transition-all duration-300 hover:bg-acrez-accent hover:text-[#040f09] hover:shadow-[0_0_20px_rgba(67,196,110,0.4)] sm:px-8"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </nav>
  );
}