import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specifications />
      </main>
    </div>
  );
}

export default App;
