import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  
  // Sözlükten verileri çekiyoruz
  const servicesData = t('services') || { items: [] };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Kartların aşağıdan yukarı sırayla havalı bir şekilde gelmesi
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2, // Kartlar arası 0.2 saniye gecikme
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%", // Sayfanın %75'ine gelince başlar
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="w-full bg-[#040f09] text-white py-24 md:py-32 relative overflow-hidden">
      
      {/* Arka plandaki çok hafif yeşil neon parlama */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-acrez-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        
        {/* BAŞLIK VE AÇIKLAMA (ÜST KISIM) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-acrez-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm">
              {t('nav.services') || "Services"}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 leading-tight">
              {servicesData.title}
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-md">
            {servicesData.subtitle}
          </p>
        </div>

        {/* HİZMET KARTLARI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.items?.map((item, i) => (
            <div 
              key={i} 
              className="service-card group bg-[#0a0f0c] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-acrez-accent/30 hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
            >
              {/* Kart içi dekoratif numara (01, 02, 03) */}
              <div className="absolute -top-6 -right-2 text-[8rem] font-black text-white/[0.02] group-hover:text-acrez-accent/5 transition-colors duration-500 pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-acrez-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Sol alttan beliren ok efekti */}
              <div className="relative z-10 mt-8 overflow-hidden h-6">
                <svg className="w-6 h-6 text-acrez-accent transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}