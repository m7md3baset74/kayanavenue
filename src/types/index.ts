export type Lang = "en" | "ar";

export interface BilingualText {
  en: string;
  ar: string;
}

export interface Property {
  id: number;
  images: string[];
  badge: BilingualText;
  badgeType: "sale" | "offplan" | "ready";
  title: BilingualText;
  location: BilingualText;
  price: string;
  priceLabel: BilingualText;
  unitTypes: BilingualText;
}

export interface Service {
  id: number;
  icon: string;
  title: BilingualText;
  description: BilingualText;
}

export interface WhyCard {
  id: number;
  num: string;
  icon: string;
  title: BilingualText;
  description: BilingualText;
}

export interface StatItem {
  id: number;
  icon: string;
  number: string;
  label: BilingualText;
}
