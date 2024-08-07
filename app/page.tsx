import Image from "next/image";
import Hero from "@/components/layout/hero";
import FinanceText from "@/components/layout/text/FinanceText";
import RoleOfFinance from "@/components/layout/text/RoleOfFinance";

export default function Home() {
  return (
    <main className="flex  flex-col justify-between w-full">
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero />
      <FinanceText />
      <RoleOfFinance />
    </main>
  );
}
