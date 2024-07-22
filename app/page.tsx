import Image from "next/image";
import Hero from "@/components/layout/hero";

export default function Home() {
  return (
    <main className="flex  flex-col justify-between w-full">
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Hero />
    </main>
  );
}
