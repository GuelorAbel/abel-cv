
// type animation
import {TypeAnimation} from "react-type-animation";
// mon image + les icons de mes réseaux sociaux
import Abel from '../assets/aby-dev.jpg';
import {ImLinkedin2, ImGithub, ImWhatsapp, ImTwitter, ImFacebook} from 'react-icons/im';
import Container from "./elements/Container";

export default function Home() {
// 1. données
// 2. comportements
// 3. affichage
      return (
      <section id="home">
            {/* l'image d'arrière plan est en dessous */}
            <img src={Abel} alt="Abel ANGO développant un site internet" className="w-full h-screen object-cover object-center scale-x-[-1]"/>
            {/* La description de Abel */}
            <div className="w-full h-full absolute top-0 left-0 bg-white/60">
                  <Container className={"flex flex-col justify-center"}>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bold px-4 md:px-0">Guelor Abel ANGO</h1>
                        <h3 className="flex flex-col md:flex-row sm:text-3xl text-xl py-4 gap-x-1 px-4 md:px-0"> Je suis  
                        <TypeAnimation
                              sequence={[
                              'Technicien Système & Réseau', // fonction N°1
                              4000, 
                              'Developpeur web Front-end', // fonction N°2
                              4000, 
                              ]}
                              wrapper="div" // Cela représente dans quelle type de balise se trouve mon contenu
                              cursor={true}
                              repeat={Infinity}
                        />
                        </h3>
                        {/* block des réseau sociaux */}
                        <div className="flex justify-start items-center max-w-xs w-full px-4 md:px-0">
                              <a href="https://facebook.com/abel.guelor" target="_blank" className="mr-3">
                                    <ImFacebook size={25} />
                              </a>
                              <a href="https://linkedin.com/in/guelor-abel-ango-80250ba" target="_blank" className="mr-3">
                                    <ImLinkedin2 size={25} />
                              </a>
                              <a href="https://twitter.com/Guelor20" target="_blank" className="mr-3">
                                    <ImTwitter size={25} />
                              </a>
                              <a href="https://github.com/GuelorAbel" target="_blank" className="mr-3">
                                    <ImGithub size={25} />
                              </a>
                              <a href="https://wa.me/24162687749" target="_blank">
                                    <ImWhatsapp size={25} />
                              </a>
                        </div>
                  </Container>
            </div>
      </section>
      )
}
