import React, { useState } from "react";
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
                className="w-4/12 px-6 py-2 border border-transparent text-xl font-medium rounded-md text-black bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Search City"
                value={city}
                onChange={(e) => handleChange(e)}
            />
            <Link to={city.length > 0 && notfound ? '/search' : '/'}>
            <button onClick={handleSearch}
            type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-300 to-blue-800 hover:from-green-300 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Search</button>
            </Link>
        </div>
    );
}

export default SearchCity;



