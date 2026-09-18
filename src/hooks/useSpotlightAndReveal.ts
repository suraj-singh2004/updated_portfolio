import { useEffect } from "react";

export function useSpotlightAndReveal() {
  useEffect(() => {
    // Reveal all elements currently in or near viewport immediately
    const checkVisibility = () => {
      const reveals = document.querySelectorAll("[data-reveal]");
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("is-visible");
        }
      });
    };

    checkVisibility();

    // 1. Intersection Observer for [data-reveal]
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const reveals = document.querySelectorAll("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 50px 0px",
        }
      );

      reveals.forEach((el) => observer.observe(el));

      // Safety fallback: reveal everything after 800ms so nothing stays hidden in iframes
      const timer = setTimeout(() => {
        document.querySelectorAll("[data-reveal]").forEach((el) => {
          el.classList.add("is-visible");
        });
      }, 800);

      // 2. Pointer tracking for .spotlight cards
      const handleMouseMove = (e: MouseEvent) => {
        const cards = document.querySelectorAll(".spotlight");
        cards.forEach((card) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          (card as HTMLElement).style.setProperty("--mx", `${x}px`);
          (card as HTMLElement).style.setProperty("--my", `${y}px`);
        });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("scroll", checkVisibility, { passive: true });

      return () => {
        observer.disconnect();
        clearTimeout(timer);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", checkVisibility);
      };
    } else {
      // Fallback for environments without IntersectionObserver
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
    }
  }, []);
}
