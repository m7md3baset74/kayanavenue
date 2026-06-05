"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import SectionEyebrow from "./SectionEyebrow";

const PARTNERS = [
  { name: "DAMAC",            logo: "/partners/damac.jpg" },
  { name: "EMAAR",            logo: "/partners/emaar.jpg" },
  { name: "SOBHA",            logo: "/partners/sobha.jpg" },
  { name: "BINGHATTI",        logo: "/partners/binghatti.jpg" },
  { name: "DEYAAR",           logo: "/partners/deyaar.jpg" },
  { name: "OMNIYAT",          logo: "/partners/omniyat.jpg" },
  { name: "NAKHEEL",          logo: "/partners/nakheel.jpg" },
  { name: "DANUBE",           logo: "/partners/DanubeB.png" },
  { name: "MAJID AL FUTTAIM", logo: "/partners/futtaim.jpg" },
  { name: "MERAAS",           logo: "/partners/meraas.jpg" },
];

const doubled = [...PARTNERS, ...PARTNERS];

export default function Partners() {
  const { t } = useLang();

  return (
    <section
      id="partners"
      className="py-0 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Header - يتأثر بالـ RTL عادي */}
      <div className="text-center px-5 sm:px-10 mb-2">
        <SectionEyebrow label={t("Our Partners", "شركاؤنا")} center />
        <h2
          className="font-playfair font-semibold leading-[1.28] mt-2"
          style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: "#1a1a2e" }}
        >
          {t("Our Channel ", "شركاؤنا من ")}
          <span style={{ fontStyle: "italic" }}>
            {t("Partners", "المطورين العقاريين")}
          </span>
        </h2>
      </div>

      {/* Ticker - معزول تماماً عن RTL */}
      <div dir="ltr" style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            zIndex: 10,
            width: "clamp(32px, 6vw, 96px)",
            background: "linear-gradient(to right, #FFFFFF, transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0 0 0 auto",
            zIndex: 10,
            width: "clamp(32px, 6vw, 96px)",
            background: "linear-gradient(to left, #FFFFFF, transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Track */}
        <div className="partners-track">
          {doubled.map((partner, i) => (
            <div
              key={i}
              style={{
                minWidth: 180,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={220}
                className="object-contain"
                style={{
                  height: 220,
                  width: "auto",
                  maxWidth: 220,
                  filter: "grayscale(100%) opacity(0.75)",
                  transition: "filter 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.filter = "grayscale(0%) opacity(1)";
                  el.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.filter = "grayscale(100%) opacity(0.75)";
                  el.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}