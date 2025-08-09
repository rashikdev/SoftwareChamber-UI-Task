import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import CustomerReviewSection from "@/components/CustomerReviewSection";
import DevProcess from "@/components/DevProcess";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import PertnerCompany from "@/components/PertnerCompany";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-[#0E0E17] text-white">
        <div className="fixed top-6 md:top-10 left-0 right-0 z-50">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </header>

      <main className="pt-10 text-black">
        <ServicesSection></ServicesSection>
        <DevProcess></DevProcess>
        <FeaturesSection></FeaturesSection>
        <PertnerCompany></PertnerCompany>
        <FAQSection></FAQSection>
        <CustomerReviewSection></CustomerReviewSection>
        <ContactSection></ContactSection>
      </main>
    </div>
  );
}
