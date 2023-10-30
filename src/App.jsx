import Navbar from "./components/Fragments/Navbar";
import AboutSection from "./components/Layouts/AboutSection";
import ExperienceSection from "./components/Layouts/ExperienceSection";
import HeroSection from "./components/Layouts/HeroSection";
import Organization from "./components/Layouts/Organization";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <Organization />
    </>
  );
}

export default App;
