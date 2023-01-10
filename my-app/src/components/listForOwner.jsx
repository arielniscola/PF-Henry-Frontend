import React from 'react'
import { useState } from 'react'
import {changeStatusComplex} from '../redux/actions'
import { Link } from 'react-router-dom'

const ItemForOwnerList = ({complex}) => {

    const [borrado,setBorrado] = useState(complex && complex.deleted)

    const handleClick = ()=>{
        const change = {
          ...complex,
          deleted: borrado}
          console.log("esto es complex",complex)
        setBorrado(!borrado)
        changeStatusComplex(complex.id, change)
       }

       console.log(complex)


  return (
    <tr>

        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link
                to={`/search/${complex.id}`}
                className="relative block"
                >
                <img
                    alt="profil"
                    src={complex.logo || "https://cdn-icons-png.flaticon.com/512/2782/2782896.png"}
                    className="w-10 h-10 mx-auto rounded-full object-contain "
                />
                </Link>
            </div>
            <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                {complex.name}
                </p>
            </div>
            </div>
        </td>

        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
            {complex.events}
            </p>
        </td>

        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
            12/09/2020
            </p>
        </td>

        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <span className={!borrado ? "relative inline-block px-3 py-1 font-semibold leading-tight text-green-900" : "relative inline-block px-3 py-1 font-semibold leading-tight text-red-900"}>
            <span
                aria-hidden="true"
                className={!borrado ? "absolute inset-0 bg-green-200 rounded-full opacity-50":"absolute inset-0 bg-red-200 rounded-full opacity-50"}
            ></span>
            <span className="relative">{!borrado? "active":"inactive"}</span>
            </span>
        </td>
        
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <button onClick={() => handleClick()} value={borrado} id={complex.id} className="text-indigo-600 hover:text-indigo-900">
            {borrado? "enable":"disable"}
            </button>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <button value={borrado} className="text-indigo-600 hover:text-indigo-900">
            delete
            </button>
        </td>
    </tr>

  )
}

export default ItemForOwnerList