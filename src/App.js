import "./App.css";
import MainContainer from "./containers/MainContainer";
import Footer from "./containers/Footer.jsx";
import Hero from "./containers/Hero.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main id="main-portfolio">
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
