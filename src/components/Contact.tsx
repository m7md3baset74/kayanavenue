"use client";

import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import SectionEyebrow from "./SectionEyebrow";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "buy",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactItems = [
    { icon: <Phone size={14} strokeWidth={1.8} />, text: "+971 58 586 0581" },
    { icon: <Mail size={14} strokeWidth={1.8} />, text: "hany@kayanavenue.ae" },
    {
      icon: <Globe size={14} strokeWidth={1.8} />,
      text: "www.kayanavenue.com",
    },
    {
      icon: <MapPin size={14} strokeWidth={1.8} />,
      text: t("Business Bay, Dubai, UAE", "Business Bay، دبي، الإمارات"),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-5 sm:px-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--dark-3) 0%, var(--dark) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          insetInlineEnd: "-100px",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          insetInlineStart: "-80px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <div>
            <SectionEyebrow label={t("Contact Us", "تواصل معنا")} />
            <h2
              className="font-playfair font-semibold leading-[1.28] mt-2 mb-4"
              style={{
                fontSize: "clamp(24px, 2.8vw, 38px)",
                color: "var(--white)",
              }}
            >
              {t("Let's discuss your ", "دعنا نساعدك في ")}
              <br />
              <span
                className="text-gold-gradient"
                style={{ fontStyle: "italic" }}
              >
                {t("next property opportunity", "فرصتك العقارية القادمة")}
              </span>
            </h2>

            <div className="gold-sep" />

            <p
              className="text-[13.5px] leading-[1.9] mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {t(
                "Get in touch with Kayan Avenue Properties for professional real estate guidance and premium property opportunities across Dubai.",
                "تواصل مع كيان أفينيو العقارية للحصول على استشارات عقارية احترافية وفرص مميزة في مختلف مناطق دبي.",
              )}
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[13px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-2xl p-6 sm:p-9"
            style={{
              background: "var(--dark-card)",
              border: "1px solid var(--border-gold)",
            }}
          >
            <h3
              className="text-[16px] font-bold mb-6"
              style={{ color: "var(--white)" }}
            >
              {t("Send a Message", "أرسل رسالة")}
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--text-light)" }}
                  >
                    {t("Full Name", "الاسم الكامل")}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[12px] font-semibold"
                    style={{ color: "var(--text-light)" }}
                  >
                    {t("Phone Number", "رقم الهاتف")}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 mb-4">
                <label
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--text-light)" }}
                >
                  {t("Email Address", "البريد الإلكتروني")}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Request Type */}
              <div className="flex flex-col gap-2 mb-4">
                <label
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--text-light)" }}
                >
                  {t("Request Type", "نوع الطلب")}
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="buy">{t("Buy Property", "شراء عقار")}</option>
                  <option value="sell">{t("Sell Property", "بيع عقار")}</option>
                  <option value="invest">
                    {t("Investment Consultation", "استشارة استثمارية")}
                  </option>
                  <option value="rent">
                    {t("Rent Property", "تأجير عقار")}
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 mb-6">
                <label
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--text-light)" }}
                >
                  {t("Your Message", "رسالتك")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full justify-center"
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sent" ? (
                  <span>{t("Message Sent ✓", "تم الإرسال ✓")}</span>
                ) : status === "sending" ? (
                  <span>{t("Sending…", "جاري الإرسال…")}</span>
                ) : (
                  <>
                    <span>{t("Send Message", "إرسال الرسالة")}</span>
                    <Send size={14} strokeWidth={2} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
