import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`${className} container mx-auto w-full h-full`}>
        { children }
    </div>
  )
}
