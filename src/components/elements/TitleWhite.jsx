import React from 'react'

export default function TitleWhite({children}) {
  return (
    <div className="py-4">
        <h2 className="sm:text-4xl text-3xl font-semibold uppercase text-center text-[#f3f4f6]"> {children} </h2>
        <div className="bg-[#f3f4f6] w-8 h-2 mx-auto mt-1"></div>
    </div>
  )
}
