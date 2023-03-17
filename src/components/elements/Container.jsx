import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`${className} container mx-auto w-full h-full px-4 md:px-10 lg:px-16`}>
        { children }
    </div>
  )
}
