import Image from "next/image";
import Hero from "@/components/layout/hero";
import FinanceText from "@/components/layout/text/finance";
import RoleOfFinance from "@/components/layout/text/role";
import Performance from "@/components/layout/text/performance";

export default function Home() {
  return (
    <main className="flex  flex-col justify-between w-full">
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero />
      <FinanceText />
      <RoleOfFinance />
      <Performance />
    </main>
  );
}
