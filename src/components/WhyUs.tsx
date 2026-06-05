"use client";

import Image from "next/image";
import {
  User, Shield, Star, Activity, Image as ImageIcon, Users,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { WHY_CARDS } from "@/data/content";
import SectionEyebrow from "./SectionEyebrow";

const ICONS: Record<string, React.ReactNode> = {
  user:           <User      size={20} strokeWidth={1.5} />,
  "shield-check": <Shield    size={20} strokeWidth={1.5} />,
  star:           <Star      size={20} strokeWidth={1.5} />,
  activity:       <Activity  size={20} strokeWidth={1.5} />,
  image:          <ImageIcon size={20} strokeWidth={1.5} />,
  users:          <Users     size={20} strokeWidth={1.5} />,
};

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section
      id="why"
      className="py-16 px-5 sm:px-10"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <SectionEyebrow label={t("Why Choose Us", "لماذا تختارنا")} center />
          <h2
            className="font-playfair font-semibold leading-[1.28] mt-2"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)", color: "#1a1a2e" }}
          >
            {t("What Sets Us ", "ما يميزنا ")}
            <span style={{ fontStyle: "italic" }}>{t("Apart", "عن غيرنا")}</span>
          </h2>
        </div>

        {/* Body: Image + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left — Image */}
          <div
            className="relative rounded-2xl overflow-hidden w-full"
            style={{ minHeight: "clamp(280px, 50vw, 520px)" }}
          >
            <Image
              src="/assets/why-choose.jfif"
              alt="Why Choose Kayan Avenue"
              fill
              className="object-cover"
            />
            {/* Overlay خفيف جداً */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(201,168,76,0.04) 0%, rgba(13,13,20,0.18) 100%)",
              }}
            />
            {/* Badge */}
            <div
              className="absolute bottom-5 start-5 z-10 rounded-2xl px-3 py-2 text-center"
              style={{
                background: "var(--gold-gradient)",
                color: "#0D0D14",
                boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
              }}
            >
              <Shield size={20} strokeWidth={1.5} style={{ margin: "0 auto 6px" }} />
              <span
                className="block font-bold leading-none font-playfair"
                style={{ fontSize: "clamp(13px, 2vw, 15px)" }}
              >
                {t("Trusted Brokerage", "وساطة موثوقة")}
              </span>
            </div>
          </div>

          {/* Right — Cards 2×3 */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {WHY_CARDS.map((card) => (
              <div
                key={card.id}
                className="reveal rounded-2xl p-5 transition-all duration-200 cursor-default"
                style={{
                  background: "#F8F7F4",
                  border: "1px solid #ede8e0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#fff";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 6px 24px rgba(201,168,76,0.12)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--border-gold)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#F8F7F4";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#ede8e0";
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                }}
              >
                {/* Number */}
                <div
                  className="text-[10px] font-semibold tracking-[2px] mb-3"
                  style={{ color: "var(--gold)", opacity: 0.75 }}
                >
                  {card.num}
                </div>

                {/* Icon */}
                <div className="icon-box mb-3" style={{ width: 44, height: 44 }}>
                  {ICONS[card.icon]}
                </div>

                {/* Title */}
                <h3
                  className="text-[13px] font-bold mb-1.5 leading-[1.3]"
                  style={{ color: "#1a1a2e" }}
                >
                  {t(card.title.en, card.title.ar)}
                </h3>

                {/* Description */}
                <p
                  className="text-[11.5px] leading-[1.7]"
                  style={{ color: "#666" }}
                >
                  {t(card.description.en, card.description.ar)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}