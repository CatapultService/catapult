import Navbar from "@/components/layout/navbar";
import Hero from "./hero";
import Content from "./_components/layout/content";
import HowWorks from "@/components/layout/homePage/howWorks";
import Footer from "@/components/layout/footer";
import HowHelp from "@/components/layout/homePage/howHelp";
import { Separator } from "@/components/ui/separator";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero heroText="Enterprise Data Cloud & Ai" />
      <Content />
      <div className="flex w-full flex-col items-center justify-center bg-[#090E4A]">
        <HowWorks />
        <Separator className="w-96 bg-[#d9d9d9]" />
        <HowHelp />
      </div>
      <Footer />
    </main>
  );
}
