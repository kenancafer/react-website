import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Navbar } from "./sections/Navbar.jsx";
import { Header } from "./sections/Header.jsx";
import { Footer } from "./sections/Footer.jsx";
import { Hero } from "./sections/Hero.jsx";
import { BattleRoyale } from "./sections/Battle_royale.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <BattleRoyale />
      <Footer />
    </>
  );
}

export default App;
