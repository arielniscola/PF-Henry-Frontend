import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllComplex,getAllUser} from '../redux/actions'
import Table from './Table'

const DeveloperDashBoard = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllUser())
    dispatch(getAllComplex())
  },[dispatch])

  const complexs = useSelector(state => state.allComplexs)
  const users = useSelector(state => state.allUsers)

  const [page,setPage] = useState('complexs')
  const handleSetPage = (e) =>{
    setPage(e.target.name)
  }

  return (
    <div>
      <div className='my-4'>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
              <button name='complexs' onClick={(e) => handleSetPage(e)} className={page === 'complexs'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Complexs</button>
          </li>
          <li className="mr-2">
              <button name='users' onClick={(e) => handleSetPage(e)} className={page === 'users'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Users</button>
          </li>
      </ul>
      </div>
      <div>
        {page === 'complexs'? <Table array={complexs} typeTable="complex"/> :<Table array={users} typeTable="user"/>}
      </div>
    </div>
  )
}

export default DeveloperDashBoard