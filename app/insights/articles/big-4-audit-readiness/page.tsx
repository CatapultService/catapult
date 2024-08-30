import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import HowWorks from "@/components/layout/homePage/howWorks";
import Footer from "@/components/layout/footer";
import ProgressBar from "@ramonak/react-progress-bar";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero heroText="Growth, Marketing & Sales Insights"/>
      <p className="text-center text-2xl text-black">Meow</p>
      <Footer />
    </main>
  );
}
