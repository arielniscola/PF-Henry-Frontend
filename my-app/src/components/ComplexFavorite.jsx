import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavorite } from '../redux/actions';
// import { sendFavorites } from '../redux/actions';


const ComplexFavorite = () => {

    const dispatch = useDispatch()

    const local = useSelector(state => state.favlocal)
    const favUser = useSelector(state => state.favUser)
    const user = useSelector(state => state.currentUser)


    
    const [value, setValue] = useLocalStorage("favorite",[])

    
    const filter = (array) =>{
        let hash = {};
        const filtered = array.filter(o => hash[o.id] ? false : hash[o.id] = true);
        const arr = filtered.map(e => e.id)
        return arr
    } 
    const noRepeat = filter([...value,...local])

    const noRepAll = filter([...value, ...favUser])

    useEffect(()=>{
        setValue(noRepeat)
        user.isActive && dispatch(updateFavorite(user.id,noRepAll))
    },[])

    const favorites = !user.isActive ? value : value
    console.log(favUser.fav)

    const handleRemoveFavorite = (complex) => {
        const arr = user.id ? favUser : value
        const newFavorite = arr.filter((item) => item.id !== complex.id)
        if(!user.isActive){
            return setValue(newFavorite)
        }
        dispatch(updateFavorite(user.id,newFavorite))
    }


   return (
         <div className="flex w-full flex-col items-start m-10  justify-arounds  ">
             <h2 className="mb-5 text-4xl font-bold text-blue-700">Favorites</h2>
            <div className="flex w-full flex-col items-start justify-center">
                {favorites.map((complex) => (
                    <div key={complex.id} className="flex flex-row items-center justify-center relative pr-16">
                        <ComplexCard favorite={true} complexDetails={complex}/>
                        <button onClick={() => handleRemoveFavorite(complex) } className="self-center absolute top-5 right-0 bg-gradient-to-r from-pink-300 to-blue-400 hover:from-blue-400 hover:to-pink-300 text-black font-bold py-2 px-4 rounded">
                            borrar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ComplexFavorite;
