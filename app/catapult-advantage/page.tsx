import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import Insights from "./_components/layout/insights";
import HowWorks from "@/components/layout/homePage/howWorks";
import Footer from "@/components/layout/footer";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero />
      <Insights />
      <HowWorks />
      <Footer />
    </main>
  );
}
