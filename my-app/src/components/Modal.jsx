import React from 'react'

export const Modal = ({children,isOpen,modalClose}) => {
  return (
    <article className={isOpen ?'fixed z-50 top-0 left-0 w-full min-h-screen bg-black/75 flex' :'fixed z-50 top-0 left-0 w-full min-h-screen bg-black/75 hidden'}>
          <div className="relative rounded pb-4 h-full w-full">
        <button onClick={modalClose} className="absolute top-12 right-16 w-8 h-8 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">&times;</button> 
        {children}
        </div>
    </article>
  )
}
