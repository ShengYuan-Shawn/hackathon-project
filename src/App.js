import "./style.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import GetHero from "./Components/HeroTile/GetHero";

function App() {
  return (
    <div className="App">
      <Header />
      <GetHero />
      <Footer />
    </div>
  );
}

export default App;
