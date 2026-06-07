"use client";

import { useLang } from "@/context/LanguageContext";
import { ChevronLeft, Play } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      dir="ltr"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ height: "100vh", minHeight: "680px" }}
    >
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div
        className="relative z-10 pb-55 sm:pb-36 md:pb-[110px] px-5 pt-16 
    sm:px-8
    md:pe-12
    md:ps-[72px]
    max-w-[680px]"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5 fade-up-1">
          <span
            className="block w-9 h-px flex-shrink-0"
            style={{ background: "var(--gold-gradient)" }}
          />
          <span
            className="text-[10.5px] font-semibold tracking-[4px] uppercase"
            style={{ color: "var(--gold)" }}
          >
            {t("KAYAN AVENUE PROPERTIES", "كيان أفينيو العقارية")}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-playfair font-semibold leading-[1.22] mb-3 fade-up-2"
          style={{
            fontSize: "clamp(30px, 4.2vw, 52px)",
            color: "var(--white)",
          }}
        >
          {t("Find the right property", "نختار الموقع الأفضل")}
          <br />
          <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>
            {t("for the lifestyle you deserve.", "لتعيش الحياة التي تستحقها")}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[14.5px] leading-[1.85] mb-9 fade-up-3"
          style={{ color: "var(--text-muted)", maxWidth: "460px" }}
        >
          {t(
            "Whether you're searching for your dream home or your next investment, we provide selected opportunities built on expertise and trust.",
            " سواء كنت تبحث عن منزل أحلامك أو عن استثمارك القادم، فإننا نقدم فرصاً مختارة بعناية ومبنية على الخبرة والثقة.",
          )}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap fade-up-4">
          <a href="#properties" className="btn-primary">
            <span>{t("Explore Properties", "استكشف العقارات")}</span>
            <ChevronLeft size={15} strokeWidth={2.5} />
          </a>
          <button className="btn-secondary">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <Play size={9} fill="white" strokeWidth={0} />
            </span>
            <span>{t("Watch Video", "شاهد الفيديو")}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
