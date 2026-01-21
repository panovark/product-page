import "@/App.scss";
import { Header } from "@/components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="section hero">
          <div className="container">
            <h1>OAK 4 D Camera</h1>
            <p>Project setup</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
