// les composants utiles
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Foorter from "./components/Foorter";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";
import Travaux from "./components/Travaux";


function App() {
//  1. les données
// 2. les comportements
// 3. l'affichage
  return (
    <>
        <header>
          <Sidenav />
        </header>
        <main>
          <Home />
          <Competences />
          <Experiences />
          <Travaux />
          <Contact />
        </main>
        <footer>
         <Foorter />
        </footer>
    </>
  )
}

export default App
