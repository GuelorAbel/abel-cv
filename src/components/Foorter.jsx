import React from 'react'
import Container from './elements/Container'

export default function Foorter() {
  // 1- états
  // 2- comportements
  // 3- rendu navigateur
  return (
    <section className="bg-[#1e293b] text-white py-2">
        <Container className={"text-sm flex flex-col md:flex-row justify-between items-center"}>
            <div>
                <p>
                    &copy; 2023, #GuelorAbelAngo - tous droits réservés
                </p>
            </div>
            {/* bloc éditeur */}
            <div>
              <p>
                Design & Développement : Guelor Abel ANGO 
              </p>
            </div>
        </Container>
    </section>
  )
}
