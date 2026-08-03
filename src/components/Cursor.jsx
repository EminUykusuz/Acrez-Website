import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Sadece masaüstü cihazlarda GSAP animasyonunu çalıştır
    if (window.innerWidth < 768) return; 

    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      // "hidden md:flex" ekleyerek mobilde tamamen devre dışı bıraktık
      className={`hidden md:flex fixed top-0 left-0 z-[9999] pointer-events-none items-center justify-center transition-all duration-300 ease-out
                  ${isHovering 
                    ? 'w-12 h-12 bg-acrez-accent/20 border-acrez-accent mix-blend-normal' 
                    : 'w-8 h-8 border-white mix-blend-difference'
                  } border rounded-full`}
    >
      <div className={`rounded-full transition-all duration-300 ${isHovering ? 'bg-acrez-accent w-2 h-2' : 'bg-white w-1.5 h-1.5'}`}></div>
    </div>
  );
}