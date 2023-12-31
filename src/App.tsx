import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Features from "./pages/Features";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="h-full flex flex-col font-inter grow shrink-0 basis-auto">
      <div className="bg-bg">
        <NavBar />
        <Landing />
      </div>
      <Features />
      <div className="bg-[#D7F5F5]">
        <Testimonials />
      </div>
      <Pricing />
      <div className="bg-[#D7F5F5]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
