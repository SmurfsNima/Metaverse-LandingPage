import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Explore from "./sections/Explore";
import GetStart from "./sections/GetStart";
import NewFeature from "./sections/NewFeature";
import World from "./sections/World";
import { Insight } from "./sections/Insight";
import { Feedback } from "./sections/Feedback";
import { Footer } from "./sections/Footer";
function App() {
  return (
    <div className="App bg-primary-black overflow-hidden ">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStart />
        <div className="gradient-04 z-0" />
        <NewFeature />
      </div>
      <World />
      <div className="relative">
        <Insight />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
      
    
    </div>
  );
}

export default App;
