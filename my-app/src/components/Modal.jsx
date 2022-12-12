import React from 'react'

export const Modal = ({children,isOpen,modalClose}) => {
  return (
    <article className={isOpen ?'fixed z-50 top-0 left-0 w-full min-h-screen bg-black/75 flex' :'fixed z-50 top-0 left-0 w-full min-h-screen bg-black/75 hidden'}>
        <div className="relative rounded pb-4">
        <button onClick={modalClose} className="absolute top-12 right-16">x</button>
        {children}
        </div>
    </article>
  )
}
