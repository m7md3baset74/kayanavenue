"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Bath, BedDouble, Maximize2, Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { PROPERTIES } from "@/data/content";
import SectionEyebrow from "./SectionEyebrow";

export default function Properties() {
  const { t } = useLang();
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [animating, setAnimating] = useState(false);

  const handleShift = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 350);
  };

  const toggleLike = (id: number) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section
      id="properties"
      className="md:pt-28 pt-38 pb-20 px-5 sm:px-10"
      style={{ background: "#F8F7F4" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
          <div>
            <SectionEyebrow label={t("Featured Properties", "عقارات مختارة")} />
            <h2
              className="font-playfair font-bold leading-[1.2] mt-2"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "#1a1a2e" }}
            >
              {t("Best Choices For You", "أفضل الخيارات من أجلك")}{" "}
              {/* <span style={{ fontStyle: "italic" }}>{t("For You", "من أجلك")}</span> */}
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="flex gap-2.5 mt-1 md:flex hidden">
            {[
              <ChevronLeft key="l" size={18} strokeWidth={2} />,
              <ChevronRight key="r" size={18} strokeWidth={2} />,
            ].map((icon, i) => (
              <button
                key={i}
                onClick={handleShift}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                style={{
                  border: "1.5px solid #d4b896",
                  background: "#fff",
                  color: "#888",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#d4b896";
                  e.currentTarget.style.color = "#888";
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "none",
          }}
        >
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="reveal"
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.13)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 16px rgba(0,0,0,0.07)";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 240 }}>
                <img
                  src={prop.image}
                  alt={t(prop.title.en, prop.title.ar)}
                  className=" hover:scale-105 transition-transform duration-500"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />

                {/* Badge — left side ribbon style */}
                <span
  className="absolute text-[10px] font-bold uppercase"
  style={{
    top: 18,
    insetInlineStart: 0,
    padding: "6px 14px",
    letterSpacing: "0.12em",
    borderStartStartRadius: 0,
    borderStartEndRadius: 8,
    borderEndStartRadius: 0,
    borderEndEndRadius: 8,
    background:
      prop.badgeType === "rent"
        ? "#1a6b3a"
        : "var(--gold-gradient)",
    color:
      prop.badgeType === "rent" ? "#fff" : "#1a1a2e",
  }}
>
  {t(prop.badge.en, prop.badge.ar)}
</span>

                {/* Heart button */}
                <button
                  onClick={() => toggleLike(prop.id)}
                  className="absolute flex items-center justify-center transition-all duration-200 cursor-pointer"
                  style={{
                    top: 14,
                    insetInlineEnd: 14,
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.92)",
                    border: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  <Heart
                    size={15}
                    strokeWidth={2}
                    style={{
                      stroke: liked[prop.id] ? "#E53935" : "#aaa",
                      fill: liked[prop.id] ? "#E53935" : "none",
                    }}
                  />
                </button>
              </div>

              {/* Body */}
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
                  className="flex items-center gap-1.5 mb-4 text-[12px] font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  <MapPin size={12} strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span>{t(prop.location.en, prop.location.ar)}</span>
                </div>

                {/* Specs row + divider */}
                <div
                  className="flex gap-5 flex-wrap pt-4 mb-4"
                  style={{ borderTop: "1px solid #ede8e0" }}
                >
                  {[
                    { icon: <BedDouble size={13} strokeWidth={1.8} />, val: `${prop.rooms} ${t("Beds", "غرف")}` },
                    { icon: <Bath size={13} strokeWidth={1.8} />, val: `${prop.baths} ${t("Baths", "حمامات")}` },
                    { icon: <Maximize2 size={13} strokeWidth={1.8} />, val: prop.area },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-[12px]"
                      style={{ color: "#888" }}
                    >
                      <span style={{ color: "var(--gold)" }}>{s.icon}</span>
                      <span>{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <div
                      className="font-playfair font-bold leading-none"
                      style={{ fontSize: 20, color: "var(--gold)" }}
                    >
                      {prop.price}
                    </div>
                    <div className="text-[11px] mt-1" style={{ color: "#aaa" }}>
                      {t(prop.priceLabel.en, prop.priceLabel.ar)}
                    </div>
                  </div>

                  <button
                    className="font-bold uppercase tracking-wider cursor-pointer transition-all duration-200"
                    style={{
                      background: "var(--gold-gradient)",
                      color: "#1a1a2e",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 18px",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    }}
                  >
                    {t("Contact For Details", "تواصل للتفاصيل")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}