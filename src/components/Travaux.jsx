// le composants qui gère les travaux réalisés item/item
import ItemWork from './TravauxItem'
// les interfaces des sites web 
import cv from '../assets/works/cvAbel.png'
import gedservices from '../assets/works/ged-services.png'
import groupged from '../assets/works/group-ged.png'
import drillwatt from '../assets/works/drill-watt.png'
import logsInterntional from '../assets/works/logs-international.png'
import pts from '../assets/works/pts.png'
// éléments génériques
import Container from './elements/Container'
import Title from './elements/Title'

export default function Travaux() {
  return (
    <section id="travaux" className="py-6 md:py-10 lg:py-20">
      <Container>
            {/* Le titre de la section est juste en dessous */}
            <Title> mes réalisations </Title>
            
            <p className="text-center pt-3 md:pt-4 md:w-[60%] mx-auto text-sm md:text-base mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel cupiditate vero obcaecati.
                  Rem exercitationem numquam, illo assumenda doloribus quae earum nulla veniam consequatur vitae 
                  distinctio tempore animi similique architecto?
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
              <ItemWork img={cv} titre="Mon portefolio" url="https://www.freepik.com/" />
              <ItemWork img={gedservices} titre="GED Services" url="https://ged-services.group-ged.com" />
              <ItemWork img={groupged} titre="Group-GED" url="https://group-ged.com/" />
              <ItemWork img={drillwatt} titre="Drill-Watt" url="http://drill-watt.com/" />
              <ItemWork img={logsInterntional} titre="Logs-international" url="https://www.logs-international.org" />
              <ItemWork img={pts} titre="Piping-Travaux-Soudure" url="https://www.pts-gabon.com" />
            </div>

      </Container>
    </section>
  )
}
