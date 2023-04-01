// image pour le contac + éléments génériques
import imgContact from '../assets/aby-contact.png'
import Container from './elements/Container'
import Title from './elements/Title'
// les icones
import { RiMailUnreadLine, RiCellphoneFill, RiPhoneFill, RiMapPin5Fill} from 'react-icons/ri'

export default function Contact() {
  // 1- états
  // 2- comportements
  // 3- rendu navigateur
  return (
    <section id="contact" className="py-6 md:py-10 lg:py-20">
        <Container>
            {/* Le titre de la section est juste en dessous */}
            <Title> me contacter </Title>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="pt-4 md:pt-6">
                    <img src={imgContact} alt="Illutration de contact Abel" className="w-[58%] mx-auto"/>
                </div>
                {/* bloc coordonnées et contact */}
                <div className="my-auto">
                  <address className="py-4 flex items-center justify-start">
                    <RiMapPin5Fill size={32} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> carrefour cuvette centrale</span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <RiCellphoneFill size={32} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> (+241) 74 450 529 </span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <RiPhoneFill size={32} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> (+241) 62 687 749 </span>
                  </address>
                  {/* ---------------------- */}
                  <address className="py-4 flex items-center justify-start">
                    <RiMailUnreadLine size={32} className="text-[#ff7b00] mr-2"/>
                    <span className="uppercase"> gueloraby@gmail.com </span>
                  </address>

                </div>
            </div>
        </Container>
    </section>
  )
}
