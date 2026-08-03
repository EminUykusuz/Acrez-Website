import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessAndTestimonials() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  
  const proc = t('process') || { steps: [] };
  const test = t('testimonials') || { cards: [] };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        ".testimo-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".testimo-container",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="w-full bg-[#040f09] text-white pt-16 md:pt-20 pb-24 md:pb-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* ÇALIŞMA SÜRECİ BÖLÜMÜ */}
        <div className="process-container mb-24 md:mb-32">
          <div className="mb-12 md:mb-16">
            <span className="text-acrez-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm">{proc.label}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 md:mt-4">
              {proc.titlePrimary} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">{proc.titleHighlight}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6 relative">
            
            {/* DÜZELTİLEN KISIM: w-full yerine w-[80%] yazıldı. Artık çizgi 5. adımda duracak! */}
            <div className="hidden xl:block absolute top-8 left-8 w-[calc(80%+1.5rem)] h-[1px] bg-white/10 z-0"></div>
            
            {proc.steps?.map((step) => (
              <div key={step.id} className="process-step relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0f0c] border border-white/10 flex items-center justify-center text-lg md:text-xl font-black text-acrez-accent mb-5 md:mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] mx-auto md:mx-0">
                  {step.id}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed md:pr-4 text-center md:text-left">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MÜŞTERİ YORUMLARI BÖLÜMÜ */}
        <div className="testimo-container">
          <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
            <span className="text-acrez-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm">{test.label}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 md:mt-4">
              {test.titlePrimary} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">{test.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {test.cards?.map((testimo, i) => (
              <div key={i} className="testimo-card bg-[#0a0f0c] border border-white/5 p-8 md:p-10 rounded-2xl relative group hover:border-acrez-accent/20 transition-colors duration-500">
                <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10 group-hover:text-acrez-accent transition-colors duration-300">
                  <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 text-base md:text-lg lg:text-xl font-light italic leading-relaxed mb-6 md:mb-8 relative z-10">
                  "{testimo.quote}"
                </p>
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-base md:text-lg">{testimo.name}</h4>
                  <p className="text-acrez-accent text-xs md:text-sm tracking-wide mt-1">{testimo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}