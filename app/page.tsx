import Image from "next/image";
import Hero from "@/components/layout/hero";
import FinanceText from "@/components/layout/text/finance";
import HowWorks from "@/components/layout/text/howWorks";
import RoleOfFinance from "@/components/layout/text/role";
import Approach from "@/components/layout/text/approach";
import Services from "@/components/layout/text/services";
import Navbar from "@/components/layout/navbar";
import HowHelp from "@/components/layout/text/howHelp";
import Impact from "@/components/layout/text/impact";
import People from "@/components/layout/people";
export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
      <Navbar />

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero />
      <FinanceText />
      <RoleOfFinance />
      <HowHelp />
      <Approach />
      <HowWorks />
      <Impact />
      <People />
      <Services />
    </main>
  );
}
