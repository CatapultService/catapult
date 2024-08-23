import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import TextPage from "./_components/layout/AboutUs/textPage";
import People from "@/components/layout/people";
import Footer from "@/components/layout/footer";

export default function WhiteHome() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <Hero />
      <TextPage />
      <People />
      <Footer />
    </main>
  );
}
