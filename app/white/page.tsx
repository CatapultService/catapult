import Navbar from "./_components/layout/navbar";
import Hero from "./_components/layout/hero";
import FinancehomePage from "./_components/layout/homePage/finance";
import HowWorks from "./_components/layout/homePage/howWorks";
import RoleOfFinance from "./_components/layout/homePage/role";
import Performance from "./_components/layout/homePage/performance";
import Services from "./_components/layout/homePage/services";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero />
      <FinancehomePage />
      <HowWorks />
      <RoleOfFinance />
      <Performance />
      <Services />
    </main>
  );
}
