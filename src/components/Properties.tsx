"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { PROPERTIES } from "@/data/content";
import SectionEyebrow from "./SectionEyebrow";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP = "971585860581";

function PropertyCard({ prop }: { prop: (typeof PROPERTIES)[0] }) {
  const { t, isAr } = useLang();
  const [imgIndex, setImgIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? prop.images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i === prop.images.length - 1 ? 0 : i + 1));
  };

  const waMessage = encodeURIComponent(
    isAr
      ? `مرحباً، أود الاستفسار عن مشروع ${prop.title.ar}`
      : `Hello, I'd like to inquire about ${prop.title.en}`,
  );

  const badgeColor =
    prop.badgeType === "ready"
      ? { background: "#1a6b3a", color: "#fff" }
      : { background: "var(--gold-gradient)", color: "#1a1a2e" };

  return (
    <div
      className="reveal"
      style={{
        background: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 40px rgba(0,0,0,0.13)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 20px rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      {/* ───── Image Area ───── */}
      <div className="relative overflow-hidden" style={{ height: 240 }}>
        <img
          src={prop.images[imgIndex]}
          alt={t(prop.title.en, prop.title.ar)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.6s ease",
          }}
        />

        {/* Dark gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Arrows — always visible */}
        {prop.images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.32)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.18)")
              }
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.32)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.18)")
              }
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>

            {/* Dot indicators */}
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 5,
                zIndex: 3,
              }}
            >
              {prop.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setImgIndex(idx);
                  }}
                  aria-label={`Image ${idx + 1}`}
                  style={{
                    width: idx === imgIndex ? 18 : 6,
                    height: 6,
                    borderRadius: 99,
                    background:
                      idx === imgIndex
                        ? "var(--gold, #c9a96e)"
                        : "rgba(255,255,255,0.55)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.25s ease, background 0.25s ease",
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Badge */}
        <span
          className="absolute text-[10px] font-bold uppercase"
          style={{
            top: 18,
            left: 0,
            padding: "6px 14px",
            letterSpacing: "0.12em",
            borderRadius: "0 8px 8px 0",
            zIndex: 3,
            ...badgeColor,
          }}
        >
          {t(prop.badge.en, prop.badge.ar)}
        </span>
      </div>

      {/* ───── Card Body ───── */}
      <div className="p-5 pb-6">
        {/* Title */}
        <h3
          className="font-playfair font-semibold leading-[1.35] mb-1.5"
          style={{ fontSize: 17, color: "#1a1a2e" }}
        >
          {t(prop.title.en, prop.title.ar)}
        </h3>

        {/* Location */}
        <div
          className="flex items-center gap-1.5 mb-3 text-[12px] font-medium"
          style={{ color: "var(--gold)" }}
        >
          <MapPin size={12} strokeWidth={2} style={{ flexShrink: 0 }} />
          <span>{t(prop.location.en, prop.location.ar)}</span>
        </div>

        {/* Unit types */}
        <p
          className="text-[12px] leading-[1.6] mb-4 pb-4"
          style={{ color: "#888", borderBottom: "1px solid #ede8e0" }}
        >
          {t(prop.unitTypes.en, prop.unitTypes.ar)}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="text-[10px] mb-0.5" style={{ color: "#aaa" }}>
              {t(prop.priceLabel.en, prop.priceLabel.ar)}
            </div>
            <div
              className="font-playfair font-bold leading-none"
              style={{ fontSize: 20, color: "var(--gold)" }}
            >
              {prop.price}
            </div>
          </div>

          {/* WhatsApp Button — dark luxury style */}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              background: "#F8F7F4",
              color: "#25D366",
              border: "1.2px solid #25D366",
              borderRadius: 5,
              padding: "9px 15px",
              fontSize: 10,
              letterSpacing: "0.1em",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#25D366";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#F8F7F4";
              el.style.color = "#25D366";
            }}
          >
            <SiWhatsapp size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  const { t } = useLang();

  return (
    <section
      id="properties"
      className="md:pt-28 pt-38 pb-20 px-5 sm:px-10"
      style={{ background: "#F8F7F4" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div className="mb-10">
          <SectionEyebrow label={t("Featured Properties", "عقارات مختارة")} />
          <h2
            className="font-playfair font-bold leading-[1.2] mt-2"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "#1a1a2e" }}
          >
            {t("Best Choices For You", "أفضل الخيارات من أجلك")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} prop={prop} />
          ))}
        </div>
      </div>
    </section>
  );
}
