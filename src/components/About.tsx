"use client";

import { ChevronLeft } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionEyebrow from "./SectionEyebrow";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-5 sm:px-10"
      style={{ background: "#FFFFFF" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[1200px] mx-auto">

        {/* Image */}
        <div
          className="relative rounded-2xl overflow-hidden w-full"
          style={{ height: "clamp(280px, 45vw, 500px)" }}
        >
          <img
            src="/assets/office-new.jpeg"
            alt="Kayan Avenue Office"
            className="w-full h-full object-cover"
          />
          {/* Overlay tint */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, transparent 60%)",
            }}
          />
          {/* Badge */}
          <div
            className="absolute bottom-5 end-5 z-10 text-center rounded-2xl px-5 py-3"
            style={{
              background: "var(--gold-gradient)",
              color: "#0D0D14",
              boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
            }}
          >
            <span className="text-[10px] font-semibold tracking-wide opacity-85 mt-0 block">
              {t("LED BY", "بقيادة")}
            </span>
            <span
              className="block font-bold leading-none font-playfair"
              style={{ fontSize: "clamp(20px, 3vw, 26px)" }}
            >
              +15
            </span>
            <span className="text-[10px] font-semibold tracking-wide opacity-85">
              {t("Years Experience", "سنوات خبرة")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="md:ps-2">
          <SectionEyebrow label={t("About Us", "عن الشركة")} />
          <h2
            className="font-playfair font-semibold leading-[1.25] mt-2 mb-4"
            style={{ fontSize: "clamp(24px, 3.2vw, 42px)", color: "#1a1a2e" }}
          >
            {t("Local Expertise..", "خبرة محلية..")}
            <br />
            <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>
              {t("Global Vision", "رؤية عالمية")}
            </span>
          </h2>

          <div className="gold-sep" />

          <p
            className="text-[14px] leading-[1.95] mb-4"
            style={{ color: "#666" }}
          >
            {t(
              "Kayan Avenue Properties is a luxury real estate brokerage offering premium properties and investment opportunities across Dubai.",
             "كيان أفينيو العقارية هي شركة وساطة عقارية فاخرة تقدم عقارات مميزة وفرصاً استثمارية في مختلف أنحاء دبي."
            )}
          </p>
          <p
            className="text-[14px] leading-[1.95] mb-8"
            style={{ color: "#666" }}
          >
            {t(
              "We combine market expertise, transparency, and trusted guidance to help our clients make confident real estate decisions.",
             "نجمع بين الخبرة السوقية والشفافية والتوجيه الموثوق لمساعدة عملائنا على اتخاذ قرارات عقارية بثقة."
            )}
          </p>
          <p
            className="text-[14px] leading-[1.95] mb-8"
            style={{ color: "#666" }}
          >
            {t(
              "Our commitment is simple: trusted advice, carefully selected opportunities, and long term client relationships.",
             "التزامنا بسيط: استشارات موثوقة، وفرص مختارة بعناية، وعلاقات طويلة الأمد مع عملائنا."
            )}
          </p>

          <a href="#contact" className="btn-primary">
            <span>{t("Learn More About Us", "تعرف علينا أكثر")}</span>
            <ChevronLeft size={15} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}