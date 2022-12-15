import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';


const ComplexFavorite = () => {

    const [value, setValue] = useLocalStorage("favorite",[])
   
    const handleFavorite = (complex) => {
        const newFavorite = [...value, complex]
        setValue(newFavorite)
    }
    const handleRemoveFavorite = (complex) => {
        const newFavorite = value.filter((item) => item.id !== complex.id)
        setValue(newFavorite)
    }

   return (
         <div className="flex flex-col m-10  justify-around ">
            <div className="flex flex-row ">
                {value.map((complex,index) => <ComplexCard  key={index} complexDetails={complex}  />)}
            </div>
        </div>
    );
}

export default ComplexFavorite;
