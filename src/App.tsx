import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { Gallery } from "@/components/Gallery";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specifications />
        <Gallery />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;
