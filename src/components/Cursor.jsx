import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseOver = (e) => {
      // Eğer bir link veya buton üzerindeyse state'i true yap
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
      // isHovering true olduğunda blend modunu normal'e çekiyoruz, rengi yeşil yapıyoruz
      className={`fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center transition-all duration-300 ease-out
                  ${isHovering 
                    ? 'w-12 h-12 bg-acrez-accent/20 border-acrez-accent mix-blend-normal' 
                    : 'w-8 h-8 border-white mix-blend-difference'
                  } border rounded-full`}
    >
      <div className={`rounded-full transition-all duration-300 ${isHovering ? 'bg-acrez-accent w-2 h-2' : 'bg-white w-1.5 h-1.5'}`}></div>
    </div>
  );
}