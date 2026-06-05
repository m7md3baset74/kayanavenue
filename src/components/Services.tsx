"use client";

import { Home, Monitor, DollarSign, Box, Star, FileText } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SERVICES } from "@/data/content";
import SectionEyebrow from "./SectionEyebrow";

const ICONS: Record<string, React.ReactNode> = {
  home:          <Home       size={22} strokeWidth={1.5} />,
  monitor:       <Monitor    size={22} strokeWidth={1.5} />,
  "dollar-sign": <DollarSign size={22} strokeWidth={1.5} />,
  box:           <Box        size={22} strokeWidth={1.5} />,
  star:          <Star       size={22} strokeWidth={1.5} />,
  "file-text":   <FileText   size={22} strokeWidth={1.5} />,
};

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="py-16 px-5 sm:px-10"
      style={{ background: "#F8F7F4" }}
    >
      <div className="max-w-[960px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <SectionEyebrow label={t("Our Services", "خدماتنا")} center />
          <h2
            className="font-playfair font-semibold leading-[1.28] mt-2"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: "#1a1a2e" }}
          >
            {t("What We ", "ماذا ")}
            <span style={{ fontStyle: "italic" }}>{t("Offer", "نقدم لك")}</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="service-card reveal flex gap-4 items-start p-5 rounded-2xl transition-all duration-100"
              style={{
                background: "#fff",
                border: "1px solid #ede8e0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 6px 24px rgba(201,168,76,0.22)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--border-gold)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#ede8e0";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              <div className="icon-box flex-shrink-0" style={{ width: 46, height: 46 }}>
                {ICONS[svc.icon]}
              </div>
              <div>
                <h4
                  className="text-[13.5px] font-bold mb-1.5"
                  style={{ color: "#1a1a2e" }}
                >
                  {t(svc.title.en, svc.title.ar)}
                </h4>
                <p
                  className="text-[12px] leading-[1.65]"
                  style={{ color: "#666" }}
                >
                  {t(svc.description.en, svc.description.ar)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}