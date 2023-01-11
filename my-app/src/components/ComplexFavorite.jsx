import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComplex, getUserDetails, updateFavorite, updateUser} from '../redux/actions';
import { useState } from 'react';
// import { sendFavorites } from '../redux/actions';


const ComplexFavorite = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)
    const array = useSelector(state => state.complexs)
    
    const [value, setValue] = useLocalStorage("favorite",[])
    console.log(currentUser?.favorites)

    const favorites = currentUser ? array.filter(e => currentUser?.favorites?.includes(e.id)) : array.filter(e => value.includes(e.id))


    const handleRemoveFavorite = (id) =>{
        if(!currentUser){
            const filt = value.filter(ids => ids !== id)
            setValue(filt)
        } else{
            const filt = currentUser?.favorites?.filter(ids => ids !== id)
            console.log(filt)
            dispatch(updateFavorite(currentUser.id,{...currentUser, favorites:filt},false))
        }
    }

    useEffect(()=>{
        currentUser && dispatch(getUserDetails(currentUser?.id))
    },[])

    



   return (
         <div className="flex w-full flex-col items-start m-10  justify-arounds  ">
             <h2 className="mb-5 text-4xl font-bold text-blue-700">Favorites</h2>
            <div className="flex w-full flex-col items-start justify-center">
                {favorites?.length? favorites?.map((complex,index) => (
                    <div key={index} className="flex flex-row items-center justify-center relative pr-16">
                        <ComplexCard favorites={true} complexDetails={complex}/>
                        <button onClick={() => handleRemoveFavorite(complex.id) } className="absolute top-5 right-6 w-14 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
                            borrar
                        </button>
                    </div>
                )) :<p>has not yet saved any complexes</p>}
            </div>
        </div>
    );
}

export default ComplexFavorite;
