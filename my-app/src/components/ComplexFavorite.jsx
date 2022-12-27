import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const ComplexFavorite = () => {

    const local = useSelector(state => state.favlocal)
    const fav = useSelector(state => state.favorites)
    const user = useSelector(state => state.currentUser)

    
    const [value, setValue] = useLocalStorage("favorite",[])

    
    const filter = (array) =>{
        let hash = {};
        const arr = array.filter(o => hash[o.id] ? false : hash[o.id] = true);
        return arr
    } 
    const noRepeat = filter([...value,...local])

    useEffect(()=>{
        setValue(noRepeat)
    },[])

    const favorites = user === null ? value : fav

    const handleRemoveFavorite = (complex) => {
        const newFavorite = value.filter((item) => item.id !== complex.id)
        setValue(newFavorite)
    }


   return (
         <div className="flex w-full flex-col items-start m-10  justify-arounds  ">
            <div className="flex w-full flex-col items-start justify-center">
                {favorites.map((complex,index) => (
                    <div className="flex flex-row items-center justify-center relative pr-16">
                        <ComplexCard  key={index} favorite={true} complexDetails={complex}/>
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
