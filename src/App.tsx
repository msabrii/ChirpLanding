import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full h-full mt-4 flex flex-col grow shrink-0 basis-auto">
      <NavBar />
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <p>ameer</p>
    </div>
  );
}

export default App;
