"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const { t, toggleLang, isAr } = useLang();
  const [scrolled, setScrolled]   = useState(false);
  const [activeId, setActiveId]   = useState("hero");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 110) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-4 md:px-10 h-[68px] transition-all duration-300 ${
          scrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <img
  src="/logo-png.png"
  alt="Kayan Avenue Logo"
  className="w-14 h-14 flex-shrink-0 object-contain"
/>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="text-gold-gradient font-playfair text-[20px] font-semibold tracking-[3px]"
            >
              KAYAN
            </span>
            <span className="ltr:ml-[-11] rtl:mr-[-11] text-[10px] tracking-[4px] font-medium uppercase"
              style={{ color: "rgba(201,168,76,0.72)" }}>
              — AVENUE —
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative block px-3.5 py-2 text-[13px] font-medium rounded-md transition-all duration-200 no-underline ${
                  activeId === link.href.replace("#", "")
                    ? "text-[var(--gold)]"
                    : "text-[var(--text-light)] hover:text-[var(--gold)]"
                }`}
              >
                {t(link.en, link.ar)}
                {activeId === link.href.replace("#", "") && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: "var(--gold-gradient)" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12.5px] md:text-[15px] font-semibold transition-all duration-200 cursor-pointer"
            style={{
              color: "var(--gold)",
              border: "1px solid var(--border-gold)",
              background: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <Globe size={13} />
            <span>{isAr ? "EN" : "AR"}</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg transition-all duration-200 cursor-pointer"
            style={{ border: "1px solid var(--border-gold)", background: "transparent" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(201,168,76,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            aria-label="Menu"
          >
            <span
              className="block h-[1.5px] rounded-sm transition-all duration-300"
              style={{
                width: menuOpen ? "18px" : "18px",
                background: "var(--gold)",
                transform: menuOpen ? "rotate(45deg) translate(3px, 4.5px)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] rounded-sm transition-all duration-300"
              style={{
                width: menuOpen ? "18px" : "12px",
                background: "var(--gold)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[1.5px] rounded-sm transition-all duration-300"
              style={{
                width: "18px",
                background: "var(--gold)",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
  <div className="mobile-menu open">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="px-5 py-4 text-base font-semibold no-underline rounded-xl transition-all duration-200"
            style={{
              color: "var(--text-light)",
              border: "1px solid var(--border-light)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--border-gold)";
              e.currentTarget.style.background = "rgba(201,168,76,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-light)";
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t(link.en, link.ar)}
          </a>
        ))}
      </div>
      )}
    </>
  );
}
