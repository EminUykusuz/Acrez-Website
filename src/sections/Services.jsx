import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useLanguage();
  const services = t("services");

  useEffect(() => {
    const el = sectionRef.current;
    
    // Kartlar için ScrollTrigger animasyonu
    gsap.fromTo(
      cardsRef.current,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.95 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2, // Kartların 0.2 saniye arayla sırayla gelmesini sağlar
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%", // Bölüm ekranın %75'ine geldiğinde başla
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Aşağı inerken oynat, yukarı çıkarken geri al (tekrar edebilir)
        }
      }
    );

    // Component unmount olduğunda animasyonları temizle (Çok önemli!)
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 px-6 bg-acrez-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Acrez <span className="text-acrez-accent">expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {services.subtitle}
          </p>
        </div>
        
        {/* Glassmorphic Kart Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-acrez-surface backdrop-blur-md border border-acrez-light/20 p-8 rounded-2xl hover:bg-acrez-dark/40 hover:border-acrez-accent/50 hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-lg shadow-black/20"
            >
              <div className="w-14 h-14 rounded-xl bg-acrez-bg border border-acrez-light/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="w-4 h-4 bg-acrez-accent rounded-full shadow-[0_0_20px_rgba(67,196,110,0.8)] group-hover:shadow-[0_0_30px_rgba(67,196,110,1)] transition-shadow"></span>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}