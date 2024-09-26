import AboutSection from "./Components/AboutSection";
import Dashbord from "./Components/Admin/Dashbord";
import ContentSlider from "./Components/ContentSlider";
import CounterSection from "./Components/CounterSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import IntroSection from "./Components/IntroSection";
import ProjectSection from "./Components/ProjectSection";
import ServicesCard from "./Components/ServicesSectio";
import ServicesSection from "./Components/ServicesSection";
import "./App.css"
import BlogSection from "./Components/BlogSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <IntroSection/>
      <ServicesCard />
      <CounterSection/>
      <ProjectSection/>
      <ContentSlider/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default App;
