import React from 'react'

export default function Bouton({ children, className }) {
  return (
    <button className={`${className} py-2 px-4 btn-md`}>
        { children }
    </button>
  )
}
