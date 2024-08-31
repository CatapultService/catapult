import Image from "next/image";
import Hero from "@/components/layout/hero";
import Opportunity from "@/components/layout/homePage/opportunity";
import HowWorks from "@/components/layout/homePage/howWorks";
import RoleOfFinance from "@/components/layout/homePage/role";
import Approach from "@/components/layout/homePage/approach";
import Testimonials from "@/components/layout/homePage/testimonials";
import Navbar from "@/components/layout/navbar";
import HowHelp from "@/components/layout/homePage/howHelp";
import Impact from "@/components/layout/homePage/impact";
import People from "@/components/layout/people";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full">
      <Navbar />

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero heroText="Enterprise Performance Transformation Powered by Data, Ai & Inclusivity"/>
      <Opportunity />
      <RoleOfFinance />
      <HowHelp />
      <Approach />
      <HowWorks />
      <Impact />
      <People />
      <Testimonials />
      <Footer />
    </main>
  );
}
