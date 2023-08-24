import NavBar from "./components/NavBar";
import Features from "./pages/Features";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="h-full flex flex-col font-inter grow shrink-0 basis-auto">
      <div className="bg-bg">
        <NavBar />
        <Landing />
      </div>
      <Features />
    </div>
  );
}

export default App;
