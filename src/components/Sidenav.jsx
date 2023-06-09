import React, {useState} from 'react';
// les icons qui représentent mon menu
import {GoGraph, GoMail, GoThreeBars, GoTools, GoLightBulb, GoHome} from 'react-icons/go';

export default function Sidenav() {
  // 1- états
      const [nav, setNav] = useState(false);

  // 2- comportements
      const handleNav = () => {
            setNav(!nav);
      };

  // 3- rendu navigateur
      return (
      <div >
            <GoThreeBars size={25} className='fixed bg-[#f3f4f6] bg-opacity-40 shadow-md shadow-one/10 backdrop-blur-sm top-6 right-4 z-[99] cursor-pointer md:hidden' 
            onClick={handleNav} />
            {/* Le code qui vérifie si le menu est ouvert ou fermé */}
            {
                  nav ? ( 
                        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                              {/* les liens du menu */}
                              {/* lien vers home */}
                              <a href="#home" className='menuLink' onClick={handleNav}>
                                    <GoHome  size={25}/>
                                    <span className='pl-4 text-lg font-bold'>Accueil</span>
                              </a>
                              {/* lien vers competences */}
                              <a href="#competences" className='menuLink' onClick={handleNav}>
                                    <GoLightBulb  size={25}/>
                                    <span className='pl-4 text-lg font-bold'>Compétences</span>
                              </a>
                              {/* lien vers experience */}
                              <a href="#experiences" className='menuLink' onClick={handleNav}>
                                    <GoGraph  size={25}/>
                                    <span className='pl-4 text-lg font-bold'>Expériences</span>
                              </a>
                              {/* lien vers travaux */}
                              <a href="#travaux" className='menuLink' onClick={handleNav}>
                                    <GoTools  size={25}/>
                                    <span className='pl-4 text-lg font-bold'>Réalisations</span>
                              </a>
                              {/* lien vers contact */}
                              <a href="#contact" className='menuLink' onClick={handleNav}>
                                    <GoMail  size={25}/>
                                    <span className='pl-4 text-lg font-bold'>Contact</span>
                              </a>

                        </div>
                  )
                  : (
                        
                        " "
                  ) }

                  {/* Le menu qui s'affiche sur grands écrans */}
                  <div className="md:block hidden fixed top-[2%] md:top-[5%] lg:top-[10%] xl:top-[20%] 2xl:top-[25%] z-10 ">
                        <div className="flex flex-col">
                              {/* 1 */}
                              <a href="#home" className="menuLinkTwo" title="#Accueil"> 
                                    <GoHome size={20} />
                              </a>
                              {/* 2 */}
                              <a href="#competences" className="menuLinkTwo" title="#Compétences"> 
                                    <GoLightBulb size={20} />
                              </a>
                              {/* 3 */}
                              <a href="#experiences" className="menuLinkTwo" title="#Expériences"> 
                                    <GoGraph size={20} />
                              </a>
                              {/* 4 */}
                              <a href="#travaux" className="menuLinkTwo" title="#Traveaux"> 
                                    <GoTools size={20} />
                              </a>
                              {/* 5 */}
                              <a href="#contact" className="menuLinkTwo" title="#Contact"> 
                                    <GoMail size={20} />
                              </a>
                        </div>
                  </div>
      </div>
      )
}
