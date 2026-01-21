import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
