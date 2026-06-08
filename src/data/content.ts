import type { Property, Service, WhyCard, StatItem } from "@/types";

export const PROPERTIES: Property[] = [
  {
    id: 1,
    image: "/assets/card1.jfif",
    imageStyle: "object-position: 0% 0%; transform: scale(2.05) translate(-25%, -25%)",
    badge: { en: "For Sale", ar: "للبيع" },
    badgeType: "sale",
    title: { en: "Luxury Apartment in Dubai Marina", ar: "شقة فاخرة في دبي مارينا" },
    location: { en: "Dubai Marina, Dubai", ar: "دبي مارينا، دبي" },
    price: "7,250,000",
    priceLabel: { en: "AED", ar: "درهم إماراتي" },
    area: "200 sqft",
    baths: 3,
    rooms: 3,
  },
  {
    id: 2,
    image: "/assets/card2.jfif",
    imageStyle: "",
    badge: { en: "For Sale", ar: "للبيع" },
    badgeType: "sale",
    title: { en: "Independent Villa in Palm Jumeirah", ar: "فيلا مستقلة في نخلة جميرا" },
    location: { en: "Palm Jumeirah, Dubai", ar: "نخلة جميرا، دبي" },
    price: "24,500,000",
    priceLabel: { en: "AED", ar: "درهم إماراتي" },
    area: "4,800 sqft",
    baths: 5,
    rooms: 6,
  },
  {
    id: 3,
    image: "/assets/card3.jfif",
    imageStyle: "object-position: 100% 0%; transform: scale(2.1) translate(25%, -25%)",
    badge: { en: "For Sale", ar: "للبيع" },
    badgeType: "sale",
    title: { en: "Luxury Apt in Downtown Dubai", ar: "شقة فاخرة في وسط مدينة دبي" },
    location: { en: "Downtown Dubai", ar: "وسط مدينة دبي" },
    price: "180,000",
    priceLabel: { en: "AED / Year", ar: "درهم سنويًا" },
    area: "1,300 sqft",
    baths: 3,
    rooms: 2,
  },
];

export const STATS: StatItem[] = [
  {
    id: 1,
    icon: "home",
    number: "+1200",
    label: { en: "Transactions Facilitated", ar: "المعاملات المُبرمة" },
  },
  {
    id: 2,
    icon: "users",
    number: "+850",
    label: { en: "Clients Served", ar: "عدد العملاء" },
  },
  {
    id: 3,
    icon: "award",
    number: "+15",
    label: { en: "Years Experience", ar: "سنوات من الخبرة" },
  },
  {
    id: 4,
    icon: "map-pin",
    number: "+15",
    label: { en: "Prime Locations", ar: "موقع مميز" },
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: "home",
    title: { en: "Buying & Selling Properties", ar: "شراء وبيع العقارات" },
    description: {
      en: "Professional support for buying and selling residential and investment properties across Dubai.",
      ar:"نساعد عملاءنا في شراء وبيع العقارات السكنية والاستثمارية في مختلف مناطق دبي بكل احترافية وثقة."
,
    },
  },
  {
    id: 2,
    icon: "monitor",
    title: { en: "Real Estate Advisory", ar:"الاستشارات العقارية"
 },
    description: {
      en: "Trusted market insights and professional advice to support informed real estate decisions.",
      ar:"نقدم رؤية سوقية واضحة وتوجيهاً احترافياً يساعد عملاءنا على اتخاذ قرارات عقارية واثقة",
    },
  },
  {
    id: 3,
    icon: "dollar-sign",
    title: { en: "Investment Consultation", ar: "الاستشارات الاستثمارية" },
    description: {
      en: "Expert guidance to help clients identify opportunities aligned with their investment goals.",
      ar:"نقدم استشارات عقارية مدروسة لمساعدة عملائنا على اتخاذ قرارات استثمارية ناجحة."
,
    },
  },
  {
    id: 4,
    icon: "box",
    title: { en: "Plots & Lands", ar:"الأراضي والقطع الاستثمارية"
 },
    description: {
      en: "Explore residential and investment land opportunities in key growth areas across Dubai.",
      ar:"نوفر فرصاً متنوعة للأراضي السكنية والاستثمارية في المناطق الأكثر طلباً ونمواً في دبي."
,
    },
  },
  {
    id: 5,
    icon: "star",
    title: { en: "Exclusive Opportunities", ar:"الفرص الحصرية"
 },
    description: {
      en: "Discover handpicked properties and unique opportunities not widely available in the market.",
      ar:"نمنح عملاءنا إمكانية الوصول إلى فرص عقارية مميزة تم اختيارها بعناية."

,
    },
  },
  {
    id: 6,
    icon: "file-text",
    title: { en: "Off-Plan Opportunities", ar: "مشاريع على الخارطة" },
    description: {
      en: "Access carefully selected off-plan projects from Dubai’s leading developers.",
      ar:"نوفر مجموعة مختارة من المشاريع العقارية الواعدة من أبرز المطورين العقاريين في دبي."
,
    },
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    id: 1,
    num: "01",
    icon: "user",
    title: { en: "Personalized Experience", ar: "تجربة شخصية" },
    description: {
      en: "A personalized experience designed for each client to match their goals and lifestyle.",
      ar: "تجربة شخصية مصممة لكل عميل تلائم أهدافه وأسلوب حياته.",
    },
  },
  {
    id: 2,
    num: "02",
    icon: "shield-check",
    title: { en: "Professional & Transparent", ar: "أسلوب احترافي وشفاف" },
    description: {
      en: "We deal with our clients with the highest levels of transparency and professionalism.",
      ar: "نتعامل مع عملائنا بأعلى درجات الشفافية والمهنية في كل مرحلة.",
    },
  },
  {
    id: 3,
    num: "03",
    icon: "star",
    title: { en: "Carefully Selected Properties", ar: "عقارات مختارة بعناية" },
    description: {
      en: "We offer only the best properties in Dubai's most in-demand and distinguished locations.",
      ar: "نقدم فقط أفضل العقارات في أكثر المواقع طلبًا وتميزًا في دبي.",
    },
  },
  {
    id: 4,
    num: "04",
    icon: "activity",
    title: { en: "Strong Market Knowledge", ar: "معرفة قوية بالسوق" },
    description: {
      en: "A deep understanding of Dubai's real estate market ensures the best decisions.",
      ar: "فهم عميق لحركة السوق العقاري في دبي يضمن أفضل القرارات.",
    },
  },
  {
    id: 5,
    num: "05",
    icon: "image",
    title: { en: "Premium Marketing", ar: "تسويق احترافي" },
    description: {
      en: "Professional marketing and presentation standards that ensure maximum visibility.",
      ar: "معايير تسويق وعرض احترافية تضمن أعلى ظهور لعقارك.",
    },
  },
  {
    id: 6,
    num: "06",
    icon: "users",
    title: { en: "Long-Term Relationships", ar: "علاقات طويلة الأمد" },
    description: {
      en: "We build genuine relationships with our clients that go beyond a single transaction.",
      ar: "نبني علاقات حقيقية مع عملائنا تتخطى حدود الصفقة الواحدة.",
    },
  },
];

export const NAV_LINKS = [
  { href: "#hero",       en: "Home",       ar: "الرئيسية"   },
  { href: "#properties", en: "Properties", ar: "العقارات"   },
  { href: "#about",      en: "About Us",   ar: "من نحن"     },
  { href: "#services",   en: "Services",   ar: "الخدمات"    },
  { href: "#partners",   en: "Partners",   ar: "شركاؤنا"    },
  { href: "#contact",    en: "Contact",    ar: "تواصل معنا" },
];

export const FOOTER_SERVICES = [
  { href: "#services", en: "Luxury Villas & Apts",  ar: "فلل وشقق فاخرة"       },
  { href: "#services", en: "Secondary Market",       ar: "عقارات جاهزة"         },
  { href: "#services", en: "Off-Plan Projects",      ar: "مشاريع على الخارطة"   },
  { href: "#services", en: "Investment Consulting",  ar: "استشارات استثمارية"   },
  { href: "#services", en: "Property Rental",        ar: "تأجير العقارات"       },
];

export const FOOTER_STRIP_FEATURES = [
  { icon: "shield",       en: "Full Transparency",    ar: "شفافية كاملة"       },
  { icon: "message",      en: "24/7 Support",         ar: "خدمة عملاء 24/7"    },
  { icon: "users",        en: "Professional Team",    ar: "فريق محترف"         },
  { icon: "file-text",    en: "Secure Contracts",     ar: "عقود آمنة"          },
  { icon: "activity",     en: "Deep Market Expertise",ar: "خبرة سوقية عميقة"   },
  { icon: "Waypoints",    en: "Strong Industry Network",ar:"شبكة علاقات قوية"   },
];
