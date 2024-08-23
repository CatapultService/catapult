import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import People from "@/components/layout/people";
import Footer from "@/components/layout/footer";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero />
      <People />
      <Footer />
    </main>
  );
}
