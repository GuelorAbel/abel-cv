// import des éléments génériques
import Container from './elements/Container'
import SubTiltle from './elements/SubTiltle'
import Title from './elements/Title'
import Bouton from './elements/Bouton'
// Cv PDF
import CvPDF from '../assets/Abel_Technicien système&réseau-developpeur web.pdf'
// icons
import { GoFilePdf } from 'react-icons/go'

export default function Competences() {
  return (
  // 1- états
  // 2- comportements
  // 3- rendu navigateur
    <section id="competences" className="py-6 md:py-10 lg:py-20 relative">

      <Container >

            {/* le block ci-après est la base pour tous mes grands titres */}
            <Title > mes compétences </Title>

            {/* présentation de mes compétences  */}
            <div className="grid md:grid-cols-3 gap-4 mt-6 md:mt-12">

              {/* 1er bloc système & réseau */}
              <div>
                <SubTiltle className={"text-center"}> système & réseau </SubTiltle>
                {/* 1 */}
                <div className="pt-2 my-2">
                  <span>Installation et configuration </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div>
                  </div>
               </div>
               {/* 2 */}
               <div className="pt-1 my-2">
                  <span>Maintenance et dépannage </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[75%]"> 75%</div>
                  </div>
               </div>
              {/* 3 */}
              <div className="pt-1 my-2">
                  <span>Sécurité des systèmes et réseaux </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
                  </div>
               </div>
              {/* 4 */}
              <div className="pt-1 my-2">
                  <span>Gestion du réseau local </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>
              {/* 5 */}
              <div className="pt-1 my-2">
                  <span>Support technique </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[85%]"> 85%</div>
                  </div>
               </div>

              </div>

              {/* 2eme bloc développement web front-end */}
              <div>
              <SubTiltle className={"text-center"}> développement web </SubTiltle>
                {/* 1 */}
                <div className='pt-2 my-2'>
                  <span>Conception et développement </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div>
                  </div>
               </div>
               {/* 2 */}
               <div className='pt-1 my-2'>
                  <span>Optimisation de la performance </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>
              {/* 3 */}
              <div className='pt-1 my-2'>
                  <span>Maintenance </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[60%]"> 60%</div>
                  </div>
               </div>
              {/* 4 */}
              <div className='pt-1 my-2'>
                  <span>Tests </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[75%]"> 75%</div>
                  </div>
               </div>
              {/* 5 */}
              <div className='pt-1 my-2'>
                  <span>Collaboration  </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[90%]"> 90%</div>
                  </div>
               </div>
              </div>

              {/* 3eme bloc UI/UX design */}
              <div >
               <SubTiltle className={"text-center"}> ui/ux design </SubTiltle>
                {/* 1 */}
                <div className="pt-2 mt-2">
                  <span>Conception de l'interface utilisateur </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[70%]"> 70%</div>
                  </div>
               </div>
               {/* 2 */}
               <div className='pt-1 my-2'>
                  <span>Recherche et analyse </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div>
                  </div>
               </div>
              {/* 3 */}
              <div className='pt-1 my-2'>
                  <span>Prototypage et tests </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[75%]"> 75%</div>
                  </div>
               </div>
              {/* 4 */}
              <div className='pt-1 my-2'>
                  <span>Collaboration </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[90%]"> 90%</div>
                  </div>
               </div>
              {/* 5 */}
              <div className='pt-1 my-2'>
                  <span>Amélioration continue </span>
                  <div className="w-[85%] bg-gray-200 rounded-full mt-1">
                     <div className="bg-[#ff7b00] text-xs font-medium text-[#1e293b] text-center p-0.5 leading-none rounded-full w-[80%]"> 80%</div>
                  </div>
               </div>

              </div>

            </div>
            <Bouton className="float-none md:float-right shadow-lg bg-gray-100 shadow-gray-400  my-6 py-3 px-4
                  cursor-pointer ease-in duration-200 hover:scale-105 rounded-full font-semibold">
               <a className="flex items-cente" href={CvPDF} target="_blank"
               >
                  <span className="mr-2">Télécharger mon CV au format .PDF</span>
                  <GoFilePdf size={20} className="animate-bounce text-[#ff7b00] "/>
               </a>
            </Bouton>

      </Container>

    </section>
  )
}
