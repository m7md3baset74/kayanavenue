"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Scroll-to-top visibility
    const onScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal for .reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scroll-top fixed bottom-7 z-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border-none ${visible ? "visible" : ""}`}
      style={{
        insetInlineEnd: "28px",
        background: "var(--gold-gradient)",
        boxShadow: "0 4px 18px rgba(201,168,76,0.4)",
      }}
      aria-label="Back to top"
    >
      <ChevronUp size={18} strokeWidth={2.5} color="#0D0D14" />
    </button>
  );
}
