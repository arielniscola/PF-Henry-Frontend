import React from 'react'
import Tr from './listForDeveloper'

const Table = ({array,typeTable}) => {

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
            {array ? array.map(e => (<Tr
            array={array}
            key={e.id}
            e={e}
            typeTable={typeTable}
            />))
        : <tr>no hay {typeTable} registrados</tr>
        } 
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table