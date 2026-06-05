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

export default function Partners() {
  const { t } = useLang();
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="py-0 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Header */}
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

      {/* Ticker */}
      <div className="overflow-hidden relative">
        {/* fade edges */}
        <div
          className="absolute inset-y-0 start-0 z-10 w-8 md:w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #FFFFFF 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 end-0 z-10 w-8 md:w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #FFFFFF 0%, transparent 100%)",
          }}
        />

        <div className="partners-track flex">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 transition-all duration-300 cursor-default group"
              style={{ minWidth: "180px" }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={220}
                className="object-contain transition-all duration-300"
                style={{
                  height: 220,
                  width: "auto",
                  maxWidth: 220,
                  filter: "grayscale(100%) opacity(0.75)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "grayscale(0%) opacity(1)";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "grayscale(100%) opacity(0.75)";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}