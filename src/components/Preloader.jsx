import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

export default function Preloader() {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const logoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Kullanıcının sitede daha önce bulunup bulunmadığını kontrol et
    const hasVisited = sessionStorage.getItem("acrez_visited");
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("acrez_visited", "true");
        setIsLoaded(true);
      }
    });

    if (!hasVisited) {
      // --- İLK GİRİŞ ŞOVU (Yavaş ve Havalı) ---
      
      // Sayaç objesi (0'dan 100'e saydırmak için)
      const counter = { val: 0 };

      tl.to(counter, {
        val: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(counter.val) + "%";
          }
        }
      }, "start")
      .to(barRef.current, {
        width: "100%",
        duration: 1.8,
        ease: "power2.inOut"
      }, "start")
      .to([counterRef.current, logoRef.current, barRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.in"
      }, "+=0.2")
      .to(containerRef.current, {
        yPercent: -100, // Tüm siyah ekranı yukarı doğru kaydırır
        duration: 1,
        ease: "power4.inOut"
      });

    } else {
      // --- SAYFALAR ARASI GEZİNME (Sadece hızlı bir perde açılışı) ---
      gsap.set([counterRef.current, barRef.current, logoRef.current], { display: "none" }); // Elementleri gizle
      
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.inOut"
      });
    }

  }, []);

  if (isLoaded) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040f09] text-white"
    >
      <div className="w-full max-w-sm px-8 md:px-0 flex flex-col items-center">
        
        {/* LOGO */}
        <img 
          ref={logoRef}
          src={logo} 
          alt="Acrez" 
          className="h-10 md:h-12 w-auto mb-16 opacity-80" 
        />
        
        {/* YÜZDE SAYACI */}
        <div className="w-full flex justify-between items-end mb-4 overflow-hidden">
          <span className="text-acrez-accent text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            Sistem Başlatılıyor
          </span>
          <span ref={counterRef} className="text-4xl md:text-5xl font-black text-white leading-none">
            0%
          </span>
        </div>
        
        {/* PROGRESS BAR (Dolum Çizgisi) */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full w-0 bg-acrez-accent shadow-[0_0_15px_rgba(67,196,110,0.8)]"></div>
        </div>
        
      </div>
    </div>
  );
}