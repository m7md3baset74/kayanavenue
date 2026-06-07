"use client";

import { Shield, MessageSquare, Users, FileText, Activity, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { NAV_LINKS, FOOTER_SERVICES, FOOTER_STRIP_FEATURES } from "@/data/content";
import Image from "next/image";

const STRIP_ICONS: Record<string, React.ReactNode> = {
  shield:      <Shield      size={28} strokeWidth={1.5} />,
  message:     <MessageSquare size={28} strokeWidth={1.5} />,
  users:       <Users       size={28} strokeWidth={1.5} />,
  "file-text": <FileText    size={28} strokeWidth={1.5} />,
  activity:    <Activity    size={28} strokeWidth={1.5} />,
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer() {
  const { t } = useLang();

  return (
    <>
      {/* ── Strip ───────────────────────────────────── */}
      <div
        className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10 px-6 md:px-10 py-10 md:py-11"
        style={{
          background: "var(--dark-2)",
          borderTop: "1px solid var(--border-gold)",
        }}
      >
        {/* Brand */}
        <div
          className="flex flex-col items-center md:items-start gap-1.5 flex-shrink-0 text-center md:text-start"
          style={{ minWidth: "190px" }}
        >
          <p
            className="text-[12.5px] leading-[1.6] mb-1"
            style={{ color: "var(--text-muted)", fontStyle: "italic" }}
          >
            {t(
              "We are committed to delivering a real estate experience beyond your expectations.",
              "نلتزم بتقديم تجربة عقارية تتجاوز توقعاتك."
            )}
          </p>
          <span
            className="text-gold-gradient font-playfair font-semibold tracking-[2px]"
            style={{ fontSize: "17px" }}
          >
            KAYAN AVENUE
          </span>
          <span
            className="text-[7.5px] tracking-[3px] uppercase"
            style={{ color: "rgba(201,168,76,0.55)" }}
          >
            PROPERTIES
          </span>
        </div>

        {/* Features */}
<div className="grid grid-cols-3 md:flex md:flex-1 md:justify-center gap-y-6">
  {FOOTER_STRIP_FEATURES.map((feat, i) => (
    <div
      key={i}
      className={`flex flex-col items-center gap-2.5 px-5 md:px-7 text-center
        ${
          // موبايل: بدون border على i=0 و i=3 (أول كل صف)
          // شاشات كبيرة: بدون border على i=0 بس
          i === 0
            ? ""
            : i === 3
            ? "border-s-0 md:border-s"          // موبايل: لا border | كبيرة: border
            : "border-s"                          // باقي الـ items: border دايماً
        }
      `}
      style={{ borderColor: "var(--border-gold)" }}
    >
      <span style={{ color: "var(--gold)" }}>{STRIP_ICONS[feat.icon]}</span>
      <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
        {t(feat.en, feat.ar)}
      </span>
    </div>
  ))}
</div>
      </div>

      {/* ── Footer ──────────────────────────────────── */}
      <footer
        className="px-6 md:px-10 pt-12 md:pt-14 pb-7"
        style={{
          background: "#08080F",
          borderTop: "1px solid var(--border-gold)",
        }}
      >
        {/* Grid: 1 col mobile → 2 col sm → 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-12">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-0 mb-1">
              <Image
                src="/logo-png.png"
                alt="Kayan Avenue Properties"
                width={36}
                height={36}
                className="w-11 h-11 flex-shrink-0 object-contain"
              />
              <div>
                <div
                  className="text-gold-gradient font-playfair font-semibold tracking-[2px]"
                  style={{ fontSize: "15px" }}
                >
                  KAYAN AVENUE
                </div>
                <div
                  className="text-[7px] tracking-[3px] uppercase"
                  style={{ color: "rgba(201,168,76,0.52)" }}
                >
                  PROPERTIES
                </div>
              </div>
            </div>
            <p
              className="text-[13px] leading-[1.85] mt-4 mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              {t(
                "A modern real estate brokerage specializing in luxury properties in Dubai.",
                "شركة وساطة عقارية عصرية متخصصة في العقارات الفاخرة في دبي."
              )}
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { title: "Instagram", Icon: Instagram },
                { title: "LinkedIn",  Icon: Linkedin  },
                { title: "WhatsApp",  Icon: null       },
                { title: "YouTube",   Icon: Youtube    },
              ].map(({ title, Icon }) => (
                <a
                  key={title}
                  href="#"
                  title={title}
                  className="w-8 h-8 rounded-[9px] flex items-center justify-center transition-all duration-200 no-underline"
                  style={{
                    border: "1px solid var(--border-gold)",
                    color: "var(--gold)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.color = "var(--dark)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                >
                  {Icon ? <Icon size={14} strokeWidth={2} /> : <WhatsAppIcon />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[12.5px] font-bold mb-5 pb-2.5"
              style={{
                color: "var(--white)",
                borderBottom: "1px solid var(--border-gold)",
              }}
            >
              {t("Quick Links", "روابط سريعة")}
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-[12.5px] no-underline transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <span
                      className="block flex-shrink-0 h-px transition-all duration-300"
                      style={{ width: "5px", background: "var(--gold)" }}
                    />
                    {t(link.en, link.ar)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[12.5px] font-bold mb-5 pb-2.5"
              style={{
                color: "var(--white)",
                borderBottom: "1px solid var(--border-gold)",
              }}
            >
              {t("Services", "خدماتنا")}
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {FOOTER_SERVICES.map((svc, i) => (
                <li key={i}>
                  <a
                    href={svc.href}
                    className="flex items-center gap-2 text-[12.5px] no-underline transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <span className="block flex-shrink-0 h-px" style={{ width: "5px", background: "var(--gold)" }} />
                    {t(svc.en, svc.ar)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[12.5px] font-bold mb-5 pb-2.5"
              style={{
                color: "var(--white)",
                borderBottom: "1px solid var(--border-gold)",
              }}
            >
              {t("Contact", "تواصل معنا")}
            </h4>
            {[
              { svg: "phone",    text: "+971 58 586 0581" },
              { svg: "mail",     text: "Info@kayanavenue.ae" },
              { svg: "map-pin",  text: t("Business Bay, Dubai, UAE", "Business Bay، دبي، الإمارات") },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 mb-3 text-[12.5px]"
                style={{ color: "var(--text-muted)" }}
              >
                <svg
                  width="13" height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.8"
                  className="flex-shrink-0 mt-0.5"
                >
                  {item.svg === "phone" && (
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.35 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54A16 16 0 0 0 16 16.54l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  )}
                  {item.svg === "mail" && (
                    <>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </>
                  )}
                  {item.svg === "map-pin" && (
                    <>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  )}
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 pt-5 text-center"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.32)" }}>
            © 2026{" "}
            <span style={{ color: "var(--gold)" }}>Kayan Avenue Properties</span>.{" "}
            {t("All Rights Reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <div className="flex gap-5">
            {[
              { en: "Privacy Policy",   ar: "سياسة الخصوصية" },
              { en: "Terms & Conditions", ar: "الشروط والأحكام" },
            ].map((link) => (
              <a
                key={link.en}
                href="#"
                className="text-[12px] no-underline transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.32)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
              >
                {t(link.en, link.ar)}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}