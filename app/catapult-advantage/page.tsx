import Navbar from "@/components/layout/navbar";
import Hero from "./hero";
import Insights from "./_components/layout/insights";
import Footer from "@/components/layout/footer";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero heroText="AI as a Service"/>
      <Insights />
      <Footer />
    </main>
  );
}
