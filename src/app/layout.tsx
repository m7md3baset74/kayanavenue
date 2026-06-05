import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Kayan Avenue Properties | كيان أفينيو العقارية",
  description:
    "Kayan Avenue Properties — a refined real estate experience focused on premium properties, trusted guidance, and carefully selected opportunities across Dubai.",
  keywords: "Dubai real estate, luxury properties, Kayan Avenue, كيان أفينيو",
  openGraph: {
    title: "Kayan Avenue Properties",
    description: "Find the right property for the lifestyle you deserve.",
    type: "website",
    images: [
      {
        url: "/assets/office.jpg",
        width: 1200,
        height: 630,
        alt: "Kayan Avenue Properties",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayan Avenue Properties",
    description: "Find the right property for the lifestyle you deserve.",
    images: ["/assets/office.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
