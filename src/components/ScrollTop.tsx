"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useLang } from "@/context/LanguageContext";

const WHATSAPP = "971564414679";

export default function ScrollTop() {
  const { isAr } = useLang();
  const [hovered, setHovered] = useState(false);

  const waMessage = encodeURIComponent(
    isAr
      ? "مرحباً، أود الاستفسار عن عقارات Kayan Avenue"
      : "Hello, I'd like to inquire about Kayan Avenue Properties"
  );

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        insetInlineEnd: 28,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexDirection: isAr ? "row" : "row-reverse",
      }}
    >

      {/* Button */}
        <a
      
        href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: "relative", display: "block", textDecoration: "none" }}
        aria-label="WhatsApp"
      >
        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid #c9a96e",
            pointerEvents: "none",
          }}
        />

        {/* Second pulse — offset timing */}
        <motion.span
          animate={{ scale: [1, 1.55], opacity: [0.25, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid #c9a96e",
            pointerEvents: "none",
          }}
        />

        {/* Main button */}
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(26,26,46,0.70)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(201,169,110,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          <SiWhatsapp size={22} color="#25D366" />
        </motion.div>
      </a>
    </div>
  );
}