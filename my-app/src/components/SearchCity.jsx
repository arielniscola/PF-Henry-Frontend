import React, { useState } from "react";
<<<<<<< HEAD
import { complexs } from "../data/complexsExample.js";
import ComplexCard from "./ComplexCard";
=======
>>>>>>> e59b45326762f92f292329be2430ff83ec845584
import { Link } from "react-router-dom";
import {searchCity} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'


const SearchCity = () => {
  const dispatch = useDispatch()
  const cities = useSelector(state => state.allComplexs)

  const [city,setCity] = useState("")
  const [notfound,setNotfound] = useState(false)

  const handleChange = (e) =>{
    setCity(e.target.value.trim())
  }

    const handleSearch = () => {
      if(city.length > 0){
      dispatch(searchCity(city, cities, setNotfound))
    }else{
      alert('a name is needed')
    }
    };

    return (
        <div>
            <input
                type="text"
                className="w-4/12 px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Search City"
                value={city}
                onChange={(e) => handleChange(e)}
            />
            <Link to={city.length > 0 && notfound ? '/search' : '/'}>
            <button onClick={handleSearch}
            type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Search</button>
            </Link>
        </div>
    );
}

export default SearchCity;



