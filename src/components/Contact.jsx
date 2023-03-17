// image pour le contac + éléments génériques
import imgContact from '../assets/aby-contact.png'
import Container from './elements/Container'
import Title from './elements/Title'
// les icones
import { SlLocationPin, SlPhone, SlScreenSmartphone, SlEnvolopeLetter} from 'react-icons/sl'

export default function Contact() {
  return (
    <section id="contact" className="py-6 md:py-10 lg:py-20">
        <Container>
            {/* Le titre de la section est juste en dessous */}
            <Title> me contacter </Title>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
                <div className="pt-4 md:pt-6">
                    <img src={imgContact} alt="Illutration de contact Abel" className="w-[58%] mx-auto"/>
                </div>
                {/* bloc coordonnées et contact */}
                <div className="my-auto">
                  <address className="py-4 flex items-center justify-start">
                    <SlLocationPin size={25} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> carrefour cuvette centrale</span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <SlScreenSmartphone size={25} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> (+241) 74 450 529 </span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <SlPhone size={25} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> (+241) 62 687 749 </span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <SlEnvolopeLetter size={25} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> gueloraby@gmail.com </span>
                  </address>

                </div>
            </div>
        </Container>
    </section>
  )
}
