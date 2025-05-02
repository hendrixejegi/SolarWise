import HeroSection from "@components/hero-section";
import SolarFactSection from "@components/solar-facts-section";
import SolarNeedSection from "@components/solar-need-section";
import VendorsSection from "@/components/vendors-section";

function Home() {
  return (
    <main className="wrapper space-y-10">
      <HeroSection />
      <SolarFactSection />
      <SolarNeedSection />
      <VendorsSection />
    </main>
  );
}

export default Home;
