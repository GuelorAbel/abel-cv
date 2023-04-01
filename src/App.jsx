// les composants utiles
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Foorter from "./components/Foorter";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";
import Travaux from "./components/Travaux";


export default function App() {
  // 1- états

  // 2- comportements

  // 3- rendu navigateur
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

