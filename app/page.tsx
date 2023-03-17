import Hero from "../app/components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
import { SpecializedTracks } from "./components/widgets/SpecializedTracks";
import ProgramOutcome from "./components/widgets/ProgramOutcome";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />
        {/* core tracks section */}
        <CoreTracks />
        {/* specialized tracks */}
        <SpecializedTracks />
        {/* program outcome section */}
        <ProgramOutcome />
      </main>
    </>
  );
}
