import Banner from "@/components/Banner";
import DevProcess from "@/components/DevProcess";
import Navbar from "@/components/Navbar";
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

      <main className="pt-10">
        <ServicesSection></ServicesSection>
        <DevProcess></DevProcess>
      </main>
    </div>
  );
}
