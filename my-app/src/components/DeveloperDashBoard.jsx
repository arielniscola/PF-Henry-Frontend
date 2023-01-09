import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllComplex,getAllUser,getAllServices,getAllTypeCourt} from '../redux/actions'
import Table from './Table'
import {Modal} from './Modal'
import CreateSportsServices from './CreateSportsServices'
import {useModal} from './hooks/useModal'

const DeveloperDashBoard = () => {

  const dispatch = useDispatch()

  const complexs = useSelector(state => state.allComplexs)
  const users = useSelector(state => state.allUsers)
  const sports = useSelector(state => state.sports)
  const services = useSelector(state => state.services)

  useEffect(()=>{
    dispatch(getAllUser())
    dispatch(getAllComplex())
    dispatch(getAllServices())
    dispatch(getAllTypeCourt())
  },[dispatch])


  const [page,setPage] = useState('complexs')
  const handleSetPage = (e) =>{
    setPage(e.target.name)
  }
  const [isOpen,modalOpen,modalClose]=useModal(false)

  return (
    <div className='mb-52'>
      <button onClick={() => modalOpen()} className="w-40 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">creation panel</button>
      <Modal isOpen={isOpen} modalClose={() => modalClose()}>
        <CreateSportsServices/>
      </Modal>
      <div className='my-4'>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
              <button name='complexs' onClick={(e) => handleSetPage(e)} className={page === 'complexs'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Complexs</button>
          </li>
          <li className="mr-2">
              <button name='users' onClick={(e) => handleSetPage(e)} className={page === 'users'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Users</button>
          </li>
          <li className="mr-2">
              <button name='sports' onClick={(e) => handleSetPage(e)} className={page === 'sports'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Sports</button>
          </li>
          <li className="mr-2">
              <button name='services' onClick={(e) => handleSetPage(e)} className={page === 'services'? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500":"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}>Services</button>
          </li>
        </ul>
      </div>
      <div>
        {page === 'complexs' &&  <Table array={complexs} typeTable="complex"/>}
        {page === "users" &&  <Table array={users} typeTable="user"/>}
        {page === "sports" &&  <Table array={sports} typeTable="sports"/>}
        {page === "services" &&  <Table array={services} typeTable="services"/>}
      </div>
    </div>
  )
}

export default DeveloperDashBoard