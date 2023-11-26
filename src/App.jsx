import Footer from "./components/Fragments/Footer";
import Navbar from "./components/Fragments/Navbar";
import AboutSection from "./components/Layouts/AboutSection";
import DocumentationSection from "./components/Layouts/DocumentationSection";
import ExperienceSection from "./components/Layouts/ExperienceSection";
import HeroSection from "./components/Layouts/HeroSection";
import JoinSection from "./components/Layouts/JoinSection";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="docimentation">
        <DocumentationSection />
      </section>
      <JoinSection />
      <Footer />
    </>
  );
}

export default App;
