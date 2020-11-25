import FacultySection from "./components/FacultySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProgramSection from "./components/ProgramSection";
import RoadMap from "./components/RoadMap";
import TestimoniSection from "./components/TestimoniSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <FacultySection />
      <RoadMap />
      <TestimoniSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
