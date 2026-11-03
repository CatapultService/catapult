import Navbar from "@/components/layout/navbar";

// Background colours are sampled from the videos' edges so the banner blends into the page:
// square video (phones) is a flat #10071a, wide video fades navy -> plum.
const bg = "bg-[#10071a] md:bg-gradient-to-r md:from-[#040817] md:to-[#270c22]";
const message =
  "Happy Deepavali! Wishing you and your family a year of light, prosperity and new beginnings. With warm regards, Team Catapult.";

// Videos have no audio track, so they just autoplay muted on loop (no unmute UI needed).
export default function Deepavali() {
  return (
    <main className={`flex flex-col w-full min-h-screen ${bg}`}>
      <Navbar className={bg} />

      <div className="flex-1 flex items-center justify-center pt-20">
        <video
          className="w-full max-w-6xl"
          style={{ maxHeight: "85vh", objectFit: "contain" }}
          autoPlay
          muted
          loop
          playsInline
          aria-label={message}
        >
          {/* ponytail: browser picks the source once on load; rotating/resizing mid-visit keeps the first pick */}
          <source src="/assets/deepavali-square.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/assets/deepavali.mp4" type="video/mp4" />
          {message}
        </video>
      </div>
    </main>
  );
}
