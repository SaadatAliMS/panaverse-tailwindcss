import Hero from "../app/components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />
        {/* core tracks section */}
        <CoreTracks />
      </main>
    </>
  );
}
