import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <Contact />
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2 text-main-200">
        2023, designed by, jiseon
      </footer>
    </div>
  );
}

export default App;
