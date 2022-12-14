import React from 'react';
import {useLocalStorage} from './hooks/useLocalStorage'
import ComplexCard from './ComplexCard';


const ComplexFavorite = () => {

    const [value, setValue] = useLocalStorage("favorite",[])
    

   return (
  
    <div className="flex flex-col items-center">
        <h1 className="text-4xl ">Favorites</h1>
        <div className="flex flex-col items-center">
            {value.map((complex) => (
                <ComplexCard key={complex.id} {...complex} />
            ))}
        </div>
    </div>
    );
}

export default ComplexFavorite;
