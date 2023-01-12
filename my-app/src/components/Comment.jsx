import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../redux/actions'

const Comment = ({rev}) => {
    const allUsers = useSelector((state) => state.allUsers)
    useEffect(()=>{
        getAllUser()
    },[])



    const perfil = allUsers?.filter(e => e.id === rev.clientId)
    console.log(perfil)
    console.log(perfil.name)
    const posted = rev?.updatedAt?.slice(0,10)


  return (
    <div className='font-medium mb-3'>
        <div>
            <div className='flex rounded-t-xl p-2 justify-start flex-row bg-zinc-200 '>
            <div className='flex flex-row items-center'>
            <img className='h-8' src={perfil[0]?.profile_img || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" }/>
            <p className='ml-2 mr-8 text-black'>{perfil[0]?.name}</p>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-row items-center mr-8'>
                <p className='text-3xl mb-2  text-blue-800/75'><i className="fa-solid fa-star "></i></p>
                <p className='text-2xl font-bold text-gray-700'>{rev.rating}</p>
                </div>
                <p>posted at {posted}</p>
            </div>
            </div>
        </div>
        <div className='border border-gray-400 rounded-b-xl '><p className='ml-2'>{rev.comment}</p></div>
    </div>
  )
}

export default Comment