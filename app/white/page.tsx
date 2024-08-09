import Navbar from "./_components/layout/navbar";
import Hero from "./_components/layout/hero";
import FinanceText from "./_components/layout/text/finance";
import RoleOfFinance from "./_components/layout/text/role";
import Performance from "./_components/layout/text/performance";
import Services from "./_components/layout/text/services";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero />
      <FinanceText />
      <RoleOfFinance />
      <Performance />
      <Services />
    </main>
  );
}
