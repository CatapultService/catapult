import Navbar from "@/components/layout/navbar";
import Hero from "./hero";
import Content from "./_components/layout/content";
import HowWorks from "@/components/layout/homePage/howWorks";
import Footer from "@/components/layout/footer";
import ProgressBar from "@ramonak/react-progress-bar";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero heroText="Growth, Marketing & Sales Insights"/>
      <Content />
      <Footer />
    </main>
  );
}
