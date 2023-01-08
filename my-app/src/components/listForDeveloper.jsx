import React from 'react'
import { useState } from 'react'
import {changeStatusComplex,changeStatusUser} from '../redux/actions'
import { getAllComplex,getAllUser } from '../redux/actions'
import { useDispatch } from 'react-redux'

const ItemForDeveloperList = ({e, typeTable}) => {

    
    const dispatch = useDispatch()

    const [borrado,setBorrado] = useState(e.deleted)

    const handleClick = ()=>{
        const change = {
          ...e,
          deleted: borrado}

        if(typeTable === "complex"){
            setBorrado(!borrado)
            changeStatusComplex(e.id, change)
            dispatch(getAllComplex())
        }else{
            setBorrado(!borrado)
            changeStatusUser(e.id,change)
            dispatch(getAllUser())
        }
       }

if(typeTable === "user" || typeTable === "complex" ){

    return (
        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="py-4 px-6">
        {e.id}
    </td>
    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src={e.image || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"} alt={e.name}/>
        <div className="pl-3">
            <div className="text-base font-semibold">{e.name}</div>
            <div className="font-normal text-gray-500">{e.email? e.email : e.addres}</div>
        </div>  
    </th>
    <td className="py-4 px-6">
        {!borrado ?                     
        <div className="flex items-center">
             <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online 
        </div> :
        <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline 
        </div>}
    </td>
    
    <td className="py-4 px-6">
        <button onClick={() => handleClick()} value={borrado}className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{borrado? "enable":"disable"}</button>
    </td>
</tr>
  )
} else if (typeTable === "sports"){
    return(

        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="py-4 px-6">
        {e.id}
    </td>
    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src={e.imagen || "https://cdn-icons-png.flaticon.com/512/5564/5564932.png"} alt={e.name}/>
        <div className="pl-3">
            <div className="text-base font-semibold">{e.description}</div>
        </div>  
    </th>
    <td className="py-4 px-6">
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">borrar</button>
    </td>
</tr>
        )
} else{
    return (
        
        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="py-4 px-6">
        {e.id}
    </td>
    <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <div className="pl-3">
            <div className="text-base font-semibold">{e.nameservice}</div>
        </div>  
    </th>
    <td className="py-4 px-6">
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">borrar</button>
    </td>
</tr>
    )
}
}

export default ItemForDeveloperList