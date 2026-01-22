import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { Gallery } from "@/components/Gallery";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specifications />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
