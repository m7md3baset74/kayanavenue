"use client";

import { Home, Users, Award, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { STATS } from "@/data/content";

const ICONS: Record<string, React.ReactNode> = {
  home:      <Home     size={20} strokeWidth={1.5} />,
  users:     <Users    size={20} strokeWidth={1.5} />,
  award:     <Award    size={20} strokeWidth={1.5} />,
  "map-pin": <MapPin   size={20} strokeWidth={1.5} />,
};

export default function StatsBar() {
  const { t } = useLang();

  return (
    <div className="stats-bar grid grid-cols-2 sm:grid-cols-4 mx-4 sm:mx-10 lg:mx-20 px-4 sm:px-10 md:py-5 py-2 -mt-19 md:-mt-10 md:-mb-16 -mb-29">
      {STATS.map((stat, i) => (
        <div
          key={stat.id}
          className={[
            "flex items-center gap-4 px-3 sm:px-5 py-3 sm:py-0",
            // border-start: مش أول في كل row
            i % 2 !== 0 ? "border-s border-s-[var(--border-gold)]" : "",
            // border-start على الشاشات الكبيرة: كل العناصر غير الأول
            i !== 0 ? "sm:border-s sm:border-s-[var(--border-gold)]" : "sm:border-s-0",
            // border-top على الموبايل بس للصف التاني
            i >= 2 ? "border-t border-t-[var(--border-gold)] sm:border-t-0" : "",
          ].join(" ")}
        >
          {/* Icon */}
          <div className="icon-box flex-shrink-0" style={{ width: 44, height: 44 }}>
            {ICONS[stat.icon]}
          </div>

          {/* Text */}
          <div>
            <div className="text-gold-gradient font-bold leading-none" style={{ fontSize: "22px" }}>
              {stat.number}
            </div>
            <div className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>
              {t(stat.label.en, stat.label.ar)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}