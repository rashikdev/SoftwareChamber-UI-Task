import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-[#0E0E17] text-white">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main className="w-11/12 mx-auto pt-10">
        <ServicesSection></ServicesSection>
      </main>
    </div>
  );
}
