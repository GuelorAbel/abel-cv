import React from 'react'
// les données de l'expériences + mon composant
import data from '../datas'
import Container from './elements/Container'
import Title from './elements/Title'
import WorkExp from './WorkExp'

export default function Experiences() {
  return (
    <section id="experiences" className="py-6 md:py-10 lg:py-20">
        <Container>
        {/* Le titre de la section est juste en dessous */}
        <Title> mon expérience </Title>
        {/* Le bloc qui détail mon expériences  */}
        
            {data.map((item, id) =>
                <WorkExp 
                    key={id} 
                    comp={item.comp} 
                    poste={item.poste}
                    annee={item.annee}
                    duree={item.duree}
                    details={item.details}
                />
            )}

        </Container>
    </section>
  )
}
