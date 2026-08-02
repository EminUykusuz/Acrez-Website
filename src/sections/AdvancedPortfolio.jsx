import { useEffect, useRef } from "react";
// Klasör adın 'context' ise böyle kalsın, 'contexts' ise sonuna 's' ekle.
import { useLanguage } from '../context/LanguageContext'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Masaüstü Görselleri
import eliteTravelImg from "./images/elitetravel.nl.png";
import rsnPartsImg from "./images/rsnparts.com.png";
import sehirImg from "./images/sehirofficial.nl.png";
import livitonImg from "./images/liviton.nl.png";

// Mobil Görselleri
import eliteTravelPhone from "./images/Phone-elitetravel.nl.png";
import rsnPartsPhone from "./images/Phone-rsnparts.com.png";
import sehirPhone from "./images/Phone-sehirofficial.nl.png";
import livitonPhone from "./images/Phone-liviton.nl.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Elite Travel",
    category: "Toerismeplatform",
    desc: "Een premium toerismeplatform dat reisstandaarden herdefinieert met op maat gemaakte routes en VIP-diensten.",
    link: "https://www.elitetravel.com", 
    bg: "#01532b", 
    image: eliteTravelImg,
    mobileImage: eliteTravelPhone
  },
  {
    id: 2,
    title: "RSN Parts",
    category: "B2B E-commerce",
    desc: "Een high-performance, betrouwbare verkoopoplossing voor laadstations voor elektrische voertuigen.",
    link: "https://www.rsnparts.com",
    bg: "#040f09", 
    image: rsnPartsImg,
    mobileImage: rsnPartsPhone
  },
  {
    id: 3,
    title: "Sehir Official",
    category: "Zakelijke identiteit",
    desc: "Een moderne etalage die de digitale visie van een merk in de autoverzorgingssector weerspiegelt.",
    link: "https://www.sehirofficial.com",
    bg: "#002912", 
    image: sehirImg,
    mobileImage: sehirPhone
  },
  {
    id: 4,
    title: "Liviton",
    category: "Cosmetica & Beauty",
    desc: "Een frisse, schone en gebruikersgerichte e-commerce-ervaring die cosmetische producten in de schijnwerpers zet.",
    link: "", 
    bg: "#040f09", 
    image: livitonImg,
    mobileImage: livitonPhone
  }
];

export default function AdvancedPortfolio() {
  const containerRef = useRef(null);
  
  // ÇÖKME ÖNLEYİCİ: Eğer useLanguage bir nedenden null gelirse siteyi patlatma!
  const languageContext = useLanguage();
  const t = languageContext?.t || ((key) => key);
  
  const portfolioData = typeof t('portfolio') === 'object' ? t('portfolio') : {};

  useEffect(() => {
    // Referans henüz yüklenmediyse GSAP'i başlatma
    if (!containerRef.current) return;

    let ctx;

    // Sayfa geçiş (PageTransition) animasyonunun bitmesini bekliyoruz (800ms)
    // Böylece GSAP ölçümleri sayfa sabitken, kusursuzca yapacak.
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".portfolio-panel");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * (projects.length - 1)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true, 
          }
        });

        panels.forEach((panel, i) => {
          if (i === panels.length - 1) return; 

          const content = panel.querySelector(".content-section");
          const imageGroup = panel.querySelector(".image-group");
          const moveX = i % 2 === 0 ? -50 : 50;

          tl.to(content, { x: moveX, opacity: 0, duration: 1 }, `panel-${i}`)
            .to(imageGroup, { scale: 0.8, opacity: 0, duration: 1 }, `panel-${i}`)
            .to(panel, { 
                yPercent: -100, // Paneli pürüzsüzce yukarı kaydırıp yok eder
                duration: 1, 
                ease: "none" 
            }, `panel-${i}`);
        });

        // Her şey kurulduktan sonra GSAP'e "ölçüleri yeniden hesapla" emri veriyoruz
        ScrollTrigger.refresh();

      }, containerRef);
    }, 800);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="portfolio"
      className="relative w-full h-screen overflow-hidden bg-[#040f09]"
    >
      {projects.map((project, i) => {
        // Güvenli veri çekimi (Hata vermesini engeller)
        const localized = portfolioData?.projects?.[i] || {};
        const title = localized.title || project.title;
        const category = localized.category || project.category;
        const desc = localized.desc || project.desc;
        const viewBtnText = portfolioData?.viewProject || "Bekijk Project";

        return (
        <div
          key={project.id}
          className="portfolio-panel absolute top-0 left-0 flex items-center justify-center w-full h-screen overflow-hidden"
          style={{ 
            backgroundColor: project.bg,
            zIndex: projects.length - i 
          }}
        >
          <div className="max-w-[90rem] w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
            
            {/* METİN BÖLÜMÜ */}
            <div className={`content-section flex flex-col items-start text-left ${i % 2 !== 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-acrez-accent/10 border border-acrez-accent/20 text-acrez-accent text-sm tracking-[0.15em] uppercase font-bold mb-6">
                {category}
              </span>
              
              <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-none">
                {title}
              </h2>

              <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-md">
                {desc}
              </p>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wide hover:bg-acrez-accent transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(67,196,110,0.5)]"
                >
                  {viewBtnText}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>

            {/* MOCKUP KOMPOZİSYONU */}
            <div className={`image-group relative w-full h-[60vh] flex items-center justify-center ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              
              <div className="absolute inset-0 bg-gradient-to-r from-acrez-dark to-acrez-accent opacity-20 blur-3xl rounded-full pointer-events-none"></div>
              
              {/* MASAÜSTÜ MOCKUP */}
              <div className="relative w-[90%] md:w-[85%] aspect-[16/10] bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col z-10">
                <div className="h-8 md:h-10 w-full bg-[#1c1c1e] flex items-center px-4 gap-2 shrink-0 z-20">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="relative w-full h-full bg-[#0a0a0a]">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Desktop`} 
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* MOBİL MOCKUP */}
              <div 
                className={`absolute -bottom-4 md:-bottom-12 ${i % 2 === 0 ? '-right-2 md:-right-12' : '-left-2 md:-left-12'} 
                            w-[32%] md:w-[26%] aspect-[9/19] bg-[#0a0a0a] rounded-3xl md:rounded-4xl overflow-hidden 
                            border-[6px] md:border-[8px] border-[#161616] 
                            shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20`}
              >
                <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 h-3 md:h-4 w-[30%] bg-[#050505] rounded-full z-30 pointer-events-none border border-white/5 shadow-inner"></div>
                
                <div className="relative w-full h-full">
                  <img 
                    src={project.mobileImage} 
                    alt={`${project.title} Mobile`} 
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
        );
      })}
    </section>
  );
}