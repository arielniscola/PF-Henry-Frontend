import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComplex, updateFavorite } from '../redux/actions';
// import { sendFavorites } from '../redux/actions';


const ComplexFavorite = () => {

    const dispatch = useDispatch()

    const local = useSelector(state => state.favlocal)
    const user = useSelector(state => state.currentUser)
    const array = useSelector(state => state.complexs)
    
    const [value, setValue] = useLocalStorage("favorite",[])
    useEffect(()=>{
        local.length && setValue(noRepeat)
    },[])

    const noRepeat = [...new Set([...value,...local])]

    const ids = !user ? value : user.favorites

    const favorites = array?.filter(e => (ids.includes(e.id)) )

    const handleRemoveFavorite = (complex) => {
        const arr = user ? user.favorites : value
        const newFavorite = arr.filter((item) => item !== complex.id)
        if(!user){
            return setValue(newFavorite)
        }
        dispatch(updateFavorite(user.id,newFavorite))
    }
    useEffect(()=>{
        getAllComplex()
        user && [...local,...user.favorites] !== user.favorites && updateFavorite(user.id,{...user ,favorite:[...new Set([...local,...user.favorites])]})
    },[])


   return (
         <div className="flex w-full flex-col items-start m-10  justify-arounds  ">
             <h2 className="mb-5 text-4xl font-bold text-blue-700">Favorites</h2>
            <div className="flex w-full flex-col items-start justify-center">
                {favorites? favorites.map((complex,index) => (
                    <div key={index} className="flex flex-row items-center justify-center relative pr-16">
                        <ComplexCard favorite={true} complexDetails={complex}/>
                        <button onClick={() => handleRemoveFavorite(complex) } className="self-center  w-12 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
                            borrar
                        </button>
                    </div>
                )) :<p>has not yet saved any complexes</p>}
            </div>
        </div>
    );
}

export default ComplexFavorite;
