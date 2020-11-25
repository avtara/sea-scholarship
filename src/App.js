import FacultySection from "./components/FacultySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProgramSection from "./components/ProgramSection";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <FacultySection />
      <RoadMap />
    </div>
  );
}

export default App;
