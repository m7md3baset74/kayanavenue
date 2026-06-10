import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import StatsBar  from "@/components/StatsBar";
import Properties from "@/components/Properties";
import About     from "@/components/About";
import Services  from "@/components/Services";
import Partners  from "@/components/Partners";
import WhyUs     from "@/components/WhyUs";
import Contact   from "@/components/Contact";
import Footer    from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <Properties />
        <About />
        <Partners />
        <Services />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
