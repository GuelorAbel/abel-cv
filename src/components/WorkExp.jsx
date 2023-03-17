import React from 'react'

export default function WorkExp({comp, poste, annee, duree, details}) {
  return (
// 1. données
// 2. comportements
// 3.affichage
    <div className="mt-3 md:mt-6 w-[85%] px-4 md:px-0">
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 w-full">
            <li className="ml-4">
                <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-1.5" />
                <div className="badge bg-[#ff7b00] py-3 rounded-lg text-[#1e293b]">
                    <span> {annee} : {duree} </span>
                </div>
                <p className="text-sm md:text-base mt-1">
                    <span className="italic"> {poste} à </span>
                    <span className="font-bold"> {comp} </span>
                </p>
                <p className="text-sm mt-2 md:mt-1"> {details} </p>
            </li>
        </ol>
    </div>
  )
}
