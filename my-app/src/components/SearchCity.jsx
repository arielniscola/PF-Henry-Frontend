import React, { useState } from "react";
import {searchCity, getAllComplex} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useEffect } from "react";


const SearchCity = () => {
  const dispatch = useDispatch()
  
  const [city,setCity] = useState("")
  const [notfound,setNotfound] = useState(false)
  
  useEffect(() =>{
    dispatch(getAllComplex())
    setNotfound(false)
  },[dispatch])
  const cities = useSelector(state => state.allComplexs)

  if(notfound) return <Navigate to="/search" replace />;

  const handleChange = (e) =>{
    setCity(e.target.value)
  }

    const handleSearch = () => {
      if(city.length > 0){
      dispatch(searchCity(city.trim(), cities, setNotfound))
    }else{
      alert('a name is needed')
    }
    };


    return (
        <div className="flex flex-row items-center">
            <input
                type="text"
                className="w-4/12 px-6 py-2 border border-transparent text-xl font-medium rounded-md text-black bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Search City"
                value={city}
                onChange={(e) => handleChange(e)}
            />
            <button onClick={handleSearch}
            type="button" className="w-20 h-12 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            
            >Search</button>
        </div>
    );
}

export default SearchCity;



