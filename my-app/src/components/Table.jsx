import React from 'react'
import {changeStatusComplex,changeStatusUser} from '../redux/actions'

const Table = ({array,typeTable}) => {


   const handleClick = (e)=>{
    if(typeTable === "complex"){
        changeStatusComplex(e.target.value, e.target.id, array)
    }else{
        changeStatusUser(e.target.value, e.target.id, array)
    }
   }
  return (
    <div>
        
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    id
                </th>
                <th scope="col" className="py-3 px-6">
                    name
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>


        <tbody>
            {array?.map(e => (
            <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                    {e.id}
                </td>
                <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={e.image} alt={e.name}/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">{e.name}</div>
                        <div className="font-normal text-gray-500">{e.mail? e.mail : e.addres}</div>
                    </div>  
                </th>
                <td className="py-4 px-6">
                    {e.status ?                     
                    <div className="flex items-center">
                         <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online 
                    </div> :
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline 
                    </div>}
                </td>
                <td className="py-4 px-6">
                    <button onClick={(e) => handleClick(e)} id={e.id} value={e.status? "disable":"enable"}className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{e.status? "disable":"enable"}</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table