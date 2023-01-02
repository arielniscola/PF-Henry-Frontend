import React from 'react'
import { useState } from 'react'
import {changeStatusComplex, getUserDetails} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ItemForDeveloperList = ({complex,array}) => {
    
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)

    const [borrado,setBorrado] = useState(complex.deleted)
    console.log(complex)

    const handleClick = (e)=>{
        const find =  array?.filter(o => o.id === e.target.id)
        const change = {
          ...find[0],
          deleted: borrado}

        setBorrado(!borrado)
        changeStatusComplex(e.target.id, change)
        dispatch(getUserDetails(id))
       }



  return (
    <tr>

        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link
                to={`/complex/${complex.id}`}
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
            <button onClick={(e) => handleClick(e)} value={borrado} id={complex.id} className="text-indigo-600 hover:text-indigo-900">
            {borrado? "enable":"disable"}
            </button>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <button onClick={(e) => handleClick(e)} value={borrado} id={complex.id} className="text-indigo-600 hover:text-indigo-900">
            {borrado? "enable":"disable"}
            </button>
        </td>
    </tr>

  )
}

export default ItemForDeveloperList